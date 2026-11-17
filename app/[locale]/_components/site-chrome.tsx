"use client";

import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";
import { SKIP_TO_CONTENT_LABEL } from "@/lib/nav";
import { MAIN_CONTENT_ID } from "@/lib/site-chrome";
import { SiteHeader } from "./site-header";

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
 * AppShell replacement (T-033.1): masthead header + `<main>`. Footer is a
 * sibling in the locale layout (ADR-041). Header, dock and mobile sheet live
 * in `SiteHeader` (T-079.1).
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
      <SiteHeader locale={locale} />
      <main id={MAIN_CONTENT_ID} className="site-chrome-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
