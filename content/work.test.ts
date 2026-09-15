import { describe, expect, it } from "vitest";
import {
  PROJECT_SLUG_PATTERN,
  PROJECTS_CATALOG,
  getPublicProjectBySlug,
  publicProjectRows,
  toWorkItem,
} from "./work";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
  projectActionHrefs,
} from "./work-sheet";
import { WORK_CASE_COPY, getWorkCase } from "./work-case";
import projects from "./data/projects.json";

describe("project slugs (T-056.2)", () => {
  it("stores unique kebab-case slugs for every catalog row", () => {
    const slugs = PROJECTS_CATALOG.map((item) => item.slug);
    expect(slugs).toHaveLength(PROJECTS_CATALOG.length);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(PROJECT_SLUG_PATTERN);
    }
  });

  it("exposes only visible works as public case routes", () => {
    const publicSlugs = publicProjectRows().map((item) => item.slug);
    expect(publicSlugs).toEqual([
      "social-media-management-platform",
      "cook-it-real-good",
      "minerank",
      "backend-platform-sosial",
    ]);
    expect(publicSlugs).not.toContain("curious");
    expect(
      publicProjectRows().some((row) => /curious/i.test(JSON.stringify(row))),
    ).toBe(false);
    for (const hiddenId of projects.hiddenIds) {
      const hidden = PROJECTS_CATALOG.find((item) => item.id === hiddenId);
      expect(hidden).toBeDefined();
      expect(getPublicProjectBySlug(hidden!.slug)).toBeUndefined();
    }
  });

  it("returns undefined for unknown slugs", () => {
    expect(getPublicProjectBySlug("not-a-project")).toBeUndefined();
    expect(getPublicProjectBySlug("1")).toBeUndefined();
  });
});

describe("case sheet labels (T-056.2)", () => {
  it("locks the in-sheet link copy", () => {
    expect(WORK_SHEET_COPY.id.readMoreLabel).toBe("Baca selengkapnya");
    expect(WORK_SHEET_COPY.en.readMoreLabel).toBe("Read the full case");
  });
});

describe("projectActionHrefs (T-056.4)", () => {
  it("keeps the case path primary and live/repo secondary", () => {
    const cook = toWorkItem(
      PROJECTS_CATALOG.find((row) => row.slug === "cook-it-real-good")!,
      "en",
    );
    const cookSheet = getWorkSheet("en", cook.id);
    expect(projectActionHrefs("en", cook, cookSheet?.gitHref)).toEqual({
      caseHref: "/en/projects/cook-it-real-good",
      liveHref: "https://www.cookitrealgood.com/",
      repoHref: "https://github.com/reziSaktiva/cookitrealgood",
    });

    const social = toWorkItem(
      PROJECTS_CATALOG.find(
        (row) => row.slug === "social-media-management-platform",
      )!,
      "id",
    );
    expect(projectActionHrefs("id", social)).toEqual({
      caseHref: "/id/projects/social-media-management-platform",
      liveHref: undefined,
      repoHref: "https://github.com/reziSaktiva/social-media-management",
    });

    const socialBackend = toWorkItem(
      PROJECTS_CATALOG.find((row) => row.slug === "backend-platform-sosial")!,
      "id",
    );
    const socialBackendSheet = getWorkSheet("id", socialBackend.id);
    expect(socialBackend.href).toBeUndefined();
    expect(socialBackendSheet?.gitHref).toBeUndefined();
    expect(
      projectActionHrefs("id", socialBackend, socialBackendSheet?.gitHref),
    ).toEqual({
      caseHref: "/id/projects/backend-platform-sosial",
      liveHref: undefined,
      repoHref: undefined,
    });
  });
});

describe("work case depth (T-058)", () => {
  it("stores structured case copy on every catalog row", () => {
    for (const row of PROJECTS_CATALOG) {
      const depth = getWorkCase("id", row.id);
      expect(depth).toBeDefined();
      expect(depth!.sections.length).toBeGreaterThan(0);
      expect(
        depth!.sections.flatMap((section) => section.bullets).length,
      ).toBeGreaterThan(0);
    }
  });

  it("keeps the withheld product name out of the public social-backend case", () => {
    expect(JSON.stringify(getWorkCase("id", "7")).toLowerCase()).not.toMatch(
      /curious/,
    );
  });

  it("locks case chrome labels", () => {
    expect(WORK_CASE_COPY.id.periodLabel).toBe("Periode");
    expect(WORK_CASE_COPY.en.periodLabel).toBe("Period");
    expect(WORK_CASE_COPY.id.stackLabel).toBe("Stack");
  });
});
