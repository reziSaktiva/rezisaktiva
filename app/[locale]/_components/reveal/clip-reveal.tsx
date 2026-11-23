"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { isInRevealBand } from "@/lib/reveal-math";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../use-media-query";

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
  // Not `useInView`: IntersectionObserver applies this box's own clip-path,
  // so while clipped shut it never reports in view. A page opened already
  // scrolled past the top (reload, Back) would keep the image hidden.
  const [seen, setSeen] = useState(false);
  // Hydration-safe reduced-motion read (the parallax `style` must match SSR).
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pct = parallax * 100;
  const y = useTransform(scrollYProgress, [0, 1], [`${pct}%`, `${-pct}%`]);
  const check = useCallback(() => {
    const box = ref.current?.getBoundingClientRect();
    if (box && isInRevealBand(box.top, box.bottom, window.innerHeight)) {
      setSeen(true);
    }
  }, []);
  // Once seen, stay open (same as the old `once: true`).
  useEffect(check, [check]);
  useMotionValueEvent(scrollYProgress, "change", () => {
    if (!seen) {
      check();
    }
  });
  const open = reduce || seen;

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
