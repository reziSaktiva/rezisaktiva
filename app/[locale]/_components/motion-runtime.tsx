"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "@/lib/motion";
import { PageTransitionProvider } from "./page-transition";
import { SmoothScroll } from "./smooth-scroll";

/**
 * Locale motion foundation (ADR-025 / T-043.1): Lenis + hard-cut
 * page transition stutter. Provider wraps children (not a layout `<div>`).
 * `reducedMotion="user"`: transform/layout off via Motion, not a different
 * `initial` branch for SSR vs client (hydration).
 */
export function MotionRuntime({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PageTransitionProvider>
        {children}
        <SmoothScroll />
      </PageTransitionProvider>
    </MotionConfig>
  );
}
