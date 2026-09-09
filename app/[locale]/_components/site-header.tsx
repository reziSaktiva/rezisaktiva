"use client";

import { useEffect, useId, useState, type MouseEvent } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useChipColorVars } from "@/app/_components/theme-mode-provider";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import { PERSON_CHROME } from "@/content/person";
import {
  CONTACT_LABEL,
  MENU_LABEL,
  MENU_TOGGLE_LABEL,
  NAV_ITEMS,
  NAV_LABELS,
  homeHref,
  isHomePath,
  isNavItemActive,
} from "@/lib/nav";
import { Magnetic } from "./home-motion";
import { LocaleSwitcher } from "./locale-switcher";
import { CloseIcon, MenuIcon } from "./overlay-icons";
import { SlidingPillGroup } from "./sliding-pill-group";
import { scrollToPageId, whenPageTransitionUnlocked } from "./smooth-scroll";

/**
 * Site chrome — T-013 (ADR-020) + ADR-034 + ADR-035: chip Tentang /
 * Proses Kerja / Proyek; nama = tautan Home (bukan chip Home). Contact =
 * tombol modal (T-016, ADR-019).
 * <1024px: nav halaman + switcher masuk hamburger; Contact-button + toggle
 * tema tetap di luar (ADR-020 override `navigation-patterns.md`).
 *
 * T-033.2–T-033.6: TopNav / hamburger → Button + Sheet; locale → ToggleGroup;
 * tema → Toggle; Contact chrome + footer CTA → Button shadcn.
 * T-040.1 / ADR-034: nama display + role di samping; Contact/hamburger datar.
 * T-040.4: lembar hamburger = panel elevated; selected = outline (ADR-031).
 */
export function SiteTopNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const hash = useLocationHash();
  const isMobile = useMobileNavBreakpoint();
  const chipColorVars = useChipColorVars();
  const { open } = useContactModal();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileNavPath, setMobileNavPath] = useState(pathname);
  const mobileNavId = useId();

  useEffect(() => {
    if (!isHomePath(pathname, locale) || window.location.hash !== "#about") {
      return;
    }
    // Wait for page-vt-lock to clear — rAF alone races freezeWindowScrollAtTop
    // and stopped Lenis after Workflow/Projects → About (ADR-040).
    return whenPageTransitionUnlocked(() => {
      scrollToPageId("about");
    });
  }, [pathname, locale]);

  if (mobileNavPath !== pathname) {
    setMobileNavPath(pathname);
    if (mobileNavOpen) {
      setMobileNavOpen(false);
    }
  }
  if (!isMobile && mobileNavOpen) {
    setMobileNavOpen(false);
  }

  return (
    <nav
      aria-label="Main navigation"
      className={cn("site-top-nav", isMobile && "site-top-nav--compact")}
    >
      <div className="site-brand flex items-baseline gap-3">
        <NextLink
          href={homeHref(locale)}
          className="site-brand-heading"
          aria-current={isHomePath(pathname, locale) ? "page" : undefined}
        >
          {PERSON_CHROME.name}
        </NextLink>
        <span className="site-brand-role">{PERSON_CHROME.jobTitle}</span>
      </div>
      {!isMobile ? (
        <SlidingPillGroup
          className="site-nav-chip"
          style={chipColorVars}
          itemSelector=".site-nav-item"
          layoutKey={pathname}
        >
          {NAV_ITEMS.map((item) => {
            const selected = isNavItemActive(pathname, locale, item, hash);
            return (
              <Button
                key={item.key}
                variant="ghost"
                size="sm"
                asChild
                className="site-nav-item"
                data-selected={selected ? "true" : undefined}
                aria-current={selected ? "page" : undefined}
              >
                <NextLink
                  href={item.href(locale)}
                  onClick={(event) => {
                    handleAboutNavClick(event, item.key, locale, pathname);
                  }}
                >
                  {NAV_LABELS[locale][item.key]}
                </NextLink>
              </Button>
            );
          })}
        </SlidingPillGroup>
      ) : null}
      <div className="site-header-tools">
        {!isMobile && <LocaleSwitcher locale={locale} />}
        {isMobile ? (
          <>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="site-nav-toggle"
              aria-label={
                mobileNavOpen
                  ? MENU_TOGGLE_LABEL[locale].close
                  : MENU_TOGGLE_LABEL[locale].open
              }
              aria-expanded={mobileNavOpen}
              aria-controls={mobileNavId}
              onClick={() => setMobileNavOpen((isOpen) => !isOpen)}
            >
              {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
            <Sheet
              open={mobileNavOpen}
              onOpenChange={setMobileNavOpen}
              modal={false}
            >
              <SheetContent
                id={mobileNavId}
                side="top"
                showCloseButton={false}
                showOverlay={false}
                aria-describedby={undefined}
                className={cn(
                  "site-mobile-nav gap-2 border-0 p-0 shadow-none",
                  "inset-x-auto bottom-auto h-auto w-auto max-w-none sm:max-w-none",
                )}
                onOpenAutoFocus={(event) => event.preventDefault()}
                onCloseAutoFocus={(event) => event.preventDefault()}
                onPointerDownOutside={(event) => {
                  const target = event.target;
                  if (
                    target instanceof Element &&
                    target.closest(".site-nav-toggle")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>{MENU_LABEL[locale]}</SheetTitle>
                </SheetHeader>
                <SlidingPillGroup
                  orientation="vertical"
                  className="site-mobile-nav-chip"
                  style={chipColorVars}
                  itemSelector=".site-mobile-nav-item"
                  layoutKey={pathname}
                >
                  {NAV_ITEMS.map((item) => {
                    const selected = isNavItemActive(
                      pathname,
                      locale,
                      item,
                      hash,
                    );
                    return (
                      <Button
                        key={item.key}
                        variant="ghost"
                        asChild
                        className="site-mobile-nav-item"
                        data-selected={selected ? "true" : undefined}
                        aria-current={selected ? "page" : undefined}
                        onClick={() => setMobileNavOpen(false)}
                      >
                        <NextLink
                          href={item.href(locale)}
                          onClick={(event) => {
                            handleAboutNavClick(
                              event,
                              item.key,
                              locale,
                              pathname,
                            );
                          }}
                        >
                          {NAV_LABELS[locale][item.key]}
                        </NextLink>
                      </Button>
                    );
                  })}
                </SlidingPillGroup>
                <LocaleSwitcher locale={locale} variant="menu" />
              </SheetContent>
            </Sheet>
          </>
        ) : null}
        <Magnetic>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={open}
            className="site-contact-button"
          >
            {CONTACT_LABEL[locale]}
          </Button>
        </Magnetic>
      </div>
    </nav>
  );
}

/** Hamburger <1024px (ADR-020). Selaras `@media (min-width: 1024px)` desktop. */
const MOBILE_NAV_QUERY = "(max-width: 1023px)";

function useLocationHash(): string {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => {
      setHash(window.location.hash);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return hash;
}

function handleAboutNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  key: string,
  locale: Locale,
  pathname: string,
): void {
  if (key !== "about" || !isHomePath(pathname, locale)) {
    return;
  }
  event.preventDefault();
  window.history.replaceState(null, "", `/${locale}#about`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
  scrollToPageId("about");
}

function useMobileNavBreakpoint(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_QUERY);
    const sync = () => {
      setIsMobile(media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return isMobile;
}
