"use client";

import { useEffect, useId, useRef, useState } from "react";
import NextLink from "next/link";
import { CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import { QUICK_INFO_COPY } from "@/content/quick-info";
import { WORK_ITEMS } from "@/content/work";
import { trapTabKey } from "@/lib/focus-trap";
import type { Locale } from "@/lib/locale";
import { projectsHref } from "@/lib/site-url";
import { Button } from "@astryxdesign/core/Button";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { CloseIcon } from "./overlay-icons";
import { WorkplaceLine } from "./workplace-line";

/**
 * Quick Info overlay (T-020.2, ADR-022) — tab tepi kanan → drawer.
 * Visual dari `design-mockups/shared.js` `mountQuickInfo()` + `.qi-*`.
 * Bukan route; bukan form Contact. Tetap di Work index (ADR-027); sheet M10 overlay terpisah.
 */
export function QuickInfo({ locale }: { locale: Locale }) {
  const copy = QUICK_INFO_COPY[locale];
  const works = WORK_ITEMS[locale];
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = () => setIsOpen(false);
  const open = () => {
    window.dispatchEvent(new Event("rz-quick-info-open"));
    setIsOpen(true);
  };

  useEffect(() => {
    const onForeignOverlay = () => setIsOpen(false);
    window.addEventListener("rz-contact-open", onForeignOverlay);
    window.addEventListener("rz-project-sheet-open", onForeignOverlay);
    return () => {
      window.removeEventListener("rz-contact-open", onForeignOverlay);
      window.removeEventListener("rz-project-sheet-open", onForeignOverlay);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lastFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.documentElement.classList.add("qi-lock");
    const closeBtn = panelRef.current?.querySelector<HTMLElement>(".qi-close");
    closeBtn?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (panelRef.current) {
        trapTabKey(event, panelRef.current);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("qi-lock");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      return;
    }
    const target = lastFocus.current;
    if (target?.isConnected) {
      target.focus();
    }
    lastFocus.current = null;
  }, [isOpen]);

  const workHref = projectsHref(locale);

  return (
    <>
      <VStack
        data-overlay-scrim=""
        data-lenis-prevent=""
        className={isOpen ? "qi-scrim is-open" : "qi-scrim"}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <VStack
        data-lenis-prevent=""
        className={isOpen ? "qi-wrap is-open" : "qi-wrap"}
      >
        <Button
          label={copy.tab}
          variant="ghost"
          onClick={open}
          aria-expanded={isOpen}
          aria-controls="qi-panel"
          className="qi-tab"
        />
        <VStack
          ref={panelRef}
          id="qi-panel"
          className="qi-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-hidden={!isOpen}
        >
          <HStack className="qi-header" align="center" justify="between">
            <Button
              label={copy.close}
              variant="ghost"
              size="sm"
              isIconOnly
              icon={<Icon icon={CloseIcon} />}
              onClick={close}
              className="qi-close"
            />
            <Heading level={2} id={titleId} className="qi-title">
              {copy.title}
            </Heading>
            <VStack className="qi-header-spacer" aria-hidden="true" />
          </HStack>
          <VStack className="qi-body" gap={0}>
            <VStack gap={3} className="qi-intro">
              <Text display="block" className="qi-bio">
                {copy.bio}
              </Text>
              <WorkplaceLine locale={locale} className="qi-workplace" />
            </VStack>
            <Grid columns={2} gap={6} className="qi-cols">
              <VStack gap={3}>
                <Text display="block" className="qi-label">
                  {copy.servicesLabel}
                </Text>
                <VStack gap={2} className="qi-list">
                  {copy.services.map((item) => (
                    <Text key={item}>{item}</Text>
                  ))}
                </VStack>
              </VStack>
              <VStack gap={3}>
                <Text display="block" className="qi-label">
                  {copy.toolsLabel}
                </Text>
                <VStack gap={2} className="qi-list">
                  {copy.tools.map((item) => (
                    <Text key={item}>{item}</Text>
                  ))}
                </VStack>
              </VStack>
            </Grid>
            <Text display="block" className="qi-label">
              {copy.worksLabel}
            </Text>
            <VStack gap={2} className="qi-index">
              {works.map((item) => (
                <Link
                  key={item.id}
                  as={NextLink}
                  href={workHref}
                  className="qi-index-link"
                >
                  <Text>{item.name}</Text>
                  <Text className="qi-year">[{item.year}]</Text>
                </Link>
              ))}
            </VStack>
            <Text display="block" className="qi-label">
              {copy.emailLabel}
            </Text>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="qi-email cta-underline"
            >
              {CONTACT_EMAIL}
            </Link>
            <Text display="block" className="qi-label">
              {copy.linksLabel}
            </Text>
            <HStack gap={5} wrap="wrap" className="qi-links">
              {CONTACT_LINKS.map((link) => (
                <Link key={link.id} href={link.href} color="secondary">
                  {link.label}
                </Link>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
