/** Pure helpers for the Monolith reveal primitives (T-079.5). */

export function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/** Split copy into words on any whitespace; empty input gives no words. */
export function splitWords(text: string): string[] {
  const trimmed = text.trim();
  return trimmed === "" ? [] : trimmed.split(/\s+/);
}

/** Scroll progress (0-1) at which word `index` of `count` is fully lit. */
export function wordRange(index: number, count: number): [number, number] {
  const start = count === 0 ? 0 : index / count;
  const end = count === 0 ? 1 : (index + 1) / count;
  return [start, end];
}

/** Active step of a pinned section for progress 0-1 across `count` steps. */
export function pinStepIndex(progress: number, count: number): number {
  if (count <= 0) {
    return 0;
  }
  return Math.min(count - 1, Math.floor(clamp01(progress) * count));
}

/** Wrap a negative marquee offset into (-loop, 0] so the loop never jumps. */
export function wrapMarqueeOffset(offset: number, loopWidth: number): number {
  if (loopWidth <= 0) {
    return 0;
  }
  const mod = offset % loopWidth;
  return mod > 0 ? mod - loopWidth : mod;
}

/**
 * Reveal band for `ClipReveal`: a box counts as seen once its top has risen
 * above the bottom `bottomMargin` of the viewport while its bottom is still
 * below the top edge. Pure geometry on purpose: IntersectionObserver applies
 * the target's own `clip-path`, so a box clipped shut never reports in view
 * and would stay hidden when the page opens already scrolled past its top.
 */
export function isInRevealBand(
  top: number,
  bottom: number,
  viewportHeight: number,
  bottomMargin = 0.1,
): boolean {
  return top < viewportHeight * (1 - bottomMargin) && bottom > 0;
}
