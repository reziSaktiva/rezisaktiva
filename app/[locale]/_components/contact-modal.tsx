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
import { cn } from "@/lib/utils";
import { CONTACT_COPY, CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import {
  CONTACT_HONEYPOT_FIELD,
  CONTACT_MESSAGE_MAX,
} from "@/lib/contact-mail";
import type { Locale } from "@/lib/locale";
import { Magnetic } from "./home-motion";
import {
  ArrowRightIcon,
  CloseIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./overlay-icons";
import { useOverlayDocumentLock, useOverlayPresence } from "./use-overlay-lock";

/**
 * Contact modal global (T-016.2, ADR-019; T-035.1, T-036.3; T-041.1) —
 * Dialog shadcn + skin `.ct-*` (kartu elevated token, keluarga hamburger).
 * Enter/exit = transisi CSS token + `forceMount` hanya selama overlay
 * masih `present` (bukan spring). Bukan route `/contact`.
 *
 * Form: POST /api/contact (ADR-047). "Terkirim" hanya setelah server
 * menerima. mailto: + salin tetap cadangan yang terlihat.
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
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );
  const [copied, setCopied] = useState(false);
  const copyResetTimer = useRef<number>(0);

  const handleClose = useCallback(() => {
    window.clearTimeout(copyResetTimer.current);
    setCopied(false);
    setStatus("idle");
    setHoneypot("");
    close();
  }, [close]);

  useOverlayDocumentLock(isOpen, "ct-lock", "--duration-ct-panel", 400);
  const present = useOverlayPresence(isOpen, "--duration-ct-panel", 400);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lastFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (status === "sending") {
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          [CONTACT_HONEYPOT_FIELD]: honeypot,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;
      if (response.ok && data?.ok === true) {
        setStatus("sent");
        setMessage("");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
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
      {present ? (
        <DialogContent
          id="ct-panel"
          forceMount
          showCloseButton={false}
          aria-describedby={undefined}
          aria-labelledby={titleId}
          overlay={
            <DialogOverlay
              forceMount
              className="ct-scrim"
              data-ct-scrim=""
              data-overlay-scrim=""
              data-lenis-prevent=""
            />
          }
          data-lenis-prevent=""
          className="ct-panel max-w-none translate-none gap-0 text-inherit shadow-none ring-0 sm:max-w-none"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            document.getElementById(emailId)?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
          }}
        >
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
                <input
                  className="ct-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  name={CONTACT_HONEYPOT_FIELD}
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
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
                      maxLength={254}
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (status === "failed" || status === "sent") {
                          setStatus("idle");
                        }
                      }}
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
                      maxLength={CONTACT_MESSAGE_MAX}
                      value={message}
                      onChange={(event) => {
                        setMessage(event.target.value);
                        if (status === "failed" || status === "sent") {
                          setStatus("idle");
                        }
                      }}
                    />
                  </Field>
                  <Magnetic>
                    <Button
                      type="submit"
                      className="ct-submit"
                      disabled={status === "sending"}
                      aria-busy={status === "sending"}
                    >
                      <span>
                        {status === "sending"
                          ? copy.sending
                          : status === "sent"
                            ? copy.sent
                            : copy.submit}
                      </span>
                      <span className="ct-submit-icon" aria-hidden="true">
                        <ArrowRightIcon />
                      </span>
                    </Button>
                  </Magnetic>
                </FieldGroup>
                {status === "failed" ? (
                  <p className="ct-form-note" role="status">
                    {copy.failed}
                  </p>
                ) : null}
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
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
