"use client";

import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";
import { SKIP_TO_CONTENT_LABEL } from "@/lib/nav";
import { SiteTopNav } from "./site-header";

export const MAIN_CONTENT_ID = "site-chrome-main";

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
 * Pengganti AppShell (T-033.1): header sticky transparan + `<main>`.
 * Footer tetap sibling di layout locale. Nav desktop/mobile di
 * `SiteTopNav` (T-033.2–T-033.3) tanpa konteks Astryx.
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
        <SiteTopNav locale={locale} />
      </header>
      <main id={MAIN_CONTENT_ID} className="site-chrome-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
