import type { Locale } from "@/lib/locale";

/**
 * Item nav halaman R1 (Home / About / Karya) per ADR-020 — Contact bukan
 * bagian dari daftar ini karena dirender sebagai tombol pembuka modal
 * (ADR-019), bukan link nav.
 */
export type NavKey = "home" | "about" | "work";

export interface NavItemConfig {
  key: NavKey;
  href: (locale: Locale) => string;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { key: "home", href: (locale) => `/${locale}` },
  { key: "about", href: (locale) => `/${locale}/about` },
  { key: "work", href: (locale) => `/${locale}/work` },
];

export const NAV_LABELS: Record<Locale, Record<NavKey, string>> = {
  id: {
    home: "Home",
    about: "Proses Kerja",
    work: "Karya",
  },
  en: {
    home: "Home",
    about: "Process",
    work: "Work",
  },
};

export const CONTACT_LABEL: Record<Locale, string> = {
  id: "Kontak",
  en: "Contact",
};

/**
 * Placeholder tooltip untuk tombol Contact — modal belum wired (T-016,
 * ADR-019). Dihapus begitu T-016 selesai dan `onClick` benar-benar membuka
 * modal.
 */
export const CONTACT_TOOLTIP: Record<Locale, string> = {
  id: "Segera hadir — form kontak menyusul",
  en: "Coming soon — contact form in progress",
};

export const MENU_LABEL: Record<Locale, string> = {
  id: "Menu",
  en: "Menu",
};

/**
 * Cocokkan pathname aktif ke item nav untuk state `isSelected`.
 * Home hanya aktif tepat di root locale; item lain aktif dengan prefix match
 * (mis. `/id/work` dan turunannya bila ada rute anak di masa depan).
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
