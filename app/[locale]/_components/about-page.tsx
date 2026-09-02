import NextImage from "next/image";
import { ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import type { Locale } from "@/lib/locale";
import { AboutOfferGrid } from "./about-offer-grid";
import { AboutProcess } from "./about-process";
import { RestActive, RestActiveCard } from "./about-rest-active";
import { Reveal, WordReveal } from "./home-motion";
import { StatusDot } from "./status-dot";
import { WorkplaceLine } from "./workplace-line";

function splitQuotedValue(value: string): { heading: string; body: string } {
  const match = value.match(/^[“"](.+?)[”"]\s*(.*)$/u);
  if (!match) {
    return { heading: value, body: "" };
  }
  return { heading: match[1], body: match[2] };
}

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
              <WorkplaceLine locale={locale} className="about-workplace" />
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

      <section className="about-section">
        <div className="flex flex-col gap-8">
          <Reveal>
            <h2 className="about-section-title">{copy.helpTitle}</h2>
          </Reveal>
          <AboutOfferGrid offers={copy.offers} />
        </div>
      </section>

      <section className="about-values-band">
        <div className="about-section about-values-inner flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="home-kicker">{copy.approachLabel}</p>
            </Reveal>
            <Reveal>
              <p className="about-approach">{copy.approachBody}</p>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="home-kicker">{copy.valuesLabel}</p>
            </Reveal>
            <div className="about-values-grid grid gap-4">
              {copy.values.map((value) => {
                const { heading, body } = splitQuotedValue(value);
                return (
                  <Reveal key={value}>
                    <RestActiveCard
                      variant="muted"
                      className="about-value-card"
                      label={heading}
                      rest={<h3 className="about-value-title">{heading}</h3>}
                      active={
                        body ? <p className="about-card-body">{body}</p> : null
                      }
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Reveal>
              <h2 className="about-section-title">{copy.processTitle}</h2>
            </Reveal>
            <Reveal>
              <p className="about-process-note">{copy.processNote}</p>
            </Reveal>
          </div>
          <AboutProcess steps={copy.steps} />
        </div>
      </section>
    </div>
  );
}
