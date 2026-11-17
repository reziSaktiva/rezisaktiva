"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { wrapMarqueeOffset } from "@/lib/reveal-math";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Base speed in px per second. */
  speed?: number;
};

/**
 * Endless horizontal ticker that skews with scroll velocity. Paused off-screen,
 * static under reduced motion. The duplicate copy is hidden from AT.
 */
export function Marquee({ children, className, speed = 42 }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { stiffness: 120, damping: 30 });
  const skewX = useTransform(velocity, [-2500, 0, 2500], [8, 0, -8], { clamp: true });

  useAnimationFrame((_, delta) => {
    if (reduce || !inView || !loopRef.current) {
      return;
    }
    const boost = Math.abs(velocity.get()) * 0.12;
    const next = x.get() - ((speed + boost) * delta) / 1000;
    x.set(wrapMarqueeOffset(next, loopRef.current.offsetWidth));
  });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div className="flex w-max will-change-transform" style={{ x, skewX: reduce ? 0 : skewX }}>
        <div ref={loopRef} className="flex shrink-0 items-center">
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
