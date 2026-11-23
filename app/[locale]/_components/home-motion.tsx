"use client";

import { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
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
