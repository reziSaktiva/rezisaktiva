"use client";

import { forwardRef, type ComponentProps } from "react";
import {
  DURATION_CT_PANEL_OPACITY,
  DURATION_CT_PANEL_TRANSFORM,
  DURATION_CT_SCRIM,
  DURATION_SHEET_PANEL,
  DURATION_SHEET_SCRIM,
  EASE_CSS,
  EASE_OVERLAY,
  TWEEN_NONE,
  motion,
  overlayTween,
  useReducedMotion,
} from "@/lib/motion";

type MotionDivProps = ComponentProps<typeof motion.div>;
type ScrimKind = "contact" | "sheet";

export const OverlayScrimMotion = forwardRef<
  HTMLDivElement,
  { kind: ScrimKind } & MotionDivProps
>(function OverlayScrimMotion({ kind, ...props }, ref) {
  const reduceMotion = useReducedMotion();
  const duration =
    kind === "contact" ? DURATION_CT_SCRIM : DURATION_SHEET_SCRIM;

  return (
    <motion.div
      ref={ref}
      {...props}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      transition={
        reduceMotion ? TWEEN_NONE : overlayTween(duration, EASE_CSS)
      }
    />
  );
});

export const DialogPanelMotion = forwardRef<HTMLDivElement, MotionDivProps>(
  function DialogPanelMotion(props, ref) {
    const reduceMotion = useReducedMotion();
    const rest = reduceMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.96 };

    return (
      <motion.div
        ref={ref}
        {...props}
        initial={rest}
        animate={{ opacity: 1, scale: 1 }}
        exit={rest}
        transition={
          reduceMotion
            ? TWEEN_NONE
            : {
                opacity: overlayTween(DURATION_CT_PANEL_OPACITY, EASE_CSS),
                scale: overlayTween(DURATION_CT_PANEL_TRANSFORM, EASE_OVERLAY),
              }
        }
      />
    );
  },
);

export const SheetPanelMotion = forwardRef<HTMLDivElement, MotionDivProps>(
  function SheetPanelMotion(props, ref) {
    const reduceMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        {...props}
        initial={reduceMotion ? { x: 0 } : { x: "100%" }}
        animate={{ x: 0 }}
        exit={reduceMotion ? { x: 0 } : { x: "100%" }}
        transition={
          reduceMotion ? TWEEN_NONE : overlayTween(DURATION_SHEET_PANEL)
        }
      />
    );
  },
);
