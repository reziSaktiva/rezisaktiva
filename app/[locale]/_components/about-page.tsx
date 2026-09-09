import NextImage from "next/image";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import { PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { Reveal, WordReveal } from "./home-motion";
import { ArrowUpIcon } from "./overlay-icons";
import { WorkplaceLine } from "./workplace-line";

/** Section About di Home (`#about`). Satu h1 tetap di hero Home. */
export function AboutSection({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];

  return (
    <section id="about" className="about-hero min-h-screen">
      <div className="about-hero-grid grid items-center">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div id="now" className="flex flex-col gap-2">
              <p className="home-kicker">
                {PERSON_WORKPLACE_COPY[locale].kicker}
              </p>
              <WorkplaceLine locale={locale} className="about-workplace" />
            </div>
          </Reveal>
          <h2 className="about-h1">
            <WordReveal words={copy.h1} />
          </h2>
          <Reveal>
            <p className="about-lead">{copy.lead}</p>
          </Reveal>
        </div>
        <Reveal>
          <div className="about-portrait-block flex flex-col items-center gap-4">
            <div className="about-portrait">
              <NextImage
                src={ABOUT_PORTRAIT_SRC}
                alt={copy.portraitAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                quality={90}
              />
            </div>
            <p className="about-portrait-caption">
              <ArrowUpIcon className="about-portrait-arrow" />
              {copy.portraitCaption}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
