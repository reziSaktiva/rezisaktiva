import { describe, expect, it } from "vitest";
import {
  isNavGlassBlurOn,
  isNavGlassFadeOut,
  isNavGlassScrolled,
  navGlassOpacityTarget,
  nextNavGlassFadingOut,
  resolveNavGlassScrollY,
} from "@/lib/nav-glass";

describe("resolveNavGlassScrollY", () => {
  it("uses the largest of Lenis, native, and fallback", () => {
    expect(resolveNavGlassScrollY(0, 0, 0)).toBe(0);
    expect(resolveNavGlassScrollY(12, 0, 0)).toBe(12);
    expect(resolveNavGlassScrollY(0, 40, 8)).toBe(40);
    expect(resolveNavGlassScrollY(null, 0, 24)).toBe(24);
  });
});

describe("isNavGlassScrolled", () => {
  it("is true after any positive offset", () => {
    expect(isNavGlassScrolled(0)).toBe(false);
    expect(isNavGlassScrolled(0.5)).toBe(true);
  });
});

describe("isNavGlassBlurOn", () => {
  it("keeps blur during fade-out, not when reduced-motion", () => {
    expect(isNavGlassBlurOn(true, false, false)).toBe(true);
    expect(isNavGlassBlurOn(false, true, false)).toBe(true);
    expect(isNavGlassBlurOn(false, false, false)).toBe(false);
    expect(isNavGlassBlurOn(false, true, true)).toBe(false);
    expect(isNavGlassBlurOn(true, false, true)).toBe(true);
  });
});

describe("nextNavGlassFadingOut", () => {
  it("starts fade-out on the scrolled → top render, not after animation start", () => {
    expect(nextNavGlassFadingOut(true, false, false, false)).toBe(true);
    expect(
      isNavGlassBlurOn(
        false,
        nextNavGlassFadingOut(true, false, false, false),
        false,
      ),
    ).toBe(true);
  });

  it("holds until complete, cuts under reduced-motion, and ignores a missing Motion opacity", () => {
    expect(nextNavGlassFadingOut(false, false, true, false)).toBe(true);
    expect(nextNavGlassFadingOut(true, false, false, true)).toBe(false);
    expect(nextNavGlassFadingOut(false, true, true, false)).toBe(true);
    expect(isNavGlassFadeOut(navGlassOpacityTarget({}))).toBe(false);
  });
});

describe("isNavGlassFadeOut", () => {
  it("is true only when the opacity target is 0", () => {
    expect(isNavGlassFadeOut(0)).toBe(true);
    expect(isNavGlassFadeOut(1)).toBe(false);
    expect(isNavGlassFadeOut(undefined)).toBe(false);
  });
});

describe("navGlassOpacityTarget", () => {
  it("reads numeric opacity from a Motion definition", () => {
    expect(navGlassOpacityTarget({ opacity: 0 })).toBe(0);
    expect(navGlassOpacityTarget({ opacity: 1 })).toBe(1);
    expect(navGlassOpacityTarget(null)).toBeUndefined();
  });
});
