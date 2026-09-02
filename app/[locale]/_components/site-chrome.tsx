"use client";

import {
  useCallback,
  useId,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  AppShellMobileContext,
  type AppShellMobileContextValue,
} from "@astryxdesign/core/AppShell";
import type { Locale } from "@/lib/locale";
import { SKIP_TO_CONTENT_LABEL } from "@/lib/nav";
import { SiteMobileNav, SiteTopNav } from "./site-header";

/** Sama dengan AppShell `mobileNav.breakpoint: "lg"` (1024px). */
const MOBILE_NAV_QUERY = "(max-width: 1024px)";
const MAIN_CONTENT_ID = "astryx-app-shell-main";

function useMobileNavBreakpoint(): boolean {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const media = window.matchMedia(MOBILE_NAV_QUERY);
    media.addEventListener("change", onStoreChange);
    return () => media.removeEventListener("change", onStoreChange);
  }, []);

  const getSnapshot = useCallback(
    () => window.matchMedia(MOBILE_NAV_QUERY).matches,
    [],
  );

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

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
 * Footer tetap sibling di layout locale. Konteks mobile Astryx dipertahankan
 * supaya TopNav / hamburger (T-033.2–T-033.3) belum harus diganti di sini.
 */
export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const isMobile = useMobileNavBreakpoint();
  const [mobileNavRequested, setMobileNavRequested] = useState(false);
  if (!isMobile && mobileNavRequested) {
    setMobileNavRequested(false);
  }
  const isMobileNavOpen = isMobile && mobileNavRequested;
  const mobileNavId = useId();

  const mobileContextValue = useMemo<AppShellMobileContextValue>(
    () => ({
      isMobile,
      isMobileNavOpen,
      mobileNavId,
      toggleMobileNav: () =>
        setMobileNavRequested((open) => (isMobile ? !open : false)),
      openMobileNav: () => {
        if (isMobile) {
          setMobileNavRequested(true);
        }
      },
      closeMobileNav: () => setMobileNavRequested(false),
      isMobileNavEnabled: true,
      hasAutoToggle: false,
    }),
    [isMobile, isMobileNavOpen, mobileNavId],
  );

  return (
    <AppShellMobileContext value={mobileContextValue}>
      <div className="site-chrome">
        <SiteSkipLink locale={locale} />
        <header className="astryx-app-shell-header">
          <SiteTopNav locale={locale} />
        </header>
        <main id={MAIN_CONTENT_ID} className="site-chrome-main" tabIndex={-1}>
          {children}
        </main>
        {isMobile ? <SiteMobileNav locale={locale} /> : null}
      </div>
    </AppShellMobileContext>
  );
}
