import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  PROJECT_SLUG_PATTERN,
  PROJECTS_CATALOG,
  WORK_ITEMS,
  getPublicProjectBySlug,
  publicProjectRows,
  toWorkItem,
} from "./work";
import {
  WORK_CASE_COPY,
  caseStack,
  getWorkCase,
  nextWorkItem,
  projectActionHrefs,
} from "./work-case";
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
      "postific",
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

describe("work index cards (T-081.1)", () => {
  it("lists the public projects in catalog order in both locales", () => {
    for (const locale of ["id", "en"] as const) {
      expect(WORK_ITEMS[locale].map((item) => item.id)).toEqual([
        "1",
        "2",
        "3",
        "7",
      ]);
    }
  });

  it("gives every card a case route that resolves to the same project", () => {
    for (const item of WORK_ITEMS.en) {
      const { caseHref } = projectActionHrefs("en", item);
      const slug = caseHref.split("/").at(-1)!;
      expect(getPublicProjectBySlug(slug)?.id).toBe(item.id);
    }
  });
});

describe("next project link (T-081.2)", () => {
  it("walks the public order and wraps to the first project", () => {
    const items = WORK_ITEMS.en;
    expect(nextWorkItem(items, "1")?.id).toBe("2");
    expect(nextWorkItem(items, "3")?.id).toBe("7");
    expect(nextWorkItem(items, "7")?.id).toBe("1");
  });

  it("never points at a hidden project", () => {
    for (const item of WORK_ITEMS.id) {
      const next = nextWorkItem(WORK_ITEMS.id, item.id);
      expect(next).toBeDefined();
      expect(projects.hiddenIds).not.toContain(next!.id);
    }
    expect(nextWorkItem(WORK_ITEMS.id, "6")).toBeUndefined();
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
        (row) => row.slug === "postific",
      )!,
      "id",
    );
    expect(projectActionHrefs("id", social)).toEqual({
      caseHref: "/id/projects/postific",
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
      "Backend Tech Lead",
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

  it("merges project and section stacks into one chip row without duplicates", () => {
    const minerank = getWorkCase("en", "3")!;
    const chips = caseStack(minerank);
    expect(new Set(chips).size).toBe(chips.length);
    for (const section of minerank.sections) {
      for (const tech of section.stack) {
        expect(chips).toContain(tech);
      }
    }
  });

  it("locks case chrome labels", () => {
    expect(WORK_CASE_COPY.id.periodLabel).toBe("Periode");
    expect(WORK_CASE_COPY.en.periodLabel).toBe("Period");
    expect(WORK_CASE_COPY.id.stackLabel).toBe("Stack");
  });
});
