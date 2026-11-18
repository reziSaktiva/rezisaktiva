import { WORKFLOW_COPY } from "@/content/workflow";
import type { Locale } from "@/lib/locale";
import { SplitLines } from "./reveal";
import { WorkflowAdrLog } from "./workflow-adr-log";
import { WorkflowCompare } from "./workflow-compare";
import { WorkflowContactCta } from "./workflow-contact-cta";
import { WorkflowMethod } from "./workflow-method";
import { WorkflowRules } from "./workflow-rules";

/**
 * Workflow page in the Monolith design (T-082, ADR-054 point 5): page head,
 * two-pane compare, sticky rule cards, pinned method, ADR accordion, closing
 * call to action. Server component; motion lives in the client islands.
 */
export function WorkflowPage({ locale }: { locale: Locale }) {
  const copy = WORKFLOW_COPY[locale];

  return (
    <div className="monolith workflow-page flex flex-col" data-masthead="overlay">
      <section className="workflow-head flex flex-col px-gutter">
        <div className="flex flex-col gap-4">
          <p className="small">{copy.kicker}</p>
          <h1 className="display type-lg">
            <SplitLines lines={copy.headline} immediate delay={0.2} />
          </h1>
        </div>
        <p className="big">{copy.lede}</p>
      </section>

      <WorkflowCompare compare={copy.compare} />
      <WorkflowRules
        kicker={copy.principlesKicker}
        title={copy.principlesTitle}
        principles={copy.principles}
      />
      <WorkflowMethod
        kicker={copy.pipelineKicker}
        title={copy.pipelineTitle}
        note={copy.pipelineNote}
        steps={copy.steps}
      />
      <WorkflowAdrLog copy={copy} />

      <section className="workflow-head workflow-close flex flex-col px-gutter">
        <div className="flex flex-col gap-4">
          <p className="small">{copy.closeKicker}</p>
          <h2 className="display type-lg">
            <SplitLines lines={[copy.closeTitle]} />
          </h2>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="big">{copy.closeBody}</p>
          <WorkflowContactCta label={copy.closeCta} />
        </div>
      </section>
    </div>
  );
}
