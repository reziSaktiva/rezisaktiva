"use client";

import { usePathname } from "next/navigation";
import { Link } from "@astryxdesign/core/Link";
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";

const LABELS: Record<Locale, string> = {
  id: "Indonesia",
  en: "English",
};

function siblingLocale(locale: Locale): Locale {
  return locale === "id" ? "en" : "id";
}

function siblingHref(pathname: string, sibling: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = sibling;
  return `/${segments.join("/")}`;
}

/**
 * Stub switcher — fungsional, belum dipoles secara visual/konten (T-010.3).
 * Klik menyimpan preferensi ke cookie `NEXT_LOCALE`; hanya dipakai middleware
 * untuk redirect `/` (tidak pernah rewrite path ber-locale) sesuai ADR-014.
 */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const sibling = siblingLocale(locale);
  const href = siblingHref(pathname, sibling);

  return (
    <Link
      href={href}
      isStandalone
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${sibling}; path=/; max-age=31536000`;
      }}
    >
      {LABELS[sibling]}
    </Link>
  );
}
