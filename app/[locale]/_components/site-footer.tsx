import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { CONTACT_SOCIALS } from "@/content/contact";
import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { SiteFooterCta } from "./site-footer-cta";

/**
 * Footer = pita Contact (T-025.3, ADR-025): heading + CTA membuka modal
 * yang sama, lalu legal + satelit LinkedIn/GitHub. Bukan form baru;
 * tanpa WA/IG (ADR-014). Copy dari `HOME_COPY` (T-021.2) — tidak dikarang.
 * Shell server; tombol modal = island `SiteFooterCta` (T-028.1).
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <Section
      variant="transparent"
      padding={0}
      className="site-footer"
      id="contact-cta"
    >
      <VStack className="site-footer-inner" gap={10}>
        <VStack className="site-footer-band" gap={6}>
          <Text type="label" color="secondary" className="home-kicker">
            {copy.contactLabel}
          </Text>
          <Heading level={2} className="home-contact-title">
            {copy.contactTitle}
          </Heading>
          <Text color="secondary" display="block" className="home-contact-body">
            {copy.contactBody}
          </Text>
          <SiteFooterCta label={copy.contactCta} />
        </VStack>

        <HStack
          justify="between"
          align="center"
          gap={4}
          wrap="wrap"
          className="site-footer-legal"
        >
          {/*
           * Bug ditemukan 2026-08-16 saat regression test PR theme flash (tidak
           * terkait ADR-021/tema — pre-existing, ada di `main` juga): setiap
           * kali ada state client di ancestor (mis. toggle tema) yang memicu
           * React men-diff ulang, nilai `new Date().getFullYear()` di Server
           * Component ini bisa dianggap mismatch oleh React dev — persis kasus
           * yang React sendiri sebut di pesan error hydration-nya ("Date.now()
           * or Math.random() which changes each time it's called").
           * `suppressHydrationWarning` adalah pola resmi React untuk nilai
           * seperti ini (react.dev/link/hydration-mismatch); dipasang di
           * `<span>` pembungkus (bukan prop `Text` — tipe `TextProps` Astryx
           * belum expose `suppressHydrationWarning` walau runtime-nya
           * meneruskan lewat `...props`, jadi dibungkus manual di sini supaya
           * tidak perlu `as any`). Angka tahun sendiri tidak berubah dalam
           * satu sesi, jadi tidak ada dampak visual — cuma hilangkan warning.
           */}
          <Text color="secondary" size="sm">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            rezisaktiva
          </Text>
          <HStack gap={4} align="center">
            <Link
              href={CONTACT_SOCIALS.linkedin.href}
              isExternalLink
              color="secondary"
              size="sm"
            >
              {CONTACT_SOCIALS.linkedin.label}
            </Link>
            <Link
              href={CONTACT_SOCIALS.github.href}
              isExternalLink
              color="secondary"
              size="sm"
            >
              {CONTACT_SOCIALS.github.label}
            </Link>
          </HStack>
        </HStack>
      </VStack>
    </Section>
  );
}
