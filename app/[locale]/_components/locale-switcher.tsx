"use client";

import { usePathname } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useChipColorVars } from "@/app/_components/theme-mode-provider";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { useTransitionNavigate } from "./page-transition";
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
 *
 * T-033.4: SegmentedControl → ToggleGroup (type single; kosong diabaikan).
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
  const navigate = useTransitionNavigate();
  const chipColorVars = useChipColorVars();
  const isMenu = variant === "menu";

  const handleChange = (value: string) => {
    if (!LOCALES.includes(value as Locale) || value === locale) {
      return;
    }
    const target = value as Locale;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000`;
    navigate(hrefForLocale(pathname, target));
  };

  return (
    <SlidingPillGroup
      className={cn(
        "site-locale-switch-host",
        isMenu && "site-locale-switch-host--menu",
      )}
      style={chipColorVars}
      itemSelector=".site-locale-switch-item"
      layoutKey={locale}
    >
      <ToggleGroup
        type="single"
        value={locale}
        onValueChange={handleChange}
        size="sm"
        spacing={1}
        aria-label="Bahasa / Language"
        className={cn("site-locale-switch", isMenu && "site-locale-switch--menu")}
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
          <ToggleGroupItem
            key={value}
            value={value}
            className="site-locale-switch-item"
            data-selected={value === locale ? "true" : undefined}
          >
            {LABELS[value]}
          </ToggleGroupItem>,
        ])}
      </ToggleGroup>
    </SlidingPillGroup>
  );
}
