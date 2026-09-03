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
/** CSS keyword `ease` — scrim overlay. */
export const EASE_CSS = [0.25, 0.1, 0.25, 1] as const;
/** Overlay panel — cubic-bezier(0.22, 1, 0.36, 1). Bukan bounce. */
export const EASE_OVERLAY = [0.22, 1, 0.36, 1] as const;
/** Hess page-vt — `--ease-page-transition`. */
export const EASE_PAGE_TRANSITION = [0.65, 0, 0.43, 1] as const;

export type CubicBezierEase = readonly [number, number, number, number];

/** Detik — `--duration-fast` 125ms. */
export const DURATION_FAST = 0.125;
/** Detik — `--duration-fast-max` 165ms. */
export const DURATION_FAST_MAX = 0.165;
/** Detik — `--duration-medium-max` 400ms. */
export const DURATION_MEDIUM_MAX = 0.4;
/** Detik — `--duration-slow-min` 525ms (`.home-reveal`, `.page-word`). */
export const DURATION_SLOW_MIN = 0.525;

/** Contact scrim — 350ms. */
export const DURATION_CT_SCRIM = 0.35;
/** Contact kartu opacity — 300ms. */
export const DURATION_CT_PANEL_OPACITY = 0.3;
/** Contact kartu scale — 400ms. */
export const DURATION_CT_PANEL_TRANSFORM = 0.4;
/** Quick Info / project scrim — 450ms. */
export const DURATION_SHEET_SCRIM = 0.45;
/** Quick Info panel / project sheet — 550ms. */
export const DURATION_SHEET_PANEL = 0.55;

/** Hess page-vt — `--duration-page-exit` 1s. */
export const DURATION_PAGE_EXIT = 1;
/** Hess page-vt — `--duration-page-enter` 0.4s. */
export const DURATION_PAGE_ENTER = 0.4;
/** Hess page-vt — `--delay-page-enter` 0.4s. */
export const DELAY_PAGE_ENTER = 0.4;

/** Word/hero stagger — mockup `120ms + i * 80ms`. */
export const WORD_REVEAL_DELAY = 0.12;
export const WORD_REVEAL_STAGGER = 0.08;

export const TWEEN_NONE = { type: "tween" as const, duration: 0 };

export function overlayTween(
  duration: number,
  ease: CubicBezierEase = EASE_OVERLAY,
) {
  return { type: "tween" as const, duration, ease };
}
