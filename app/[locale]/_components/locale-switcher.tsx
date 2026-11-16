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
 * Language switcher — always in chrome (T-013.2, polish T-010.3).
 * Click stores preference in `NEXT_LOCALE` cookie; middleware uses it only
 * for `/` redirect (never rewrites locale paths) per ADR-014.
 * Path still resolves to the sibling locale (Home↔Home, About↔About, etc.)
 * per `navigation-patterns.md`.
 *
 * shadcn Dropdown Menu (ID/EN radio); gothic-blood skin via `.site-locale-*`.
 */
export function LocaleSwitcher({
  locale,
  variant = "bar",
  onOpenChange,
}: {
  locale: Locale;
  /** `menu` = compact in the hamburger panel. */
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
