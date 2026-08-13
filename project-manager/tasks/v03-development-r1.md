# v0.3 — Development R1 (MVP Clarity)

Release untuk implementasi fitur/konten R1 Must (M1–M7): chrome, Home + work teaser, About, Contact, meta — sesuai Product/UX baseline (ADR-010, ADR-014) dan Astryx (ADR-018). Bukan magnet R2 (Work index / case penuh).

Urutan kerja: chrome dulu (dipakai semua halaman), lalu halaman, lalu meta, lalu exit.

Sebelum eksekusi task UI/UX: konfirmasi mockup di `design-mockups/` masih dipakai (rule `ui-ux-mockup-check`).

---

## T-013 — Site chrome R1 (M6 + polish M5)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/04-ux/information-architecture.md`, `key-screen-patterns.md` (S0), ADR-014, `.cursor/rules/xds.mdc`, `design-mockups/home.html` (chrome bersama)

### Subtasks

- [ ] **T-013.1** — Nav lean Home · About · Contact selalu terlihat (desktop & mobile R1; tanpa hamburger); Contact reachable ≤1 ketukan
- [ ] **T-013.2** — Locale switcher selalu terlihat (polish stub T-010.3); cookie `NEXT_LOCALE` tetap hanya untuk redirect `/`
- [ ] **T-013.3** — Footer: identitas singkat + satelit LinkedIn/GitHub (bukan pengganti Contact; tanpa WA/IG)

---

## T-014 — Home + work teaser (M1 + M4)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M1, M4), `04-ux/key-screen-patterns.md` (S1), ADR-010, ADR-017, `design-mockups/home.html`

### Subtasks

- [ ] **T-014.1** — Konten Home di `content/` (hero positioning, credibility line 1 klaim, arah soft, availability opsional)
- [ ] **T-014.2** — Halaman `/[locale]` (bukan stub): first viewport product builder + fullstack + AI edge; Astryx; motion memperkuat hierarchy (ADR-017) tanpa mengalahkan clarity
- [ ] **T-014.3** — Work teaser 1–3 item (nama · peran/outcome · tautan bukti opsional); satu-satunya blok karya di Home

---

## T-015 — About (M2)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M2), `04-ux/key-screen-patterns.md` (S2), ADR-002, `design-mockups/about.html`

### Subtasks

- [ ] **T-015.1** — Konten About di `content/` (narasi product builder, fondasi fullstack, AI edge jujur, cara kerja tingkat tinggi)
- [ ] **T-015.2** — Halaman `/[locale]/about` sesuai pola S2 + mockup; Astryx; soft arah ke Contact / teaser Home

---

## T-016 — Contact (M3)

* **Status:** ⏳ Todo
* **Domain:** UI/UX
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M3), `04-ux/key-screen-patterns.md` (S3), ADR-014, `design-mockups/contact.html`

### Subtasks

- [ ] **T-016.1** — Konten Contact di `content/` (ajakan soft + konteks; Email primer; LinkedIn/GitHub satelit; availability bila belum di Home)
- [ ] **T-016.2** — Halaman `/[locale]/contact` sesuai pola S3 + mockup; `mailto:` primer; tanpa form / calendar / WA / IG / pricing

---

## T-017 — Destination meta (M7)

* **Status:** ⏳ Todo
* **Domain:** Engineering
* **Baca dulu:** `product-discovery/02-product/feature-modules.md` (M7), `06-engineering/environment-management.md`, ADR-015

### Subtasks

- [ ] **T-017.1** — `title` + `description` per halaman, per locale (`id`/`en`)
- [ ] **T-017.2** — OG dasar + canonical dari `NEXT_PUBLIC_SITE_URL`

---

## T-018 — Exit R1 → destination layak evaluasi

* **Status:** ⏳ Todo
* **Domain:** Documentation
* **Baca dulu:** `product-discovery/02-product/release-roadmap.md` (Exit R1), `success-metrics.md` (Phase 1 — Validation)

### Subtasks

- [ ] **T-018.1** — Verifikasi exit R1: reviewer bisa merangkum product builder + fullstack + AI edge; Contact soft path jelas; paritas makna ID/EN; a11y dasar (heading, kontras, fokus keyboard)
- [ ] **T-018.2** — Update `PROJECT_STATE.md` (R1 exit / Validation) + append `COMPLETE_TASK.md` + update Fokus di `TASKS.md`

---

## Yang tidak masuk backlog Development R1

- Work index / case penuh (M9/M10 — R2)
- Dark mode toggle UI (Should/Later)
- Form, calendar, WA, Instagram, pricing (ADR-008 / ADR-014)
- Blog / CMS / auth / DB (N/A — ADR-011/015)
- Husky / test runner wajib (ditunda per `dx-tooling.md`)
