import { describe, expect, it } from "vitest";
import {
  isInRevealBand,
  pinStepIndex,
  splitWords,
  wordRange,
  wrapMarqueeOffset,
} from "./reveal-math";

describe("reveal math", () => {
  it("splits words on whitespace", () => {
    expect(splitWords("  a  b\nc ")).toEqual(["a", "b", "c"]);
    expect(splitWords("   ")).toEqual([]);
  });

  it("maps word index to a progress window", () => {
    expect(wordRange(1, 4)).toEqual([0.25, 0.5]);
  });

  it("clamps pin step to the valid range", () => {
    expect(pinStepIndex(-1, 4)).toBe(0);
    expect(pinStepIndex(0.5, 4)).toBe(2);
    expect(pinStepIndex(1, 4)).toBe(3);
    expect(pinStepIndex(0.5, 0)).toBe(0);
  });

  it("wraps the marquee offset into one loop", () => {
    expect(wrapMarqueeOffset(-250, 100)).toBe(-50);
    expect(wrapMarqueeOffset(30, 100)).toBe(-70);
    expect(wrapMarqueeOffset(-5, 0)).toBe(0);
  });

  it("reveals a box in the band, including one the page opened scrolled past", () => {
    // Half above the fold after a restored scroll: still on screen.
    expect(isInRevealBand(-90, 327, 959)).toBe(true);
    // Top inside the bottom 10% margin: not yet.
    expect(isInRevealBand(900, 1300, 959)).toBe(false);
    // Fully above the viewport: not on screen.
    expect(isInRevealBand(-500, -10, 959)).toBe(false);
  });
});
