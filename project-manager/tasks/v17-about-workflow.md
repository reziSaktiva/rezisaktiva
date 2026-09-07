# v17 — About pribadi vs Workflow

File task **tersendiri**. Keputusan material: **[ADR-035](../decisions/ADR-035-about-workflow-split.md)**.

Bukan R2 `/work/[slug]`. Bukan tulis ulang copy T-021 (pindah apa adanya). Bukan ganti kulit v15.

**Paket dikunci Boss Rezi (2026-09-07):** halaman `/about` yang ada menjadi `/workflow`. About baru = diri pribadi. Section cara kerja tidak campur dengan narasi personal.

**Status rilis:** ✅ **Done** (2026-09-07). **T-045** ✅.

---

## Kontrak

| Area | Tetap | Berganti |
| ---- | ----- | -------- |
| Copy | Teks T-021.2 bukti + T-021.3 proses/offers | Lokasi: bukti = About; proses = Workflow |
| Overlay | Contact, Quick Info, sheet M10 | Tidak |
| Nav | Chip tanpa Home (ADR-034) | Tambah chip Workflow; label About = Tentang / About |
| Route | `/about` tetap hidup | `/workflow` baru |

**Baca dulu:** ADR-035, `04-ux/information-architecture.md`, `about-page.tsx`, `workflow-page.tsx`, `lib/nav.ts`.

---

## T-045 — Pisah About dan Workflow

* **Status:** ✅ **Done** (2026-09-07)
* **Domain:** Product / UX / Engineering
* **Output:** `/[locale]/about` = hero + bukti; `/[locale]/workflow` = offers + approach/values + langkah; nav + meta + JSON-LD + sitemap; docs IA

### Subtasks

- [x] **T-045.1** — ADR-035 + indeks DECISIONS; update IA, nav, key screens, M2/M14, MVP.
- [x] **T-045.2** — Route `/workflow`; `content/workflow.ts`; About dipangkas; chip nav tiga item.
- [x] **T-045.3** — Meta, JSON-LD, sitemap/`r1PageUrls`; tes vitest.
- [x] **T-045.4** — Verifikasi browser About vs Workflow (ID/EN) + nav aktif.
