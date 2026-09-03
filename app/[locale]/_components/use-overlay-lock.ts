"use client";

import { useEffect, useRef, useState } from "react";
import { readCssDurationMs } from "@/lib/motion";

/**
 * `ct-lock` / `qi-lock` tetap aktif sampai transisi tutup overlay selesai,
 * supaya Lenis tidak jalan di bawah scrim yang masih fade-out.
 */
export function useOverlayDocumentLock(
  isOpen: boolean,
  className: string,
  durationToken: string,
  fallbackMs: number,
) {
  const unlockTimer = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    window.clearTimeout(unlockTimer.current);
    if (isOpen) {
      root.classList.add(className);
      return;
    }
    unlockTimer.current = window.setTimeout(() => {
      root.classList.remove(className);
    }, readCssDurationMs(durationToken, fallbackMs));
  }, [className, durationToken, fallbackMs, isOpen]);

  useEffect(() => {
    return () => {
      window.clearTimeout(unlockTimer.current);
      document.documentElement.classList.remove(className);
    };
  }, [className]);
}

/** Keep Dialog/Sheet content mounted only until the close transition finishes. */
export function useOverlayPresence(
  isOpen: boolean,
  durationToken: string,
  fallbackMs: number,
) {
  const [keepMounted, setKeepMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setKeepMounted(true);
      return;
    }
    const timer = window.setTimeout(() => {
      setKeepMounted(false);
    }, readCssDurationMs(durationToken, fallbackMs));
    return () => window.clearTimeout(timer);
  }, [durationToken, fallbackMs, isOpen]);

  return isOpen || keepMounted;
}
