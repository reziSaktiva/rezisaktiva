# Information Architecture

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan struktur informasi & halaman website portofolio **rezisaktiva** untuk R1 Clarity.

---

# Overview

IA R1 = **tiga halaman inti** + **section teaser di Home** + **locale path prefix** `/id` dan `/en`. Tidak ada `/work` di MVP. Hiring & klien memakai pohon yang sama (jalur sekunder tipis).

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
    └── /[id/en]/contact  → Contact
```

Contoh konkret: `/id/`, `/id/about`, `/en/contact`.

**Bukan R1 (Later / R2):** `/[id/en]/work`, detail case, blog, auth area.

---

# Content Hierarchy

### Lintas halaman (chrome)

1. Identitas brand (nama / mark)
2. Primary nav: Home · About · Contact
3. Language switcher (`ID` ↔ `EN`) → URL path sibling
4. Footer: identitas singkat · satelit LinkedIn/GitHub · legal ringan bila perlu

### Home (urutan konten)

1. **Hero / first viewport** — positioning product builder (+ sinyal fullstack & AI edge)
2. **Bukti ringkas** — highlight pengalaman/outcome singkat
3. **Work teaser** — 1–3 item kurasi
4. **Arah soft** — ke About dan/atau Contact
5. **Availability line** (Should, opsional)

### About

1. Narasi product builder (ide → live)
2. Fondasi fullstack (konteks pengalaman)
3. AI edge jujur
4. Cara kerja / apa yang dicari (tingkat tinggi)
5. Soft arah ke Contact / kembali ke teaser Home

### Contact

1. Ajakan soft + konteks kapan relevan
2. **Primer:** Email (mailto atau alamat jelas)
3. **Satelit:** LinkedIn, GitHub
4. Availability line (bila tidak di Home)
5. **Tidak di R1:** form, calendar, WA, Instagram, pricing

---

# Page Inventory

Notasi sama dengan Site Map: `[id/en]` = path param locale ∈ `{ id, en }` (setara `/{locale}/` di dokumen nav/flows bila ditulis demikian).

| Route (pola) | Nama | Modul | R1 |
| ------------ | ---- | ----- | -- |
| `/[id/en]/` | Home | M1 + M4 | Must |
| `/[id/en]/about` | About | M2 | Must |
| `/[id/en]/contact` | Contact | M3 | Must |
| Chrome global | Nav + switcher + footer | M5, M6 | Must |
| `/[id/en]/work` (+ detail) | Work / case | M9/M10 | Later R2 |

---

# Entry Points

| Entry | Perilaku yang diharapkan |
| ----- | ------------------------ |
| URL bare domain `/` | Redirect ke `/id/...` atau `/en/...` sesuai aturan default di bawah |
| Link langsung ber-locale (mis. `/id/about`, `/en/contact`) | **Buka apa adanya** — jangan rewrite ke locale lain meski ada cookie preferensi |
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

# Success Criteria

* Site map hanya tiga destinasi konten R1 + locale mirror
* Hierarki Home memenangkan clarity di first viewport
* Contact Email = primer; LinkedIn/GitHub satelit; tanpa WA/IG
* Path prefix shareable dan konsisten untuk kedua bahasa
* Tidak ada IA terpisah untuk P3/P4

---

# Decision Rules

* Menambah rute konten R1 baru → ADR + update Product bila perlu
* Mengubah skema locale (hapus path prefix) → ADR baru
* Memasukkan Work ke inventory Must → bertentangan ADR-010

---

# Current Status

| Item | Status |
| ---- | ------ |
| Information Architecture | **Baseline v1.0** (dokumen ini) |
| Locale URL | Path prefix `/id` & `/en` |
| Soft CTA Contact | Email primer; LinkedIn/GitHub satelit; tanpa WA/IG |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `user-flows.md`
* `navigation-patterns.md`
* `../02-product/mvp-definition.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
