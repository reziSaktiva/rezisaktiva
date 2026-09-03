"use client";

import { useEffect, useId, useRef, useState } from "react";
import NextLink from "next/link";
import { CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import { QUICK_INFO_COPY } from "@/content/quick-info";
import { WORK_ITEMS } from "@/content/work";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Locale } from "@/lib/locale";
import { projectsHref } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import { CloseIcon } from "./overlay-icons";
import { WorkplaceLine } from "./workplace-line";

/**
 * Quick Info overlay (T-020.2, ADR-022; T-035.2) — tab tepi kanan → Sheet.
 * Bukan route; bukan form Contact. Tetap di Work index (ADR-027); sheet M10 overlay terpisah.
 */
export function QuickInfo({ locale }: { locale: Locale }) {
  const copy = QUICK_INFO_COPY[locale];
  const works = WORK_ITEMS[locale];
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
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
    return () => {
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
      <Button
        type="button"
        variant="ghost"
        onClick={open}
        aria-expanded={isOpen}
        aria-controls="qi-panel"
        className="qi-tab"
      >
        <span>{copy.tab}</span>
      </Button>
      <Sheet
        open={isOpen}
        onOpenChange={(next) => {
          if (next) {
            open();
          } else {
            close();
          }
        }}
      >
        <SheetContent
          id="qi-panel"
          side="right"
          forceMount
          showCloseButton={false}
          aria-describedby={undefined}
          aria-labelledby={titleId}
          overlayClassName={cn("qi-scrim", isOpen && "is-open")}
          overlayProps={{
            "data-overlay-scrim": "",
            "data-lenis-prevent": "",
          }}
          data-lenis-prevent=""
          className={cn(
            "qi-panel gap-0 border-0 p-0 shadow-none sm:max-w-none",
            "data-[side=right]:w-full data-[side=right]:sm:max-w-none",
            "data-open:animate-none data-closed:animate-none",
            "data-[side=right]:data-open:slide-in-from-right-0 data-[side=right]:data-closed:slide-out-to-right-0",
            isOpen && "is-open",
          )}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            closeBtnRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
          <SheetHeader className="qi-header gap-0 p-0">
            <Button
              ref={closeBtnRef}
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={copy.close}
              onClick={close}
              className="qi-close"
            >
              <CloseIcon />
            </Button>
            <SheetTitle id={titleId} className="qi-title">
              {copy.title}
            </SheetTitle>
            <span className="qi-header-spacer" aria-hidden="true" />
          </SheetHeader>
          <div className="qi-body">
            <div className="qi-intro">
              <p className="qi-bio">{copy.bio}</p>
              <WorkplaceLine locale={locale} className="qi-workplace" />
            </div>
            <div className="qi-cols">
              <div>
                <p className="qi-label">{copy.servicesLabel}</p>
                <ul className="qi-list">
                  {copy.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="qi-label">{copy.toolsLabel}</p>
                <ul className="qi-list">
                  {copy.tools.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="qi-label">{copy.worksLabel}</p>
            <div className="qi-index">
              {works.map((item) => (
                <NextLink
                  key={item.id}
                  href={workHref}
                  className="qi-index-link"
                >
                  <span>{item.name}</span>
                  <span className="qi-year">[{item.year}]</span>
                </NextLink>
              ))}
            </div>
            <p className="qi-label">{copy.emailLabel}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="qi-email cta-underline"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="qi-label">{copy.linksLabel}</p>
            <div className="qi-links">
              {CONTACT_LINKS.map((link) => (
                <a key={link.id} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
