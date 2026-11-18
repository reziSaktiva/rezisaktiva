import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { WorkflowCopy } from "@/content/workflow";
import { SplitLines } from "./reveal";

/**
 * ADR accordion (T-082.3) on an ink band. Entries are real records from
 * `project-os/decisions/` (ADR-001, ADR-012, ADR-024). shadcn Accordion
 * (Radix): single open item, collapsible, full keyboard support.
 */
export function WorkflowAdrLog({ copy }: { copy: WorkflowCopy }) {
  return (
    <section className="on-ink workflow-adr flex flex-col px-gutter">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <p className="small">{copy.vaultKicker}</p>
          <h2 className="display type-xl">
            <SplitLines lines={[copy.vaultTitle]} />
          </h2>
        </div>
        <p className="copy">{copy.vaultNote}</p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue={copy.adrs[0]?.id}
        className="workflow-adr-list"
      >
        {copy.adrs.map((adr) => (
          <AccordionItem key={adr.id} value={adr.id} className="workflow-adr-item">
            <AccordionTrigger className="workflow-adr-trigger">
              <span className="display workflow-adr-id">{adr.id}</span>
              <span className="display workflow-adr-title">{adr.title}</span>
              <span className="workflow-adr-plus" aria-hidden="true">
                +
              </span>
            </AccordionTrigger>
            <AccordionContent className="workflow-adr-panel">
              <dl className="workflow-adr-cols grid">
                <div className="flex flex-col gap-2">
                  <dt className="workflow-adr-dt">{copy.vaultStatusLabel}</dt>
                  <dd className="workflow-adr-dd">
                    {adr.status}.{" "}
                    {adr.status === "Accepted"
                      ? copy.vaultAcceptedHint
                      : copy.vaultSupersededHint}
                  </dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="workflow-adr-dt">{copy.vaultContextLabel}</dt>
                  <dd className="workflow-adr-dd">{adr.context}</dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="workflow-adr-dt">{copy.vaultDecisionLabel}</dt>
                  <dd className="workflow-adr-dd">{adr.decision}</dd>
                </div>
                <div className="flex flex-col gap-2">
                  <dt className="workflow-adr-dt">{copy.vaultAlternativesLabel}</dt>
                  <dd className="workflow-adr-dd">{adr.alternatives.join(" · ")}</dd>
                </div>
              </dl>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
