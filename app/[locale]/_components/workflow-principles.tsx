"use client";

import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  Focus,
  Globe2,
  Network,
  ScrollText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import type {
  WorkflowCopy,
  WorkflowPrincipleTag,
} from "@/content/workflow";
import {
  DURATION_SLOW_MIN,
  EASE_STANDARD,
  motion,
} from "@/lib/motion";

const PRINCIPLE_ICONS: Record<WorkflowPrincipleTag, LucideIcon> = {
  STRATEGY: ScrollText,
  SCOPE: Focus,
  DOCUMENTATION: BookMarked,
  ARCHITECTURE: Network,
  TRUTH: Globe2,
};

const REVEAL_TWEEN = {
  type: "tween" as const,
  duration: DURATION_SLOW_MIN,
  ease: EASE_STANDARD,
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: REVEAL_TWEEN },
};

export function WorkflowPrinciples({ copy }: { copy: WorkflowCopy }) {
  return (
    <section className="about-section wf-section">
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={REVEAL_TWEEN}
        >
          <p className="home-kicker">{copy.principlesKicker}</p>
          <h2 className="about-section-title">{copy.principlesTitle}</h2>
        </motion.div>

        <motion.div
          className="wf-principle-grid"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {copy.principles.map((principle) => {
            const Icon = PRINCIPLE_ICONS[principle.tag];
            return (
              <motion.div
                key={principle.tag}
                className="wf-principle-cell"
                variants={itemVariants}
                whileHover={{ scale: 1.012 }}
                transition={REVEAL_TWEEN}
              >
                <Card className="wf-principle-card h-full gap-0 border border-border bg-card py-0 shadow-none ring-0">
                  <CardHeader className="flex flex-col gap-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="outline" className="wf-principle-tag">
                        {principle.tag}
                      </Badge>
                      <Icon className="wf-principle-icon" aria-hidden />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="about-card-title">
                        {principle.title}
                      </h3>
                      <p className="about-card-body">
                        {principle.body}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
