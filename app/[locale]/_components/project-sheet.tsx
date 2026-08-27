"use client";

import { useEffect, useId, useRef, useState } from "react";
import NextImage from "next/image";
import { Button } from "@astryxdesign/core/Button";
import { Center } from "@astryxdesign/core/Center";
import { Grid } from "@astryxdesign/core/Grid";
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
import { CloseIcon } from "./overlay-icons";

function isRepoUrl(url: string): boolean {
  return url.includes("github.com");
}

export const PROJECT_SHEET_ID = "ps-panel";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function prefersReducedMotionNow(): boolean {
  return typeof window !== "undefined" && prefersReducedMotion();
}

/**
 * Pin the gallery and convert remaining vertical scroll into a horizontal
 * shift — same idea as karolinahess.com “Recent works”.
 */
function syncGalleryPin(
  panel: HTMLElement,
  section: HTMLElement,
  pin: HTMLElement,
  track: HTMLElement,
): void {
  const header = panel.querySelector<HTMLElement>(".ps-header");
  const headerH = header?.offsetHeight ?? 0;
  panel.style.setProperty("--ps-header-h", `${headerH}px`);
  pin.style.height = "";

  if (prefersReducedMotion()) {
    section.style.height = "";
    track.style.transform = "";
    pin.style.height = "";
    return;
  }

  const overflow = Math.max(0, track.scrollWidth - pin.clientWidth);
  section.style.height = `${pin.clientHeight + overflow}px`;

  const start = section.offsetTop;
  const end = start + section.offsetHeight - pin.clientHeight;
  const range = Math.max(1, end - start);
  const progress = Math.min(1, Math.max(0, (panel.scrollTop - start) / range));
  track.style.transform = `translate3d(${-overflow * progress}px, 0, 0)`;
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
  const galleryRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  if (item && item !== visible) {
    setVisible(item);
  } else if (!item && visible && prefersReducedMotionNow()) {
    setVisible(null);
  }

  const sheet = visible ? getWorkSheet(locale, visible.id) : undefined;
  const images = visible ? workSheetImages(visible.imageSrc, visible.id) : [];

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

  useEffect(() => {
    if (!isOpen || visible?.id == null) {
      return;
    }
    const scroll = scrollRef.current;
    const section = galleryRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!scroll || !section || !pin || !track) {
      return;
    }

    let frame = 0;
    const sync = () => {
      syncGalleryPin(scroll, section, pin, track);
    };
    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        sync();
      });
    };

    sync();
    scroll.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    const observer = new ResizeObserver(sync);
    observer.observe(scroll);
    observer.observe(track);
    const imagesInTrack = track.querySelectorAll("img");
    imagesInTrack.forEach((image) => image.addEventListener("load", sync));

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      scroll.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      observer.disconnect();
      imagesInTrack.forEach((image) => image.removeEventListener("load", sync));
    };
  }, [isOpen, visible?.id, images.length]);

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

                <VStack
                  ref={galleryRef}
                  as="section"
                  gap={0}
                  className="ps-gallery"
                  aria-label={labels.imagesLabel}
                >
                  <VStack
                    ref={pinRef}
                    className="ps-gallery-pin"
                    gap={0}
                    justify="center"
                  >
                    <HStack
                      ref={trackRef}
                      className="ps-gallery-track"
                      gap={6}
                      align="center"
                      wrap="nowrap"
                    >
                      {images.map((src, index) => (
                        <Center
                          key={`${src}-${index}`}
                          className="ps-gallery-item ps-reveal-media"
                        >
                          <NextImage
                            src={src}
                            alt=""
                            fill
                            sizes="(max-width: 767px) 85vw, 38rem"
                          />
                        </Center>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </VStack>
            ) : null}
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
