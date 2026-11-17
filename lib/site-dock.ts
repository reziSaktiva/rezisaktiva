/**
 * Scroll-up dock (T-079.1): hidden in the first part of the page, shown while
 * the visitor scrolls up, hidden again on scroll down. Mirrors the mockup
 * (`design-mockups/shared.js`): movements of 4px or less are ignored.
 */
export const DOCK_MIN_DELTA = 4;
export const DOCK_SHOW_AFTER = 0.6;
export const DOCK_HIDE_BELOW = 0.5;

export interface DockState {
  visible: boolean;
  lastY: number;
}

export function nextDockState(
  state: DockState,
  y: number,
  viewportHeight: number,
): DockState {
  let { visible, lastY } = state;
  const delta = y - lastY;
  if (Math.abs(delta) > DOCK_MIN_DELTA) {
    visible = delta < 0 && y > viewportHeight * DOCK_SHOW_AFTER;
    lastY = y;
  }
  if (y < viewportHeight * DOCK_HIDE_BELOW) {
    visible = false;
  }
  return { visible, lastY };
}
