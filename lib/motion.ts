/**
 * Impor hanya dari `motion/react` (bukan `framer-motion`).
 * Durasi/easing = token CSS (`--duration-*`, `--ease-standard`) — tween,
 * bukan spring default (T-036).
 */
export {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

/** `--ease-standard` di `astryx.css`: cubic-bezier(0.24, 1, 0.4, 1). */
export const EASE_STANDARD = [0.24, 1, 0.4, 1] as const;
/** Hess page-vt — `--ease-page-transition`. */
export const EASE_PAGE_TRANSITION = [0.65, 0, 0.43, 1] as const;

export type CubicBezierEase = readonly [number, number, number, number];

/** Detik — `--duration-fast-max` 165ms. */
export const DURATION_FAST_MAX = 0.165;
/** Detik — `--duration-medium-max` 400ms. */
export const DURATION_MEDIUM_MAX = 0.4;
/** Detik — `--duration-slow-min` 525ms (`.home-reveal`, `.page-word`). */
export const DURATION_SLOW_MIN = 0.525;

/** Word/hero stagger — mockup `120ms + i * 80ms`. */
export const WORD_REVEAL_DELAY = 0.12;
export const WORD_REVEAL_STAGGER = 0.08;

/**
 * Parse `0.55s` / `550ms` dari computed style. SoT durasi overlay/page-vt
 * tetap token CSS di `globals.css`.
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
