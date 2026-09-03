"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { CONTACT_COPY, CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import type { Locale } from "@/lib/locale";
import { Magnetic } from "./home-motion";
import { DialogPanelMotion, OverlayScrimMotion } from "./overlay-motion";
import {
  ArrowRightIcon,
  CloseIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./overlay-icons";

/**
 * Contact modal global (T-016.2, ADR-019; T-035.1, T-036.3) — Dialog shadcn +
 * skin `.ct-*` (kartu dark-ink). Enter/exit = `AnimatePresence` + tween token,
 * bukan spring. Bukan route `/contact`.
 *
 * Form: validasi client + state "Terkirim"; tidak ada backend (M8 Could).
 * mailto: tetap primer lewat tautan email.
 */
export function ContactModal({ locale }: { locale: Locale }) {
  const { isOpen, close } = useContactModal();
  const copy = CONTACT_COPY[locale];
  const titleId = useId();
  const emailId = useId();
  const messageId = useId();
  const lastFocus = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyResetTimer = useRef<number>(0);
  const sentResetTimer = useRef<number>(0);

  const handleClose = useCallback(() => {
    window.clearTimeout(copyResetTimer.current);
    window.clearTimeout(sentResetTimer.current);
    setCopied(false);
    setSent(false);
    close();
  }, [close]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lastFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.documentElement.classList.add("ct-lock");
    return () => {
      document.documentElement.classList.remove("ct-lock");
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

  useEffect(() => {
    return () => {
      window.clearTimeout(copyResetTimer.current);
      window.clearTimeout(sentResetTimer.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      return;
    }
    setCopied(true);
    window.clearTimeout(copyResetTimer.current);
    copyResetTimer.current = window.setTimeout(() => setCopied(false), 1600);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    window.clearTimeout(sentResetTimer.current);
    sentResetTimer.current = window.setTimeout(() => setSent(false), 2200);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(next) => {
        if (!next) {
          handleClose();
        }
      }}
    >
      <AnimatePresence>
        {isOpen ? (
          <DialogContent
            key="ct-dialog"
            id="ct-panel"
            forceMount
            asChild
            showCloseButton={false}
            aria-describedby={undefined}
            aria-labelledby={titleId}
            overlay={
              <DialogOverlay
                asChild
                forceMount
                className="ct-scrim"
                data-ct-scrim=""
                data-overlay-scrim=""
                data-lenis-prevent=""
              >
                <OverlayScrimMotion kind="contact" />
              </DialogOverlay>
            }
            data-lenis-prevent=""
            className="ct-panel max-w-none gap-0 text-inherit shadow-none ring-0 sm:max-w-none"
            onOpenAutoFocus={(event) => {
              event.preventDefault();
              document.getElementById(emailId)?.focus();
            }}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
            }}
          >
            <DialogPanelMotion>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={copy.close}
          onClick={handleClose}
          className="ct-close"
        >
          <CloseIcon />
        </Button>
        <div className="ct-grid">
          <div>
            <DialogTitle id={titleId} className="ct-title">
              <span className="ct-title-lead">{copy.titleLead}</span>{" "}
              <span className="ct-accent">{copy.titleAccent}</span>
            </DialogTitle>
            <form className="ct-form" noValidate onSubmit={handleSubmit}>
              <FieldGroup className="gap-0">
                <Field className="gap-0">
                  <FieldLabel htmlFor={emailId} className="ct-label">
                    {copy.emailLabel}
                  </FieldLabel>
                  <Input
                    id={emailId}
                    name="email"
                    type="email"
                    className="ct-input"
                    placeholder={copy.emailPlaceholder}
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />
                </Field>
                <Field className="gap-0">
                  <FieldLabel htmlFor={messageId} className="ct-label">
                    {copy.messageLabel}
                  </FieldLabel>
                  <Textarea
                    id={messageId}
                    name="message"
                    className="ct-textarea"
                    placeholder={copy.messagePlaceholder}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Field>
                <Magnetic>
                  <Button type="submit" className="ct-submit">
                    <span>{sent ? copy.sent : copy.submit}</span>
                    <span className="ct-submit-icon" aria-hidden="true">
                      <ArrowRightIcon />
                    </span>
                  </Button>
                </Magnetic>
              </FieldGroup>
            </form>
          </div>
          <div>
            <p className="ct-label-caps">{copy.detailsLabel}</p>
            <div className="ct-email-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="ct-email-link">
                {CONTACT_EMAIL}
              </a>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={copied ? copy.copied : copy.copyLabel}
                onClick={() => {
                  void handleCopy();
                }}
                className={cn("ct-copy", copied && "is-copied")}
              >
                <CopyIcon />
              </Button>
            </div>
            <p className="ct-label-caps">{copy.socialsLabel}</p>
            <div className="ct-socials">
              {CONTACT_LINKS.map((link) => {
                const Icon =
                  link.id === "linkedin"
                    ? LinkedInIcon
                    : link.id === "github"
                      ? GitHubIcon
                      : undefined;
                return (
                  <a key={link.id} href={link.href} aria-label={link.label}>
                    {Icon ? <Icon /> : link.label}
                  </a>
                );
              })}
            </div>
            <div className="ct-availability">
              <span className="avail-dot" aria-hidden="true" />
              <p className="ct-availability-text">{copy.availability}</p>
            </div>
          </div>
        </div>
            </DialogPanelMotion>
          </DialogContent>
        ) : null}
      </AnimatePresence>
    </Dialog>
  );
}
