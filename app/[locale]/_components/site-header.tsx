"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useAppShellMobile } from "@astryxdesign/core/AppShell";
import { Button } from "@astryxdesign/core/Button";
import { HStack } from "@astryxdesign/core/HStack";
import { MobileNav, MobileNavToggle } from "@astryxdesign/core/MobileNav";
import { SideNavItem } from "@astryxdesign/core/SideNav";
import { TopNav, TopNavHeading, TopNavItem } from "@astryxdesign/core/TopNav";
import { useChipColorVars } from "@/app/_components/theme-mode-provider";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import type { Locale } from "@/lib/locale";
import {
  CONTACT_LABEL,
  MENU_LABEL,
  NAV_ITEMS,
  NAV_LABELS,
  isNavItemActive,
} from "@/lib/nav";
import { Magnetic } from "./home-motion";
import { LocaleSwitcher } from "./locale-switcher";
import { SlidingPillGroup } from "./sliding-pill-group";
import { ThemeToggle } from "./theme-toggle";

/**
 * Site chrome — T-013 (ADR-020): nav Home/About/Karya sebagai link,
 * Contact sebagai tombol pembuka modal (T-016, ADR-019).
 * <1024px: nav halaman + switcher masuk hamburger; Contact-button + toggle
 * tema tetap di luar (ADR-020 override `navigation-patterns.md`).
 *
 * Dua slot AppShell (`topNav` + `mobileNav`) dirender lewat komponen
 * terpisah karena harus dipasang sebagai prop yang berbeda pada AppShell,
 * bukan nested di dalam satu sama lain.
 */
export function SiteTopNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  // Breakpoint sinkron dengan mobileNav={{ breakpoint: 'lg' }} pada AppShell
  // (lg = 1024px) — sumber kebenaran tunggal untuk kapan hamburger aktif.
  const { isMobile } = useAppShellMobile();
  const chipColorVars = useChipColorVars();
  const { open } = useContactModal();

  return (
    <TopNav
      label="Main navigation"
      className="site-top-nav"
      heading={
        <TopNavHeading
          heading="rezisaktiva"
          headingHref={`/${locale}`}
          className="site-brand-heading"
        />
      }
      centerContent={
        // Ternary (bukan `&&`) supaya hasilnya `undefined`, bukan `false`,
        // saat mobile — TopNav mengecek `centerContent != null` untuk
        // memilih mode layout grid, dan `false != null` bernilai true.
        !isMobile ? (
          <SlidingPillGroup
            gap={2}
            padding={2}
            align="center"
            className="site-nav-chip"
            style={chipColorVars}
            itemSelector=".astryx-top-nav-item"
            layoutKey={pathname}
          >
            {NAV_ITEMS.map((item) => (
              <TopNavItem
                key={item.key}
                as={NextLink}
                href={item.href(locale)}
                label={NAV_LABELS[locale][item.key]}
                isSelected={isNavItemActive(pathname, locale, item)}
              />
            ))}
          </SlidingPillGroup>
        ) : undefined
      }
      endContent={
        <HStack gap={3} align="center">
          {!isMobile && <LocaleSwitcher locale={locale} />}
          <MobileNavToggle label={MENU_LABEL[locale]} />
          <Magnetic>
            <ThemeToggle locale={locale} />
          </Magnetic>
          <Magnetic>
            <Button
              label={CONTACT_LABEL[locale]}
              variant="primary"
              size="sm"
              onClick={open}
              className="site-contact-button"
            />
          </Magnetic>
        </HStack>
      }
    />
  );
}

export function SiteMobileNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const chipColorVars = useChipColorVars();

  return (
    <MobileNav header={MENU_LABEL[locale]}>
      <SlidingPillGroup
        orientation="vertical"
        gap={0.5}
        padding={1}
        className="site-mobile-nav-chip"
        style={chipColorVars}
        itemSelector=".astryx-side-nav-item"
        layoutKey={pathname}
      >
        {NAV_ITEMS.map((item) => (
          <SideNavItem
            key={item.key}
            as={NextLink}
            href={item.href(locale)}
            label={NAV_LABELS[locale][item.key]}
            isSelected={isNavItemActive(pathname, locale, item)}
          />
        ))}
      </SlidingPillGroup>
      <LocaleSwitcher locale={locale} />
    </MobileNav>
  );
}
