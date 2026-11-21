import NextImage from "next/image";
import { ABOUT_PORTRAIT_SRC } from "@/content/about";
import { CONTACT_COPY, CONTACT_EMAIL, CONTACT_LINKS } from "@/content/contact";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { ContactForm } from "./contact-form";
import { SplitLines } from "./reveal";

/**
 * Contact page (T-083.1, ADR-052 point 5): sticky portrait beside an info
 * panel, then the project form. Reference: `design-mockups/contact.html` (v5,
 * not pixel-exact). Server shell; the form and reveals are client islands.
 * The portrait is the About placeholder until Boss Rezi supplies a photo.
 */
export function ContactPage({ locale }: { locale: Locale }) {
  const copy = CONTACT_COPY[locale];
  const newTab = PERSON_WORKPLACE_COPY[locale].newTab;

  return (
    <div className="monolith contact-page flex flex-col">
      <section className="contact-intro" aria-labelledby="contact-title">
        <div className="contact-portrait">
          <NextImage
            src={ABOUT_PORTRAIT_SRC}
            alt={copy.portraitAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            quality={90}
            className="object-cover grayscale"
          />
        </div>

        <div className="contact-panel flex flex-col">
          <div className="flex flex-col gap-6">
            <h1 id="contact-title" className="display contact-title">
              <SplitLines lines={copy.title} immediate delay={0.2} />
            </h1>
            {copy.intro.map((paragraph) => (
              <p key={paragraph} className="copy contact-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="contact-rows flex flex-col">
            <div className="contact-row">
              <dt className="contact-key">{copy.basedInLabel}</dt>
              <dd className="contact-value">
                {copy.basedIn.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div className="contact-row">
              <dt className="contact-key">{copy.emailLabel}</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-value contact-link contact-email"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="contact-row">
              <dt className="contact-key">{copy.elsewhereLabel}</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value contact-link"
                  >
                    {link.label}
                    <span className="sr-only"> {newTab}</span>
                  </a>
                ))}
              </dd>
            </div>
            <div className="contact-row">
              <dt className="contact-key">{copy.nowLabel}</dt>
              <dd>
                <a
                  href={PERSON.worksFor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value contact-link"
                >
                  {PERSON.worksFor.name}
                  <span className="sr-only"> {newTab}</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="form"
        className="contact-form-band"
        aria-labelledby="contact-form-title"
      >
        <h2 id="contact-form-title" className="display contact-form-title">
          <SplitLines lines={copy.formTitle} />
        </h2>
        <div className="contact-form-side flex flex-col gap-4">
          {copy.formIntro.map((paragraph) => (
            <p key={paragraph} className="copy">
              {paragraph}
            </p>
          ))}
        </div>
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}
