"use client";

import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";
import { SKIP_TO_CONTENT_LABEL } from "@/lib/nav";
import { MAIN_CONTENT_ID } from "@/lib/site-chrome";
import { SiteNavGlass, SiteTopNav } from "./site-header";

export { MAIN_CONTENT_ID };

function SiteSkipLink({ locale }: { locale: Locale }) {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="site-skip-link"
      onClick={() => {
        document.getElementById(MAIN_CONTENT_ID)?.focus();
      }}
    >
      {SKIP_TO_CONTENT_LABEL[locale]}
    </a>
  );
}

/**
 * Pengganti AppShell (T-033.1): header sticky + `<main>`. Footer sibling
 * di layout locale (ADR-041). Nav di `SiteTopNav`; kaca desktop on-scroll
 * di `SiteNavGlass` (T-055.2 / T-055.3).
 */
export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <div className="site-chrome">
      <SiteSkipLink locale={locale} />
      <header className="site-chrome-header">
        <SiteNavGlass />
        <SiteTopNav locale={locale} />
      </header>
      <main id={MAIN_CONTENT_ID} className="site-chrome-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
