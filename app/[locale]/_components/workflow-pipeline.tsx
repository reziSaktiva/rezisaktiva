"use client";

import type { ComponentType, SVGProps } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { WorkflowCopy } from "@/content/workflow";
import {
  DURATION_SLOW_MIN,
  EASE_STANDARD,
  motion,
} from "@/lib/motion";
import { BuildIcon, DesignIcon, DiscoverIcon, ShipIcon } from "./overlay-icons";

const STEP_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  ShipIcon,
];

const REVEAL_TWEEN = {
  type: "tween" as const,
  duration: DURATION_SLOW_MIN,
  ease: EASE_STANDARD,
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: REVEAL_TWEEN },
};

export function WorkflowPipeline({ copy }: { copy: WorkflowCopy }) {
  return (
    <section className="about-section wf-section wf-pipeline-section">
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={REVEAL_TWEEN}
        >
          <p className="home-kicker">{copy.pipelineKicker}</p>
          <h2 className="about-section-title">{copy.pipelineTitle}</h2>
          <p className="wf-section-note">{copy.pipelineNote}</p>
        </motion.div>

        <motion.ol
          className="wf-pipeline"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {copy.steps.map((step, index) => {
            const StepIcon = STEP_ICONS[index] ?? DiscoverIcon;
            return (
              <motion.li
                key={step.num}
                className="wf-pipeline-item"
                variants={itemVariants}
              >
                <Card className="wf-pipeline-card h-full gap-0 border border-border bg-card py-0 shadow-none ring-0">
                  <CardHeader className="flex flex-col gap-3 border-b border-border p-6">
                    <div className="flex items-center gap-3">
                      <StepIcon className="wf-pipeline-icon" />
                      <span className="wf-pipeline-num" aria-hidden="true">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="about-card-title">
                      {step.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="wf-role wf-role--human flex flex-col gap-2">
                      <p className="wf-role-label">{step.human.label}</p>
                      <p className="about-card-body">{step.human.body}</p>
                    </div>
                    <div className="wf-role wf-role--ai flex flex-col gap-2">
                      <p className="wf-role-label">{step.ai.label}</p>
                      <p className="about-card-body">{step.ai.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
