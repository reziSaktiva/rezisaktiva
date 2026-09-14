import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import brandChrome from "@/lib/brand-chrome.json";
import { PERSON } from "@/content/person";
import {
  SITE_CANVAS_COLOR,
  SITE_HEAD_ICONS,
  SITE_MANIFEST_ICONS,
  siteManifest,
} from "./site-manifest";

const root = process.cwd();

function pngSize(relative: string) {
  const buf = readFileSync(path.join(root, relative));
  expect(
    buf
      .subarray(0, 8)
      .equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])),
  ).toBe(true);
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
  };
}

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

  it("uses the shared T-039 canvas token", () => {
    expect(SITE_CANVAS_COLOR).toBe(brandChrome.canvas);
    expect(SITE_CANVAS_COLOR).toBe("#0b0b0d");
  });

  it("lists 192 and 512 icons in HTML head metadata", () => {
    const icons = SITE_HEAD_ICONS.icon.map((icon) => icon.sizes);
    expect(icons).toEqual(["192x192", "512x512"]);
    expect(SITE_HEAD_ICONS.icon[0]?.url).toBe("/brand/icon-192.png");
    expect(SITE_HEAD_ICONS.apple[0]?.url).toBe("/apple-icon.png");
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

  it("keeps share card and icon pixel sizes", () => {
    expect(pngSize("public/brand/og.png")).toEqual({
      width: 1200,
      height: 630,
    });
    expect(pngSize("public/brand/icon-32.png")).toEqual({
      width: 32,
      height: 32,
    });
    expect(pngSize("public/brand/icon-192.png")).toEqual({
      width: 192,
      height: 192,
    });
    expect(pngSize("public/brand/icon-512.png")).toEqual({
      width: 512,
      height: 512,
    });
    expect(pngSize("public/brand/apple-touch.png")).toEqual({
      width: 180,
      height: 180,
    });
    expect(pngSize("app/icon.png")).toEqual({ width: 32, height: 32 });
    expect(pngSize("app/apple-icon.png")).toEqual({ width: 180, height: 180 });
  });

  it("stores favicon.ico as a BMP DIB icon, not PNG-in-ICO", () => {
    const ico = readFileSync(path.join(root, "app/favicon.ico"));
    expect(ico.readUInt16LE(0)).toBe(0);
    expect(ico.readUInt16LE(2)).toBe(1);
    expect(ico.readUInt16LE(4)).toBe(1);
    expect(ico[0 + 6]).toBe(32);
    expect(ico[1 + 6]).toBe(32);
    const imageOffset = ico.readUInt32LE(6 + 12);
    expect(ico.readUInt32LE(imageOffset)).toBe(40);
    expect(ico[imageOffset + 0]).not.toBe(0x89);
  });
});
