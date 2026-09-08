# v16 — Home satu section (IA lean)

File task **tersendiri**. Keputusan material: **[ADR-032](../decisions/ADR-032-home-single-section.md)**.

Bukan R2 `/work/[slug]`. Bukan tulis ulang copy T-021 (pindah apa adanya). Bukan ganti kulit v15. Bukan ganti stack.

**Paket dikunci Boss Rezi (2026-09-07):** Home hanya hero + Now. Klaim bukti AI pindah ke About (section baru setelah hero). Teaser karya dicabut dari Home; Work index tidak mendapat section “Proyek terpilih” baru.

**Status rilis:** ✅ **Done** (2026-09-07). **T-044** ✅. **T-042** tetap antrian kulit halaman.

> **Update (2026-09-08):** Home tanpa pita footer (**ADR-033** / T-044.6) **superseded ADR-041 / T-053**. About section di Home = **ADR-040**. `#proof` dicabut. Baca dulu: ADR-032 + ADR-040 + ADR-041.

---

## Kontrak

| Area | Tetap | Berganti |
| ---- | ----- | -------- |
| Copy | Teks T-021.2 bukti + Contact footer | Lokasi bukti = About |
| Overlay | Contact, Quick Info, sheet M10 dari tile Work | Sheet tidak lagi dari Home; footer Contact tidak di Home (ADR-033) |
| Nav | Chip tanpa Home (ADR-034); saat T-044: About + Projects | **Lalu ADR-035:** chip Workflow (Proses Kerja / How I Work) |
| Home | Wallpaper + klaim + Now | Tanpa section bukti & teaser |

**Baca dulu:** ADR-032, ADR-033, ADR-010 (update), ADR-027 (update), `04-ux/information-architecture.md`, `04-ux/key-screen-patterns.md`, `home-page.tsx`, `about-page.tsx`, `work-page.tsx`.

---

## T-044 — Home satu section; pindah bukti; cabut teaser

* **Status:** ✅ **Done** (2026-09-07)
* **Domain:** Product / UX / Engineering
* **Output:** Home hero-only; About punya `#proof`; teaser Home + `homeTeaserIds` hilang; Home tanpa pita footer (ADR-033); docs IA selaras ADR-032 / ADR-033

### Subtasks

- [x] **T-044.1** — ADR-032 + indeks DECISIONS; catatan update ADR-010 / ADR-027. IA, key screens, flows, nav, M1/M4, MVP, journey, domain.
- [x] **T-044.2** — Home hanya `#hero` (klaim + Now). Hapus `#credibility` dan `#work` dari `home-page.tsx`. Copy bukti/teaser keluar dari `content/home.ts`.
- [x] **T-044.3** — Section bukti AI di About setelah hero (`#proof`); copy T-021.2 pindah ke `content/about.ts`.
- [x] **T-044.4** — Hapus `home-work-teasers.tsx`, `home-work-all-link.tsx`, `homeTeaserIds`. CSS proof/teaser Home yang tidak terpakai. Sheet M10 hanya dari Work index.
- [x] **T-044.5** — Verifikasi browser: Home (satu section), About (bukti setelah hero), Projects (katalog + sheet).
- [x] **T-044.6** — Home tanpa pita footer Contact (ADR-033). About + Projects tetap.
