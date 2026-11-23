"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PERSON_CHROME } from "@/content/person";
import {
  BANDUNG_TIME_PLACEHOLDER,
  formatBandungTime,
} from "@/lib/bandung-time";
import type { Locale } from "@/lib/locale";
import {
  MENU_LABEL,
  MENU_TOGGLE_LABEL,
  NAV_ITEMS,
  NAV_LABELS,
  homeHref,
  isHomePath,
  isNavItemActive,
} from "@/lib/nav";
import { siteHeaderVariant } from "@/lib/site-chrome";
import { nextDockState } from "@/lib/site-dock";
import { contactHref } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "./locale-switcher";
import { scrollToPageId, whenPageTransitionUnlocked } from "./smooth-scroll";

/**
 * Site header (T-079.1, ADR-052, ADR-054): masthead with a giant wordmark,
 * Bandung local time and the nav; a scroll-up dock; a full-screen sheet on
 * phones. Reference: `design-mockups/shared.js` (not pixel-exact).
 *
 * - Brand = Home link (ADR-034/035); nav = About / How I Work / Work (ADR-040:
 *   About is `#about` on Home); Contact links to the `/contact` page (T-083).
 * - The masthead is in flow and blends with `difference`, so it reads on both
 *   the legacy dark surfaces and the paper surfaces that replace them.
 * - The dock is a visual duplicate for pointer users: `aria-hidden`, links out
 *   of the tab order. Keyboard and screen readers use the masthead nav, which
 *   is always in the DOM; on phones the Menu button opens the sheet (Radix
 *   Dialog: focus trap, Escape, `aria-modal`).
 * - Work index (T-081.1, `siteHeaderVariant`): a floating frosted glass bar
 *   (brand / nav / Contact + locale / Menu on phones) replaces the masthead
 *   and the dock. Its nav is the real, focusable nav on that page.
 * - Styling lives in `app/globals.css` (`.mh-*`, `.wbar*`).
 */

const WORDMARK = PERSON_CHROME.name.split(" ")[0] ?? PERSON_CHROME.name;
const LOCATION_LABEL = "Bandung, Indonesia";

/** Matches `max-width: 767px` in the `.mh-*` CSS (below Tailwind `md`). */
const DESKTOP_QUERY = "(min-width: 768px)";

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

function useBandungClock(enabled: boolean): string {
  const [time, setTime] = useState(BANDUNG_TIME_PLACEHOLDER);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const tick = () => {
      setTime(formatBandungTime(new Date()));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [enabled]);

  return time;
}

function useDockVisible(enabled: boolean): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    let state = { visible: false, lastY: window.scrollY };
    const onScroll = () => {
      state = nextDockState(state, window.scrollY, window.innerHeight);
      setVisible(state.visible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return visible;
}

/** Closes the sheet when the viewport grows past the phone layout. */
function useCloseOnDesktop(open: boolean, close: () => void): void {
  useEffect(() => {
    if (!open) {
      return;
    }
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (media.matches) {
        close();
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open, close]);
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

function NavLinks({
  locale,
  pathname,
  hash,
  tabIndex,
  onNavigate,
}: {
  locale: Locale;
  pathname: string;
  hash: string;
  tabIndex?: number;
  onNavigate?: () => void;
}) {
  return (
    <>
      {NAV_ITEMS.map((item) => {
        const selected = isNavItemActive(pathname, locale, item, hash);
        const label = NAV_LABELS[locale][item.key];
        return (
          <NextLink
            key={item.key}
            href={item.href(locale)}
            className="mh-roll"
            data-t={label}
            aria-current={selected ? "page" : undefined}
            tabIndex={tabIndex}
            onClick={(event) => {
              handleAboutNavClick(event, item.key, locale, pathname);
              onNavigate?.();
            }}
          >
            <span>{label}</span>
          </NextLink>
        );
      })}
    </>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const hash = useLocationHash();
  // The Work glass bar shows neither the clock nor the dock: skip their work.
  const masthead = siteHeaderVariant(pathname, locale) === "masthead";
  const time = useBandungClock(masthead);
  const dockVisible = useDockVisible(masthead);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetPath, setSheetPath] = useState(pathname);
  const closeSheet = () => setSheetOpen(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const contactLabel = NAV_LABELS[locale].contact;
  const contactPath = contactHref(locale);
  const contactCurrent = pathname === contactPath;
  const menuLabel = MENU_TOGGLE_LABEL[locale];

  useEffect(() => {
    if (!isHomePath(pathname, locale) || window.location.hash !== "#about") {
      return;
    }
    // Wait for page-vt-lock to clear: scrolling while the curtain holds the
    // document is eaten by freezeWindowScrollAtTop (ADR-040).
    return whenPageTransitionUnlocked(() => {
      scrollToPageId("about");
    });
  }, [pathname, locale]);

  if (sheetPath !== pathname) {
    setSheetPath(pathname);
    if (sheetOpen) {
      setSheetOpen(false);
    }
  }

  useCloseOnDesktop(sheetOpen, closeSheet);

  const brandLabel = `${PERSON_CHROME.name}, ${NAV_LABELS[locale].home}`;
  const homeCurrent = isHomePath(pathname, locale) ? "page" : undefined;

  const menuTrigger = (className: string) => (
    <SheetTrigger asChild>
      <button
        ref={menuButtonRef}
        type="button"
        className={className}
        aria-label={menuLabel.open}
      >
        {MENU_LABEL[locale]}
      </button>
    </SheetTrigger>
  );

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      {!masthead ? (
        <header className="wbar">
          <NextLink
            href={homeHref(locale)}
            className="wbar-brand wbar-glass wordmark"
            aria-label={brandLabel}
          >
            {WORDMARK}
          </NextLink>
          <nav aria-label="Main navigation" className="wbar-nav wbar-glass">
            <NavLinks locale={locale} pathname={pathname} hash={hash} />
          </nav>
          <div className="wbar-end">
            <NextLink
              href={contactPath}
              className="wbar-cta wbar-glass"
            >
              {contactLabel}
            </NextLink>
            <LocaleSwitcher
              locale={locale}
              className="wbar-locale wbar-glass"
            />
            {menuTrigger("wbar-menu wbar-glass")}
          </div>
        </header>
      ) : (
        <>
          <header className="mh-header">
            <div className="mh-masthead">
              <NextLink
                href={homeHref(locale)}
                className="mh-brand wordmark"
                aria-label={brandLabel}
                aria-current={homeCurrent}
              >
                {WORDMARK}
              </NextLink>
              <p className="mh-meta">
                <span>{LOCATION_LABEL}</span>
                <i aria-hidden="true">/</i>
                <span className="mh-clock" aria-hidden="true">
                  {time}
                </span>
              </p>
              <nav aria-label="Main navigation" className="mh-nav">
                <NavLinks locale={locale} pathname={pathname} hash={hash} />
                <NextLink
                  href={contactPath}
                  className="mh-roll"
                  data-t={contactLabel}
                  aria-current={contactCurrent ? "page" : undefined}
                >
                  <span>{contactLabel}</span>
                </NextLink>
                <LocaleSwitcher locale={locale} />
              </nav>
              {menuTrigger("mh-menu-btn")}
            </div>
          </header>

          <div
            className="mh-dock"
            aria-hidden="true"
            data-visible={dockVisible ? "true" : "false"}
          >
            <NextLink
              href={homeHref(locale)}
              className="mh-dock-brand wordmark"
              tabIndex={-1}
            >
              {WORDMARK}
            </NextLink>
            <div className="mh-dock-nav">
              <NavLinks
                locale={locale}
                pathname={pathname}
                hash={hash}
                tabIndex={-1}
              />
            </div>
            <button
              type="button"
              className="mh-dock-menu"
              tabIndex={-1}
              onClick={() => setSheetOpen(true)}
            >
              {MENU_LABEL[locale]}
            </button>
          </div>
        </>
      )}

      <SheetContent
        side="top"
        showCloseButton={false}
        showOverlay={false}
        aria-describedby={undefined}
        // Radix hides the rest of the page but does not set `aria-modal`;
        // `SmoothScroll` also reads it to pause Lenis while the sheet is open.
        aria-modal="true"
        className={cn(
          "z-150 gap-0 border-0 bg-ink p-gutter text-paper shadow-none md:hidden",
          "data-[side=top]:h-dvh data-[side=top]:border-b-0",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
          "animation-duration-500 [--tw-ease:var(--ease-monolith-io)]",
          "motion-reduce:animate-none",
        )}
        onCloseAutoFocus={(event) => {
          // Radix would focus the trigger with a scroll, which jumps the
          // page to the masthead (after About, or after opening from the
          // dock). Refocus without scrolling, and leave focus alone when
          // something else already took it.
          event.preventDefault();
          const active = document.activeElement;
          if (!active || active === document.body) {
            menuButtonRef.current?.focus({ preventScroll: true });
          }
        }}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>{MENU_LABEL[locale]}</SheetTitle>
        </SheetHeader>
        <SheetClose asChild>
          <button type="button" className="mh-sheet-close">
            {menuLabel.close}
          </button>
        </SheetClose>
        <nav aria-label="Menu" className="mh-sheet-nav">
          <SheetLink
            href={homeHref(locale)}
            label={NAV_LABELS[locale].home}
            current={isHomePath(pathname, locale)}
            onNavigate={closeSheet}
          />
          {NAV_ITEMS.map((item) => (
            <SheetLink
              key={item.key}
              href={item.href(locale)}
              label={NAV_LABELS[locale][item.key]}
              current={isNavItemActive(pathname, locale, item, hash)}
              onNavigate={closeSheet}
              onClick={(event) =>
                handleAboutNavClick(event, item.key, locale, pathname)
              }
            />
          ))}
          <SheetLink
            href={contactPath}
            label={contactLabel}
            current={contactCurrent}
            onNavigate={closeSheet}
          />
        </nav>
        <LocaleSwitcher locale={locale} className="mh-sheet-locale" />
      </SheetContent>
    </Sheet>
  );
}

function SheetLink({
  href,
  label,
  current,
  onNavigate,
  onClick,
}: {
  href: string;
  label: string;
  current: boolean;
  onNavigate: () => void;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <NextLink
      href={href}
      className="mh-sheet-link"
      aria-current={current ? "page" : undefined}
      onClick={(event) => {
        onClick?.(event);
        onNavigate();
      }}
    >
      {label}
    </NextLink>
  );
}
