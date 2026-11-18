import { describe, expect, it } from "vitest";
import { isProjectRepoUrl } from "@/lib/project-live-preview";

describe("isProjectRepoUrl", () => {
  it("matches GitHub hosts only", () => {
    expect(
      isProjectRepoUrl("https://github.com/reziSaktiva/cookitrealgood"),
    ).toBe(true);
    expect(isProjectRepoUrl("https://www.cookitrealgood.com/")).toBe(false);
    expect(isProjectRepoUrl("not a url")).toBe(false);
  });
});
