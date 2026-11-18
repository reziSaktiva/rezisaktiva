import { HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { AboutSection } from "./about-page";
import { HomeHero } from "./home-hero";
import { HomeWork } from "./home-work";

/**
 * Home (ADR-054 point 4): hero, About, Work cards, footer. The footer comes
 * from the locale layout (ADR-041).
 */
export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <div className="home-page monolith flex flex-col" data-masthead="overlay">
      <HomeHero
        lines={copy.heroLines}
        lede={copy.lede}
        scrollCue={copy.scrollCue}
      />
      <AboutSection locale={locale} />
      <HomeWork locale={locale} />
    </div>
  );
}
