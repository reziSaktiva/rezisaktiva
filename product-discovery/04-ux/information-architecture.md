# Information Architecture

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan struktur informasi & halaman website portofolio **rezisaktiva** untuk R1 Clarity.

---

# Overview

IA R1 = **tiga halaman konten** (Home, About, Work index) + **section teaser di Home** + **Contact & Quick Info sebagai overlay global** (bukan halaman/route) + **locale path prefix** `/id` dan `/en`. Hiring & klien memakai pohon yang sama (jalur sekunder tipis).

> **Update (2026-08-15/16, ADR-019/ADR-020/ADR-021/ADR-022):** `/[id/en]/work` (Work index, M9) naik jadi Must R1. Contact **final sebagai modal global** (ADR-019) — route `/contact` terpisah **dihapus** dari IA (keputusan T-016 selesai, bukan lagi "belum final"). Theme toggle (ADR-021) dan Quick Info panel (ADR-022) melengkapi chrome. Halaman detail case (M10) tetap Later/R2.

---

# Purpose

* Mengunci site map dan inventory halaman sebelum flows & pola layar
* Menyelaraskan Hybrid lean (ADR-010) dengan bilingual path (keputusan UX 2026-08-10)
* Menjadi acuan URL stabil untuk Architecture / Engineering

---

# Site Map

Locale sebagai **path param** `[id/en]` — nilai ∈ `{ id, en }` (bukan query string).

```text
/                         → redirect ke locale default (geo / preferensi)
└── /[id/en]/
    ├── /[id/en]/         → Home
    ├── /[id/en]/about    → About
    └── /[id/en]/work     → Work index (M9, Must R1 — ADR-020)

Overlay global (bukan route, tampil di atas halaman manapun):
    • Contact modal      → dibuka dari tombol Contact di chrome (ADR-019)
    • Quick Info drawer  → dibuka dari tab tepi kanan (M13, ADR-022)
```

Contoh konkret: `/id/`, `/id/about`, `/en/work`. **Tidak ada** route `/contact` terpisah — Contact selalu modal (final, ADR-019).

**Bukan R1 (Later / R2):** detail case per karya (M10), blog, auth area.

---

# Content Hierarchy

### Lintas halaman (chrome)

1. Identitas brand (nama / mark)
2. Primary nav: Home · About (label lokal **ID "Proses Kerja"** / **EN "Process"**, ADR-020) · Karya (M9, override ADR-020) sebagai link; Contact sebagai tombol pembuka modal (ADR-019), bukan link
3. Language switcher (`ID` ↔ `EN`) → URL path sibling
4. Theme toggle (dark/light) di chrome — Must R1 (**ADR-021**); default ship tetap light
5. **Quick info panel (M13)** — overlay (tab tepi kanan → drawer); bukan rute baru. Tampil di semua halaman R1 kecuali Work case detail (**ADR-022**)
6. Footer: identitas singkat · satelit LinkedIn/GitHub · legal ringan bila perlu
7. Mobile (<1024px): nav halaman + switcher di balik hamburger; Contact-button + toggle tema tetap selalu terlihat (override ADR-020; toggle = ADR-021)

### Home (urutan konten)

1. **Hero / first viewport** — positioning product builder (+ sinyal fullstack & AI edge)
2. **Credibility line (bukti non-kartu)** — **satu** klaim singkat pengalaman/outcome (bukan grid, bukan list stack). Contoh bentuk: “~6 tahun fullstack · shipped produk live” — mendukung hero, **bukan** menggantikan teaser
3. **Work teaser (bukti karya)** — 1–3 kartu kurasi: nama · peran/outcome · tautan bukti opsional. Ini **satu-satunya** blok karya di Home; jangan duplikasi isi credibility line sebagai daftar project
4. **Arah soft** — ke About dan/atau Contact
5. **Availability line** (Should, opsional)

**Aturan beda blok:** credibility line = sinyal kredibel 1 baris; work teaser = bukti karya terkurasi. Anti-pattern: dua blok yang sama-sama menumpuk tech stack / highlight identik.

### About

Label chrome: **Proses Kerja** (`id`) / **Process** (`en`) — ADR-020; route tetap `/[id/en]/about`.

1. Narasi product builder (ide → live)
2. Fondasi fullstack (konteks pengalaman)
3. AI edge jujur
4. Cara kerja / apa yang dicari (tingkat tinggi)
5. Soft arah ke Contact / kembali ke teaser Home

### Contact (modal global, ADR-019 — bukan halaman/route)

1. Ajakan soft + konteks kapan relevan
2. **Primer:** Email (mailto atau alamat jelas); form singkat (email + message) diizinkan di dalam modal per ADR-019
3. **Satelit:** LinkedIn, GitHub
4. Availability line (bila tidak di Home)
5. **Tidak di R1:** calendar, WA, Instagram, pricing

---

# Page Inventory

Notasi sama dengan Site Map: `[id/en]` = path param locale ∈ `{ id, en }` (setara `/{locale}/` di dokumen nav/flows bila ditulis demikian).

| Route (pola) | Nama | Modul | R1 |
| ------------ | ---- | ----- | -- |
| `/[id/en]/` | Home | M1 + M4 | Must |
| `/[id/en]/about` | About (label chrome: Proses Kerja / Process) | M2 | Must |
| `/[id/en]/work` | Work index (katalog) | M9 | **Must R1** (ADR-020) |
| Chrome global | Nav + switcher + footer + theme toggle | M5, M6 | Must (toggle: ADR-021) |
| Overlay global | Contact modal (bukan path, final — ADR-019) | M3 | Must |
| Overlay global | Quick info panel (bukan path) | M13 | Must (ADR-022); exclude Work case |
| `/[id/en]/work/[slug]` (detail case) | Work case detail | M10 | Later R2 |

---

# Entry Points

| Entry | Perilaku yang diharapkan |
| ----- | ------------------------ |
| URL bare domain `/` | Redirect ke `/id/...` atau `/en/...` sesuai aturan default di bawah |
| Link langsung ber-locale (mis. `/id/about`, `/en/work`) | **Buka apa adanya** — jangan rewrite ke locale lain meski ada cookie preferensi |
| Switcher | Pindah ke path sibling locale yang sama (Home↔Home, About↔About, dst.) |
| Share URL | Prefer URL ber-locale agar penerima melihat bahasa yang sama (SC6) |
| Satelit GitHub/LinkedIn (keluar) | Boleh; Contact & Home tetap destination utama |

### Aturan default bahasa (UX)

Berlaku untuk memilih locale saat **masuk tanpa locale di URL** (terutama redirect dari `/`). **Tidak** menimpa path yang sudah berisi `/id/` atau `/en/`.

1. **Geo Indonesia** → default `id`
2. **Geo luar Indonesia** → default `en`
3. **Geo tidak diketahui / gagal deteksi** → fallback `Accept-Language` browser; jika tidak ada sinyal ID → `en`
4. **Setelah user memakai switcher** → simpan preferensi (cookie/local; detail Eng); pada kunjungan berikutnya ke `/` (atau URL tanpa locale), hormati preferensi itu **di atas** geo/browser
5. **VPN / edge case** — switcher selalu memperbaiki salah default dalam satu ketukan (OQ5 diterima di lapisan UX); URL eksplisit tetap dihormati

---

# Share & Meta Hygiene (R1 acceptance)

Destination hygiene adalah Must produk (SC6 / M7). Acceptance UX sebelum Engineering:

1. Setiap halaman R1 (`Home`, `About`, `Work index`) punya **title** dan **meta description** unik per locale (`id` / `en`), makna setara
2. **Open Graph** dasar (title, description, url kanonis ber-locale) agar URL layak dishare ke chat/tim
3. URL yang dishare **ber-locale** (contoh `/id/about`); bare `/` hanya entry redirect — bukan URL share yang dianjurkan
4. Canonical per locale; jangan mengandalkan cookie untuk menentukan bahasa halaman yang dibuka via link langsung
5. Detail tool (generator meta, sitemap) → Engineering; kontrak di atas wajib terpenuhi di R1

---

# Content readiness (jangan ship kosong)

Sebelum R1 dianggap siap live:

1. **Home** — hero positioning terisi; **minimal 1** work teaser kartu (ideal 1–3); credibility line boleh singkat tapi tidak boleh diganti list stack
2. **Contact** — **Email primer** wajib terlihat dan berfungsi (`mailto:` atau alamat jelas); LinkedIn & GitHub satelit hanya jika URL valid
3. **About** — narasi product builder minimal ada (bukan placeholder Lorem)
4. Jangan ship Home tanpa teaser **atau** Contact tanpa Email — keduanya menutup J2/J3
5. Tautan satelit/teaser eksternal yang mati → jangan ditampilkan (sembunyikan item) sampai URL diperbaiki

---

# Success Criteria

* Site map hanya tiga destinasi konten R1 (Home, About, Work index) + locale mirror; Contact & Quick Info overlay global (bukan destinasi konten baru)
* Hierarki Home memenangkan clarity di first viewport; credibility line ≠ work teaser
* Contact Email = primer; LinkedIn/GitHub satelit; tanpa WA/IG
* Path prefix shareable dan konsisten untuk kedua bahasa
* Meta/share acceptance di atas terpenuhi (title/description/OG per locale)
* Tidak ada IA terpisah untuk P3/P4
* Content readiness: tidak ship tanpa teaser Home + Email Contact

---

# Decision Rules

* Menambah rute konten R1 baru → ADR + update Product bila perlu
* Mengubah skema locale (hapus path prefix) → ADR baru
* Memasukkan Work index ke inventory Must → sudah terjadi via ADR-020 (2026-08-15), override sebagian ADR-010; Work case detail (M10) masih butuh keputusan terpisah
* Contact sebagai modal (bukan route) → final via ADR-019; T-016 selesai, jangan tambah route `/contact` tanpa ADR baru

---

# Current Status

| Item | Status |
| ---- | ------ |
| Information Architecture | **Baseline v1.0** (dokumen ini) |
| Locale URL | Path prefix `/id` & `/en` |
| Soft CTA Contact | Email primer; LinkedIn/GitHub satelit; tanpa WA/IG |
| Home evidence | Credibility line (non-kartu) ≠ work teaser (kartu) |
| Meta / content readiness | Acceptance R1 di dokumen ini |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `user-flows.md`
* `navigation-patterns.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
