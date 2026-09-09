import { describe, expect, it } from "vitest";
import {
  aboutHref,
  homeHref,
  isHomePath,
  isNavItemActive,
  NAV_ITEMS,
} from "@/lib/nav";
import { LOCALES } from "@/lib/locale";

describe("aboutHref", () => {
  it("points at Home with #about for every locale", () => {
    for (const locale of LOCALES) {
      expect(aboutHref(locale)).toBe(`/${locale}#about`);
      expect(aboutHref(locale)).toBe(`${homeHref(locale)}#about`);
    }
  });

  it("is the href used by the About nav chip", () => {
    const about = NAV_ITEMS.find((item) => item.key === "about");
    expect(about).toBeDefined();
    for (const locale of LOCALES) {
      expect(about!.href(locale)).toBe(aboutHref(locale));
    }
  });
});

describe("isHomePath", () => {
  it("matches locale home with or without a trailing slash", () => {
    expect(isHomePath("/id", "id")).toBe(true);
    expect(isHomePath("/id/", "id")).toBe(true);
    expect(isHomePath("/en", "en")).toBe(true);
    expect(isHomePath("/en/", "en")).toBe(true);
  });

  it("rejects other routes and the other locale", () => {
    expect(isHomePath("/id/workflow", "id")).toBe(false);
    expect(isHomePath("/id/projects", "id")).toBe(false);
    expect(isHomePath("/en", "id")).toBe(false);
  });
});

describe("isNavItemActive", () => {
  const about = NAV_ITEMS.find((item) => item.key === "about")!;
  const workflow = NAV_ITEMS.find((item) => item.key === "workflow")!;
  const work = NAV_ITEMS.find((item) => item.key === "work")!;

  it("marks About only on Home when hash is #about", () => {
    expect(isNavItemActive("/id", "id", about, "#about")).toBe(true);
    expect(isNavItemActive("/id/", "id", about, "#about")).toBe(true);
    expect(isNavItemActive("/id", "id", about, "")).toBe(false);
    expect(isNavItemActive("/id", "id", about, "#other")).toBe(false);
    expect(isNavItemActive("/id/workflow", "id", about, "#about")).toBe(false);
  });

  it("marks Workflow / Projects from pathname alone", () => {
    expect(isNavItemActive("/id/workflow", "id", workflow)).toBe(true);
    expect(isNavItemActive("/id/workflow/", "id", workflow)).toBe(true);
    expect(isNavItemActive("/id", "id", workflow, "#about")).toBe(false);

    expect(isNavItemActive("/en/projects", "en", work)).toBe(true);
    expect(isNavItemActive("/en/projects/case", "en", work)).toBe(true);
    expect(isNavItemActive("/en", "en", work)).toBe(false);
  });
});
