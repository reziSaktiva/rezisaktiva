import type { Locale } from "@/lib/locale";
import { projectsHref, workflowHref } from "@/lib/site-url";

/**
 * Item nav chip R1 (About / Workflow / Proyek) per ADR-020 + ADR-034 +
 * ADR-035 + ADR-040 — Home tidak di chip; nama brand adalah tautan Home.
 * About = `#about` di Home. Contact bukan link nav (ADR-019). `home` tetap
 * di `NAV_LABELS` untuk breadcrumb JSON-LD (T-029).
 */
export type NavKey = "home" | "about" | "workflow" | "work";
export type NavChipKey = Exclude<NavKey, "home">;

export interface NavItemConfig {
  key: NavChipKey;
  href: (locale: Locale) => string;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { key: "about", href: (locale) => aboutHref(locale) },
  { key: "workflow", href: (locale) => workflowHref(locale) },
  { key: "work", href: (locale) => projectsHref(locale) },
];

export function homeHref(locale: Locale): string {
  return `/${locale}`;
}

export function aboutHref(locale: Locale): string {
  return `${homeHref(locale)}#about`;
}

export function isHomePath(pathname: string, locale: Locale): boolean {
  const href = homeHref(locale);
  return pathname === href || pathname === `${href}/`;
}

export const NAV_LABELS: Record<Locale, Record<NavKey, string>> = {
  id: {
    home: "Home",
    about: "Tentang",
    workflow: "Proses Kerja",
    work: "Proyek",
  },
  en: {
    home: "Home",
    about: "About",
    workflow: "How I Work",
    work: "Projects",
  },
};

export const CONTACT_LABEL: Record<Locale, string> = {
  id: "Kontak",
  en: "Contact",
};

export const MENU_LABEL: Record<Locale, string> = {
  id: "Menu",
  en: "Menu",
};

/**
 * Aria-label tombol hamburger, berbeda saat terbuka/tertutup — selaras
 * `nav.menu` / `nav.menuClose` di mockup (`design-mockups/shared.js`).
 */
export const MENU_TOGGLE_LABEL: Record<Locale, { open: string; close: string }> = {
  id: { open: "Buka menu", close: "Tutup menu" },
  en: { open: "Open menu", close: "Close menu" },
};

export const SKIP_TO_CONTENT_LABEL: Record<Locale, string> = {
  id: "Lewati ke konten",
  en: "Skip to content",
};

/**
 * Cocokkan pathname (+ hash untuk About) ke item chip nav.
 * About = section `#about` di Home (ADR-040), bukan route.
 */
export function isNavItemActive(
  pathname: string,
  locale: Locale,
  item: NavItemConfig,
  hash = "",
): boolean {
  if (item.key === "about") {
    return isHomePath(pathname, locale) && hash === "#about";
  }
  const href = item.href(locale);
  return pathname === href || pathname.startsWith(`${href}/`);
}
