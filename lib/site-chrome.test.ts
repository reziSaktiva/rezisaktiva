import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { MAIN_CONTENT_ID } from "./site-chrome";

const globalsCss = ["app/globals.css", "app/legacy-identity.css"]
  .map((file) => readFileSync(path.join(process.cwd(), file), "utf8"))
  .join("\n");

describe("MAIN_CONTENT_ID", () => {
  it("matches the live main landmark used by skip-link and page-vt", () => {
    expect(MAIN_CONTENT_ID).toBe("site-chrome-main");
  });
});

describe("craft tokens after Astryx removal", () => {
  it("defines size, status, and border aliases used by chrome/About/footer", () => {
    for (const token of [
      "--size-element-sm:",
      "--size-element-md:",
      "--size-element-lg:",
      "--color-background-green:",
      "--color-text-green:",
      "--color-border-default:",
    ]) {
      expect(globalsCss.includes(token)).toBe(true);
    }
  });

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
