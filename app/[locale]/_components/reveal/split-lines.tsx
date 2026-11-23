"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SplitLinesProps = {
  /** One entry per visual line; the author controls the breaks (like `<br>`). */
  lines: readonly string[];
  className?: string;
  /** Delay in seconds before the first line (hero lines wait for the curtain). */
  delay?: number;
  /** Reveal immediately instead of waiting for the viewport. */
  immediate?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Lines rise out of a mask, staggered. Full text stays readable to AT. */
export function SplitLines({ lines, className, delay = 0, immediate = false }: SplitLinesProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReducedMotion();
  // Reduced motion shows the final state at once, not on viewport entry.
  const shown = reduce || immediate || inView;

  return (
    <span ref={ref} className={cn("block", className)}>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, i) => (
        <span key={`${i}-${line}`} aria-hidden="true" className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "110%" }}
            animate={{ y: shown ? "0%" : "110%" }}
            transition={{
              duration: reduce ? 0 : 1.1,
              ease: EASE,
              delay: reduce ? 0 : delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
