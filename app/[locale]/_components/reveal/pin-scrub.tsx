"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { pinStepIndex } from "@/lib/reveal-math";

export type PinStep = {
  /** Oversized word shown while this step is active. */
  word: string;
  /** Supporting content for the step. */
  body: ReactNode;
};

type PinScrubProps = {
  steps: readonly PinStep[];
  /** Top row of the pinned stage (label, counter). */
  header?: ReactNode;
  className?: string;
  /** Scroll length per step, in svh. */
  stepHeight?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sticky stage that stays pinned while scroll progress picks the active step.
 * Uses native `position: sticky`, so it works with Lenis and with native scroll.
 */
export function PinScrub({ steps, header, className, stepHeight = 100 }: PinScrubProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(pinStepIndex(value, steps.length));
  });

  const dur = reduce ? 0 : 0.7;

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `${steps.length * stepHeight}svh` }}
    >
      <div className="sticky top-0 grid h-svh grid-rows-[auto_1fr_auto] overflow-hidden px-gutter pt-24 pb-7">
        <div>{header}</div>
        <div className="relative self-center">
          <div className="relative h-[clamp(110px,24vw,380px)]" aria-hidden="true">
            {steps.map((step, i) => (
              <motion.span
                key={step.word}
                className="font-condensed absolute top-1/2 left-0 text-[clamp(96px,21vw,340px)] leading-[0.8] whitespace-nowrap uppercase"
                animate={{
                  opacity: i === active ? 1 : 0,
                  y: i === active ? "-50%" : i < active ? "-85%" : "-20%",
                }}
                transition={{ duration: dur, ease: EASE }}
              >
                {step.word}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.word}
                className="col-start-1 row-start-1"
                animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 14 }}
                transition={{ duration: dur, ease: EASE }}
                aria-hidden={i !== active}
                inert={i !== active}
              >
                <span className="sr-only">{step.word}</span>
                {step.body}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative h-px bg-rule">
            <motion.i
              className="absolute inset-0 origin-left bg-current"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <div className="text-mute flex justify-between pt-2.5 text-xs uppercase" aria-hidden="true">
            {steps.map((step, i) => (
              <span key={step.word} className={cn(i <= active && "text-current")}>
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
