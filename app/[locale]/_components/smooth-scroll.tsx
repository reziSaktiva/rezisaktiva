"use client";

import { useEffect, useSyncExternalStore } from "react";
import type Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "@/lib/motion";

let lenisForTransition: Lenis | null = null;

type PageScrollListener = () => void;
const pageScrollListeners = new Set<PageScrollListener>();

function notifyPageScroll(): void {
  pageScrollListeners.forEach((listener) => {
    listener();
  });
}

/** Lenis frame + native scroll. Home wallpaper lerps too, not native events only. */
export function subscribePageScroll(listener: PageScrollListener): () => void {
  pageScrollListeners.add(listener);
  return () => {
    pageScrollListeners.delete(listener);
  };
}

export function readWindowScrollY(): number {
  if (lenisForTransition) {
    return lenisForTransition.scroll;
  }
  return window.scrollY || document.documentElement.scrollTop || 0;
}

/** After clone mounts: Lenis + native to 0 so the new page does not pop in mid/bottom viewport (mobile). */
export function freezeWindowScrollAtTop(): void {
  if (lenisForTransition) {
    lenisForTransition.stop();
    lenisForTransition.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function scrollToPageId(id: string): void {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  if (lenisForTransition) {
    // force: allow scroll while Lenis was stopped (page-vt-lock / overlay).
    lenisForTransition.scrollTo(target, { offset: 0, force: true });
    return;
  }
  target.scrollIntoView();
}

/** True while page transition holds the document (Lenis stopped). */
export function isPageTransitionLocked(): boolean {
  return document.documentElement.classList.contains("page-vt-lock");
}

/**
 * Run `callback` now, or once `page-vt-lock` clears — so #about scroll is
 * not eaten by freezeWindowScrollAtTop / stopped Lenis during enter.
 */
export function whenPageTransitionUnlocked(callback: () => void): () => void {
  if (!isPageTransitionLocked()) {
    const frame = window.requestAnimationFrame(callback);
    return () => window.cancelAnimationFrame(frame);
  }

  const root = document.documentElement;
  const observer = new MutationObserver(() => {
    if (root.classList.contains("page-vt-lock")) {
      return;
    }
    observer.disconnect();
    callback();
  });
  observer.observe(root, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isOverlayLocked(): boolean {
  const root = document.documentElement;
  return (
    root.classList.contains("qi-lock") ||
    root.classList.contains("ps-lock") ||
    root.classList.contains("page-vt-lock") ||
    // Native dialogs and aria-modal overlays (sheet menu, T-079.1) keep their own scroll.
    document.querySelector("dialog[open], [aria-modal='true']") !== null
  );
}

/**
 * Stop inertia while Contact / Quick Info lock the document (ADR-025).
 */
function OverlayLenisPause() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    lenisForTransition = lenis;
    const sync = () => {
      if (isOverlayLocked()) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    sync();
    lenis.on("scroll", notifyPageScroll);
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    // Dialogs open/close anywhere in the tree.
    const dialogObserver = new MutationObserver(sync);
    dialogObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["open", "aria-modal"],
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      dialogObserver.disconnect();
      lenis.off("scroll", notifyPageScroll);
      if (lenisForTransition === lenis) {
        lenisForTransition = null;
      }
    };
  }, [lenis]);

  return null;
}

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeFinePointer(onChange: () => void): () => void {
  const query = window.matchMedia(FINE_POINTER_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Touch and hybrid-coarse devices keep native scrolling (ADR-052). */
function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribeFinePointer,
    () => window.matchMedia(FINE_POINTER_QUERY).matches,
    () => false,
  );
}

/**
 * Window Lenis — sibling, does not wrap the page (`SiteChrome` min-height auto).
 * Wheel-only on fine pointers; off on touch and under `prefers-reduced-motion`. Pause `qi-lock` / `ps-lock` /
 * `page-vt-lock` (ADR-025, T-036.5).
 */
export function SmoothScroll() {
  const reduceMotion = useReducedMotion();
  const finePointer = useFinePointer();

  if (!finePointer || reduceMotion !== false) {
    return null;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        // Wheel only: touch stays native (no syncTouch).
        syncTouch: false,
        // In-page `#hash` links glide instead of jumping; sticky/pinned
        // sections keep working because Lenis drives the native scroll.
        anchors: true,
        // Scrollable regions inside overlays opt out with `data-lenis-prevent`.
      }}
    >
      <OverlayLenisPause />
    </ReactLenis>
  );
}

export { prefersReducedMotion };
