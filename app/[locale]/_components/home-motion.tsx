"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Center } from "@astryxdesign/core/Center";
import { HStack } from "@astryxdesign/core/HStack";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Scroll-triggered fade/slide — pola mockup `.reveal` (ADR-017).
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
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classNames = ["home-reveal", isVisible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  if (axis === "horizontal") {
    return (
      <HStack
        ref={ref}
        align="end"
        justify="between"
        gap={6}
        wrap="wrap"
        className={classNames}
      >
        {children}
      </HStack>
    );
  }

  return (
    <VStack ref={ref} className={classNames}>
      {children}
    </VStack>
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
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const timers = words.map((_, index) =>
      window.setTimeout(
        () => {
          setVisibleCount((count) => Math.max(count, index + 1));
        },
        120 + index * 80,
      ),
    );
    return () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
    };
  }, [words]);

  return (
    <>
      {words.map((word, index) => (
        <Text
          key={`${word}-${index}`}
          display={variant === "compact" ? "block" : "inline"}
          className={[
            variant === "compact"
              ? "page-word page-word--compact"
              : "page-word",
            index < visibleCount ? "is-visible" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {word}
          {variant === "inline" && index < words.length - 1 ? " " : ""}
        </Text>
      ))}
    </>
  );
}

/**
 * Word reveal hero — mockup `runWordReveal()` (120ms + i * 80ms).
 */
export function HeroWords({ lines }: { lines: readonly [string, string] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const timers = lines.map((_, index) =>
      window.setTimeout(
        () => {
          setVisibleCount((count) => Math.max(count, index + 1));
        },
        120 + index * 80,
      ),
    );
    return () => {
      for (const timer of timers) {
        window.clearTimeout(timer);
      }
    };
  }, [lines]);

  return (
    <>
      {lines.map((line, index) => (
        <Text
          key={line}
          display="block"
          className={[
            "home-hero-line",
            index === 1 ? "home-hero-line-2" : "",
            index < visibleCount ? "is-visible" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {line}
        </Text>
      ))}
    </>
  );
}

/**
 * Magnetic pull on hover — mockup `.magnetic` (cursor-aware, ADR-017).
 */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !hasFineHover()) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const box = el.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      setOffset({ x: x * 0.18, y: y * 0.3 });
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const style: CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  return (
    <Center ref={ref} isInline className="home-magnetic" style={style}>
      {children}
    </Center>
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
    const onLeave = () => ring.classList.remove("is-active");
    const onEnterInteractive = () => ring.classList.add("is-hover");
    const onLeaveInteractive = () => ring.classList.remove("is-hover");
    const onEnterClose = () => ring.classList.add("is-close");
    const onLeaveClose = () => ring.classList.remove("is-close");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });
    const closeTargets = document.querySelectorAll("[data-ct-scrim]");
    closeTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnterClose);
      el.addEventListener("mouseleave", onLeaveClose);
    });

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
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      closeTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterClose);
        el.removeEventListener("mouseleave", onLeaveClose);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Center ref={ringRef} className="home-cursor-ring" aria-hidden="true">
      {null}
    </Center>
  );
}
