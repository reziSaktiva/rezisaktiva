"use client";

import { useEffect, useState } from "react";
import type Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";

let lenisForTransition: Lenis | null = null;

export function readWindowScrollY(): number {
  if (lenisForTransition) {
    return lenisForTransition.scroll;
  }
  return window.scrollY || document.documentElement.scrollTop || 0;
}

/** Setelah clone terpasang: Lenis + native ke 0 supaya halaman baru tidak nyembul di viewport yang masih di tengah/bawah (mobile). */
export function freezeWindowScrollAtTop(): void {
  if (lenisForTransition) {
    lenisForTransition.stop();
    lenisForTransition.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isOverlayLocked(): boolean {
  const root = document.documentElement;
  return (
    root.classList.contains("ct-lock") ||
    root.classList.contains("qi-lock") ||
    root.classList.contains("page-vt-lock")
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
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
      if (lenisForTransition === lenis) {
        lenisForTransition = null;
      }
    };
  }, [lenis]);

  return null;
}

/**
 * Window Lenis — sibling, tidak membungkus halaman (AppShell `height="auto"`).
 * Off jika `prefers-reduced-motion`.
 */
export function SmoothScroll() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setEnabled(!media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <OverlayLenisPause />
    </ReactLenis>
  );
}

export { prefersReducedMotion };
