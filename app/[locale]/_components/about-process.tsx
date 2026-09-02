"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { AboutStep } from "@/content/about";
import { cn } from "@/lib/utils";
import { BuildIcon, DesignIcon, DiscoverIcon, ShipIcon } from "./overlay-icons";

const STEP_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  ShipIcon,
];

export function AboutProcess({ steps }: { steps: readonly AboutStep[] }) {
  const [openValue, setOpenValue] = useState("01");

  return (
    <div className="about-process-group flex flex-col">
      {steps.map((step, index) => {
        const StepIcon = STEP_ICONS[index] ?? DiscoverIcon;
        const isOpen = openValue === step.num;
        return (
          <Collapsible
            key={step.num}
            open={isOpen}
            onOpenChange={(next) => {
              setOpenValue((current) => {
                if (next) {
                  return step.num;
                }
                return current === step.num ? "" : current;
              });
            }}
            className="about-process-item border-border border-t first:border-t-0"
          >
            <CollapsibleTrigger className="about-process-trigger flex items-center justify-between gap-4 py-3">
              <span className="flex items-center gap-4">
                <StepIcon className="about-process-icon" />
                <span className="about-process-num" aria-hidden="true">
                  {step.num}
                </span>
                <span className="about-card-title">{step.title}</span>
              </span>
              <ChevronDown
                aria-hidden
                size={16}
                className={cn("about-process-chevron", isOpen && "is-open")}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="about-process-panel">
                <span aria-hidden="true" className="about-process-mark">
                  {step.num}
                </span>
                <p className="about-process-copy">{step.body}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
}
