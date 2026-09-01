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
import {
  CONTACT_COPY,
  CONTACT_EMAIL,
  CONTACT_LINKS,
} from "@/content/contact";
import { trapTabKey } from "@/lib/focus-trap";
import type { Locale } from "@/lib/locale";
import { Button } from "@astryxdesign/core/Button";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { Magnetic } from "./home-motion";
import {
  ArrowRightIcon,
  CloseIcon,
  CopyIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./overlay-icons";

/**
 * Contact modal global (T-016.2, ADR-019) — visual dari
 * `design-mockups/shared.js` `mountContactModal()` + `shared.css` `.ct-*`.
 * Astryx Dialog tidak dipakai: header wajib Dialog + permukaan tema tidak
 * cocok kartu dark-ink mockup (tema-independen). Overlay custom + token,
 * pola chrome T-013 (compiler StyleX belum wired).
 *
 * Form: validasi client + state "Terkirim" seperti mockup; tidak ada backend
 * (M8 Could). mailto: tetap primer lewat tautan email.
 */
export function ContactModal({ locale }: { locale: Locale }) {
  const { isOpen, close } = useContactModal();
  const copy = CONTACT_COPY[locale];
  const titleId = useId();
  const emailId = useId();
  const messageId = useId();
  const panelRef = useRef<HTMLElement>(null);
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
    document.getElementById(emailId)?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }
      if (panelRef.current) {
        trapTabKey(event, panelRef.current);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("ct-lock");
    };
  }, [isOpen, handleClose, emailId]);

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
    <>
      <VStack
        data-ct-scrim=""
        data-overlay-scrim=""
        data-lenis-prevent=""
        className={isOpen ? "ct-scrim is-open" : "ct-scrim"}
        onClick={handleClose}
        aria-hidden={!isOpen}
      />
      <VStack
        data-lenis-prevent=""
        className={isOpen ? "ct-wrap is-open" : "ct-wrap"}
      >
        <VStack
          ref={panelRef}
          id="ct-panel"
          className="ct-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-hidden={!isOpen}
        >
          <Button
            label={copy.close}
            variant="ghost"
            size="sm"
            isIconOnly
            icon={<Icon icon={CloseIcon} />}
            onClick={handleClose}
            className="ct-close"
          />
          <Grid columns={2} gap={8} className="ct-grid" align="start">
            <VStack>
              <Heading level={2} id={titleId} className="ct-title">
                <Text display="inline" className="ct-title-lead">
                  {copy.titleLead}
                </Text>{" "}
                <Text display="inline" className="ct-accent">
                  {copy.titleAccent}
                </Text>
              </Heading>
              <form className="ct-form" noValidate onSubmit={handleSubmit}>
                <Text
                  as="label"
                  display="block"
                  className="ct-label"
                  {...{ htmlFor: emailId }}
                >
                  {copy.emailLabel}
                </Text>
                <input
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
                <Text
                  as="label"
                  display="block"
                  className="ct-label"
                  {...{ htmlFor: messageId }}
                >
                  {copy.messageLabel}
                </Text>
                <textarea
                  id={messageId}
                  name="message"
                  className="ct-textarea"
                  placeholder={copy.messagePlaceholder}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Magnetic>
                  <button type="submit" className="ct-submit">
                    <span>{sent ? copy.sent : copy.submit}</span>
                    <span className="ct-submit-icon" aria-hidden="true">
                      <Icon icon={ArrowRightIcon} />
                    </span>
                  </button>
                </Magnetic>
              </form>
            </VStack>
            <VStack>
              <Text display="block" className="ct-label-caps">
                {copy.detailsLabel}
              </Text>
              <HStack gap={2} align="center" className="ct-email-row">
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="ct-email-link"
                >
                  {CONTACT_EMAIL}
                </Link>
                <Button
                  label={copied ? copy.copied : copy.copyLabel}
                  variant="ghost"
                  size="sm"
                  isIconOnly
                  icon={<Icon icon={CopyIcon} />}
                  onClick={() => {
                    void handleCopy();
                  }}
                  className={copied ? "ct-copy is-copied" : "ct-copy"}
                />
              </HStack>
              <Text display="block" className="ct-label-caps">
                {copy.socialsLabel}
              </Text>
              <HStack gap={2} className="ct-socials">
                {CONTACT_LINKS.map((link) => {
                  const icon =
                    link.id === "linkedin"
                      ? LinkedInIcon
                      : link.id === "github"
                        ? GitHubIcon
                        : undefined;
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      aria-label={link.label}
                    >
                      {icon ? <Icon icon={icon} /> : link.label}
                    </Link>
                  );
                })}
              </HStack>
              <HStack gap={2} align="center" className="ct-availability">
                <VStack className="avail-dot" aria-hidden="true" />
                <Text className="ct-availability-text">{copy.availability}</Text>
              </HStack>
            </VStack>
          </Grid>
        </VStack>
      </VStack>
    </>
  );
}
