"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "@/lib/motion";
import { PageTransitionProvider } from "./page-transition";
import { SmoothScroll } from "./smooth-scroll";

/**
 * Fondasi gerak locale (ADR-025 / T-043.1): Lenis + transisi halaman
 * hard-cut stutter. Provider membungkus children (bukan `<div>` layout).
 * `reducedMotion="user"`: transform/layout dimatikan lewat Motion, bukan
 * cabang `initial` yang beda SSR vs klien (hydration).
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
