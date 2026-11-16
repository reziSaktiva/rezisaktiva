import { CONTACT_LINKS } from "@/content/contact";
import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { SiteFooterCta } from "./site-footer-cta";

/**
 * Footer = Contact ribbon (T-025.3, ADR-025): heading + CTA opens the same
 * modal, then legal + LinkedIn/GitHub satellite links. Not a new form;
 * no WA/IG (ADR-014). Copy from `HOME_COPY` (T-021.2) — not invented.
 * Server shell; modal button = `SiteFooterCta` island (T-028.1).
 *
 * T-033.6: Section/VStack/Heading/Text/Link Astryx → semantic markup + scoped
 * classes; CTA = shadcn Button + Magnetic (T-036.1).
 * T-040.5: ghost ribbon (no tray); flat text CTA + arrow.
 * ADR-041: ribbon on all routes including Home (ADR-033 superseded).
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <footer className="site-footer" id="contact-cta">
      <div className="site-footer-inner">
        <div className="site-footer-band">
          <p className="home-kicker">{copy.contactLabel}</p>
          <h2 className="home-contact-title">{copy.contactTitle}</h2>
          <p className="home-contact-body">{copy.contactBody}</p>
          <SiteFooterCta label={copy.contactCta} />
        </div>

        <div className="site-footer-legal">
          {/*
           * Bug found 2026-08-16 during PR theme-flash regression (unrelated to
           * ADR-021/theme — pre-existing, on `main` too): whenever ancestor
           * client state (e.g. theme toggle) makes React re-diff, `new Date().getFullYear()`
           * in this Server Component can look like a mismatch in React dev — the case
           * React cites in hydration errors ("Date.now() or Math.random() which
           * changes each time it's called").
           * `suppressHydrationWarning` is the official React pattern for values
           * like this (react.dev/link/hydration-mismatch). The year itself does not
           * change within a session, so there is no visual impact — only silences the warning.
           */}
          <p className="site-footer-legal-copy">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            rezisaktiva
          </p>
          <div className="site-footer-satellites">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
