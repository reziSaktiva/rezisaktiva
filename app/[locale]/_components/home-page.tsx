import { HOME_COPY } from "@/content/home";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { HomeHeroWallpaper } from "./home-hero-wallpaper";
import { HeroWords, Reveal } from "./home-motion";
import { ExternalSiteLink } from "./workplace-line";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <div className="home-page flex flex-col">
      <HomeHeroWallpaper />
      <section className="home-hero" id="hero">
        <div className="home-hero-inner flex flex-col justify-between">
          <h1 className="home-hero-heading">
            <HeroWords lines={copy.h1} />
          </h1>
          <div id="now" className="home-hero-now flex flex-col gap-8">
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
        </div>
      </section>
    </div>
  );
}
