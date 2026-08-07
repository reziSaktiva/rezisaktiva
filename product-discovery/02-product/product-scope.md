# Product Scope

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan batas dan domain produk website portofolio pribadi **rezisaktiva**.

---

# Overview

**rezisaktiva** adalah situs portofolio publik yang berfungsi sebagai **satu rumah digital** untuk identitas product builder Rezi Saktiva: cerita jelas, bukti kredibel, dan jalur kontak soft.

Struktur permukaan MVP: **Hybrid lean** — halaman **Home**, **About**, dan **Contact**; karya muncul sebagai **section teaser di Home** dulu. Halaman detail case / Work penuh menyusul setelah kerangka clarity hidup (selaras magnet ringan bertahap, ADR-007).

Bukan toko jasa, bukan blog/media, bukan app dengan akun pengguna.

---

# Product Principles

1. **Clarity dulu** — pengunjung paham siapa / bukti / next step dalam satu kunjungan singkat (ADR-006).
2. **Brand primer** — soft CTA untuk opportunity/project; tanpa hard sell atau harga publik (ADR-002, ADR-008).
3. **Satu rumah** — situs = sumber kebenaran; GitHub/LinkedIn = satelit.
4. **Hybrid lean** — cukup halaman untuk evaluasi; jangan overbuild Work/case di MVP.
5. **Magnet bertahap** — case/proses singkat masuk roadmap setelah kerangka clarity, bukan syarat ship pertama.
6. **Bilingual geo-aware** — default ID di Indonesia, EN di luar; switcher selalu ada (detail UX/Engineering).
7. **Proporsional** — konten dan fitur cukup untuk dual north star; hindari craft spektakel atau CMS berat di awal.

---

# Core Product Domains

| Domain | Apa yang dicakup | Peran di MVP |
| ------ | ---------------- | ------------ |
| **Identity & positioning** | Klaim product builder + fullstack + AI edge di permukaan | Inti — Home |
| **Narrative / About** | Cerita, cara berpikir, konteks pengalaman | Inti — About |
| **Work presence (lean)** | Teaser karya / highlight di Home (bukan katalog penuh) | Inti lean — section Home |
| **Soft contact** | Jalur menghubungi yang jelas, tidak agresif | Inti — Contact |
| **Language** | Pengalaman bilingual geo-aware + switcher | Inti lintas halaman |

---

# Supporting Domains

| Domain | Apa yang dicakup | Catatan |
| ------ | ---------------- | ------- |
| **Site chrome** | Nav, footer, ketersediaan soft (“open to…”) | Mendukung presence |
| **Satellite links** | GitHub, LinkedIn, dll. sebagai tautan keluar | Melengkapi, bukan mengganti situs |
| **Shareable basics** | Meta/SEO ringan agar URL layak jadi destination | Detail tool di Engineering |
| **Magnet ringan (post-kerangka)** | Case/proses singkat, halaman Work/detail | Supporting → naik setelah MVP clarity |

---

# Product Boundaries

**Di dalam produk (MVP Hybrid lean):**

* Situs publik multi-halaman lean: Home, About, Contact
* Section karya/teaser di Home
* Soft CTA kontak (email dan/atau tautan langsung; tanpa pricing)
* Bilingual geo-aware + language switcher
* Konten dikurasi pemilik (bukan UGC, bukan marketplace)

**Di luar batas produk (secara umum):**

* Autentikasi pengguna / area member
* CMS publik atau panel admin sebagai produk
* E-commerce, checkout, paket harga
* Blog/media sebagai bisnis inti
* Aplikasi kolaborasi, dashboard klien, atau SaaS
* Mesin distribusi sosial sebagai fitur situs

---

# Out of Scope (MVP)

Untuk MVP Hybrid lean, **belum** termasuk:

* Halaman **Work** katalog + **detail case study** (jadwal setelah kerangka clarity)
* Blog / writing hub
* Form kontak berbackend, booking calendar, atau CRM
* Playground/eksperimen web sebagai panggung utama
* Dark-pattern lead magnet, popup agresif, rate card
* Multi-author, komentar, atau komunitas di situs
* Analytics berat / personalisasi invasif (prinsip: ringan & privacy-aware)

Detail case dan form lanjut masuk `mvp-definition.md` (Should/Could) dan roadmap berikutnya.

---

# Success Criteria

Scope dianggap mengarah benar jika:

1. Founder/PO bisa evaluasi dasar lewat Home + About + Contact tanpa merakit cerita dari GitHub/CV
2. Homepage menjawab siapa / bukti ringkas / next step (selaras dual north star)
3. Karya terasa hadir (teaser) tanpa memaksa arsitektur case penuh di MVP
4. Soft path kontak jelas; tidak ada harga atau hard sell
5. Batas di dokumen ini konsisten dengan ADR-002, ADR-006, ADR-007, ADR-010

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `mvp-definition.md` — isi MVP
* `feature-modules.md` — modul/halaman
* `../01-business/product-vision.md` — visi & positioning
* `../01-business/business-model.md` — destination + magnet bertahap
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md` — keputusan struktur permukaan
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/PROJECT_STATE.md` — status project
* `../../project-manager/DECISIONS.md` — indeks ADR
