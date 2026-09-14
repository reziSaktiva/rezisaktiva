import type { MetadataRoute } from "next";
import { PERSON } from "@/content/person";

/** Kanvas gelap T-039 / ADR-029. Dipakai manifest + theme-color. */
export const SITE_CANVAS_COLOR = "#0b0b0d";

/**
 * Manifest ringan T-031.2. Bukan PWA (tanpa SW / install-prompt).
 * `display: browser` = tab biasa. Warna = kanvas gelap T-039.
 */
export const SITE_MANIFEST_ICONS = [
  {
    src: "/brand/icon-192.png",
    sizes: "192x192",
    type: "image/png",
    purpose: "any",
  },
  {
    src: "/brand/icon-512.png",
    sizes: "512x512",
    type: "image/png",
    purpose: "any",
  },
] as const;

export function siteManifest(): MetadataRoute.Manifest {
  return {
    name: PERSON.alternateName,
    short_name: PERSON.alternateName,
    display: "browser",
    start_url: "/",
    background_color: SITE_CANVAS_COLOR,
    theme_color: SITE_CANVAS_COLOR,
    icons: [...SITE_MANIFEST_ICONS],
  };
}
