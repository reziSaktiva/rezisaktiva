# v18 — About sebagai section Home

Release IA: About bukan halaman. Chip nav tetap. **T-052**. **ADR-040**. Footer Home kembali (**T-053**, **ADR-041**).

**Paket dikunci Boss Rezi (2026-09-07):** hapus proof + contact di About; pindahkan hero About ke Home; pertahankan About di navbar.

---

## T-052 — About = section `#about` di Home

* **Status:** ✅ Done (2026-09-07)
* **Domain:** Product / UX / Engineering
* **Output:** Home = hero + About; `/about` redirect; chip Tentang/About aktif di `#about`; tanpa `#proof`; pita Contact di Home (ADR-041)
* **Baca dulu:** ADR-040, ADR-039, ADR-041, ADR-038, `home-page.tsx`, `about-page.tsx`, `lib/nav.ts`

### Subtasks

- [x] **T-052.1** — Section About di Home (`#about`); cabut `#proof`; judul About `h2`.
- [x] **T-052.2** — Chip nav → `/{locale}#about`; redirect `/about`; sitemap/JSON-LD tanpa halaman About.
- [x] **T-052.3** — Verifikasi browser: Home ID/EN, klik Tentang, redirect `/about`, Workflow/Projects tetap, 320 + desktop.

---

## T-053 — Pita footer Contact di Home

* **Status:** ✅ Done (2026-09-07)
* **Domain:** Product / UX / Engineering
* **Output:** `SiteFooter` di Home (setelah `#about`); cabut `SiteFooterSlot`; ADR-033 superseded
* **Baca dulu:** ADR-041, ADR-025, `site-footer.tsx`, `app/[locale]/layout.tsx`

### Subtasks

- [x] **T-053.1** — Render pita footer di Home; cabut gate `SiteFooterSlot`.
- [x] **T-053.2** — Docs IA / key screens / nav / M1–M6 selaras ADR-041.
