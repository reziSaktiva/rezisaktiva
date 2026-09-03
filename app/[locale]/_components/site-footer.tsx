import { CONTACT_LINKS } from "@/content/contact";
import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { SiteFooterCta } from "./site-footer-cta";

/**
 * Footer = pita Contact (T-025.3, ADR-025): heading + CTA membuka modal
 * yang sama, lalu legal + satelit LinkedIn/GitHub. Bukan form baru;
 * tanpa WA/IG (ADR-014). Copy dari `HOME_COPY` (T-021.2) — tidak dikarang.
 * Shell server; tombol modal = island `SiteFooterCta` (T-028.1).
 *
 * T-033.6: Section/VStack/Heading/Text/Link Astryx → semantik + class
 * scoped; CTA = Button shadcn + Magnetic (T-036.1).
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
           * Bug ditemukan 2026-08-16 saat regression test PR theme flash (tidak
           * terkait ADR-021/tema — pre-existing, ada di `main` juga): setiap
           * kali ada state client di ancestor (mis. toggle tema) yang memicu
           * React men-diff ulang, nilai `new Date().getFullYear()` di Server
           * Component ini bisa dianggap mismatch oleh React dev — persis kasus
           * yang React sendiri sebut di pesan error hydration-nya ("Date.now()
           * or Math.random() which changes each time it's called").
           * `suppressHydrationWarning` adalah pola resmi React untuk nilai
           * seperti ini (react.dev/link/hydration-mismatch). Angka tahun
           * sendiri tidak berubah dalam satu sesi, jadi tidak ada dampak
           * visual — cuma hilangkan warning.
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
