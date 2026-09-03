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
import { animate, EASE_PAGE_TRANSITION, readCssDurationMs } from "@/lib/motion";
import { freezeWindowScrollAtTop, prefersReducedMotion, readWindowScrollY } from "./smooth-scroll";

type NavigateFn = (href: string) => void;

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

  return `${url.pathname}${url.search}`;
}

function sanitizeClone(root: ParentNode): void {
  root.querySelectorAll("script, iframe").forEach((node) => node.remove());
  root.querySelectorAll("input, textarea, select").forEach((node) => {
    if (node instanceof HTMLInputElement) {
      if (
        node.type === "checkbox" ||
        node.type === "radio" ||
        node.type === "range" ||
        node.type === "color"
      ) {
        return;
      }
      node.value = "";
      node.defaultValue = "";
    }
    if (node instanceof HTMLTextAreaElement) {
      node.value = "";
      node.defaultValue = "";
    }
    if (node instanceof HTMLSelectElement) {
      node.selectedIndex = -1;
    }
  });
  root.querySelectorAll("video, audio").forEach((node) => {
    if (!(node instanceof HTMLMediaElement)) {
      return;
    }
    node.pause();
    node.removeAttribute("autoplay");
    node.removeAttribute("src");
    node.querySelectorAll("source").forEach((source) => source.remove());
    node.load();
  });
}

function captureOutgoing(scrollY: number): HTMLElement {
  const layer = document.createElement("div");
  layer.className = "page-vt-clone";
  layer.setAttribute("aria-hidden", "true");
  layer.inert = true;

  const shifter = document.createElement("div");
  shifter.className = "page-vt-clone-shift";
  shifter.style.transform = `translateY(${-scrollY}px)`;

  const main = document.getElementById("site-chrome-main");
  const footer = document.querySelector(".site-footer");
  if (main) {
    shifter.appendChild(main.cloneNode(true));
  }
  if (footer) {
    shifter.appendChild(footer.cloneNode(true));
  }
  sanitizeClone(shifter);
  layer.appendChild(shifter);
  layer.querySelectorAll("[id]").forEach((node) => {
    node.removeAttribute("id");
  });
  document.body.appendChild(layer);
  return layer;
}

function clearClones(): void {
  cloneAnimation?.stop();
  cloneAnimation = null;
  document.querySelectorAll(".page-vt-clone").forEach((node) => node.remove());
}

function setLiveParked(parked: boolean): void {
  const main = document.getElementById("site-chrome-main");
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

function applyDocumentLock(lock: boolean): void {
  const root = document.documentElement;
  if (lock) {
    // page-vt-lock pauses Lenis (inertia) but CSS keeps overflow-y: scroll
    // so the scrollbar track stays visible (T-025.8). Do not set overflow
    // hidden/clip here.
    root.classList.add("page-vt-lock");
    root.classList.remove("page-vt-entering");
    setLiveParked(true);
    freezeWindowScrollAtTop();
    return;
  }
  root.classList.remove("page-vt-lock", "page-vt-entering");
  setLiveParked(false);
}

type PendingNav = {
  epoch: number;
  from: string;
  target: string;
  startedAt: number;
  clone: HTMLElement | null;
};

let pendingNav: PendingNav | null = null;
let isBusy = false;
let navEpoch = 0;
let queuedHref: string | null = null;
let startQueuedNav: NavigateFn | null = null;
let rafId = 0;
let safetyTimer = 0;
const runningTimers: number[] = [];
let cloneAnimation: { stop: () => void } | null = null;

const SAFETY_BUFFER_MS = 750;
const REPLACED_FROM = "__replaced__";

function clearRunningTimers(): void {
  for (const id of runningTimers) {
    window.clearTimeout(id);
  }
  runningTimers.length = 0;
}

function cancelRaf(): void {
  if (rafId) {
    window.cancelAnimationFrame(rafId);
    rafId = 0;
  }
}

function clearSafetyTimer(): void {
  if (safetyTimer) {
    window.clearTimeout(safetyTimer);
    safetyTimer = 0;
  }
}

function flushQueuedNav(): void {
  const next = queuedHref;
  queuedHref = null;
  if (!next || !startQueuedNav) {
    return;
  }
  queueMicrotask(() => {
    startQueuedNav?.(next);
  });
}

function releaseLock(): void {
  clearSafetyTimer();
  cancelRaf();
  applyDocumentLock(false);
  pendingNav = null;
  isBusy = false;
}

function finishEnter(): void {
  releaseLock();
  flushQueuedNav();
}

function failSafeUnlock(): void {
  clearRunningTimers();
  clearClones();
  releaseLock();
  flushQueuedNav();
}

function safetyTimeoutMs(): number {
  return (
    readCssDurationMs("--duration-page-exit", 1000) +
    readCssDurationMs("--delay-page-enter", 400) +
    readCssDurationMs("--duration-page-enter", 400) +
    SAFETY_BUFFER_MS
  );
}

function armSafety(epoch: number): void {
  clearSafetyTimer();
  safetyTimer = window.setTimeout(() => {
    safetyTimer = 0;
    if (pendingNav?.epoch !== epoch) {
      return;
    }
    failSafeUnlock();
  }, safetyTimeoutMs());
}

function armTransition(options: {
  from: string;
  target: string;
  clone: HTMLElement | null;
  pushHref?: string;
  push?: (href: string) => void;
}): number {
  isBusy = true;
  queuedHref = null;
  clearSafetyTimer();
  clearRunningTimers();
  cancelRaf();
  if (!options.clone) {
    clearClones();
  }

  applyDocumentLock(true);

  navEpoch += 1;
  const epoch = navEpoch;
  pendingNav = {
    epoch,
    from: options.from,
    target: options.target,
    startedAt: performance.now(),
    clone: options.clone,
  };

  const clone = options.clone;
  if (clone) {
    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      if (pendingNav?.epoch !== epoch) {
        return;
      }
      // T-036.4: clone exit via Motion tween, token Hess identik
      // (1s + cubic-bezier(0.65, 0, 0.43, 1)). Enter tetap CSS
      // (fill-mode both, T-025.10).
      const exitMs = readCssDurationMs("--duration-page-exit", 1000);
      cloneAnimation?.stop();
      cloneAnimation = animate(
        clone,
        {
          transform: [
            "translateY(0) scale(1)",
            "translateY(-100dvh) scale(0.5)",
          ],
        },
        {
          duration: exitMs / 1000,
          ease: EASE_PAGE_TRANSITION,
          onComplete: () => {
            cloneAnimation = null;
            clone.remove();
          },
        },
      );
      if (options.push && options.pushHref) {
        options.push(options.pushHref);
      }
    });
    const exitMs = readCssDurationMs("--duration-page-exit", 1000);
    runningTimers.push(
      window.setTimeout(() => {
        if (clone.isConnected) {
          clone.remove();
        }
        cloneAnimation = null;
      }, exitMs + 80),
    );
  }

  armSafety(epoch);
  return epoch;
}

function retargetBusyNav(target: string): void {
  navEpoch += 1;
  if (!pendingNav) {
    return;
  }
  pendingNav.epoch = navEpoch;
  pendingNav.from = REPLACED_FROM;
  pendingNav.target = target;
  pendingNav.startedAt = performance.now();
  pendingNav.clone = null;
  clearClones();
  applyDocumentLock(true);
  armSafety(navEpoch);
}

/**
 * Transisi halaman mengikuti ritme karolinahess.com tanpa View Transitions
 * API. State di luar React supaya remount Strict Mode tidak mematikan clone.
 * Exit clone = Motion tween (T-036.4); enter live = CSS snapshot (T-025.7–10).
 * `html.page-vt-lock` tetap `overflow-y: scroll` (track tidak hilang).
 */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isFirstPath = useRef(true);

  const navigate = useCallback(
    (href: string) => {
      const target = normalizePath(href);
      const from = normalizePath(window.location.pathname);
      if (target === from) {
        return;
      }

      if (prefersReducedMotion()) {
        router.push(href, { scroll: false });
        return;
      }

      if (isBusy) {
        if (pendingNav && target === pendingNav.target) {
          return;
        }
        queuedHref = href;
        return;
      }

      clearClones();
      const clone = captureOutgoing(readWindowScrollY());
      armTransition({
        from,
        target,
        clone,
        pushHref: href,
        push: (next) => router.push(next, { scroll: false }),
      });
    },
    [router],
  );

  useEffect(() => {
    startQueuedNav = navigate;
  }, [navigate]);

  useEffect(() => {
    return () => {
      if (!isBusy) {
        cancelRaf();
      }
    };
  }, []);

  useEffect(() => {
    const navigation = window.navigation;
    if (!navigation) {
      return;
    }

    const onNavigate = (event: NavigateEvent) => {
      if (event.hashChange || event.downloadRequest) {
        return;
      }
      if (event.navigationType !== "traverse") {
        return;
      }
      if (prefersReducedMotion()) {
        return;
      }

      let target: string;
      try {
        target = normalizePath(new URL(event.destination.url).pathname);
      } catch {
        return;
      }
      const from = normalizePath(window.location.pathname);
      if (target === from) {
        return;
      }

      if (isBusy) {
        retargetBusyNav(target);
        return;
      }

      clearClones();
      const clone = captureOutgoing(readWindowScrollY());
      armTransition({ from, target, clone });
    };

    navigation.addEventListener("navigate", onNavigate);
    return () => navigation.removeEventListener("navigate", onNavigate);
  }, []);

  useLayoutEffect(() => {
    const path = normalizePath(pathname);

    if (isFirstPath.current) {
      isFirstPath.current = false;
      if (!pendingNav) {
        return;
      }
    } else if (!pendingNav) {
      if (prefersReducedMotion()) {
        return;
      }
      armTransition({ from: "", target: path, clone: null });
    }

    if (!pendingNav) {
      return;
    }
    if (pendingNav.from !== "" && path === pendingNav.from) {
      return;
    }

    const epoch = pendingNav.epoch;
    const enterDelay = readCssDurationMs("--delay-page-enter", 400);
    const enterMs = readCssDurationMs("--duration-page-enter", 400);
    const wait = Math.max(
      0,
      enterDelay - (performance.now() - pendingNav.startedAt),
    );

    const enterTimer = window.setTimeout(() => {
      if (pendingNav?.epoch !== epoch) {
        return;
      }
      document.documentElement.classList.add("page-vt-entering");
      setLiveParked(false);
    }, wait);
    const doneTimer = window.setTimeout(() => {
      if (pendingNav?.epoch !== epoch) {
        return;
      }
      finishEnter();
    }, wait + enterMs);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(doneTimer);
    };
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
      navigate(href);
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
