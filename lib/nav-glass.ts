/** Offset kaca navbar: pakai yang terbesar dari Lenis dan native. */
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
 * Blur instan (T-055.1): on saat scrolled; selama fade-out tetap on
 * sampai opacity selesai. Reduced-motion = ikut scrolled saja.
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
