import { describe, expect, it } from "vitest";
import { SITE_META } from "@/content/site-meta";
import { LOCALES } from "@/lib/locale";
import { r1PageUrls } from "@/lib/site-routes";

describe("r1PageUrls", () => {
  it("emits one URL per locale × SITE_META surface", () => {
    const surfaces = Object.keys(SITE_META.en);
    const entries = r1PageUrls();
    expect(entries).toHaveLength(LOCALES.length * surfaces.length);
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(
      entries.length,
    );
    expect(entries.some((entry) => entry.url.endsWith("/en/projects"))).toBe(
      true,
    );
    expect(
      entries.some((entry) => /\/(id|en)\/work(\/|$)/.test(entry.url)),
    ).toBe(false);
    for (const locale of LOCALES) {
      for (const surface of surfaces) {
        expect(
          entries.some(
            (entry) => entry.locale === locale && entry.surface === surface,
          ),
        ).toBe(true);
      }
    }
  });
});
