import { Instrument_Sans, Texturina } from "next/font/google";

/**
 * T-039.2 — pasangan T-038.4.
 * Display: Texturina (textura, OFL, Google Fonts) — manuscript/cathedral, not costume.
 * Body/UI: Instrument Sans (OFL) — readable grotesk; not Inter/Roboto/Arial.
 * Variables on `<body>` (not `<html>`) so `dark`/Lenis classes on
 * documentElement are not overwritten by `className` reconcile.
 */
export const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const texturina = Texturina({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-texturina",
  display: "swap",
});
