"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { prefersReducedMotion } from "./smooth-scroll";

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

function readDurationMs(token: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  const value = Number.parseFloat(raw);
  if (!Number.isFinite(value)) {
    return fallback;
  }
  if (raw.endsWith("s") && !raw.endsWith("ms")) {
    return value * 1000;
  }
  return value;
}

function captureOutgoing(): HTMLElement {
  const layer = document.createElement("div");
  layer.className = "page-vt-clone";
  layer.setAttribute("aria-hidden", "true");

  const shifter = document.createElement("div");
  shifter.className = "page-vt-clone-shift";
  const htmlTransform = getComputedStyle(document.documentElement).transform;
  const shiftY =
    htmlTransform && htmlTransform !== "none" ? 0 : -window.scrollY;
  shifter.style.transform = `translateY(${shiftY}px)`;

  const shell = document.querySelector(".astryx-app-shell");
  const footer = document.querySelector(".site-footer");
  if (shell) {
    shifter.appendChild(shell.cloneNode(true));
  }
  if (footer) {
    shifter.appendChild(footer.cloneNode(true));
  }
  layer.appendChild(shifter);
  layer.querySelectorAll("[id]").forEach((node) => {
    node.removeAttribute("id");
  });
  document.body.appendChild(layer);
  return layer;
}

function clearClones(): void {
  document.querySelectorAll(".page-vt-clone").forEach((node) => node.remove());
}

type PendingNav = {
  epoch: number;
  from: string;
  target: string;
  startedAt: number;
  clone: HTMLElement;
};

let pendingNav: PendingNav | null = null;
let isBusy = false;
let navEpoch = 0;
let queuedHref: string | null = null;
let startQueuedNav: NavigateFn | null = null;
let rafId = 0;
let safetyTimer = 0;
const runningTimers: number[] = [];

const SAFETY_BUFFER_MS = 750;

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
  document.documentElement.classList.remove("page-vt-lock", "page-vt-entering");
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
    readDurationMs("--duration-page-exit", 1000) +
    readDurationMs("--delay-page-enter", 400) +
    readDurationMs("--duration-page-enter", 400) +
    SAFETY_BUFFER_MS
  );
}

/**
 * Transisi halaman mengikuti ritme karolinahess.com tanpa View Transitions
 * API. State di luar React supaya remount Strict Mode tidak mematikan clone.
 */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

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

      isBusy = true;
      queuedHref = null;
      clearSafetyTimer();
      clearRunningTimers();
      cancelRaf();
      clearClones();

      const clone = captureOutgoing();
      const root = document.documentElement;
      root.classList.add("page-vt-lock");
      root.classList.remove("page-vt-entering");

      navEpoch += 1;
      const epoch = navEpoch;
      pendingNav = {
        epoch,
        from,
        target,
        startedAt: performance.now(),
        clone,
      };

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        if (pendingNav?.epoch !== epoch) {
          return;
        }
        clone.classList.add("is-exiting");
        router.push(href, { scroll: false });
      });

      const exitMs = readDurationMs("--duration-page-exit", 1000);
      runningTimers.push(
        window.setTimeout(() => {
          clone.remove();
        }, exitMs),
      );

      safetyTimer = window.setTimeout(() => {
        safetyTimer = 0;
        if (pendingNav?.epoch !== epoch) {
          return;
        }
        failSafeUnlock();
      }, safetyTimeoutMs());
    },
    [router],
  );

  useEffect(() => {
    startQueuedNav = navigate;
  }, [navigate]);

  useEffect(() => {
    if (!pendingNav) {
      return;
    }
    if (normalizePath(pathname) === pendingNav.from) {
      return;
    }

    const epoch = pendingNav.epoch;
    const enterDelay = readDurationMs("--delay-page-enter", 400);
    const enterMs = readDurationMs("--duration-page-enter", 400);
    const wait = Math.max(
      0,
      enterDelay - (performance.now() - pendingNav.startedAt),
    );

    const enterTimer = window.setTimeout(() => {
      if (pendingNav?.epoch !== epoch) {
        return;
      }
      window.scrollTo(0, 0);
      document.documentElement.classList.add("page-vt-entering");
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
