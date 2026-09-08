import { WORKFLOW_COPY } from "@/content/workflow";
import type { Locale } from "@/lib/locale";
import { Reveal } from "./home-motion";
import { WorkflowAdrVault } from "./workflow-adr-vault";
import { WorkflowHero } from "./workflow-hero";
import { WorkflowPipeline } from "./workflow-pipeline";
import { WorkflowPrinciples } from "./workflow-principles";

export function WorkflowPage({ locale }: { locale: Locale }) {
  const copy = WORKFLOW_COPY[locale];

  return (
    <div className="about-page wf-page flex flex-col">
      <WorkflowHero copy={copy} />
      <WorkflowPrinciples copy={copy} />
      <WorkflowPipeline copy={copy} />
      <WorkflowAdrVault copy={copy} />

      <section className="about-section wf-close">
        <div className="flex flex-col gap-3">
          <Reveal>
            <p className="home-kicker">{copy.closeKicker}</p>
          </Reveal>
          <Reveal>
            <h2 className="about-section-title">{copy.closeTitle}</h2>
          </Reveal>
          <Reveal>
            <p className="wf-section-note">{copy.closeBody}</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
