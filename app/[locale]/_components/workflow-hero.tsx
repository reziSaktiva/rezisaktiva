"use client";

import { useState } from "react";
import { MessageSquareWarning, Scale } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { WorkflowCompareMode, WorkflowCopy } from "@/content/workflow";
import {
  DURATION_MEDIUM_MAX,
  EASE_STANDARD,
  motion,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Reveal, WordReveal } from "./home-motion";

const TAB_TWEEN = {
  type: "tween" as const,
  duration: DURATION_MEDIUM_MAX,
  ease: EASE_STANDARD,
};

const COMPARE_MODES = ["chaos", "driven"] as const satisfies WorkflowCompareMode[];

export function WorkflowHero({ copy }: { copy: WorkflowCopy }) {
  const [mode, setMode] = useState<WorkflowCompareMode>("driven");

  return (
    <section className="work-hero wf-hero">
      <div className="home-container flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Reveal>
            <p className="home-kicker">{copy.kicker}</p>
          </Reveal>
          <h1 className="wf-h1">
            <WordReveal words={copy.headline} variant="compact" />
          </h1>
        </div>
        <Reveal>
          <p className="wf-lede">{copy.lede}</p>
        </Reveal>

        <div className="wf-compare">
          <Tabs
            value={mode}
            onValueChange={(value) => {
              if (value === "chaos" || value === "driven") {
                setMode(value);
              }
            }}
            className="wf-tabs gap-4"
          >
            <TabsList
              variant="line"
              className="wf-tabs-list h-auto w-full max-w-xl flex-wrap justify-start rounded-none bg-transparent p-0"
            >
              <TabsTrigger
                value="chaos"
                className="wf-tabs-trigger"
                data-icon="inline-start"
              >
                <MessageSquareWarning />
                {copy.compare.chaos.label}
              </TabsTrigger>
              <TabsTrigger
                value="driven"
                className="wf-tabs-trigger"
                data-icon="inline-start"
              >
                <Scale />
                {copy.compare.driven.label}
              </TabsTrigger>
            </TabsList>

            <div className="wf-compare-stage">
              {COMPARE_MODES.map((tab) => {
                const pane = copy.compare[tab];
                return (
                  <TabsContent
                    key={tab}
                    value={tab}
                    className={cn(
                      "wf-compare-panel flex flex-col gap-6",
                      tab === "driven" && "wf-compare-panel--driven",
                    )}
                    data-mode={tab}
                  >
                    <motion.div
                      className="flex flex-col gap-6"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={TAB_TWEEN}
                    >
                      <p className="home-kicker">{pane.kicker}</p>
                      <ul className="wf-compare-points grid gap-4">
                        {pane.points.map((point) => (
                          <li
                            key={point.title}
                            className="wf-compare-point flex flex-col gap-2"
                          >
                            <p className="wf-compare-point-title">
                              {point.title}
                            </p>
                            <p className="wf-compare-point-body">
                              {point.body}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
