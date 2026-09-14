import type { MetadataRoute } from "next";
import { PERSON } from "@/content/person";

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
    background_color: "#0b0b0d",
    theme_color: "#0b0b0d",
    icons: [...SITE_MANIFEST_ICONS],
  };
}
