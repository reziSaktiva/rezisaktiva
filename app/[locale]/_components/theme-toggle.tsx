"use client";

import { Toggle } from "@/components/ui/toggle";
import { useThemeMode } from "@/app/_components/theme-mode-provider";
import { setThemeMode } from "@/lib/theme-mode";
import type { Locale } from "@/lib/locale";
import { MoonIcon, SunIcon } from "./overlay-icons";

const THEME_TOGGLE_LABEL: Record<Locale, string> = {
  id: "Ganti tema terang/gelap",
  en: "Toggle light/dark theme",
};

/**
 * T-013.4 (ADR-021) — toggle dark/light, selalu terlihat di luar hamburger
 * (bersama tombol Contact, lihat `site-header.tsx`). Default ship tetap
 * light; preferensi `rz-theme` lewat `setThemeMode` (cookie + localStorage).
 *
 * T-033.5: ToggleButton → Toggle shadcn. Ikon Sun/Moon dari overlay-icons.
 */
export function ThemeToggle({ locale }: { locale: Locale }) {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <span className="site-theme-toggle">
      <Toggle
        pressed={isDark}
        onPressedChange={(pressed) => {
          setThemeMode(pressed ? "dark" : "light");
        }}
        aria-label={THEME_TOGGLE_LABEL[locale]}
        size="lg"
        className="site-theme-toggle-btn"
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </Toggle>
    </span>
  );
}
