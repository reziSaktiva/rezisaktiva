type WorkGridItem = { id: string; featured: boolean };

/**
 * Featured tiles always take a full row. A half-width tile that would sit
 * alone (next item is featured, or end of list) also spans full so the grid
 * never leaves an empty cell. Order of `items` is preserved.
 */
export function workTileLayout(
  items: readonly WorkGridItem[],
): { id: string; spanFull: boolean }[] {
  const layout: { id: string; spanFull: boolean }[] = [];
  let pending: WorkGridItem | null = null;

  const flushPending = (spanFull: boolean) => {
    if (!pending) {
      return;
    }
    layout.push({ id: pending.id, spanFull });
    pending = null;
  };

  for (const item of items) {
    if (item.featured) {
      flushPending(true);
      layout.push({ id: item.id, spanFull: true });
      continue;
    }
    if (pending) {
      layout.push({ id: pending.id, spanFull: false });
      layout.push({ id: item.id, spanFull: false });
      pending = null;
    } else {
      pending = item;
    }
  }
  flushPending(true);

  return layout;
}
