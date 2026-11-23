import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { MAIN_CONTENT_ID, siteHeaderVariant } from "./site-chrome";

describe("siteHeaderVariant", () => {
  it("uses the glass bar on the Work index only", () => {
    expect(siteHeaderVariant("/en/projects", "en")).toBe("bar");
    expect(siteHeaderVariant("/id/projects/", "id")).toBe("bar");
  });

  it("keeps the masthead on case pages and other routes", () => {
    expect(siteHeaderVariant("/en/projects/some-case", "en")).toBe("masthead");
    expect(siteHeaderVariant("/en", "en")).toBe("masthead");
    expect(siteHeaderVariant("/en/contact", "en")).toBe("masthead");
    expect(siteHeaderVariant("/id/projects", "en")).toBe("masthead");
  });
});

const globalsCss = readFileSync(
  path.join(process.cwd(), "app/globals.css"),
  "utf8",
);

describe("MAIN_CONTENT_ID", () => {
  it("matches the live main landmark used by skip-link and page-vt", () => {
    expect(MAIN_CONTENT_ID).toBe("site-chrome-main");
  });
});

describe("chrome CSS contract", () => {
  it("keeps the document lock for Lenis and drops the stutter layers", () => {
    expect(globalsCss.includes("html.page-vt-lock,")).toBe(true);
    expect(globalsCss.includes("html.lenis.page-vt-lock.lenis-stopped")).toBe(
      true,
    );
    expect(globalsCss.includes("@keyframes page-vt-stutter-exit")).toBe(false);
    expect(globalsCss.includes(".page-vt-film")).toBe(false);
    expect(globalsCss.includes(".page-vt-clone")).toBe(false);
  });

  it("styles the curtain (T-079.6)", () => {
    expect(globalsCss.includes(".page-curtain {")).toBe(true);
    expect(globalsCss.includes(".page-curtain-word")).toBe(true);
  });

  it("gives the native cursor back inside overlays (T-079.6)", () => {
    expect(
      globalsCss.includes("html.has-cursor:not(.native-cursor)"),
    ).toBe(true);
    expect(globalsCss.includes('.site-cursor[data-mode="native"]')).toBe(true);
  });
});
