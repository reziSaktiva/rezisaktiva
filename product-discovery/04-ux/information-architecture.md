# Information Architecture

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan struktur informasi & halaman website portofolio **rezisaktiva** untuk R1 Clarity.

---

# Overview

IA R1 = **tiga halaman konten** (Home, Workflow, Work index) + **About sebagai section di Home** (`#about`, ADR-040) + **Contact, Quick Info, dan project sheet sebagai overlay global** (bukan halaman/route) + **locale path prefix** `/id` dan `/en`. Hiring & klien memakai pohon yang sama (jalur sekunder tipis). Home **tidak** punya teaser karya atau credibility line (ADR-032). About = narasi pribadi di Home; cara kerja = `/workflow` (ADR-035).

> **Update (2026-08-26, ADR-027):** M10 Must R1 = overlay sheet dari bawah (bukan `/work/[slug]`). Tile Work index membuka sheet.

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
    ├── /[id/en]/           → Home (hero + section About `#about`)
    ├── /[id/en]/about      → redirect ke `/[id/en]#about` (ADR-040)
    ├── /[id/en]/workflow   → Workflow / Proses Kerja (ADR-035)
    └── /[id/en]/projects   → Work index (M9, Must R1 — ADR-020)

Overlay global (bukan route, tampil di atas halaman manapun):
    • Contact modal      → dibuka dari tombol Contact di chrome (ADR-019)
    • Quick Info drawer  → dibuka dari tab tepi kanan (M13, ADR-022)
    • Project sheet      → dibuka dari tile Work index (M10, ADR-027; dari bawah)
```

Contoh konkret: `/id/`, `/id#about`, `/id/workflow`, `/en/projects`. **Tidak ada** route `/contact` terpisah — Contact selalu modal (final, ADR-019). **Tidak ada** route `/projects/[slug]` di R1. `/about` hanya redirect.

**Bukan R1 (Later / R2):** halaman case `/projects/[slug]`, blog, auth area.

---

# Content Hierarchy

### Lintas halaman (chrome)

1. Identitas brand (nama / mark)
2. Primary nav: **nama** (tautan Home, font display) + pekerjaan di samping (bukan tautan, ADR-034) · **Tentang / About** (`#about` di Home, ADR-040) · **Proses Kerja / How I Work** (`/workflow`, ADR-035) · **Proyek / Projects** (M9, path `/projects`, ADR-020) sebagai chip; Contact sebagai tombol pembuka modal (ADR-019), bukan link. **Tidak ada chip Home.**
3. Language switcher (`ID` ↔ `EN`) → URL path sibling
4. Theme toggle (dark/light) di chrome — Must R1 (**ADR-021**); default ship **dark**, light hold, toggle tersembunyi selama hold (T-038.2, 2026-09-04)
5. **Quick info panel (M13)** — overlay (tab tepi kanan → drawer); bukan rute baru (**ADR-022**)
6. **Project sheet (M10)** — overlay dari bawah dari tile Work index; bukan rute baru (**ADR-027**)
7. Footer: identitas singkat · pita Contact · satelit LinkedIn/GitHub · legal ringan — semua rute termasuk Home (ADR-041).
8. Mobile (<1024px): nav halaman (Tentang / Proses Kerja / Proyek, tanpa Home — ADR-034 / ADR-035) + switcher di balik hamburger (item nav full-width; ID/EN compact); Contact-button + toggle tema tetap selalu terlihat (override ADR-020; toggle = ADR-021). Lantai 320px; acuan visual **kode produksi** (ADR-024; `design-mockups/` arsip)

### Home (urutan konten)

1. **Hero / first viewport** — `h1` dua baris display di atas (baris 1 kiri-atas, baris 2 kanan-bawah, ADR-038); lede (deskripsi + tautan Workflow) di **lantai bawah** (ADR-038) **tanpa potret**. Wallpaper terbuka di tengah; memudar saat scroll ke `#about`, kembali di hero. Bukan tile karya.
2. **About** — section `#about` (ADR-040): Now, sapaan, lead, karya seni + caption. Bukan halaman terpisah. Tanpa `#proof`.
3. **Pita footer Contact** — setelah `#about` (ADR-041): heading + CTA modal + legal + satelit.
4. **Arah soft** — ke Workflow lewat lede/chrome; Contact lewat chrome + pita footer.

**Bukan di Home:** credibility line; work teaser. Cara kerja = Workflow. Karya = Work index.

### Workflow

Label chrome: **Proses Kerja** (`id`) / **How I Work** (`en`) — ADR-035; route `/[id/en]/workflow`.

1. Judul + catatan proses (copy T-021.3)
2. Offers / yang bisa dibantu
3. Approach + values
4. Empat langkah (Discover → Design → Build → Ship & Iterate)
5. Soft arah ke Contact / Work index lewat chrome + pita footer

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
| `/[id/en]/` | Home (termasuk section About `#about`) | M1 + M2 | Must |
| `/[id/en]/about` | Redirect ke `/[id/en]#about` | — | Redirect (ADR-040) |
| `/[id/en]/workflow` | Workflow (label chrome: Proses Kerja / How I Work) | M14 | **Must R1** (ADR-035) |
| `/[id/en]/projects` | Work index (katalog) | M9 | **Must R1** (ADR-020) |
| Chrome global | Nav + switcher + theme toggle; footer pita Contact di semua rute termasuk Home (ADR-041) | M5, M6 | Must (toggle: ADR-021) |
| Overlay global | Contact modal (bukan path, final — ADR-019) | M3 | Must |
| Overlay global | Quick info panel (bukan path) | M13 | Must (ADR-022) |
| Overlay global | Project context sheet (bukan path) | M10 | Must (ADR-027); dari bawah; tile Work index |
| `/[id/en]/projects/[slug]` | Work case sebagai halaman | — | Bukan R1 (ADR-027) |

---

# Entry Points

| Entry | Perilaku yang diharapkan |
| ----- | ------------------------ |
| URL bare domain `/` | Redirect ke `/id/...` atau `/en/...` sesuai aturan default di bawah |
| Link langsung ber-locale (mis. `/id#about`, `/en/projects`) | **Buka apa adanya** — jangan rewrite ke locale lain meski ada cookie preferensi |
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

1. Setiap halaman R1 (`Home`, `Workflow`, `Work index`) punya **title** dan **meta description** unik per locale (`id` / `en`), makna setara
2. **Open Graph** dasar (title, description, url kanonis ber-locale) agar URL layak dishare ke chat/tim
3. URL yang dishare **ber-locale** (contoh `/id#about`); bare `/` hanya entry redirect — bukan URL share yang dianjurkan
4. Canonical per locale; jangan mengandalkan cookie untuk menentukan bahasa halaman yang dibuka via link langsung
5. Detail tool (generator meta, sitemap) → Engineering; kontrak di atas wajib terpenuhi di R1

---

# Content readiness (jangan ship kosong)

Sebelum R1 dianggap siap live:

1. **Home** — hero positioning terisi (lede + klaim) + section About (Now + lead)
2. **Contact** — **Email primer** wajib terlihat dan berfungsi (`mailto:` atau alamat jelas); LinkedIn & GitHub satelit hanya jika URL valid
3. **About** — section di Home (bukan halaman); narasi pribadi (bukan placeholder Lorem)
4. **Workflow** — offers + approach/values + langkah proses (copy T-021.3)
5. Jangan ship Home tanpa klaim positioning **atau** Contact tanpa Email — keduanya menutup J2/J3
6. Tautan satelit eksternal yang mati → jangan ditampilkan (sembunyikan item) sampai URL diperbaiki

---

# Success Criteria

* Site map empat destinasi konten R1 (Home, About, Workflow, Work index) + locale mirror; Contact & Quick Info overlay global (bukan destinasi konten baru)
* Hierarki Home memenangkan clarity di first viewport; bukti AI di About; cara kerja di Workflow; karya di Work index (ADR-032, ADR-035)
* Contact Email = primer; LinkedIn/GitHub satelit; tanpa WA/IG
* Path prefix shareable dan konsisten untuk kedua bahasa
* Meta/share acceptance di atas terpenuhi (title/description/OG per locale)
* Tidak ada IA terpisah untuk P3/P4
* Content readiness: tidak ship tanpa klaim Home + Email Contact

---

# Decision Rules

* Menambah rute konten R1 baru → ADR + update Product bila perlu
* Mengubah skema locale (hapus path prefix) → ADR baru
* Memasukkan Work index ke inventory Must → ADR-020. Overlay M10 Must R1 → **ADR-027**. Route `/work/[slug]` tetap butuh ADR baru.
* Contact sebagai modal (bukan route) → final via ADR-019; T-016 selesai, jangan tambah route `/contact` tanpa ADR baru

---

# Current Status

| Item | Status |
| ---- | ------ |
| Information Architecture | **Baseline v1.0** (dokumen ini) |
| Locale URL | Path prefix `/id` & `/en` |
| Soft CTA Contact | Email primer; LinkedIn/GitHub satelit; tanpa WA/IG |
| Home evidence | Lede + klaim di Home; Now + bukti AI di About; cara kerja di Workflow; karya di Work index (ADR-032, ADR-035, ADR-037) |
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
* `../../project-manager/decisions/ADR-032-home-single-section.md`
* `../../project-manager/decisions/ADR-033-home-without-footer.md` (superseded ADR-041)
* `../../project-manager/decisions/ADR-041-home-with-footer.md`
* `../../project-manager/decisions/ADR-034-chrome-name-home-chip.md`
* `../../project-manager/decisions/ADR-035-about-workflow-split.md`
* `../../project-manager/decisions/ADR-038-home-hero-two-line-workflow-link.md`
* `../../project-manager/decisions/ADR-037-home-lede-now-on-about.md`
* `../../project-manager/decisions/ADR-039-about-hero-artwork-lead.md`
* `../../project-manager/decisions/ADR-040-about-as-home-section.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
