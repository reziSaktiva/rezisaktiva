/**
 * Custom cursor modes (T-079.6). The native cursor is only ever replaced on a
 * fine pointer, outside overlays/dialogs/menus and form fields: inside those
 * zones the mode is `native` and the custom cursor hides.
 */
export type CursorMode = "idle" | "link" | "label" | "native";

export interface CursorState {
  mode: CursorMode;
  label: string;
}

export const CURSOR_NATIVE_SELECTOR = [
  '[role="dialog"]',
  '[role="alertdialog"]',
  '[role="menu"]',
  '[data-slot="dialog-content"]',
  '[data-slot="sheet-content"]',
  '[data-slot="drawer-content"]',
  '[data-slot="dropdown-menu-content"]',
  "[data-radix-popper-content-wrapper]",
  "[data-overlay-scrim]",
  "[data-cursor-native]",
  "textarea",
  "input",
  "select",
  '[contenteditable="true"]',
].join(", ");

export const CURSOR_LINK_SELECTOR =
  "a, button, summary, [role='button'], [role='tab']";

export interface CursorTarget {
  closest(selector: string): CursorLike | null;
}

export interface CursorLike {
  getAttribute?(name: string): string | null;
  dataset?: Record<string, string | undefined>;
}

const IDLE: CursorState = { mode: "idle", label: "" };

export function resolveCursorState(target: CursorTarget | null): CursorState {
  if (!target) {
    return IDLE;
  }
  if (target.closest(CURSOR_NATIVE_SELECTOR)) {
    return { mode: "native", label: "" };
  }
  const labelled = target.closest("[data-cursor]");
  const label =
    labelled?.dataset?.cursor ?? labelled?.getAttribute?.("data-cursor") ?? "";
  if (labelled && label) {
    return { mode: "label", label };
  }
  if (target.closest(CURSOR_LINK_SELECTOR)) {
    return { mode: "link", label: "" };
  }
  return IDLE;
}
