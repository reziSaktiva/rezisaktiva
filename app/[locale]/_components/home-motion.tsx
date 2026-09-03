"use client";

import {
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { Center } from "@astryxdesign/core/Center";
import {
  DURATION_FAST_MAX,
  DURATION_MEDIUM_MAX,
  DURATION_SLOW_MIN,
  EASE_STANDARD,
  WORD_REVEAL_DELAY,
  WORD_REVEAL_STAGGER,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

const REVEAL_TWEEN = {
  type: "tween" as const,
  duration: DURATION_SLOW_MIN,
  ease: EASE_STANDARD,
};

const HERO_TWEEN = {
  type: "tween" as const,
  duration: DURATION_MEDIUM_MAX,
  ease: EASE_STANDARD,
};

const MAGNETIC_TWEEN = {
  type: "tween" as const,
  duration: DURATION_FAST_MAX,
  ease: EASE_STANDARD,
};

/**
 * Scroll-triggered fade/slide — pola `.home-reveal` (ADR-017).
 * Tween `--duration-slow-min` + `--ease-standard`, bukan spring.
 */
export function Reveal({
  children,
  className,
  axis = "vertical",
}: {
  children: ReactNode;
  className?: string;
  axis?: "vertical" | "horizontal";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "home-reveal",
        axis === "horizontal" && "home-work-head",
        className,
      )}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? { duration: 0 } : REVEAL_TWEEN}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word reveal — mockup `runWordReveal()` (120ms + i * 80ms).
 * `inline` = About h1; `compact` = Work h1 (page-line-compact).
 */
export function WordReveal({
  words,
  variant = "inline",
}: {
  words: readonly string[];
  variant?: "inline" | "compact";
}) {
  const reduceMotion = useReducedMotion();
  const compact = variant === "compact";

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn("page-word", compact && "page-word--compact")}
          initial={
            reduceMotion
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {
                  opacity: 0,
                  y: "0.4em",
                  filter: compact ? "blur(0px)" : "blur(4px)",
                }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  ...REVEAL_TWEEN,
                  delay: WORD_REVEAL_DELAY + index * WORD_REVEAL_STAGGER,
                }
          }
        >
          {word}
          {variant === "inline" && index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}

/**
 * Word reveal hero — mockup `runWordReveal()` (120ms + i * 80ms).
 */
export function HeroWords({ lines }: { lines: readonly [string, string] }) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {lines.map((line, index) => (
        <motion.span
          key={line}
          className={cn("home-hero-line", index === 1 && "home-hero-line-2")}
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "0.4em" }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  ...HERO_TWEEN,
                  delay: WORD_REVEAL_DELAY + index * WORD_REVEAL_STAGGER,
                }
          }
        >
          {line}
        </motion.span>
      ))}
    </>
  );
}

/**
 * Magnetic pull on hover — mockup `.magnetic` (cursor-aware, ADR-017).
 */
export function Magnetic({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMove = (event: ReactMouseEvent<HTMLSpanElement>) => {
    if (reduceMotion || !hasFineHover()) {
      return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    void animate(
      x,
      (event.clientX - box.left - box.width / 2) * 0.18,
      MAGNETIC_TWEEN,
    );
    void animate(
      y,
      (event.clientY - box.top - box.height / 2) * 0.3,
      MAGNETIC_TWEEN,
    );
  };

  const onLeave = () => {
    void animate(x, 0, MAGNETIC_TWEEN);
    void animate(y, 0, MAGNETIC_TWEEN);
  };

  return (
    <motion.span
      className="home-magnetic"
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.span>
  );
}

/**
 * Cursor ring desktop — mockup `.cursor-ring` (ADR-017).
 */
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring || prefersReducedMotion() || !hasFineHover()) {
      return;
    }

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };

    const onMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      ring.classList.add("is-active");
    };
    const onLeave = () => {
      ring.classList.remove("is-active", "is-hover", "is-close");
    };
    const onEnterInteractive = () => ring.classList.add("is-hover");
    const onLeaveInteractive = () => ring.classList.remove("is-hover");
    const onEnterClose = () => ring.classList.add("is-close");
    const onLeaveClose = () => ring.classList.remove("is-close");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const isInside = (node: EventTarget | null, selector: string) =>
      node instanceof Element && Boolean(node.closest(selector));

    const closeScrim = "[data-overlay-scrim]";
    const onPointerOver = (event: MouseEvent) => {
      if (isInside(event.target, closeScrim)) {
        onEnterClose();
        onLeaveInteractive();
      }
      if (isInside(event.target, "a, button")) {
        onEnterInteractive();
      }
    };
    const onPointerOut = (event: MouseEvent) => {
      if (
        isInside(event.target, closeScrim) &&
        !isInside(event.relatedTarget, closeScrim)
      ) {
        onLeaveClose();
      }
      if (
        isInside(event.target, "a, button") &&
        !isInside(event.relatedTarget, "a, button")
      ) {
        onLeaveInteractive();
      }
    };
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);

    let frame = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      ring.style.left = `${current.current.x}px`;
      ring.style.top = `${current.current.y}px`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Center ref={ringRef} className="home-cursor-ring" aria-hidden="true">
      {null}
    </Center>
  );
}
