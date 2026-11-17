import { describe, expect, it } from "vitest";
import { nextDockState } from "./site-dock";

const VH = 800;

describe("nextDockState", () => {
  it("shows while scrolling up past 60% of the viewport", () => {
    const next = nextDockState({ visible: false, lastY: 2000 }, 1900, VH);
    expect(next).toEqual({ visible: true, lastY: 1900 });
  });

  it("hides on scroll down", () => {
    const next = nextDockState({ visible: true, lastY: 1900 }, 2000, VH);
    expect(next.visible).toBe(false);
  });

  it("ignores jitter of 4px or less", () => {
    const state = { visible: true, lastY: 1900 };
    expect(nextDockState(state, 1903, VH)).toEqual(state);
  });

  it("stays hidden near the top even when scrolling up", () => {
    expect(nextDockState({ visible: true, lastY: 600 }, 300, VH).visible).toBe(
      false,
    );
    expect(
      nextDockState({ visible: false, lastY: 600 }, 450, VH).visible,
    ).toBe(false);
  });
});
