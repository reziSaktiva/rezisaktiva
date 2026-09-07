"use client";

import type { ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

/**
 * Pita footer Contact (ADR-025) tidak dirender di Home (ADR-033).
 * `useSelectedLayoutSegment` dari layout `[locale]`: `null` = `page.tsx` Home.
 */
export function SiteFooterSlot({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();
  if (segment === null) {
    return null;
  }
  return children;
}
