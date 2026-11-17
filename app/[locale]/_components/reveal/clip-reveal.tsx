"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ClipRevealProps = {
  /** Usually a `next/image` with `fill`. It is parallaxed inside the mask. */
  children: ReactNode;
  className?: string;
  /** Parallax travel as a fraction of the box height (mockup: 0.085). */
  parallax?: number;
};

const EASE_IO = [0.76, 0, 0.24, 1] as const;

/** Clip-path wipe from the bottom, with a gentle parallax on the content. */
export function ClipReveal({ children, className, parallax = 0.085 }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pct = parallax * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`${pct}%`, `${-pct}%`]);
  const open = reduce || inView;

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden bg-ink", className)}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
      transition={{ duration: reduce ? 0 : 1.3, ease: EASE_IO }}
    >
      {/* Oversized layer so parallax never exposes the edge. */}
      <motion.div className="absolute inset-x-0 -inset-y-[9%]" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
