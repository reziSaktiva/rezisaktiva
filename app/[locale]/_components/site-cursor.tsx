"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { resolveCursorState, type CursorMode } from "@/lib/site-cursor";

/**
 * Custom cursor (T-079.6, ADR-052): a dot that grows on links and shows the
 * `data-cursor="Label"` text of the element under it (mockup
 * `design-mockups/shared.js`).
 *
 * Only on a fine pointer (`hover: hover` + `pointer: fine`) and never with
 * `prefers-reduced-motion`: touch and reduced-motion visitors keep the native
 * cursor and this renders nothing. Inside overlays, dialogs, menus and form
 * fields the mode is `native` (see `lib/site-cursor.ts`): the dot hides and
 * the native cursor comes back. Portaled to `body` so it sits above the
 * curtain and overlays. The follow loop runs only while the pointer moves.
 */
const MEDIA_FINE = "(hover: hover) and (pointer: fine)";
const MEDIA_REDUCE = "(prefers-reduced-motion: reduce)";

export function SiteCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia(MEDIA_FINE);
    const reduce = window.matchMedia(MEDIA_REDUCE);
    const sync = () => {
      setEnabled(fine.matches && !reduce.matches);
    };
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return <SiteCursorDot />;
}

function SiteCursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const labelNode = labelRef.current;
    if (!dot || !labelNode) {
      return;
    }
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let mode: CursorMode = "idle";
    let frame = 0;
    let placed = false;

    const apply = () => {
      dot.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
    };
    const tick = () => {
      frame = 0;
      if (document.hidden) {
        return;
      }
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      if (dx * dx + dy * dy < 0.04) {
        current.x = target.x;
        current.y = target.y;
        apply();
        return;
      }
      current.x += dx * 0.22;
      current.y += dy * 0.22;
      apply();
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };

    const setMode = (next: CursorMode, label: string) => {
      if (next !== mode) {
        mode = next;
        dot.dataset.mode = next;
        root.classList.toggle("native-cursor", next === "native");
      }
      if (labelNode.textContent !== label) {
        labelNode.textContent = label;
      }
    };

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!placed) {
        placed = true;
        current.x = target.x;
        current.y = target.y;
        apply();
      }
      dot.dataset.show = "true";
      const state = resolveCursorState(
        event.target instanceof Element ? event.target : null,
      );
      setMode(state.mode, state.label);
      start();
    };
    const onLeave = () => {
      dot.dataset.show = "false";
    };
    const onVisibility = () => {
      if (!document.hidden) {
        start();
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      root.classList.remove("has-cursor", "native-cursor");
    };
  }, []);

  return createPortal(
    <div
      ref={dotRef}
      className="site-cursor"
      aria-hidden="true"
      data-mode="idle"
      data-show="false"
    >
      <span ref={labelRef} />
    </div>,
    document.body,
  );
}
