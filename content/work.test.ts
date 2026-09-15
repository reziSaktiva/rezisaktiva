import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  PROJECT_SLUG_PATTERN,
  PROJECTS_CATALOG,
  getPublicProjectBySlug,
  publicProjectRows,
  toWorkItem,
} from "./work";
import { WORK_SHEET_COPY, projectActionHrefs } from "./work-sheet";
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
  it("keeps the case path primary and live secondary, without repo", () => {
    const cook = toWorkItem(
      PROJECTS_CATALOG.find((row) => row.slug === "cook-it-real-good")!,
      "en",
    );
    expect(projectActionHrefs("en", cook)).toEqual({
      caseHref: "/en/projects/cook-it-real-good",
      liveHref: "https://www.cookitrealgood.com/",
      liveHrefs: ["https://www.cookitrealgood.com/"],
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
      liveHrefs: [],
    });

    const socialBackend = toWorkItem(
      PROJECTS_CATALOG.find((row) => row.slug === "backend-platform-sosial")!,
      "id",
    );
    expect(socialBackend.href).toBeUndefined();
    expect(projectActionHrefs("id", socialBackend)).toEqual({
      caseHref: "/id/projects/backend-platform-sosial",
      liveHref: undefined,
      liveHrefs: [],
    });

    const minerank = toWorkItem(
      PROJECTS_CATALOG.find((row) => row.slug === "minerank")!,
      "en",
    );
    expect(projectActionHrefs("en", minerank)).toEqual({
      caseHref: "/en/projects/minerank",
      liveHref: "https://www.minerank.com/blog",
      liveHrefs: ["https://www.minerank.com/blog", "https://smc.auction"],
    });
  });
});

describe("work case depth (T-058)", () => {
  it("stores structured case copy on every catalog row in both locales", () => {
    for (const row of PROJECTS_CATALOG) {
      for (const locale of ["id", "en"] as const) {
        const depth = getWorkCase(locale, row.id);
        expect(depth).toBeDefined();
        expect(depth!.sections.length).toBeGreaterThan(0);
        expect(
          depth!.sections.flatMap((section) => section.bullets).length,
        ).toBeGreaterThan(0);
        expect(
          depth!.sections.every((section) =>
            section.bullets.every((bullet) => bullet.trim().length > 0),
          ),
        ).toBe(true);
      }
    }
  });

  it("keeps local gallery files on disk", () => {
    const publicRoot = path.join(process.cwd(), "public");
    for (const row of PROJECTS_CATALOG) {
      const paths = [row.cover, ...row.gallery].filter((src) =>
        src.startsWith("/"),
      );
      for (const src of paths) {
        expect(existsSync(path.join(publicRoot, src))).toBe(true);
      }
    }
  });

  it("records admin panel frontend and gallery on the social-backend case", () => {
    const row = PROJECTS_CATALOG.find((item) => item.id === "7")!;
    expect(row.services.id).toEqual([
      "Backend Developer",
      "Frontend admin panel",
    ]);
    expect(row.gallery).toEqual(
      expect.arrayContaining([
        "/work/backend-platform-sosial/admin-dashboard.jpg",
        "/work/backend-platform-sosial/admin-deleted-users.jpg",
        "/work/backend-platform-sosial/admin-maintenance.jpg",
      ]),
    );
    const depthEn = getWorkCase("en", "7");
    expect(
      depthEn?.sections.some((section) => section.title === "Admin panel"),
    ).toBe(true);
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
