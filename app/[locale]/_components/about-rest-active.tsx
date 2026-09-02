"use client";

import {
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

type RestActiveControl = {
  panelId: string;
  isActive: boolean;
  controlProps: {
    tabIndex: number;
    role: "button";
    "aria-expanded": boolean;
    "aria-controls": string;
    "aria-label": string;
    onClick?: () => void;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
  } | null;
};

/**
 * Rest = judul selalu terlihat; active = body via hover/focus (desktop)
 * atau klik (mobile). Reduced-motion: body selalu terlihat (ADR-025).
 */
function useRestActiveControl(label: string): RestActiveControl {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteractive, setIsInteractive] = useState(true);
  const [needsClick, setNeedsClick] = useState(false);

  useEffect(() => {
    const sync = () => {
      const reduceMotion = prefersReducedMotion();
      const clickToOpen = !reduceMotion && !hasFineHover();
      setIsInteractive(!reduceMotion);
      setNeedsClick(clickToOpen);
      if (reduceMotion) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    sync();
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    hoverMq.addEventListener("change", sync);
    reduceMq.addEventListener("change", sync);
    return () => {
      hoverMq.removeEventListener("change", sync);
      reduceMq.removeEventListener("change", sync);
    };
  }, []);

  const toggle = () => {
    setIsOpen((open) => !open);
  };

  if (!isInteractive) {
    return { panelId, isActive: false, controlProps: null };
  }

  return {
    panelId,
    isActive: needsClick && isOpen,
    controlProps: {
      tabIndex: 0,
      role: "button",
      "aria-expanded": needsClick ? isOpen : isFocused,
      "aria-controls": panelId,
      "aria-label": label,
      onClick: needsClick ? toggle : undefined,
      onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }
        event.preventDefault();
        if (needsClick) {
          toggle();
        }
      },
      onFocus: needsClick
        ? undefined
        : () => {
            setIsFocused(true);
          },
      onBlur: needsClick
        ? undefined
        : () => {
            setIsFocused(false);
          },
    },
  };
}

export function RestActive({
  rest,
  active,
  className,
  label,
}: {
  rest: ReactNode;
  active: ReactNode;
  className?: string;
  label: string;
}) {
  const { panelId, isActive, controlProps } = useRestActiveControl(label);

  return (
    <div
      className={cn(
        "about-rest-active flex flex-col gap-3",
        isActive && "is-active",
        className,
      )}
      {...controlProps}
    >
      {rest}
      <div id={panelId} className="about-rest-active-panel">
        {active}
      </div>
    </div>
  );
}

export function RestActiveCard({
  rest,
  active,
  extra,
  className,
  label,
  variant,
}: {
  rest: ReactNode;
  active: ReactNode;
  extra?: ReactNode;
  className: string;
  label: string;
  variant: "default" | "muted";
}) {
  const { panelId, isActive, controlProps } = useRestActiveControl(label);

  return (
    <Card
      className={cn(
        "about-rest-active gap-3 p-6 text-base text-foreground shadow-none ring-0",
        variant === "muted"
          ? "border-0 bg-muted"
          : "border-border bg-card border",
        isActive && "is-active",
        className,
      )}
      {...controlProps}
    >
      {extra}
      <div className="flex flex-col gap-3">
        {rest}
        <div id={panelId} className="about-rest-active-panel">
          {active}
        </div>
      </div>
    </Card>
  );
}
