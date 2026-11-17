import { describe, expect, it } from "vitest";
import { BANDUNG_TIME_PLACEHOLDER, formatBandungTime } from "./bandung-time";

describe("formatBandungTime", () => {
  it("renders WIB (UTC+7) as HH:MM:SS", () => {
    expect(formatBandungTime(new Date("2026-01-01T00:00:00Z"))).toBe(
      "07:00:00",
    );
    expect(formatBandungTime(new Date("2026-06-15T17:05:09Z"))).toBe(
      "00:05:09",
    );
  });

  it("uses a placeholder with the same width", () => {
    expect(BANDUNG_TIME_PLACEHOLDER).toHaveLength(8);
  });
});
