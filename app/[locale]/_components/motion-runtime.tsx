"use client";

import type { ReactNode } from "react";
import { PageTransition } from "./page-transition";
import { SmoothScroll } from "./smooth-scroll";

/**
 * Fondasi gerak locale (ADR-025): Lenis + overlay transisi.
 * Sibling, bukan wrapper layout — hindari `<div>` tambahan.
 */
export function MotionRuntime({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SmoothScroll />
      <PageTransition />
    </>
  );
}
