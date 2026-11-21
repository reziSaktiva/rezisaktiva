import type {
  WorkflowCompareMode,
  WorkflowComparePane,
} from "@/content/workflow";
import { cn } from "@/lib/utils";

const MODES: readonly WorkflowCompareMode[] = ["chaos", "driven"];

/**
 * Two-pane compare (T-082.1). Both panes are always readable; on a fine
 * pointer the hovered pane widens (CSS flex-grow, see `.workflow-cmp-pane`).
 * Stacks vertically below `lg`. No JS.
 */
export function WorkflowCompare({
  compare,
}: {
  compare: Record<WorkflowCompareMode, WorkflowComparePane>;
}) {
  return (
    <section className="workflow-cmp flex flex-col lg:flex-row">
      {MODES.map((mode) => {
        const pane = compare[mode];
        return (
          <div
            key={mode}
            className={cn(
              "workflow-cmp-pane flex min-w-0 flex-1 flex-col justify-between gap-10 px-gutter",
              mode === "driven" ? "bg-ink text-paper" : "workflow-cmp-pane--chaos",
            )}
          >
            <div className="flex flex-col gap-3">
              <p className="small text-current opacity-65">{pane.kicker}</p>
              <h2 className="display workflow-cmp-title">{pane.label}</h2>
            </div>
            <ul className="flex flex-col">
              {pane.points.map((point) => (
                <li key={point.title} className="workflow-cmp-point grid gap-1">
                  <h3 className="display workflow-cmp-point-title">{point.title}</h3>
                  <p className="workflow-cmp-point-body">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
