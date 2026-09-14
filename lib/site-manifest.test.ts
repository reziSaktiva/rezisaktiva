import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PERSON } from "@/content/person";
import {
  SITE_CANVAS_COLOR,
  SITE_MANIFEST_ICONS,
  siteManifest,
} from "./site-manifest";

const root = process.cwd();

describe("siteManifest (T-031.2)", () => {
  it("is a lightweight identity manifest, not a PWA install target", () => {
    const manifest = siteManifest();
    expect(manifest.name).toBe(PERSON.alternateName);
    expect(manifest.short_name).toBe(PERSON.alternateName);
    expect(manifest.display).toBe("browser");
    expect(manifest.start_url).toBe("/");
    expect(manifest.icons).toEqual([...SITE_MANIFEST_ICONS]);
    expect(manifest.theme_color).toBe(SITE_CANVAS_COLOR);
  });
});

describe("brand metadata assets (T-031.1)", () => {
  it("keeps icon, apple-touch, OG, and favicon files on disk", () => {
    const files = [
      "public/brand/icon-32.png",
      "public/brand/icon-192.png",
      "public/brand/icon-512.png",
      "public/brand/apple-touch.png",
      "public/brand/og.png",
      "app/favicon.ico",
      "app/icon.png",
      "app/apple-icon.png",
    ];
    for (const relative of files) {
      expect(existsSync(path.join(root, relative)), relative).toBe(true);
    }
  });
});
