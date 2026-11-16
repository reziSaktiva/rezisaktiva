/** Glass navbar offset: use the greater of Lenis and native scroll. */
export function resolveNavGlassScrollY(
  lenisScroll: number | null | undefined,
  nativeY: number,
  fallbackY: number,
): number {
  return Math.max(lenisScroll ?? 0, nativeY, fallbackY);
}

export function isNavGlassScrolled(y: number): boolean {
  return y > 0;
}

/**
 * Instant blur (T-055.1): on while scrolled; during fade-out stay on
 * until opacity finishes. Reduced-motion = scrolled only.
 */
export function isNavGlassBlurOn(
  scrolled: boolean,
  fadingOut: boolean,
  reduceMotion: boolean,
): boolean {
  if (reduceMotion) {
    return scrolled;
  }
  return scrolled || fadingOut;
}

/**
 * Hold blur on the same render that `scrolled` flips false — do not wait
 * for Motion `onAnimationStart` (one frame / whole fade with blur off).
 * Stay true until the caller clears `fadingOut` on animation complete.
 */
export function nextNavGlassFadingOut(
  wasScrolled: boolean,
  scrolled: boolean,
  fadingOut: boolean,
  reduceMotion: boolean,
): boolean {
  if (reduceMotion) {
    return false;
  }
  if (wasScrolled && !scrolled) {
    return true;
  }
  return fadingOut;
}

export function isNavGlassFadeOut(opacityTarget: number | undefined): boolean {
  return opacityTarget === 0;
}

export function navGlassOpacityTarget(definition: unknown): number | undefined {
  if (!definition || typeof definition !== "object") {
    return undefined;
  }
  if (!("opacity" in definition)) {
    return undefined;
  }
  const opacity = (definition as { opacity?: unknown }).opacity;
  return typeof opacity === "number" ? opacity : undefined;
}