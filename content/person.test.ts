import { describe, expect, it } from "vitest";
import {
  capitalizeFirst,
  yearsOfExperience,
  yearsOfExperienceWord,
} from "@/content/person";

describe("yearsOfExperience (career start June 2020)", () => {
  it("counts only full years", () => {
    expect(yearsOfExperience(new Date(2026, 4, 31))).toBe(5);
    expect(yearsOfExperience(new Date(2026, 5, 1))).toBe(6);
    expect(yearsOfExperience(new Date(2027, 0, 15))).toBe(6);
    expect(yearsOfExperience(new Date(2027, 5, 1))).toBe(7);
  });

  it("spells the number in both locales", () => {
    const date = new Date(2026, 10, 23);
    expect(capitalizeFirst(yearsOfExperienceWord("en", date))).toBe("Six");
    expect(capitalizeFirst(yearsOfExperienceWord("id", date))).toBe("Enam");
  });
});
