"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { animate } from "@/lib/motion";
import { MAIN_CONTENT_ID } from "@/lib/site-chrome";
import {
  freezeWindowScrollAtTop,
  prefersReducedMotion,
} from "./smooth-scroll";

type NavigateFn = (href: string, label?: string) => void;

const PageTransitionContext = createContext<NavigateFn | null>(null);

export function useTransitionNavigate(): NavigateFn {
  const router = useRouter();
  const fromContext = useContext(PageTransitionContext);
  return fromContext ?? ((href) => router.push(href));
}

function normalizePath(path: string): string {
  const pathname = path.split("?")[0]?.split("#")[0] ?? path;
  return pathname.replace(/\/+$/, "") || "/";
}

function isModifiedClick(event: MouseEvent): boolean {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

function resolveInternalHref(anchor: HTMLAnchorElement): string | null {
  if (anchor.target && anchor.target !== "_self") {
    return null;
  }
  if (anchor.hasAttribute("download")) {
    return null;
  }
  const href = anchor.getAttribute("href");
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(anchor.href);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) {
    return null;
  }

  // Keep hash (e.g. /id#about) — stripping it sends Workflow/Projects → Home
  // hero instead of the About section (ADR-040).
  return `${url.pathname}${url.search}${url.hash}`;
}

/** Curtain label: the link text (as in the mockup), capped, or the wordmark. */
function labelFromAnchor(anchor: HTMLAnchorElement): string | undefined {
  const raw =
    anchor.dataset.t ?? anchor.textContent?.trim().split("\n")[0]?.trim();
  return raw ? raw.slice(0, CURTAIN_LABEL_MAX) : undefined;
}

/**
 * Curtain (T-079.6): fine pointers only, and never with reduced motion.
 * Touch devices and reduced-motion visitors get a plain route change.
 */
function curtainEnabled(): boolean {
  return (
    !prefersReducedMotion() &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

function setLiveParked(parked: boolean): void {
  const main = document.getElementById(MAIN_CONTENT_ID);
  const footer = document.querySelector(".site-footer");
  for (const node of [main, footer]) {
    if (!(node instanceof HTMLElement)) {
      continue;
    }
    node.inert = parked;
    if (parked) {
      node.setAttribute("aria-hidden", "true");
    } else {
      node.removeAttribute("aria-hidden");
    }
  }
}

const CURTAIN_LABEL_MAX = 14;
const CURTAIN_DEFAULT_LABEL = "Rezi";
/** `--ease-monolith-io` in `app/globals.css`. */
const EASE_MONOLITH_IO = [0.76, 0, 0.24, 1] as const;
const COVER_S = 0.8;
const HOLD_MS = 120;
const LEAVE_S = 0.8;
/** Fail-safe if the route never commits: curtain must not trap the page. */
const SAFETY_MS = 6000;

type Pending = {
  epoch: number;
  target: string;
  curtain: HTMLElement;
  /** True once the curtain fully covers the viewport and the route is pushed. */
  covered: boolean;
};

let pending: Pending | null = null;
let isBusy = false;
let navEpoch = 0;
let queuedHref: { href: string; label?: string } | null = null;
let startQueuedNav: NavigateFn | null = null;
let safetyTimer = 0;

function clearSafetyTimer(): void {
  if (safetyTimer) {
    window.clearTimeout(safetyTimer);
    safetyTimer = 0;
  }
}

function removeCurtains(): void {
  document.querySelectorAll(".page-curtain").forEach((node) => node.remove());
}

function mountCurtain(label: string, covered: boolean): HTMLElement {
  removeCurtains();
  const curtain = document.createElement("div");
  curtain.className = "page-curtain";
  curtain.setAttribute("aria-hidden", "true");
  curtain.inert = true;
  const word = document.createElement("b");
  word.className = "page-curtain-word wordmark";
  word.textContent = label;
  curtain.appendChild(word);
  if (covered) {
    curtain.dataset.covered = "true";
  }
  document.body.appendChild(curtain);
  return curtain;
}

function curtainWord(curtain: HTMLElement): HTMLElement | null {
  const word = curtain.firstElementChild;
  return word instanceof HTMLElement ? word : null;
}

function lockDocument(): void {
  // page-vt-lock pauses Lenis (inertia) while CSS keeps `overflow-y: scroll`
  // so the scrollbar track stays (T-025.8). Do not set overflow hidden.
  document.documentElement.classList.add("page-vt-lock");
  setLiveParked(true);
}

function releaseDocument(): void {
  document.documentElement.classList.remove("page-vt-lock");
  setLiveParked(false);
}

function flushQueuedNav(): void {
  const next = queuedHref;
  queuedHref = null;
  if (!next || !startQueuedNav) {
    return;
  }
  queueMicrotask(() => {
    startQueuedNav?.(next.href, next.label);
  });
}

function finish(): void {
  clearSafetyTimer();
  removeCurtains();
  releaseDocument();
  pending = null;
  isBusy = false;
  flushQueuedNav();
}

function armSafety(epoch: number): void {
  clearSafetyTimer();
  safetyTimer = window.setTimeout(() => {
    safetyTimer = 0;
    if (pending?.epoch !== epoch) {
      return;
    }
    finish();
  }, SAFETY_MS);
}

/** Cover the viewport from below, then run `onCovered` (push the route). */
function runCover(
  epoch: number,
  curtain: HTMLElement,
  onCovered: () => void,
): void {
  const word = curtainWord(curtain);
  void animate(
    curtain,
    { y: ["100%", "0%"] },
    { duration: COVER_S, ease: EASE_MONOLITH_IO },
  ).finished.then(() => {
    if (pending?.epoch !== epoch) {
      return;
    }
    pending.covered = true;
    freezeWindowScrollAtTop();
    onCovered();
  });
  if (word) {
    void animate(word, { opacity: [0, 1] }, { duration: 0.4, delay: 0.25 });
  }
}

/** Reveal the new route: curtain leaves upward, then everything is released. */
function runLeave(epoch: number, curtain: HTMLElement): void {
  window.setTimeout(() => {
    if (pending?.epoch !== epoch) {
      return;
    }
    setLiveParked(false);
    void animate(
      curtain,
      { y: ["0%", "-100%"] },
      { duration: LEAVE_S, ease: EASE_MONOLITH_IO },
    ).finished.then(() => {
      if (pending?.epoch !== epoch) {
        return;
      }
      finish();
    });
  }, HOLD_MS);
}

function beginTransition(
  target: string,
  label: string,
  options: { covered: boolean; push?: () => void },
): void {
  isBusy = true;
  queuedHref = null;
  navEpoch += 1;
  const epoch = navEpoch;
  lockDocument();
  const curtain = mountCurtain(label, options.covered);
  pending = { epoch, target, curtain, covered: options.covered };
  armSafety(epoch);

  if (options.covered) {
    // Back/forward: the browser already navigated, cover instantly.
    freezeWindowScrollAtTop();
    return;
  }
  runCover(epoch, curtain, () => options.push?.());
}

/**
 * Page transition T-079.6: a curtain (ink, with the link label in the
 * wordmark face) rises over the page, the route changes underneath, and the
 * curtain leaves upward. Replaces the hard-cut stutter (T-043.1). State lives
 * outside React so Strict Mode remounts do not drop a running transition.
 * `html.page-vt-lock` keeps Lenis stopped for the duration (Lenis lane reads
 * it through `isPageTransitionLocked`). Off for reduced motion and touch.
 */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isFirstPath = useRef(true);

  const navigate = useCallback<NavigateFn>(
    (href, label) => {
      const target = normalizePath(href);
      const from = normalizePath(window.location.pathname);
      if (target === from) {
        return;
      }

      if (!curtainEnabled()) {
        // No curtain (touch, reduced motion): a plain route change that keeps
        // Next's default scroll, so the new page opens at its top (or at its
        // `#hash`) instead of at the old page's scroll offset.
        router.push(href);
        return;
      }

      if (isBusy) {
        if (pending && target === pending.target) {
          return;
        }
        queuedHref = { href, label };
        return;
      }

      beginTransition(target, label ?? CURTAIN_DEFAULT_LABEL, {
        covered: false,
        push: () => router.push(href, { scroll: false }),
      });
    },
    [router],
  );

  useEffect(() => {
    startQueuedNav = navigate;
  }, [navigate]);

  // Back/forward (traverse): the browser navigates by itself, so the curtain
  // only needs to cover and then leave once the new path commits.
  useEffect(() => {
    const navigation = window.navigation;
    if (!navigation) {
      return;
    }

    const onNavigate = (event: NavigateEvent) => {
      if (event.hashChange || event.downloadRequest) {
        return;
      }
      if (event.navigationType !== "traverse" || !curtainEnabled()) {
        return;
      }

      let target: string;
      try {
        target = normalizePath(new URL(event.destination.url).pathname);
      } catch {
        return;
      }
      if (target === normalizePath(window.location.pathname)) {
        return;
      }
      if (isBusy) {
        // Retarget the running transition at the new destination.
        if (pending) {
          pending.target = target;
        }
        return;
      }
      beginTransition(target, CURTAIN_DEFAULT_LABEL, { covered: true });
    };

    navigation.addEventListener("navigate", onNavigate);
    return () => navigation.removeEventListener("navigate", onNavigate);
  }, []);

  // The route committed: if the curtain covers the page, let it leave.
  useLayoutEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    if (!pending || !pending.covered) {
      return;
    }
    // Any commit while covered ends the wait (a redirect may land elsewhere
    // than `target`).
    runLeave(pending.epoch, pending.curtain);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }
      const eventTarget = event.target;
      if (!(eventTarget instanceof Element)) {
        return;
      }
      const anchor = eventTarget.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }
      const href = resolveInternalHref(anchor);
      if (!href) {
        return;
      }
      if (normalizePath(href) === normalizePath(pathname)) {
        return;
      }
      event.preventDefault();
      navigate(href, labelFromAnchor(anchor));
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate, pathname]);

  return (
    <PageTransitionContext.Provider value={navigate}>
      {children}
    </PageTransitionContext.Provider>
  );
}
