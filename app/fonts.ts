import { Instrument_Sans, Texturina } from "next/font/google";

/**
 * T-039.2 — pasangan T-038.4.
 * Display: Texturina (textura, OFL, Google Fonts) — naskah/katedral, bukan costume.
 * Body/UI: Instrument Sans (OFL) — grotesk terbaca; bukan Inter/Roboto/Arial.
 * Variabel dipasang di `<body>` (bukan `<html>`) supaya class `dark`/Lenis
 * di documentElement tidak ditimpa reconcile `className`.
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
