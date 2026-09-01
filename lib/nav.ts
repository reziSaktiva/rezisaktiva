import type { Locale } from "@/lib/locale";
import { projectsHref } from "@/lib/site-url";

/**
 * Item nav halaman R1 (Home / About / Proyek) per ADR-020 — Contact bukan
 * bagian dari daftar ini karena dirender sebagai tombol pembuka modal
 * (ADR-019), bukan link nav. Label Proyek/Projects; path `/projects`.
 */
export type NavKey = "home" | "about" | "work";

export interface NavItemConfig {
  key: NavKey;
  href: (locale: Locale) => string;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { key: "home", href: (locale) => `/${locale}` },
  { key: "about", href: (locale) => `/${locale}/about` },
  { key: "work", href: (locale) => projectsHref(locale) },
];

export const NAV_LABELS: Record<Locale, Record<NavKey, string>> = {
  id: {
    home: "Home",
    about: "Proses Kerja",
    work: "Proyek",
  },
  en: {
    home: "Home",
    about: "How I Work",
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

/**
 * Cocokkan pathname aktif ke item nav untuk state `isSelected`.
 * Home hanya aktif tepat di root locale; item lain aktif dengan prefix match
 * (mis. `/id/projects` dan turunannya bila ada rute anak di masa depan).
 */
export function isNavItemActive(
  pathname: string,
  locale: Locale,
  item: NavItemConfig,
): boolean {
  const href = item.href(locale);
  if (item.key === "home") {
    return pathname === href || pathname === `${href}/`;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
