import NextImage from "next/image";
import { ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import { PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { RestActive } from "./about-rest-active";
import { Reveal, WordReveal } from "./home-motion";
import { StatusDot } from "./status-dot";
import { WorkplaceLine } from "./workplace-line";

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];

  return (
    <div className="about-page flex flex-col">
      <section className="about-hero">
        <div className="about-hero-grid grid items-center">
          <div className="flex flex-col gap-4">
            <Reveal>
              <Badge className="about-availability-badge">
                <StatusDot
                  label={copy.availabilityBadge}
                  isPulsing
                  aria-hidden
                />
                {copy.availabilityBadge}
              </Badge>
            </Reveal>
            <Reveal>
              <div id="now" className="flex flex-col gap-2">
                <p className="home-kicker">
                  {PERSON_WORKPLACE_COPY[locale].kicker}
                </p>
                <WorkplaceLine locale={locale} className="about-workplace" />
              </div>
            </Reveal>
            <h1 className="about-h1">
              <WordReveal words={copy.h1} />
            </h1>
            <Reveal>
              <RestActive
                className="about-lead"
                label={copy.lead2}
                rest={
                  <div className="flex flex-col gap-3">
                    <p className="about-lead-rest">{copy.lead1}</p>
                    <span className="about-lead-more flex" aria-hidden="true">
                      <ChevronDown size={16} />
                    </span>
                  </div>
                }
                active={<p>{copy.lead2}</p>}
              />
            </Reveal>
          </div>
          <Reveal>
            <AspectRatio ratio={4 / 5} className="about-portrait">
              <NextImage
                src={ABOUT_PORTRAIT_SRC}
                alt={copy.portraitAlt}
                fill
                sizes="(max-width: 1023px) 90vw, 45vw"
                priority
              />
            </AspectRatio>
          </Reveal>
        </div>
      </section>

      <section className="about-section" id="proof">
        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="home-kicker">{copy.buktiLabel}</p>
          </Reveal>
          <Reveal>
            <p className="about-proof-body">
              {copy.buktiEmphasis}
              {copy.buktiRest}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
