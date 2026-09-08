"use client";

import {
  useEffect,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { WorkflowStep } from "@/content/workflow";
import { cn } from "@/lib/utils";
import { BuildIcon, DesignIcon, DiscoverIcon, ShipIcon } from "./overlay-icons";

const STEP_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  ShipIcon,
];

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function AboutProcess({ steps }: { steps: readonly WorkflowStep[] }) {
  const [pinnedValue, setPinnedValue] = useState("01");
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [hoverOpens, setHoverOpens] = useState(false);

  useEffect(() => {
    const sync = () => {
      setHoverOpens(hasFineHover());
      if (!hasFineHover()) {
        setHoveredValue(null);
      }
    };
    sync();
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    hoverMq.addEventListener("change", sync);
    return () => {
      hoverMq.removeEventListener("change", sync);
    };
  }, []);

  const openValue = hoveredValue ?? pinnedValue;

  return (
    <div className="about-process-group flex flex-col">
      {steps.map((step, index) => {
        const StepIcon = STEP_ICONS[index] ?? DiscoverIcon;
        const isOpen = openValue === step.num;
        return (
          <div
            key={step.num}
            className="about-process-item border-border border-t first:border-t-0"
            onPointerEnter={(event) => {
              if (hoverOpens && event.pointerType === "mouse") {
                setHoveredValue(step.num);
              }
            }}
            onPointerLeave={(event) => {
              if (hoverOpens && event.pointerType === "mouse") {
                setHoveredValue((current) =>
                  current === step.num ? null : current,
                );
              }
            }}
          >
            <Collapsible
              open={isOpen}
              onOpenChange={(next) => {
                setPinnedValue((current) => {
                  if (next) {
                    return step.num;
                  }
                  return current === step.num ? "" : current;
                });
              }}
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
          </div>
        );
      })}
    </div>
  );
}
