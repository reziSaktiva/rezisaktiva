import { describe, expect, it } from "vitest";
import { isInsideLocaleMenuGuard } from "./overlay-dismiss";

function fakeElement(closestMatch: string | null) {
  return {
    nodeType: 1,
    closest(selector: string) {
      if (!closestMatch) {
        return null;
      }
      return selector.split(/,\s*/).includes(closestMatch) ||
        selector.includes(closestMatch)
        ? this
        : null;
    },
  } as unknown as EventTarget;
}

describe("isInsideLocaleMenuGuard", () => {
  it("treats locale menu and hamburger toggle as inside", () => {
    expect(isInsideLocaleMenuGuard(fakeElement(".site-locale-menu"))).toBe(
      true,
    );
    expect(isInsideLocaleMenuGuard(fakeElement(".site-nav-toggle"))).toBe(true);
  });

  it("walks up from a text node and ignores unrelated targets", () => {
    const menu = fakeElement(".site-locale-menu");
    const text = {
      nodeType: 3,
      parentElement: menu,
    } as unknown as EventTarget;
    expect(isInsideLocaleMenuGuard(text)).toBe(true);
    expect(isInsideLocaleMenuGuard(fakeElement(".other"))).toBe(false);
    expect(isInsideLocaleMenuGuard(null)).toBe(false);
  });
});
