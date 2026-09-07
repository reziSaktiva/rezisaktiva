import NextLink from "next/link";
import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { workflowHref } from "@/lib/site-url";
import { HomeHeroWallpaper } from "./home-hero-wallpaper";
import { HeroWords, Reveal } from "./home-motion";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <div className="home-page flex flex-col">
      <HomeHeroWallpaper />
      <section className="home-hero" id="hero">
        <div className="home-hero-inner flex flex-col justify-end">
          <h1 className="home-hero-heading">
            <HeroWords lines={copy.h1} />
          </h1>
          <div className="home-hero-copy">
            <Reveal>
              <p className="home-hero-lede">
                {copy.lede}{" "}
                <NextLink
                  href={workflowHref(locale)}
                  className="home-hero-lede-link"
                >
                  {copy.ledeCta}
                </NextLink>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
