import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import { HOME_COPY } from "@/content/home";
import { PERSON } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { NAV_ITEMS, NAV_LABELS, homeHref } from "@/lib/nav";
import { ContourField } from "./contour-field";
import { SiteFooterCta } from "./site-footer-cta";

/**
 * Footer (T-079.2, ADR-052 / ADR-054): dark contour-field band with the
 * contact headline, the "write to me" magnetic button (Contact modal, ADR-025),
 * the facts Quick Info used to carry (email, location, links; ADR-054),
 * a footer nav, and the giant wordmark. Server shell; the two client islands
 * are `ContourField` and `SiteFooterCta`.
 *
 * `site-footer` stays as the hook that the page transition clones and parks
 * (`page-transition.tsx`). The legacy rules on that class are unlayered, so
 * the layout overrides below use the important modifier until
 * `legacy-identity.css` is deleted (T-078 cutover map).
 */

const FOOTER_COPY: Record<
  Locale,
  { direct: string; elsewhere: string; location: string; now: string }
> = {
  id: {
    direct: "Kontak langsung",
    elsewhere: "Di tempat lain",
    location: "Bandung, Indonesia",
    now: "Saat ini di",
  },
  en: {
    direct: "Direct line",
    elsewhere: "Elsewhere",
    location: "Bandung, Indonesia",
    now: "Currently at",
  },
};

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const text = FOOTER_COPY[locale];
  const navLabels = NAV_LABELS[locale];

  const navLinks = [
    { key: "home", label: navLabels.home, href: homeHref(locale) },
    ...NAV_ITEMS.map((item) => ({
      key: item.key,
      label: navLabels[item.key],
      href: item.href(locale),
    })),
  ];

  return (
    <footer
      id="contact-cta"
      className="site-footer relative isolate z-1 flex w-full max-w-none! flex-col gap-12 overflow-hidden bg-ink! p-0! px-gutter! pt-24! pb-6! text-paper md:gap-20"
    >
      <ContourField tone="dark" className="-z-10" />

      <div className="flex flex-wrap items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <p className="small text-paper/50">{copy.contactLabel}</p>
          <h2 className="display type-lg max-w-[12ch]">{copy.contactTitle}</h2>
          <p className="copy text-paper/60">{copy.contactBody}</p>
        </div>
        <SiteFooterCta label={copy.contactCta} />
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <div className="flex flex-col gap-3 text-sm uppercase">
          <span className="small text-paper/50">{text.direct}</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-fit underline-offset-4 hover:underline focus-visible:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <span>{text.location}</span>
          <span className="small mt-3 text-paper/50">{text.elsewhere}</span>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline-offset-4 hover:underline focus-visible:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <nav
          aria-label="Footer"
          className="group/nav flex flex-col gap-1 md:items-end"
        >
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="display text-[clamp(40px,6vw,92px)] transition-[opacity,translate] duration-500 ease-monolith group-hover/nav:opacity-30 hover:opacity-100! hover:-translate-x-3 focus-visible:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <p
        aria-hidden="true"
        className="wordmark -ml-[0.02em] text-[31vw] whitespace-nowrap text-paper select-none"
      >
        {PERSON.name}
      </p>

      <div className="small flex flex-col justify-between gap-2 border-t border-rule-inv pt-4 text-paper/55 md:flex-row">
        <span>
          ©{" "}
          {/* Year in a Server Component: silence the hydration clock warning. */}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          {PERSON.alternateName}
        </span>
        <span>
          {text.now}{" "}
          <a
            href={PERSON.worksFor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline focus-visible:underline"
          >
            {PERSON.worksFor.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
