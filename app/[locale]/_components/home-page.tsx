import NextImage from "next/image";
import { HERO_PORTRAIT_SRC, HOME_COPY } from "@/content/home";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { projectsHref } from "@/lib/site-url";
import { HeroWords, Reveal } from "./home-motion";
import { HomeWorkAllLink } from "./home-work-all-link";
import { HomeWorkTeasers } from "./home-work-teasers";
import { ExternalSiteLink } from "./workplace-line";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const workHref = projectsHref(locale);

  return (
    <div className="home-page flex flex-col">
      <section className="home-hero" id="hero">
        <div className="home-hero-cutout" aria-hidden="true">
          <NextImage
            src={HERO_PORTRAIT_SRC}
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 70vw, 38vw"
          />
        </div>
        <div className="home-hero-inner flex flex-col justify-between">
          <h1 className="home-hero-heading">
            <HeroWords lines={copy.h1} />
          </h1>
        </div>
      </section>

      <section className="home-section home-section--now" id="now">
        <div className="home-container flex flex-col gap-8">
          <Reveal>
            <p className="home-kicker">{copy.nowLabel}</p>
          </Reveal>
          <Reveal>
            <h2 className="home-now-title">
              {PERSON_WORKPLACE_COPY[locale].prefix}{" "}
              <ExternalSiteLink
                href={PERSON.worksFor.url}
                newTabLabel={PERSON_WORKPLACE_COPY[locale].newTab}
              >
                {PERSON.worksFor.name}
              </ExternalSiteLink>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="home-section home-section--proof" id="credibility">
        <div className="home-container flex flex-col gap-8">
          <Reveal>
            <p className="home-kicker">{copy.buktiLabel}</p>
          </Reveal>
          <Reveal>
            <p className="home-proof-body">
              {copy.buktiEmphasis}
              {copy.buktiRest}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-section home-section--work" id="work">
        <div className="home-container flex flex-col gap-8">
          <Reveal axis="horizontal" className="home-work-head">
            <div className="flex flex-col gap-3">
              <p className="home-kicker">{copy.workLabel}</p>
              <h2 className="home-work-title">{copy.workTitle}</h2>
            </div>
            <HomeWorkAllLink href={workHref} label={copy.workAll} />
          </Reveal>

          <HomeWorkTeasers locale={locale} teasers={copy.teasers} />
        </div>
      </section>
    </div>
  );
}
