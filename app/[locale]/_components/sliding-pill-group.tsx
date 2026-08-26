"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react";
import { HStack } from "@astryxdesign/core/HStack";
import { VStack } from "@astryxdesign/core/VStack";

type StackGap = ComponentProps<typeof HStack>["gap"];
type StackPadding = ComponentProps<typeof HStack>["padding"];
type StackAlign = NonNullable<ComponentProps<typeof HStack>["align"]>;

/**
 * Sliding pill — mockup `initPillGroups()` (`design-mockups/shared.js`).
 * Indicator mengikuti hover/focus, lalu kembali ke item `data-selected`.
 */
export function SlidingPillGroup({
  children,
  className,
  style,
  itemSelector,
  layoutKey,
  orientation = "horizontal",
  gap,
  padding,
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  itemSelector: string;
  layoutKey: string;
  orientation?: "horizontal" | "vertical";
  gap?: StackGap;
  padding?: StackPadding;
  align?: StackAlign;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLElement>(null);

  const getItems = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return [];
    }
    return Array.from(container.querySelectorAll<HTMLElement>(itemSelector));
  }, [itemSelector]);

  const getActiveItem = useCallback(
    () =>
      getItems().find((item) => item.hasAttribute("data-selected")) ?? null,
    [getItems],
  );

  const place = useCallback((item: HTMLElement | null, animate: boolean) => {
    const pill = pillRef.current;
    const container = containerRef.current;
    if (!pill || !container) {
      return;
    }
    if (!item || item.getBoundingClientRect().width === 0) {
      pill.style.opacity = "0";
      return;
    }
    pill.classList.toggle("site-pill-indicator--no-transition", !animate);
    const cRect = container.getBoundingClientRect();
    const iRect = item.getBoundingClientRect();
    pill.style.opacity = "1";
    pill.style.width = `${iRect.width}px`;
    pill.style.height = `${iRect.height}px`;
    pill.style.transform = `translate(${iRect.left - cRect.left}px, ${iRect.top - cRect.top}px)`;
    if (!animate) {
      requestAnimationFrame(() => {
        pill.classList.remove("site-pill-indicator--no-transition");
      });
    }
  }, []);

  const syncText = useCallback(
    (hovered: HTMLElement | null) => {
      const active = getActiveItem();
      for (const item of getItems()) {
        item.classList.toggle("is-pill-on", item === hovered || item === active);
      }
    },
    [getActiveItem, getItems],
  );

  const resetToActive = useCallback(
    (animate: boolean) => {
      place(getActiveItem(), animate);
      syncText(null);
    },
    [getActiveItem, place, syncText],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const resolveItem = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return null;
      }
      const item = target.closest(itemSelector);
      if (!(item instanceof HTMLElement) || !container.contains(item)) {
        return null;
      }
      return item;
    };

    const onEnter = (event: Event) => {
      const item = resolveItem(event.target);
      if (!item) {
        return;
      }
      place(item, true);
      syncText(item);
    };

    const onBlur = (event: FocusEvent) => {
      const item = resolveItem(event.target);
      if (!item) {
        return;
      }
      const next = event.relatedTarget;
      if (next instanceof Node && container.contains(next)) {
        return;
      }
      resetToActive(true);
    };

    /**
     * Klik mouse menyisakan :focus di link nav, tapi biasanya bukan
     * :focus-visible. onLeave dulu menahan reset selama ada fokus di chip
     * — pill tidak kembali ke item terpilih sampai klik di luar. Keyboard
     * (Tab) tetap menahan pill lewat :focus-visible.
     */
    const onLeave = () => {
      const activeEl = document.activeElement;
      if (
        activeEl instanceof HTMLElement &&
        container.contains(activeEl) &&
        activeEl !== container &&
        activeEl.matches(":focus-visible")
      ) {
        return;
      }
      resetToActive(true);
    };

    container.addEventListener("mouseenter", onEnter, true);
    container.addEventListener("focusin", onEnter);
    container.addEventListener("focusout", onBlur);
    container.addEventListener("mouseleave", onLeave);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resetToActive(!reduced);
    const leftoverFocus = document.activeElement;
    if (
      leftoverFocus instanceof HTMLElement &&
      container.contains(leftoverFocus) &&
      leftoverFocus !== container &&
      !leftoverFocus.matches(":focus-visible")
    ) {
      leftoverFocus.blur();
    }

    const snap = () => resetToActive(false);
    const observer = new ResizeObserver(snap);
    observer.observe(container);
    window.addEventListener("resize", snap);

    return () => {
      container.removeEventListener("mouseenter", onEnter, true);
      container.removeEventListener("focusin", onEnter);
      container.removeEventListener("focusout", onBlur);
      container.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
      window.removeEventListener("resize", snap);
    };
  }, [itemSelector, layoutKey, place, resetToActive, syncText]);

  const pill = (
    <VStack
      ref={pillRef}
      className="site-pill-indicator"
      aria-hidden="true"
    />
  );

  if (orientation === "vertical") {
    return (
      <VStack
        ref={containerRef}
        gap={gap}
        padding={padding}
        className={className}
        style={style}
      >
        {pill}
        {children}
      </VStack>
    );
  }

  return (
    <HStack
      ref={containerRef}
      gap={gap}
      padding={padding}
      align={align}
      className={className}
      style={style}
    >
      {pill}
      {children}
    </HStack>
  );
}
