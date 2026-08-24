"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Center } from "@astryxdesign/core/Center";
import { prefersReducedMotion } from "./smooth-scroll";

function readDurationMs(token: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  const value = Number.parseFloat(raw);
  if (!Number.isFinite(value)) {
    return fallback;
  }
  if (raw.endsWith("s") && !raw.endsWith("ms")) {
    return value * 1000;
  }
  return value;
}

/**
 * Overlay wipe antar rute (ADR-025). Keyed pathname; instan jika reduced-motion.
 * Idle: `pointer-events: none` — motion tidak menghalangi aksi.
 */
export function PageTransition() {
  const pathname = usePathname();
  const [wipe, setWipe] = useState({ path: pathname, isActive: false });

  if (wipe.path !== pathname) {
    setWipe({
      path: pathname,
      isActive: !prefersReducedMotion(),
    });
  }

  useEffect(() => {
    if (!wipe.isActive) {
      return;
    }

    const duration = readDurationMs("--duration-medium", 300);
    const timer = window.setTimeout(() => {
      setWipe((current) =>
        current.path === wipe.path
          ? { ...current, isActive: false }
          : current,
      );
    }, duration);
    return () => window.clearTimeout(timer);
  }, [wipe.isActive, wipe.path]);

  return (
    <Center
      className={wipe.isActive ? "page-wipe is-active" : "page-wipe"}
      aria-hidden="true"
    >
      {null}
    </Center>
  );
}
