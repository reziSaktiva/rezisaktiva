import type { WorkflowPrinciple } from "@/content/workflow";
import { SplitLines } from "./reveal";

/**
 * Sticky stacking rule cards (T-082.2). Each card is `position: sticky` with a
 * stepped top offset, so the next card slides over the previous one. Native
 * sticky only: no scroll hijack on touch, nothing to reduce for motion.
 */
export function WorkflowRules({
  kicker,
  title,
  principles,
}: {
  kicker: string;
  title: string;
  principles: readonly WorkflowPrinciple[];
}) {
  return (
    <section className="workflow-rules">
      <div className="flex flex-col gap-3 px-gutter pb-8">
        <p className="small">{kicker}</p>
        <h2 className="display type-lg">
          <SplitLines lines={[title]} />
        </h2>
      </div>
      {principles.map((principle, i) => (
        <article key={principle.tag} className="workflow-rule grid px-gutter">
          <span className="display workflow-rule-num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-3">
            <p className="small text-current opacity-60">{principle.tag}</p>
            <h3 className="display workflow-rule-title">{principle.title}</h3>
          </div>
          <p className="workflow-rule-body">{principle.body}</p>
        </article>
      ))}
    </section>
  );
}
