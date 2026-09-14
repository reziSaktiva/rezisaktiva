import { describe, expect, it } from "vitest";
import { PERSON } from "@/content/person";
import { SITE_META } from "@/content/site-meta";
import {
  casePageMetadata,
  pageMetadata,
  SITE_SHARE_IMAGE,
} from "./page-metadata";
import { getSiteUrl, localePath } from "./site-url";

describe("pageMetadata (T-031.3)", () => {
  it("keeps T-021.7 copy and adds one site share card", () => {
    const home = pageMetadata("en", "home");
    expect(home.title).toBe(SITE_META.en.home.title);
    expect(home.description).toBe(SITE_META.en.home.description);
    expect(home.openGraph).toMatchObject({
      title: SITE_META.en.home.title,
      description: SITE_META.en.home.description,
      images: [SITE_SHARE_IMAGE],
    });
    expect(home.twitter).toMatchObject({
      card: "summary_large_image",
      title: SITE_META.en.home.title,
      description: SITE_META.en.home.description,
      images: [SITE_SHARE_IMAGE.url],
    });
  });

  it("can override title and description for a case path", () => {
    const meta = pageMetadata("en", "work", "projects/minerank", {
      title: "Minerank",
      description: "case outcome",
    });
    expect(meta.title).toBe("Minerank");
    expect(meta.description).toBe("case outcome");
    expect(meta.alternates?.canonical).toBe(
      `${getSiteUrl()}${localePath("en", "projects/minerank")}`,
    );
    expect(meta.openGraph?.images).toEqual([SITE_SHARE_IMAGE]);
  });

  it("uses the same card on workflow and projects", () => {
    expect(
      pageMetadata("id", "workflow", "workflow").openGraph?.images,
    ).toEqual([SITE_SHARE_IMAGE]);
    expect(pageMetadata("en", "work", "projects").twitter?.images).toEqual([
      SITE_SHARE_IMAGE.url,
    ]);
  });
});

describe("casePageMetadata (T-056.5)", () => {
  it("sets title, description, canonical, and site OG card", () => {
    const meta = casePageMetadata("en", "minerank", {
      name: "Minerank",
      description: "Minerank web: database migration, real-time auctions.",
    });
    const canonical = `${getSiteUrl()}${localePath("en", "projects/minerank")}`;
    expect(meta.title).toBe("rezisaktiva — Minerank");
    expect(meta.description).toBe(
      "Minerank web: database migration, real-time auctions.",
    );
    expect(meta.alternates).toEqual({
      canonical,
      languages: {
        id: `${getSiteUrl()}${localePath("id", "projects/minerank")}`,
        en: canonical,
        "x-default": canonical,
      },
    });
    expect(meta.openGraph).toMatchObject({
      title: "rezisaktiva — Minerank",
      description: "Minerank web: database migration, real-time auctions.",
      url: canonical,
      images: [SITE_SHARE_IMAGE],
    });
    expect(meta.twitter).toMatchObject({
      card: "summary_large_image",
      title: "rezisaktiva — Minerank",
      images: [SITE_SHARE_IMAGE.url],
    });
  });
});

describe("pageMetadata (T-031.4)", () => {
  it("sets identity, public robots, and no phone/address auto-link", () => {
    const home = pageMetadata("id", "home");
    expect(home.applicationName).toBe(PERSON.alternateName);
    expect(home.authors).toEqual([
      { name: PERSON.name, url: `${getSiteUrl()}${localePath("id")}#about` },
    ]);
    expect(home.creator).toBe(PERSON.name);
    expect(home.publisher).toBe(PERSON.name);
    expect(home.robots).toEqual({ index: true, follow: true });
    expect(home.formatDetection).toEqual({
      telephone: false,
      address: false,
    });
    expect(home.title).toBe(SITE_META.id.home.title);
  });
});
