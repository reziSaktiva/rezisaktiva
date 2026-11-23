import { describe, expect, it } from "vitest";
import {
  CURSOR_LINK_SELECTOR,
  CURSOR_NATIVE_SELECTOR,
  resolveCursorState,
  type CursorLike,
  type CursorTarget,
} from "./site-cursor";

/** Fake element: `matches` lists the selectors that hit, value = the node. */
function fake(matches: Record<string, CursorLike>): CursorTarget {
  return {
    closest(selector: string) {
      return matches[selector] ?? null;
    },
  };
}

describe("resolveCursorState", () => {
  it("is idle with no target or no match", () => {
    expect(resolveCursorState(null).mode).toBe("idle");
    expect(resolveCursorState(fake({})).mode).toBe("idle");
  });

  it("hands the cursor back inside overlays, dialogs and form fields", () => {
    const state = resolveCursorState(
      fake({
        [CURSOR_NATIVE_SELECTOR]: {},
        "[data-cursor]": { dataset: { cursor: "Hi" } },
      }),
    );
    expect(state.mode).toBe("native");
    for (const part of [
      '[role="dialog"]',
      "[data-overlay-scrim]",
      '[data-slot="sheet-content"]',
      "textarea",
    ]) {
      expect(CURSOR_NATIVE_SELECTOR).toContain(part);
    }
  });

  it("shows the data-cursor label", () => {
    expect(
      resolveCursorState(fake({ "[data-cursor]": { dataset: { cursor: "View" } } })),
    ).toEqual({ mode: "label", label: "View" });
  });

  it("grows on links and buttons", () => {
    expect(resolveCursorState(fake({ [CURSOR_LINK_SELECTOR]: {} })).mode).toBe(
      "link",
    );
  });
});
