"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import type { WorkItem } from "@/content/work";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
  workSheetImages,
} from "@/content/work-sheet";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { CloseIcon } from "./overlay-icons";
import { ProjectSheetMedia } from "./project-sheet-media";

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

/**
 * Project sheet M10 (T-026, ADR-027; T-035.3–T-035.4) — Drawer vaul dari
 * bawah, skin `.ps-*`. Tile index + teaser Home membuka sheet, bukan live
 * URL. Event `rz-project-sheet-open`; `ps-lock` + Lenis pause; overlay asing
 * menutup sheet.
 */
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
  const [entered, setEntered] = useState(false);
  const titleId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  if (item && item !== visible) {
    setVisible(item);
  } else if (!item && visible && prefersReducedMotionNow()) {
    setVisible(null);
  }

  const sheet = visible ? getWorkSheet(locale, visible.id) : undefined;
  const images = visible ? workSheetImages(visible.id) : [];

  useEffect(() => {
    if (!isOpen) {
      setEntered(false);
      return;
    }
    const frame = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

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
    scrollRef.current?.scrollTo({ top: 0 });
    return () => {
      document.documentElement.classList.remove("ps-lock");
    };
  }, [isOpen, item?.id]);

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
    <Drawer
      open={isOpen}
      onOpenChange={(next) => {
        if (!next) {
          onClose();
        }
      }}
      direction="bottom"
      shouldScaleBackground={false}
      noBodyStyles
      handleOnly
      repositionInputs={false}
    >
      <DrawerContent
        id={PROJECT_SHEET_ID}
        showHandle={false}
        aria-describedby={undefined}
        aria-labelledby={titleId}
        overlayClassName={cn("ps-scrim", entered && "is-open")}
        overlayProps={{
          "data-overlay-scrim": "",
          "data-lenis-prevent": "",
        }}
        data-lenis-prevent=""
        className={cn(
          "ps-panel mt-0 max-h-none border-0 bg-transparent p-0 shadow-none",
          "data-[vaul-drawer-direction=bottom]:mt-0 data-[vaul-drawer-direction=bottom]:max-h-none data-[vaul-drawer-direction=bottom]:rounded-t-[0.75rem] data-[vaul-drawer-direction=bottom]:border-0",
          entered && "is-open",
        )}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          document.querySelector<HTMLElement>(".ps-close")?.focus();
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
        }}
        onTransitionEnd={(event) => {
          if (event.target !== event.currentTarget) {
            return;
          }
          if (!isOpen) {
            setVisible(null);
          }
        }}
      >
        <div ref={scrollRef} data-lenis-prevent="" className="ps-scroll">
          {visible && sheet ? (
            <div key={visible.id} className="ps-sheet-body">
              <div className="qi-header ps-header">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label={labels.close}
                  onClick={onClose}
                  className="qi-close ps-close"
                >
                  <CloseIcon />
                </Button>
                <p className="qi-title" aria-hidden="true">
                  {visible.name}
                </p>
                <span className="qi-header-spacer" aria-hidden="true" />
              </div>

              <section className="ps-info" aria-labelledby={titleId}>
                <DrawerTitle
                  id={titleId}
                  className="ps-info-title ps-reveal"
                >
                  {visible.name}
                </DrawerTitle>
                <div className="qi-cols ps-info-meta ps-reveal">
                  <div className="flex flex-col gap-3">
                    <p className="qi-label">{labels.servicesLabel}</p>
                    <ul className="qi-list">
                      {sheet.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="qi-label">{labels.locationLabel}</p>
                    <p>{sheet.locationOrCompany}</p>
                    <p className="qi-label">{labels.yearLabel}</p>
                    <p>{visible.year}</p>
                  </div>
                </div>
                <p className="qi-label ps-reveal">{labels.descriptionLabel}</p>
                <p className="qi-bio ps-description ps-reveal">
                  {sheet.description}
                </p>
                {liveHref || repoHref ? (
                  <div className="qi-links ps-reveal">
                    {liveHref ? (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.liveLabel}
                      </a>
                    ) : null}
                    {repoHref ? (
                      <a
                        href={repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.repoLabel}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </section>

              <ProjectSheetMedia
                key={visible.id}
                liveHref={liveHref}
                images={images}
                previewTitle={`${visible.name} — ${labels.previewLabel}`}
                previewLabel={labels.previewLabel}
                imagesLabel={labels.imagesLabel}
              />
            </div>
          ) : (
            <DrawerTitle id={titleId} className="sr-only">
              {labels.close}
            </DrawerTitle>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
