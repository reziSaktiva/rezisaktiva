import type { WorkflowPipelineStep } from "@/content/workflow";
import { PinScrub, type PinStep } from "./reveal";

function StepRoles({ step }: { step: WorkflowPipelineStep }) {
  return (
    <div className="workflow-method-roles grid gap-6">
      {[step.human, step.ai].map((role) => (
        <div key={role.label} className="flex flex-col gap-2">
          <p className="small">{role.label}</p>
          <p className="workflow-method-role-body">{role.body}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Method section (T-082.3). On a fine pointer with motion allowed it uses the
 * T-079.5 `PinScrub` primitive (Discover / Design / Build / Ship). On touch or
 * reduced motion the static list below renders instead (CSS media switch, so
 * there is no hydration mismatch and no pinned scroll on touch).
 */
export function WorkflowMethod({
  kicker,
  title,
  note,
  steps,
}: {
  kicker: string;
  title: string;
  note: string;
  steps: readonly WorkflowPipelineStep[];
}) {
  const pinSteps: PinStep[] = steps.map((step) => ({
    word: step.title,
    body: <StepRoles step={step} />,
  }));

  return (
    <section className="band-cream">
      <div className="hidden motion-safe:pointer-fine:block">
        <PinScrub
          steps={pinSteps}
          header={
            <div className="flex items-baseline justify-between gap-5">
              <p className="small">{kicker}</p>
              <h2 className="small text-right">
                {title}
              </h2>
            </div>
          }
        />
      </div>

      <div className="workflow-method-static flex flex-col px-gutter motion-safe:pointer-fine:hidden">
        <div className="flex flex-col gap-3">
          <p className="small">{kicker}</p>
          <h2 className="display type-lg">{title}</h2>
          <p className="copy">{note}</p>
        </div>
        <ol className="flex flex-col">
          {steps.map((step) => (
            <li key={step.num} className="workflow-method-step grid gap-5">
              <div className="flex items-baseline gap-4">
                <span className="small">{step.num}</span>
                <h3 className="display type-md">{step.title}</h3>
              </div>
              <StepRoles step={step} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
