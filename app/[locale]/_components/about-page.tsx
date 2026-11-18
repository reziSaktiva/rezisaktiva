import NextImage from "next/image";
import NextLink from "next/link";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import { PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { workflowHref } from "@/lib/site-url";
import { ClipReveal, ScrubWords, SplitLines } from "./reveal";
import { WorkplaceLine } from "./workplace-line";

/**
 * About section on Home (`#about`, ADR-040; T-080.2, ADR-052). Portrait with
 * the clip reveal (no caption, Boss Rezi 2026-11-18), `h2` title lines, scrubbed
 * lead, supporting copy, the Now line (`#now`, ADR-037) and the Workflow link.
 * Server shell; the reveals are client islands. The only `h1` is the hero's.
 */
export function AboutSection({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];
  const now = PERSON_WORKPLACE_COPY[locale];

  return (
    <section id="about" aria-labelledby="about-title" className="home-about">
      <div className="home-about-media flex flex-col">
        <ClipReveal className="home-about-portrait">
          <NextImage
            src={ABOUT_PORTRAIT_SRC}
            alt={copy.portraitAlt}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            quality={90}
            className="object-cover grayscale"
          />
        </ClipReveal>
      </div>

      <div className="home-about-text flex flex-col">
        <h2 id="about-title" className="display type-lg">
          <SplitLines lines={copy.title} />
        </h2>
        <ScrubWords text={copy.lead} className="big home-about-lead" />
      </div>

      <div className="home-about-small flex flex-col items-start gap-7">
        <p className="copy">{copy.body}</p>
        <div id="now" className="flex flex-col gap-1">
          <p className="small">{now.kicker}</p>
          <WorkplaceLine locale={locale} />
        </div>
        <NextLink href={workflowHref(locale)} className="home-pill">
          <span>{copy.workflowCta} →</span>
        </NextLink>
      </div>
    </section>
  );
}
