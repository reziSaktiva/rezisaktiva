import { WORKFLOW_COPY } from "@/content/workflow";
import type { Locale } from "@/lib/locale";
import { Card } from "@/components/ui/card";
import { AboutOfferGrid } from "./about-offer-grid";
import { AboutProcess } from "./about-process";
import { Reveal, WordReveal } from "./home-motion";

function splitQuotedValue(value: string): { heading: string; body: string } {
  const match = value.match(/^[“"](.+?)[”"]\s*(.*)$/u);
  if (!match) {
    return { heading: value, body: "" };
  }
  return { heading: match[1], body: match[2] };
}

export function WorkflowPage({ locale }: { locale: Locale }) {
  const copy = WORKFLOW_COPY[locale];

  return (
    <div className="about-page flex flex-col">
      <section className="work-hero">
        <div className="home-container flex flex-col gap-8">
          <h1 className="work-h1">
            <WordReveal words={[copy.processTitle]} variant="compact" />
          </h1>
          <Reveal>
            <p className="work-lead">{copy.processNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="about-section">
        <div className="flex flex-col gap-8">
          <AboutProcess steps={copy.steps} />
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
                    <Card className="about-value-card gap-3 border-0 bg-muted p-6 text-base text-foreground shadow-none ring-0">
                      <div className="flex flex-col gap-3">
                        <h3 className="about-value-title">{heading}</h3>
                        {body ? <p className="about-card-body">{body}</p> : null}
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
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
    </div>
  );
}
