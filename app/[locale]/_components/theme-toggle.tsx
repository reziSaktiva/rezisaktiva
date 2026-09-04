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
 * T-013.4 (ADR-021) — toggle dark/light.
 * T-038.2 hold: **tidak di-mount** di `site-header.tsx`. File tetap.
 * Saat hold dicabut, pasang lagi di luar hamburger.
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
