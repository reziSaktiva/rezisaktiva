"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ContourField } from "./contour-field";

/**
 * Home hero (T-080.1, ADR-052 / ADR-054 point 4): light contour field, the
 * three-line SEO `h1`, a scroll cue and the lede.
 *
 * - The line entrance is a CSS animation (`.home-hero-line`), so the statement
 *   is in the SSR markup and animates before hydration; reduced motion shows
 *   it at rest.
 * - Scroll: a backdrop blur over the field grows and the statement lifts and
 *   fades over the first 90% of the viewport (mockup `shared.js`). Off under
 *   reduced motion. Driven by window scroll, so it works with Lenis and with
 *   native touch scrolling.
 * - The field is lazy and client-only with a static CSS fallback (T-079.3),
 *   so it never blocks first paint.
 */
export function HomeHero({
  lines,
  lede,
  scrollCue,
}: {
  lines: readonly string[];
  lede: string;
  scrollCue: string;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, (y) =>
    typeof window === "undefined"
      ? 0
      : Math.min(Math.max(y / (window.innerHeight * 0.9), 0), 1),
  );
  const blur = useTransform(progress, (p) =>
    p <= 0.001 ? "none" : `blur(${(p * 18).toFixed(1)}px)`,
  );
  const lift = useTransform(progress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(progress, [0, 1], [1, -0.3]);

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <ContourField tone="light" className="-z-10" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={
          reduce
            ? undefined
            : { backdropFilter: blur, WebkitBackdropFilter: blur }
        }
      />
      <motion.div
        className="flex flex-1 items-center px-gutter will-change-transform"
        style={reduce ? undefined : { y: lift, opacity: fade }}
      >
        <h1 id="home-hero-title" className="home-hero-title">
          <span className="sr-only">{lines.join(" ")}</span>
          {lines.map((line) => (
            <span key={line} aria-hidden="true" className="home-hero-line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
      </motion.div>
      <div className="home-hero-foot">
        <span className="small text-ink" aria-hidden="true">
          {scrollCue} ↓
        </span>
        <p className="home-hero-lede copy">{lede}</p>
      </div>
    </section>
  );
}
