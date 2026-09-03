"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  DURATION_FAST_MAX,
  DURATION_MEDIUM_MAX,
  DURATION_SLOW_MIN,
  EASE_STANDARD,
  WORD_REVEAL_DELAY,
  WORD_REVEAL_STAGGER,
  animate,
  motion,
  useReducedMotion,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

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
  return (
    <motion.div
      className={cn(
        "home-reveal",
        axis === "horizontal" && "home-work-head",
        className,
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={REVEAL_TWEEN}
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
  const compact = variant === "compact";

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn("page-word", compact && "page-word--compact")}
          initial={{
            opacity: 0,
            y: "0.4em",
            filter: compact ? "blur(0px)" : "blur(4px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            ...REVEAL_TWEEN,
            delay: WORD_REVEAL_DELAY + index * WORD_REVEAL_STAGGER,
          }}
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
  return (
    <>
      {lines.map((line, index) => (
        <motion.span
          key={line}
          className={cn("home-hero-line", index === 1 && "home-hero-line-2")}
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...HERO_TWEEN,
            delay: WORD_REVEAL_DELAY + index * WORD_REVEAL_STAGGER,
          }}
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
  const nodeRef = useRef<HTMLSpanElement>(null);

  const skipMagneticPull = () => Boolean(reduceMotion) || !hasFineHover();

  const onMove = (event: ReactMouseEvent<HTMLSpanElement>) => {
    if (skipMagneticPull()) {
      return;
    }
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    const box = event.currentTarget.getBoundingClientRect();
    void animate(
      node,
      {
        x: (event.clientX - box.left - box.width / 2) * 0.18,
        y: (event.clientY - box.top - box.height / 2) * 0.3,
      },
      MAGNETIC_TWEEN,
    );
  };

  const onLeave = () => {
    if (skipMagneticPull()) {
      return;
    }
    const node = nodeRef.current;
    if (!node) {
      return;
    }
    void animate(node, { x: 0, y: 0 }, MAGNETIC_TWEEN);
  };

  return (
    <span
      ref={nodeRef}
      className="home-magnetic"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}

/**
 * Cursor ring desktop — `.home-cursor-ring` (ADR-017, T-036.5).
 * Off di sentuh dan `prefers-reduced-motion`. `div` + `left`/`top` + CSS
 * `translate(-50%, -50%)` — bukan Motion `x`/`y` (menimpa centering).
 */
export function CursorRing() {
  const reduceMotion = useReducedMotion();
  const [fineHover, setFineHover] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setFineHover(hover.matches);
    };
    sync();
    hover.addEventListener("change", sync);
    return () => hover.removeEventListener("change", sync);
  }, []);

  if (reduceMotion !== false || !fineHover) {
    return null;
  }

  return <CursorRingFollow />;
}

function CursorRingFollow() {
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) {
      return;
    }

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };
    ring.style.left = `${target.current.x}px`;
    ring.style.top = `${target.current.y}px`;

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

  return <div ref={ringRef} className="home-cursor-ring" aria-hidden="true" />;
}
