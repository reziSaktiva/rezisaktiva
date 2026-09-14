import { describe, expect, it } from "vitest";
import { SITE_META } from "@/content/site-meta";
import { pageMetadata, SITE_SHARE_IMAGE } from "./page-metadata";

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

  it("uses the same card on workflow and projects", () => {
    expect(
      pageMetadata("id", "workflow", "workflow").openGraph?.images,
    ).toEqual([SITE_SHARE_IMAGE]);
    expect(pageMetadata("en", "work", "projects").twitter?.images).toEqual([
      SITE_SHARE_IMAGE.url,
    ]);
  });
});
