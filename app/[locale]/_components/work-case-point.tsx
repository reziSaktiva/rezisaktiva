"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Case body point (T-081.2): dimmed until it crosses the middle band of the
 * viewport, so the reader's place in the list is highlighted. Reduced motion
 * keeps every point fully visible.
 */
export function WorkCasePoint({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-38% 0px -38% 0px" });
  const reduce = useReducedMotion();

  return (
    <li ref={ref} className="wcase-point" data-on={reduce || inView}>
      {children}
    </li>
  );
}
