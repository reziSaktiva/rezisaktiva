"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "@/lib/motion";
import { PageTransitionProvider } from "./page-transition";
import { SmoothScroll } from "./smooth-scroll";

/**
 * Fondasi gerak locale (ADR-025): Lenis + transisi halaman Hess.
 * Provider membungkus children (bukan `<div>` layout).
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
