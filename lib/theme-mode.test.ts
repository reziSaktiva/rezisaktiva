import { describe, expect, it } from "vitest";
import {
  getThemeInitScript,
  parseThemeModeCookieValue,
  THEME_HOLD_FORCE_DARK,
  THEME_MODE_STORAGE_KEY,
} from "@/lib/theme-mode";

describe("parseThemeModeCookieValue", () => {
  it("accepts only light or dark", () => {
    expect(parseThemeModeCookieValue("dark")).toBe("dark");
    expect(parseThemeModeCookieValue("light")).toBe("light");
    expect(parseThemeModeCookieValue("system")).toBeNull();
    expect(parseThemeModeCookieValue(null)).toBeNull();
    expect(parseThemeModeCookieValue(undefined)).toBeNull();
  });
});

describe("getThemeInitScript", () => {
  it("embeds the storage key via JSON.stringify", () => {
    const script = getThemeInitScript();
    expect(script).toContain(JSON.stringify(THEME_MODE_STORAGE_KEY));
    expect(script).toContain(`var key = ${JSON.stringify(THEME_MODE_STORAGE_KEY)};`);
  });

  it("forces dark while THEME_HOLD_FORCE_DARK is on", () => {
    expect(THEME_HOLD_FORCE_DARK).toBe(true);
    const script = getThemeInitScript();
    expect(script).toContain("var forceDark = true;");
    expect(script).toContain('mode = "dark";');
    expect(script).toContain('root.classList.toggle("dark", mode === "dark")');
  });
});
