"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { WorkflowAdrSample, WorkflowCopy } from "@/content/workflow";
import {
  DURATION_MEDIUM_MAX,
  DURATION_SLOW_MIN,
  EASE_STANDARD,
  motion,
  useReducedMotion,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const REVEAL_TWEEN = {
  type: "tween" as const,
  duration: DURATION_SLOW_MIN,
  ease: EASE_STANDARD,
};

const PANEL_TWEEN = {
  type: "tween" as const,
  duration: DURATION_MEDIUM_MAX,
  ease: EASE_STANDARD,
};

export function WorkflowAdrVault({ copy }: { copy: WorkflowCopy }) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(copy.adrs[0]?.id ?? "");
  const active =
    copy.adrs.find((adr) => adr.id === activeId) ?? copy.adrs[0];

  if (!active) {
    return null;
  }

  return (
    <section className="about-section wf-section">
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={REVEAL_TWEEN}
        >
          <p className="home-kicker">{copy.vaultKicker}</p>
          <h2 className="about-section-title">{copy.vaultTitle}</h2>
          <p className="wf-section-note">{copy.vaultNote}</p>
        </motion.div>

        <motion.div
          className="wf-vault"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={REVEAL_TWEEN}
        >
          <div className="wf-vault-chrome">
            <span className="wf-vault-dot" aria-hidden="true" />
            <span className="wf-vault-dot" aria-hidden="true" />
            <span className="wf-vault-dot" aria-hidden="true" />
            <p className="wf-vault-path">{active.file}</p>
          </div>

          <div className="wf-vault-body">
            <ScrollArea className="wf-vault-list">
              <div
                className="flex flex-col gap-2 p-3"
                role="listbox"
                aria-label={copy.vaultTitle}
              >
                {copy.adrs.map((adr) => {
                  const selected = adr.id === active.id;
                  return (
                    <button
                      key={adr.id}
                      type="button"
                      className={cn(
                        "wf-vault-item flex flex-col gap-2 text-start",
                        selected && "is-active",
                      )}
                      aria-current={selected ? "true" : undefined}
                      role="option"
                      aria-selected={selected}
                      onClick={() => setActiveId(adr.id)}
                    >
                      <span className="wf-vault-item-id">{adr.id}</span>
                      <span className="wf-vault-item-title">{adr.title}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>

            <AdrDetail copy={copy} adr={active} reduceMotion={!!reduceMotion} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AdrDetail({
  copy,
  adr,
  reduceMotion,
}: {
  copy: WorkflowCopy;
  adr: WorkflowAdrSample;
  reduceMotion: boolean;
}) {
  const statusHint =
    adr.status === "Accepted"
      ? copy.vaultAcceptedHint
      : copy.vaultSupersededHint;

  return (
    <TooltipProvider delayDuration={200}>
      <motion.article
        key={adr.id}
        className="wf-vault-detail flex flex-col gap-6"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={PANEL_TWEEN}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="wf-vault-detail-title">
              {adr.id}: {adr.title}
            </h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant={adr.status === "Accepted" ? "default" : "outline"}
                  className="wf-vault-status"
                >
                  {adr.status}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>{statusHint}</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <ScrollArea className="wf-vault-detail-scroll">
          <div className="flex flex-col gap-6 pr-3">
            <section className="flex flex-col gap-2">
              <p className="home-kicker">{copy.vaultContextLabel}</p>
              <p className="about-card-body">{adr.context}</p>
            </section>
            <section className="flex flex-col gap-2">
              <p className="home-kicker">{copy.vaultDecisionLabel}</p>
              <p className="about-card-body">{adr.decision}</p>
            </section>
            <section className="flex flex-col gap-2">
              <p className="home-kicker">{copy.vaultAlternativesLabel}</p>
              <ul className="wf-vault-alts flex flex-col gap-2">
                {adr.alternatives.map((item) => (
                  <li key={item} className="about-card-body">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </ScrollArea>
      </motion.article>
    </TooltipProvider>
  );
}
