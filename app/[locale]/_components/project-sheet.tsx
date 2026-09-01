"use client";

import { useEffect, useId, useRef, useState } from "react";
import NextImage from "next/image";
import { Button } from "@astryxdesign/core/Button";
import { Center } from "@astryxdesign/core/Center";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import type { WorkItem } from "@/content/work";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
  workSheetImages,
} from "@/content/work-sheet";
import { trapTabKey } from "@/lib/focus-trap";
import type { Locale } from "@/lib/locale";
import { workPhotoProps } from "@/lib/work-image";
import { CloseIcon } from "./overlay-icons";
import { workTileLayout } from "./work-tile-layout";

function isRepoUrl(url: string): boolean {
  return url.includes("github.com");
}

export const PROJECT_SHEET_ID = "ps-panel";

function prefersReducedMotionNow(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ProjectSheet({
  locale,
  item,
  onClose,
}: {
  locale: Locale;
  item: WorkItem | null;
  onClose: () => void;
}) {
  const labels = WORK_SHEET_COPY[locale];
  const isOpen = item != null;
  const [visible, setVisible] = useState<WorkItem | null>(item);
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  if (item && item !== visible) {
    setVisible(item);
  } else if (!item && visible && prefersReducedMotionNow()) {
    setVisible(null);
  }

  const sheet = visible ? getWorkSheet(locale, visible.id) : undefined;
  const images = visible ? workSheetImages(visible.id) : [];
  const spanFullByIndex = new Map(
    workTileLayout(
      images.map((_, index) => ({
        id: String(index),
        featured: index === 0,
      })),
    ).map((slot) => [slot.id, slot.spanFull]),
  );

  useEffect(() => {
    const close = () => onClose();
    window.addEventListener("rz-contact-open", close);
    window.addEventListener("rz-quick-info-open", close);
    return () => {
      window.removeEventListener("rz-contact-open", close);
      window.removeEventListener("rz-quick-info-open", close);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lastFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    window.dispatchEvent(new Event("rz-project-sheet-open"));
    document.documentElement.classList.add("ps-lock");
    const dialog = dialogRef.current;
    scrollRef.current?.scrollTo({ top: 0 });
    dialog?.querySelector<HTMLElement>(".ps-close")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (dialogRef.current) {
        trapTabKey(event, dialogRef.current);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("ps-lock");
    };
  }, [isOpen, item?.id, onClose]);

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

  const liveHref =
    visible?.href && !isRepoUrl(visible.href) ? visible.href : undefined;
  const repoHref =
    visible?.href && isRepoUrl(visible.href) ? visible.href : sheet?.gitHref;

  return (
    <>
      <VStack
        data-overlay-scrim=""
        data-lenis-prevent=""
        className={isOpen ? "ps-scrim is-open" : "ps-scrim"}
        onClick={onClose}
        aria-hidden={!isOpen}
        inert={!isOpen || undefined}
      />
      <VStack
        data-lenis-prevent=""
        className={isOpen ? "ps-wrap is-open" : "ps-wrap"}
      >
        <VStack
          ref={dialogRef}
          id={PROJECT_SHEET_ID}
          className="ps-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-hidden={!isOpen}
          inert={!isOpen || undefined}
          gap={0}
          onTransitionEnd={(event) => {
            if (event.target !== dialogRef.current) {
              return;
            }
            if (!isOpen) {
              setVisible(null);
            }
          }}
        >
          <VStack
            ref={scrollRef}
            data-lenis-prevent=""
            className="ps-scroll"
            gap={0}
          >
            {visible && sheet ? (
              <VStack key={visible.id} gap={0} className="ps-sheet-body">
                <HStack
                  className="qi-header ps-header"
                  align="center"
                  justify="between"
                >
                  <Button
                    label={labels.close}
                    variant="ghost"
                    size="sm"
                    isIconOnly
                    icon={<Icon icon={CloseIcon} />}
                    onClick={onClose}
                    className="qi-close ps-close"
                  />
                  <Heading level={2} className="qi-title" aria-hidden="true">
                    {visible.name}
                  </Heading>
                  <VStack className="qi-header-spacer" aria-hidden="true" />
                </HStack>

                <VStack
                  as="section"
                  gap={0}
                  className="ps-info"
                  aria-labelledby={titleId}
                >
                  <Heading
                    level={2}
                    id={titleId}
                    className="ps-info-title ps-reveal"
                  >
                    {visible.name}
                  </Heading>
                  <Grid
                    columns={2}
                    gap={6}
                    className="qi-cols ps-info-meta ps-reveal"
                  >
                    <VStack gap={3}>
                      <Text display="block" className="qi-label">
                        {labels.servicesLabel}
                      </Text>
                      <VStack gap={2} className="qi-list">
                        {sheet.services.map((service) => (
                          <Text key={service}>{service}</Text>
                        ))}
                      </VStack>
                    </VStack>
                    <VStack gap={3}>
                      <Text display="block" className="qi-label">
                        {labels.locationLabel}
                      </Text>
                      <Text>{sheet.locationOrCompany}</Text>
                      <Text display="block" className="qi-label">
                        {labels.yearLabel}
                      </Text>
                      <Text>{visible.year}</Text>
                    </VStack>
                  </Grid>
                  <Text display="block" className="qi-label ps-reveal">
                    {labels.descriptionLabel}
                  </Text>
                  <Text
                    display="block"
                    className="qi-bio ps-description ps-reveal"
                  >
                    {sheet.description}
                  </Text>
                  {liveHref || repoHref ? (
                    <HStack gap={5} wrap="wrap" className="qi-links ps-reveal">
                      {liveHref ? (
                        <Link href={liveHref} target="_blank">
                          {labels.liveLabel}
                        </Link>
                      ) : null}
                      {repoHref ? (
                        <Link href={repoHref} target="_blank">
                          {labels.repoLabel}
                        </Link>
                      ) : null}
                    </HStack>
                  ) : null}
                </VStack>

                {images.length > 0 ? (
                  <VStack
                    as="section"
                    gap={0}
                    className="ps-gallery"
                    aria-label={labels.imagesLabel}
                  >
                    <Grid
                      columns={{ minWidth: 480, max: 2, repeat: "fit" }}
                      gap={3}
                      className="home-work-grid"
                    >
                      {images.map((src, index) => {
                        const spanFull =
                          spanFullByIndex.get(String(index)) === true;
                        const featured = index === 0;
                        const wide = spanFull && !featured;
                        const tile = (
                          <Center
                            key={src}
                            className={
                              featured || wide
                                ? "home-work-tile home-work-tile--featured ps-reveal-media"
                                : "home-work-tile ps-reveal-media"
                            }
                          >
                            <Center className="home-work-tile-media">
                              <NextImage
                                {...workPhotoProps(
                                  src,
                                  featured || wide
                                    ? "(max-width: 767px) 100vw, 1400px"
                                    : "(max-width: 767px) 100vw, 700px",
                                )}
                              />
                            </Center>
                          </Center>
                        );
                        return spanFull ? (
                          <GridSpan key={src} columns="full">
                            {tile}
                          </GridSpan>
                        ) : (
                          tile
                        );
                      })}
                    </Grid>
                  </VStack>
                ) : null}
              </VStack>
            ) : null}
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
