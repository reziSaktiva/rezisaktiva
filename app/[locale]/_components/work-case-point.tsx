"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useMediaQuery } from "./use-media-query";

/**
 * Case body point (T-081.2): dimmed until it crosses the middle band of the
 * viewport, so the reader's place in the list is highlighted. Reduced motion
 * keeps every point fully visible.
 */
export function WorkCasePoint({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-38% 0px -38% 0px" });
  // Hydration-safe: Motion's `useReducedMotion` reads the media query on the
  // first client render, so `data-on` would mismatch the SSR markup and stay
  // dimmed under reduced motion.
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <li ref={ref} className="wcase-point" data-on={reduce || inView}>
      {children}
    </li>
  );
}
