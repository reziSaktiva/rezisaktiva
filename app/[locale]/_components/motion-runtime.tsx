"use client";

import type { ReactNode } from "react";
import { PageTransitionProvider } from "./page-transition";
import { SmoothScroll } from "./smooth-scroll";

/**
 * Fondasi gerak locale (ADR-025): Lenis + transisi halaman Hess.
 * Provider membungkus children (bukan `<div>` layout).
 */
export function MotionRuntime({ children }: { children: ReactNode }) {
  return (
    <PageTransitionProvider>
      {children}
      <SmoothScroll />
    </PageTransitionProvider>
  );
}
