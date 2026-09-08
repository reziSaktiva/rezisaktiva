import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { MAIN_CONTENT_ID } from "./site-chrome";

const globalsCss = readFileSync(
  path.join(process.cwd(), "app/globals.css"),
  "utf8",
);

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

  it("parks live main without parking the page-vt clone", () => {
    const lock =
      "html.page-vt-lock:not(.page-vt-entering) .site-chrome-main:not(.page-vt-clone *)";
    const enter = "html.page-vt-entering .site-chrome-main:not(.page-vt-clone *)";
    expect(globalsCss.includes(lock)).toBe(true);
    expect(globalsCss.includes(enter)).toBe(true);
    expect(
      globalsCss.includes(
        "html.page-vt-lock:not(.page-vt-entering) .site-chrome-main,",
      ),
    ).toBe(false);
  });

  it("uses hard-cut stutter tokens instead of Hess scale (T-043.1)", () => {
    expect(globalsCss.includes("--duration-page-exit: 0.2s;")).toBe(true);
    expect(globalsCss.includes("--duration-page-enter: 0.16s;")).toBe(true);
    expect(globalsCss.includes("@keyframes page-vt-stutter-exit")).toBe(true);
    expect(globalsCss.includes("@keyframes page-vt-stutter-enter")).toBe(true);
    expect(globalsCss.includes("@keyframes page-vt-enter")).toBe(false);
    expect(globalsCss.includes("scale(0.5)")).toBe(false);
    expect(globalsCss.includes(".page-vt-film")).toBe(true);
    expect(globalsCss.includes("@keyframes page-vt-film-flicker")).toBe(true);
  });
});
