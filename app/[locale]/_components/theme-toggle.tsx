"use client";

import { Icon } from "@astryxdesign/core/Icon";
import { ToggleButton } from "@astryxdesign/core/ToggleButton";
import { useThemeMode } from "@/app/_components/theme-mode-provider";
import type { Locale } from "@/lib/locale";
import { MoonIcon, SunIcon } from "./theme-toggle-icons";

const THEME_TOGGLE_LABEL: Record<Locale, string> = {
  id: "Ganti tema terang/gelap",
  en: "Toggle light/dark theme",
};

/**
 * T-013.4 (ADR-021) — toggle dark/light, selalu terlihat di luar hamburger
 * (bersama tombol Contact, lihat `site-header.tsx`). Default ship tetap
 * light; preferensi disimpan lewat `ThemeModeProvider` (localStorage,
 * pola mockup).
 */
export function ThemeToggle({ locale }: { locale: Locale }) {
  const { mode, toggle } = useThemeMode();

  return (
    <span className="site-theme-toggle">
      <ToggleButton
        label={THEME_TOGGLE_LABEL[locale]}
        isIconOnly
        size="sm"
        isPressed={mode === "dark"}
        onPressedChange={toggle}
        icon={<Icon icon={SunIcon} />}
        pressedIcon={<Icon icon={MoonIcon} />}
      />
    </span>
  );
}
