/**
 * Import only from `motion/react` (not `framer-motion`).
 * Duration/easing = CSS tokens (`--duration-*`, `--ease-standard`) — tween,
 * not the default spring (T-036).
 */
export {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

/** `--ease-standard` in `app/globals.css`: cubic-bezier(0.24, 1, 0.4, 1). */
export const EASE_STANDARD = [0.24, 1, 0.4, 1] as const;
/** `--ease-overlay` in `app/globals.css`: cubic-bezier(0.22, 1, 0.36, 1). */
export const EASE_OVERLAY = [0.22, 1, 0.36, 1] as const;

export type CubicBezierEase = readonly [number, number, number, number];

/** Seconds — `--duration-fast-max` 165ms. */
export const DURATION_FAST_MAX = 0.165;
/** Seconds — `--duration-medium-min` 225ms. */
export const DURATION_MEDIUM_MIN = 0.225;
/** Seconds — `--duration-medium-max` 400ms. */
export const DURATION_MEDIUM_MAX = 0.4;
/** Seconds — `--duration-slow-min` 525ms (`.home-reveal`, `.page-word`). */
export const DURATION_SLOW_MIN = 0.525;

/**
 * Parse `0.55s` / `550ms` from computed style. Source of truth for overlay/page-vt
 * duration remains CSS tokens in `globals.css`.
 */
export function parseCssDurationToMs(raw: string, fallback: number): number {
  const trimmed = raw.trim();
  const value = Number.parseFloat(trimmed);
  if (!Number.isFinite(value)) {
    return fallback;
  }
  if (trimmed.endsWith("s") && !trimmed.endsWith("ms")) {
    return value * 1000;
  }
  return value;
}

export function readCssDurationMs(token: string, fallback: number): number {
  if (typeof window === "undefined") {
    return fallback;
  }
  return parseCssDurationToMs(
    getComputedStyle(document.documentElement).getPropertyValue(token),
    fallback,
  );
}