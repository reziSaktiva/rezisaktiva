import { describe, expect, it } from "vitest";
import { parseCssDurationToMs } from "./motion";

describe("parseCssDurationToMs", () => {
  it("reads seconds and milliseconds from CSS token strings", () => {
    expect(parseCssDurationToMs("0.55s", 0)).toBe(550);
    expect(parseCssDurationToMs("1s", 0)).toBe(1000);
    expect(parseCssDurationToMs("400ms", 0)).toBe(400);
    expect(parseCssDurationToMs("  0.4s  ", 0)).toBe(400);
  });

  it("falls back when the value is empty or not a number", () => {
    expect(parseCssDurationToMs("", 550)).toBe(550);
    expect(parseCssDurationToMs("ease", 400)).toBe(400);
  });
});
