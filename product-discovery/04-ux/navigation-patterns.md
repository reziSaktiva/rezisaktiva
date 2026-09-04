# Navigation Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan pola navigasi website portofolio **rezisaktiva**.

---

# Overview

Navigasi R1 **lean dan selalu tersedia**: destinasi konten + switcher bahasa berbasis path. Tidak ada mega-menu, tidak ada nav terpisah untuk hiring.

> **Override (2026-08-15, ADR-020; 2026-08-16, ADR-021 / ADR-022; label + path 2026-09-01):** dokumen ini di-override sebagian. Nav termasuk **Proyek / Projects** (Work index, M9, path `/projects`); Contact bukan link nav melainkan tombol modal (ADR-019); mobile <1024px hamburger. Toggle tema Must R1 (ADR-021). Quick info = overlay sekunder (ADR-022). `/[locale]/work` redirect permanen ke `/projects`.

---

# Purpose

* Menjamin F1–F6 tidak tersumbat chrome
* Menyelaraskan M5 (Language) & M6 (Site chrome) dengan IA
* Memberi acceptance mobile vs desktop tanpa visual token final

---

# Primary Navigation

| Item | Target | Catatan |
| ---- | ------ | ------- |
| Brand / nama | `/[id/en]/` (Home) | Selalu kembali ke Home locale aktif |
| Home | `/[id/en]/` | Boleh disembunyikan sebagai label jika brand = Home; tetap satu destinasi |
| About | `/[id/en]/about` | Label lokal di chrome: **ID "Proses Kerja"** / **EN "Process"** (ADR-020 poin 3). Route & nama modul tetap About (M2). |
| Proyek / Projects (Work index, M9) | `/[id/en]/projects` | Path 2026-09-01; `/work` redirect |
| Contact | Tombol pembuka modal (ADR-019) | **Bukan link nav** (override ADR-020); selalu terlihat di luar hamburger, ≤1 ketukan dari halaman manapun |
| Language switcher | Sibling path locale | Label jelas `ID` / `EN` (atau setara); selalu terlihat; satu ketukan |

**Penempatan:** header/sticky top pada desktop; pola yang sama di mobile (lihat bawah).

**State:** halaman aktif ditandai (aria-current / gaya aktif — detail Eng).

---

# Secondary Navigation

| Area | Isi | Peran |
| ---- | --- | ----- |
| **In-page (Home)** | Tautan teks/section ke About & Contact | Memperkuat arah soft tanpa menambah item nav |
| **Footer** | Brand singkat · ulang About/Contact opsional · **LinkedIn** · **GitHub** · legal ringan | Satelit & hygiene; **bukan** pengganti Contact primer |
| **Teaser cards (Home)** | Tautan ke Work index | Bukan langsung ke live/repo |
| **Work index tiles** | Membuka project sheet (M10) | Overlay dari bawah (ADR-027); live/repo sekunder di dalam sheet |
| **Quick info panel (M13)** | Tab tepi kanan → drawer: bio, Services, Tools, Proyek/Projects, Email, Links | Overlay global (bukan route). Tidak menggantikan Contact modal (ADR-019) atau footer satelit — **ADR-022** |
| **Tidak ada** | Nav Work terpisah dari Proyek, Blog, Services sebagai halaman, Pricing, WA, Instagram | Out of scope R1 |

Switcher **bukan** secondary — ia bagian chrome primer (UX6).

---

# Language Switching Pattern

1. User di `/[id|en]/{page}` (path ber-locale)
2. Aktifkan switcher → navigasi ke sibling `/[en|id]/{page}` (page yang sama)
3. Jika page tidak ada di locale target (tidak diharapkan di R1) → fallback Home locale target
4. Preferensi setelah switch disimpan (cookie/local — Eng) dan **hanya** dipakai saat redirect `/` / URL tanpa locale — tidak rewrite URL ber-locale yang dibuka langsung
5. Konten harus tersedia di kedua locale dengan **makna setara**

---

# Mobile Considerations

> **Override (ADR-020, 2026-08-15)** — poin di bawah ini menggantikan aturan "selalu terlihat tanpa hamburger" untuk breakpoint <1024px.

* Breakpoint **<1024px**: nav halaman (Home/About/Proyek) + language switcher masuk **hamburger menu** (panel, bukan halaman baru).
* **Tetap selalu terlihat di luar hamburger** (tidak pernah tersembunyi): tombol Contact (pembuka modal, ADR-019). **Toggle tema (ADR-021):** Must di luar hamburger **saat light hidup**; selama hold T-038.2 toggle **tidak** ditampilkan. Default ship **dark**.
* ≥1024px (desktop): nav halaman, switcher, dan tombol Contact selalu terlihat di header — tidak ada hamburger. Toggle hanya jika hold light sudah dicabut.
* Footer satelit tetap ada sebagai pelengkap, bukan pengganti Contact.
* Target sentuh memadai; switcher tidak berbagi tap target dengan nav lain.
* **Komposisi panel hamburger** (kontrak visual mockup, 2026-08-20): satu lembar aksen kuning; **item nav halaman selebar panel** (state aktif = bar penuh, bukan pill selebar teks); **switcher ID/EN compact** (chip, tidak meregang penuh).
* **Chrome satu baris** di ponsel: brand kiri; hamburger + tema + Contact kanan. Tidak wrap jadi dua baris. Lantai lebar **320px** (iPhone SE 1) wajib rapi; **375px** (SE 2/3) acuan ponsel utama.
* Acuan visual: **kode produksi** (chrome di `app/[locale]/_components/`, tema built) — **ADR-024**. `design-mockups/` arsip; pixel/spacing tidak lagi mengikuti HTML mockup.

---

# Success Criteria

* Contact bisa dicapai **≤ satu ketukan** dari halaman mana pun (desktop & mobile) — tombol selalu di luar hamburger
* Home / About / Proyek ≤1 ketukan di desktop; di mobile (<1024px) boleh lewat hamburger (1 ketukan buka menu + 1 ketukan item — override ADR-020)
* Switcher **selalu terlihat** di desktop; di mobile ikut masuk hamburger bersama nav halaman (override ADR-020) sebagai chip compact, bukan full-width
* Panel hamburger: item halaman full-width; halaman aktif tertandai sebagai bar penuh
* Footer tidak menggantikan peran Contact
* Tidak ada item nav untuk permukaan non-R1 di luar Proyek (M9, sudah masuk R1 via ADR-020)

---

# Decision Rules

* Menambah item primary nav → tinjau Product scope + ADR bila material (Proyek/M9 sudah ditambah via ADR-020)
* Memindahkan Email hanya ke footer tanpa halaman/modal Contact → ditolak (I4, ADR-010)

---

# Current Status

| Item | Status |
| ---- | ------ |
| Navigation Patterns | **Baseline v1.0** (dokumen ini) — override sebagian oleh ADR-020 (2026-08-15); toggle tema ADR-021; Quick info ADR-022; komposisi panel hamburger + lantai 320px dari port R1 (mockup 2026-08-20, lalu kode); acuan visual hidup = kode (ADR-024) |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `user-flows.md`
* `key-screen-patterns.md`
* `../02-product/feature-modules.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
