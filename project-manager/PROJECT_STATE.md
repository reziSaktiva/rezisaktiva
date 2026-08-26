# PROJECT STATE

## Snapshot

* **Phase / Milestone:** Development · R1 MVP Clarity (Hybrid lean, M1–M7 + M9 + M13 + theme toggle)
* **Active Mode:** Development — implementasi fitur/konten R1; bukan scaffold Bootstrap
* **Top Next Tasks:** copy **T-021.6** (Quick Info) → T-021.7; exit R1 **T-018** setelah T-021.1–T-021.7 — lihat [`TASKS.md`](TASKS.md)
* **Blocker:** Tidak ada
* **Known Issues:** Tidak ada (KI-001 / KI-002 tertutup: tema `rezisaktiva` = mockup `shared.css`)
* **Backlog task lengkap:** [`TASKS.md`](TASKS.md) + `tasks/v01-product-discovery.md` (✅ Done) + `tasks/v02-bootstrap.md` (✅ Done) + `tasks/v03-development-r1.md` (⏳ In Progress, T-013…T-017 ✅, T-019 ✅, T-020 ✅, T-018 ⏳, **T-022** ✅, **T-024** ✅, **T-025** ✅) + `tasks/v10-page-copy.md` (⏳ In Progress — T-021.2 hampir selesai (teaser menunggu daftar karya), **T-021.1/T-021.3/T-021.4/T-021.5** ✅ selesai; **T-023** ⏸️ Deferred menunggu CV Inggris)
* Detail phase/mode ada di section di bawah. Riwayat completed/ADR: lihat `COMPLETE_TASK.md` (⚠️ jangan dibaca AI kecuali diperintah) / `DECISIONS.md`.

---

## Metadata

| Field | Value |
| ----- | ----- |
| Version | 0.1.0 |
| Status | Active |
| Last Updated | 2026-08-26 |

---

## Current Status

| Item | Value |
| ----- | ----- |
| Current Phase | Development |
| Current Milestone | R1 MVP Clarity (Must M1–M7 + M9 + M13 + theme toggle) |
| Overall Progress | Product Discovery T-001–T-007 ✅; Bootstrap T-008–T-012 ✅; Development T-013…T-017 ✅, T-019 ✅, T-020 ✅, **T-022** ✅, **T-024** ✅, **T-025** ✅, T-018 ⏳ (menunggu copy); T-021 copy ⏳ — next: T-021.6/T-021.7 |
| Project Status | Development in progress — UI R1 ✅; craft Hess/Mazur T-025 ✅; copy R1 lewat T-021; T-018 exit menunggu copy |

---

## Current Focus

* Product Discovery **selesai** (baseline 01–06 + exit T-007).
* Repository & Bootstrap **selesai** (`tasks/v02-bootstrap.md`, T-008…T-012) — exit kriteria terpenuhi (lihat T-012.1).
* Acuan implementasi: `product-discovery/` + ADR-001 … ADR-025. Visual: kode produksi, bukan mockup HTML (ADR-024).
* Fase aktif: **Development** — implementasi R1 (Home / About / Work index + Contact modal + work teaser + chrome + Quick Info + meta), bukan scaffold.
* Backlog Development R1 **sudah disusun** (`tasks/v03-development-r1.md`, T-013…T-020, **T-022**, **T-024**, **T-025**). Fitur/UI tanpa copy. **Copy** hanya di `tasks/v10-page-copy.md` (**T-021**). **T-014…T-017, T-019, T-020** UI ✅. **T-022** / **T-024** / **T-025** ✅. **T-018** menunggu T-021.1–T-021.7.
* **Copy R1 sedang berjalan (2026-08-21):** T-021.2 (Home) — h1, Bukti, seksi karya, Contact ✅ terkunci; teaser mengikuti daftar T-021.5. **T-021.5 (Work index) ✅ selesai** — daftar 8 karya kurasi terkunci dari `private/Resume_rezi_updated_agustus_2026.md` (bukan dikarang), plus `h1` ("Proyek / saya." — EN "My / Projects"), `lead`, dan CTA terkunci lewat diskusi. **T-021.1 (Chrome) ✅ selesai** — nav EN "How I Work" (bukan "Process"/"My Process"), tombol Contact "Kontak"/"Contact", aria hamburger toggle sesuai state, footer pakai URL LinkedIn/GitHub nyata (`content/contact.ts` sebagai satu sumber). **T-021.3 (About) ✅ selesai** — copy ditulis ulang total dari Boss Rezi (bukan salinan mockup lagi), menonjolkan orkestrasi tim AI subagent + pipeline discovery-arsitektur-build-ship + ADR-driven decisions. **T-021.4 (Contact modal) ✅ selesai** — semua label/body form dikonfirmasi apa adanya dari mockup; **bug kontras light mode ditemukan & diperbaiki** (beberapa teks tak terbaca karena token tema Astryx menimpa warna theme-independent modal — fix `!important` + `className` dedicated di `app/globals.css`). **Fitur unduh CV/Portofolio dipisah ke T-023 (⏸️ Deferred)** — keputusan penempatan tetap terkunci (ADR-023), tapi implementasi ditunda karena file CV yang ada sepenuhnya berbahasa Indonesia sementara link yang sama akan tampil di locale EN juga; kode yang sempat dibuat sudah di-revert dari PR T-021.4. Sisa T-021.6 (Quick Info), T-021.7 (meta) belum digarap.
* **ADR-024 (2026-08-21) + T-024 (2026-08-23):** mockup HTML di-deprecate sebagai SoT visual. Iterasi desain About pertama di kode produksi **selesai**.
* **ADR-025 (2026-08-24):** craft pass Hess/Mazur (bukan palet). About tetap M2; copy T-021 tidak diubah; Lenis + page overlay diizinkan. **T-025** ✅ (T-025.8: track tetap terlihat; T-025.9: scrollbar mengikuti tema `rezisaktiva`).
* **Catatan engineering terbuka:** compiler StyleX (`xstyle`/`stylex.create()`, jalur yang direkomendasikan `.cursor/rules/xds.mdc`) belum wired ke build Turbopack project ini — ditemukan saat T-013.4 (build gagal saat dicoba). Styling chrome saat ini memakai `defineTheme` `components` override sebagai gantinya (tidak butuh compiler tambahan). Perlu keputusan terpisah bila ada task berikutnya yang benar-benar butuh `xstyle` (trade-off Turbopack vs webpack) — lihat `COMPLETE_TASK.md`.

---

## Active Conversation Mode

**Development**

Diizinkan:

* Implementasi fitur/konten R1 Must (M1–M7 + M9 + M13 + theme toggle: Home, About, Work index, Contact modal, work teaser, language, chrome, meta, Quick Info — ADR-019, ADR-020, ADR-021, ADR-022)
* Polish Should R1 yang tidak menambah halaman baru (paritas ID/EN, a11y dasar, availability line)
* Mockup → kode sesuai UX baseline (ADR-014) + Astryx (ADR-018) — **superseded oleh ADR-024** untuk pekerjaan visual baru: iterasi di kode produksi; mockup HTML arsip
* Diskusi, ADR untuk keputusan material implementasi (termasuk craft/motion ADR-025)
* Diskusi + kunci copy R1 (**T-021**) — AI tidak mengarang teks final
* Update TASKS / PROJECT_STATE / COMPLETE_TASK

Tidak diizinkan (kecuali diminta eksplisit):

* Scope R2/R3 (Work case/detail penuh — M10, magnet) sebelum exit R1; Work index (M9) sudah masuk R1 via ADR-020
* Mengubah baseline Product Discovery tanpa ADR baru

---

## Known Issues

Tidak ada yang terbuka. KI-001 (warna theme toggle) dan KI-002 (background light) ditutup 2026-08-19: tema built `rezisaktiva` memetakan `--c-*` mockup ke token Astryx; chrome toggle/Contact memakai brand + hover aksen.

---

## Recent Decisions (Ringkasan)

ADR terbaru: **ADR-025** (craft Hess/Mazur — ritme/tipe/gerak, bukan palet; Lenis + page overlay; About tetap M2). Sebelumnya: **ADR-024** (kode produksi = SoT visual), **ADR-023** (CV di Contact modal, implementasi ditunda T-023), **ADR-022** (Quick Info). Indeks lengkap: [`DECISIONS.md`](DECISIONS.md).

---

## Related Documents

* `TASKS.md`
* `DECISIONS.md`
* `PROJECT_RULES.md`
* `../product-discovery/README.md`
