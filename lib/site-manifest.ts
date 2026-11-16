import type { Metadata, MetadataRoute } from "next";
import { PERSON } from "@/content/person";
import brandChrome from "@/lib/brand-chrome.json";

/** Dark canvas T-039 / ADR-029. Used by manifest + theme-color. */
export const SITE_CANVAS_COLOR = brandChrome.canvas;

/**
 * Icons in HTML head (T-031). 192/512 are multiples of 48px for crawlers.
 * `metadata.icons` overrides file-based `icon`/`apple-icon`, so Apple 180
 * must be listed here. Favicon 32 still comes from `app/favicon.ico`.
 */
export const SITE_HEAD_ICONS = {
  icon: [
    { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
  apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
} as const satisfies Metadata["icons"];

/**
 * Lightweight manifest T-031.2. Not a PWA (no SW / install prompt).
 * `display: browser` = normal tab. Colors = dark canvas T-039.
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