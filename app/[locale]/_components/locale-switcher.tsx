"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@astryxdesign/core/SegmentedControl";
import { useChipColorVars } from "@/app/_components/theme-mode-provider";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/locale";
import { SlidingPillGroup } from "./sliding-pill-group";

const LABELS: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

function hrefForLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = target;
  return `/${segments.join("/")}`;
}

/**
 * Language switcher — selalu terlihat di chrome (T-013.2, polish T-010.3).
 * Klik menyimpan preferensi ke cookie `NEXT_LOCALE`; hanya dipakai middleware
 * untuk redirect `/` (tidak pernah rewrite path ber-locale) sesuai ADR-014.
 * Path tetap dievaluasi di sibling locale (Home↔Home, About↔About, dst.)
 * per `navigation-patterns.md`.
 */
export function LocaleSwitcher({
  locale,
  variant = "bar",
}: {
  locale: Locale;
  /** `menu` = chip compact di panel hamburger (mockup `.locale-switch--menu`). */
  variant?: "bar" | "menu";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const chipColorVars = useChipColorVars();
  const isMenu = variant === "menu";

  const handleChange = (value: string) => {
    if (!LOCALES.includes(value as Locale) || value === locale) {
      return;
    }
    const target = value as Locale;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000`;
    router.push(hrefForLocale(pathname, target));
  };

  return (
    <SlidingPillGroup
      className={
        isMenu
          ? "site-locale-switch-host site-locale-switch-host--menu"
          : "site-locale-switch-host"
      }
      style={chipColorVars}
      itemSelector=".astryx-segmented-control-item"
      layoutKey={locale}
    >
      <SegmentedControl
        value={locale}
        onChange={handleChange}
        label="Bahasa / Language"
        size="sm"
        className={
          isMenu
            ? "site-locale-switch site-locale-switch--menu"
            : "site-locale-switch"
        }
      >
        {LOCALES.flatMap((value, index) => [
          index > 0 && (
            <span
              key={`sep-${value}`}
              aria-hidden="true"
              className="locale-switch-separator"
            >
              /
            </span>
          ),
          <SegmentedControlItem
            key={value}
            value={value}
            label={LABELS[value]}
          />,
        ])}
      </SegmentedControl>
    </SlidingPillGroup>
  );
}
