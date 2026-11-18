"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  DURATION_FAST_MAX,
  EASE_STANDARD,
  animate,
  useReducedMotion,
} from "@/lib/motion";

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

const MAGNETIC_TWEEN = {
  type: "tween" as const,
  duration: DURATION_FAST_MAX,
  ease: EASE_STANDARD,
};

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
 * Cursor ring — desktop, pointer halus (ADR-019).
 * Off di sentuh dan `prefers-reduced-motion`. `div` + `left`/`top` + CSS
 * `translate(-50%, -50%)` — not Motion `x`/`y`.
 * Portal to `document.body` so ring/X sit above Dialog/Sheet/Drawer
 * (Contact overlay z-90/92). rAF only while the pointer moves; pause
 * `document.hidden`.
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

    const onLeave = () => {
      ring.classList.remove("is-active", "is-hover", "is-close");
    };
    const onEnterInteractive = () => ring.classList.add("is-hover");
    const onLeaveInteractive = () => ring.classList.remove("is-hover");
    const onEnterClose = () => ring.classList.add("is-close");
    const onLeaveClose = () => ring.classList.remove("is-close");

    let frame = 0;
    const stopTick = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const tick = () => {
      if (document.hidden) {
        frame = 0;
        return;
      }
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      if (dx * dx + dy * dy < 0.01) {
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        ring.style.left = `${current.current.x}px`;
        ring.style.top = `${current.current.y}px`;
        frame = 0;
        return;
      }
      current.current.x += dx * 0.18;
      current.current.y += dy * 0.18;
      ring.style.left = `${current.current.x}px`;
      ring.style.top = `${current.current.y}px`;
      frame = requestAnimationFrame(tick);
    };
    const startTick = () => {
      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };

    const onMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      ring.classList.add("is-active");
      startTick();
    };
    const onVisibility = () => {
      if (document.hidden) {
        stopTick();
        return;
      }
      startTick();
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    const isInside = (node: EventTarget | null, selector: string) =>
      node instanceof Element && Boolean(node.closest(selector));

    const closeScrim = "[data-overlay-scrim]";
    const interactive =
      "a, button, [role='button'], [role='tab'], summary";
    const onPointerOver = (event: MouseEvent) => {
      if (isInside(event.target, closeScrim)) {
        onEnterClose();
        onLeaveInteractive();
        return;
      }
      onLeaveClose();
      if (isInside(event.target, interactive)) {
        onEnterInteractive();
      } else {
        onLeaveInteractive();
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
        isInside(event.target, interactive) &&
        !isInside(event.relatedTarget, interactive)
      ) {
        onLeaveInteractive();
      }
    };
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      stopTick();
    };
  }, []);

  return createPortal(
    <div ref={ringRef} className="home-cursor-ring" aria-hidden="true" />,
    document.body,
  );
}
