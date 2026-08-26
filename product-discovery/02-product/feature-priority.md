# Feature Priority

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan prioritas fitur/modul website portofolio **rezisaktiva** dengan kerangka MoSCoW untuk **rilis MVP (kerangka clarity)**.

---

# Overview

Prioritas mengikuti urutan investasi **clarity → presence → craft** (ADR-006) dan struktur **Hybrid lean** (ADR-010):

* **Must** = tanpa ini destination tidak layak dievaluasi founder/PO
* **Should** = memperkuat clarity/presence tanpa memblok ship
* **Could** = nilai tambah jika kapasitas/konten memungkinkan
* **Won't (current release)** = magnet penuh, media, sales, atau sistem berat — dijadwalkan belakangan atau ditolak untuk arah produk

ID modul merujuk `feature-modules.md` (M1–M13).

---

# Priority Framework

**MoSCoW** untuk rilis MVP Hybrid lean (bukan seluruh masa hidup produk).

| Bucket | Arti untuk rezisaktiva |
| ------ | ---------------------- |
| **Must Have** | Wajib ada agar dual north star path hidup (clarity + soft inbound siap) |
| **Should Have** | Diusahakan di rilis yang sama; boleh menyusul patch cepat jika blokir waktu |
| **Could Have** | Nice-to-have; jangan tunda Must demi ini |
| **Won't Have (current)** | Sengaja tidak masuk rilis MVP; masuk release/future roadmap |

Perubahan naik/turun bucket material setelah Product Baseline → ADR baru.

---

## Must Have

| ID | Item | Alasan singkat |
| -- | ---- | -------------- |
| M1 | Home (identity + destination) | Pintu clarity: siapa / bukti ringkas / next step |
| M2 | About (narrative) | Memperdalam trust untuk evaluasi founder/PO |
| M3 | Contact (soft path) | Jalur inbound tanpa hard sell / harga |
| M4 | Work teaser (section di Home) | Presence bukti tanpa arsitektur case |
| M5 | Language (bilingual geo-aware + switcher) | ADR-002; relevan SEA + pintu terbuka |
| M6 | Site chrome & satellites | Nav lean + footer + tautan satelit + **toggle tema (ADR-021)** |
| M7 | Destination meta (title/description/OG dasar) | URL layak jadi “link utama” |
| M9 | Work index (katalog karya) | **Naik dari Won't → Must** (override ADR-020, 2026-08-15); nav "Karya" perlu destination nyata |
| M10 | Project context sheet | **Must R1** (ADR-027): overlay dari bawah; bukan `/work/[slug]`; T-026 sebelum T-018 |
| M13 | Quick Info panel | Overlay global glanceable — **Must R1 (ADR-022)**; bukan route |

---

## Should Have

| ID / item | Keterangan | Alasan singkat |
| --------- | ---------- | -------------- |
| Soft availability line | Satu kalimat terbuka kolaborasi/opportunity | Memperkuat soft presence |
| Paritas makna ID/EN | Salinan setara, bukan dump mesin | Bilingual yang kredibel |
| Teaser actionable | Highlight → Work index (lalu sheet M10), bukti live/repo di dalam sheet bila ada | ADR-027 |
| Aksesibilitas dasar | Heading, kontras, fokus keyboard | Clarity juga berarti bisa dipakai |
| Motion sebagai identitas visual | Scroll-triggered reveal, micro-interaction halus, easing hero (**ADR-017**) | Naik dari Could minimal; tetap tunduk batas clarity-first, bukan modul halaman baru |

Should = kualitas Must, bukan modul halaman baru.

---

## Could Have

| ID / item | Keterangan | Catatan |
| --------- | ---------- | ------- |
| M8 | Form kontak / booking ringan | Hanya jika email/tautan terasa kurang |
| Early magnet | Bentuk lain (halaman case `/work/[slug]`) | Bukan overlay M10 yang sudah Must R1 |

---

## Won't Have (Current Release)

Untuk **rilis MVP** (kerangka clarity), sengaja **tidak** termasuk:

| ID / item | Keterangan | Kapan dipertimbangkan |
| --------- | ---------- | --------------------- |
| M10 halaman `/work/[slug]` | Case study sebagai route | Bukan R1 (ADR-027); overlay sheet sudah Must |
| M11 | Writing / notes hub | Future — bukan inti visi MVP |
| M12 | Experiments / playground sebagai panggung | Future satelit craft |
| — | Pricing, paket, checkout | Ditolak arah produk (ADR-008) |
| — | CMS/auth/dashboard/area member | Di luar batas produk MVP |
| — | Blog/newsletter sebagai mesin | Future; bukan growth MVP |
| — | Analytics berat / personalisasi invasif | Engineering: ringan & privacy-aware |
| — | Distribusi sosial otomatis | Bukan mesin MVP (ADR-007) |

---

# Feature Priorities

Urutan pengerjaan disarankan (konten + surface), tetap dalam satu rilis MVP:

| Urutan | Fokus | Modul |
| ------ | ----- | ----- |
| 1 | Clarity permukaan | M1 Home (+ klaim & next step) |
| 2 | Soft path | M3 Contact |
| 3 | Narrative | M2 About |
| 4 | Presence bukti lean | M4 Work teaser |
| 5 | Lintas halaman | M5 Language + M6 Chrome (termasuk toggle tema, ADR-021) + M13 Quick Info (ADR-022) |
| 6 | Destination hygiene | M7 Meta |
| 7 | Poles Should | Availability, paritas ID/EN, a11y dasar |
| 8 | Project context | M10 overlay sheet (ADR-027) |
| 9 | Could (opsional) | M8 / route case nanti |

Detail jadwal rilis → `release-roadmap.md` (T-002.5).

---

# Prioritization Principles

1. **Clarity sebelum craft** — jangan tunda Home/About/Contact demi animasi atau case sempurna.
2. **Brand primer** — item yang mendorong hard sell / harga = Won't (arah produk).
3. **Magnet overlay di R1** — M10 sheet Must (ADR-027); halaman case `/work/[slug]` tetap di luar MVP.
4. **Should ≠ Must** — ship Must lengkap lebih penting daripada poles sempurna.
5. **Could tidak mencuri kapasitas** — form/case awal hanya jika Must+Should (termasuk motion identitas, ADR-017) sudah aman.
6. **Selaras dual north star** — prioritas yang tidak membantu recall atau soft inbound path dipertanyakan.
7. **Satu sumber modul** — ID M1–M13 dari `feature-modules.md`; jangan invent modul paralel di sini.

---

# Review Process

* Baseline v1.0 dikunci (ADR-012); perubahan MoSCoW material → ADR + update `mvp-definition.md` / roadmap.
* Naikkan item Won't → Must/Should hanya dengan alasan tertulis + dampak ke MVP (dan ADR bila material).
* Detail interaksi/wireframe tidak diputus di dokumen ini (fase UX).

---

# Success Criteria

Prioritas dianggap cukup jika:

1. Setiap Must Have di `mvp-definition.md` terpetakan ke baris Must di sini
2. M10 **overlay** Must R1 (ADR-027); route `/work/[slug]` tetap Won't R1; M9 Must (ADR-020); M13 Must (ADR-022); toggle tema Must di M6 (ADR-021)
3. Urutan pengerjaan bisa dipakai langsung oleh `release-roadmap.md`
4. Tidak ada item Must yang bertentangan dengan no-pricing / soft CTA

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `mvp-definition.md` — definisi MVP
* `feature-modules.md` — katalog modul M1–M13
* `release-roadmap.md` — jadwal rilis (berikutnya)
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/decisions/ADR-017-motion-as-identity-r1.md` — motion sebagai identitas visual
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
