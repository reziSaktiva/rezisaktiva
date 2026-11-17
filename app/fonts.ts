import {
  Archivo,
  Barlow_Condensed,
  Inter,
  Instrument_Sans,
  Texturina,
} from "next/font/google";

/**
 * T-078.2 — Monolith families (ADR-052). Variables are set on `<body>` in
 * `app/layout.tsx` and consumed by the `--font-wordmark|condensed|inter`
 * theme tokens in `app/globals.css`.
 * Wordmark: Archivo, variable `wdth` axis so the 125 width is real (not synthetic).
 * Display: Barlow Condensed (static weights). Body: Inter (variable).
 */
export const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * LEGACY (fenced, delete with `legacy-identity.css`) — T-039.2 — pasangan T-038.4.
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
