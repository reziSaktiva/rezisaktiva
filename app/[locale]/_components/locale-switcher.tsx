"use client";

import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { useTransitionNavigate } from "./page-transition";

const LABELS: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

const FULL_LABELS: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

function hrefForLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = target;
  return `/${segments.join("/")}`;
}

function storeLocale(target: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000`;
}

/**
 * Language switch in the masthead and the mobile sheet (T-079.1): an inline
 * `ID / EN` pair, no dropdown. Click stores the preference in the
 * `NEXT_LOCALE` cookie; middleware uses it only for the `/` redirect (never
 * rewrites locale paths) per ADR-014. The path still resolves to the sibling
 * locale (Home to Home, About to About, ...) per `navigation-patterns.md`.
 * Both buttons are real buttons: keyboard reachable, current one is
 * `aria-pressed`.
 */
export function LocaleSwitcher({
  locale,
  className,
  buttonClassName,
  tabIndex,
}: {
  locale: Locale;
  className?: string;
  buttonClassName?: string;
  tabIndex?: number;
}) {
  const pathname = usePathname();
  const navigate = useTransitionNavigate();

  const handleChange = (target: Locale) => {
    if (target === locale) {
      return;
    }
    storeLocale(target);
    navigate(`${hrefForLocale(pathname, target)}${window.location.hash}`);
  };

  return (
    <div
      role="group"
      aria-label="Bahasa / Language"
      className={cn("mh-locale", className)}
    >
      {LOCALES.map((value, index) => (
        <span key={value} className="mh-locale-item">
          {index > 0 ? (
            <i className="mh-locale-sep" aria-hidden="true">
              /
            </i>
          ) : null}
          <button
            type="button"
            lang={value}
            aria-label={FULL_LABELS[value]}
            aria-pressed={value === locale}
            tabIndex={tabIndex}
            className={cn("mh-locale-button", buttonClassName)}
            onClick={() => handleChange(value)}
          >
            {LABELS[value]}
          </button>
        </span>
      ))}
    </div>
  );
}
