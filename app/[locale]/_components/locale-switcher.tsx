"use client";

import { ChevronDownIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { useTransitionNavigate } from "./page-transition";

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
 * Language switcher — selalu ada di chrome (T-013.2, polish T-010.3).
 * Klik menyimpan preferensi ke cookie `NEXT_LOCALE`; hanya dipakai middleware
 * untuk redirect `/` (tidak pernah rewrite path ber-locale) sesuai ADR-014.
 * Path tetap dievaluasi di sibling locale (Home↔Home, About↔About, dst.)
 * per `navigation-patterns.md`.
 *
 * Dropdown Menu shadcn (radio ID/EN); kulit gothic-blood via `.site-locale-*`.
 */
export function LocaleSwitcher({
  locale,
  variant = "bar",
  onOpenChange,
}: {
  locale: Locale;
  /** `menu` = compact di panel hamburger. */
  variant?: "bar" | "menu";
  onOpenChange?: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const navigate = useTransitionNavigate();
  const isMenu = variant === "menu";

  const handleChange = (value: string) => {
    if (!LOCALES.includes(value as Locale) || value === locale) {
      return;
    }
    const target = value as Locale;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000`;
    navigate(`${hrefForLocale(pathname, target)}${window.location.hash}`);
  };

  return (
    <DropdownMenu modal={false} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label="Bahasa / Language"
          className={cn(
            "site-locale-trigger",
            isMenu && "site-locale-trigger--menu",
          )}
        >
          {LABELS[locale]}
          <ChevronDownIcon data-icon="inline-end" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMenu ? "center" : "end"}
        className="site-locale-menu"
        data-lenis-prevent=""
      >
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
            {LOCALES.map((value) => (
              <DropdownMenuRadioItem
                key={value}
                value={value}
                aria-label={LABELS[value]}
              >
                {LABELS[value]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
