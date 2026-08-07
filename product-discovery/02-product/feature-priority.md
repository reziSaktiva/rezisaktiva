# Feature Priority

> Status: **Draft v0.1** — MoSCoW selaras Hybrid lean (ADR-010) + `mvp-definition.md` / `feature-modules.md`. Belum Product Baseline (T-002.8).

Dokumen ini menetapkan prioritas fitur/modul website portofolio **rezisaktiva** dengan kerangka MoSCoW untuk **rilis MVP (kerangka clarity)**.

---

# Overview

Prioritas mengikuti urutan investasi **clarity → presence → craft** (ADR-006) dan struktur **Hybrid lean** (ADR-010):

* **Must** = tanpa ini destination tidak layak dievaluasi founder/PO
* **Should** = memperkuat clarity/presence tanpa memblok ship
* **Could** = nilai tambah jika kapasitas/konten memungkinkan
* **Won't (current release)** = magnet penuh, media, sales, atau sistem berat — dijadwalkan belakangan atau ditolak untuk arah produk

ID modul merujuk `feature-modules.md` (M1–M12).

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
| M6 | Site chrome & satellites | Nav lean + footer + tautan satelit |
| M7 | Destination meta (title/description/OG dasar) | URL layak jadi “link utama” |

---

## Should Have

| ID / item | Keterangan | Alasan singkat |
| --------- | ---------- | -------------- |
| Soft availability line | Satu kalimat terbuka kolaborasi/opportunity | Memperkuat soft presence |
| Paritas makna ID/EN | Salinan setara, bukan dump mesin | Bilingual yang kredibel |
| Teaser actionable | Highlight → bukti eksternal (repo/live) bila ada | Bukti tanpa halaman case |
| Aksesibilitas dasar | Heading, kontras, fokus keyboard | Clarity juga berarti bisa dipakai |

Should = kualitas Must, bukan modul halaman baru.

---

## Could Have

| ID / item | Keterangan | Catatan |
| --------- | ---------- | ------- |
| M8 | Form kontak / booking ringan | Hanya jika email/tautan terasa kurang |
| Motion / craft ringan | Presence edge | Jangan menggeser clarity |
| Early magnet | 1 case/proses singkat lebih awal | Idealnya release berikutnya; boleh jika konten siap (bukan blocker) |

---

## Won't Have (Current Release)

Untuk **rilis MVP** (kerangka clarity), sengaja **tidak** termasuk:

| ID / item | Keterangan | Kapan dipertimbangkan |
| --------- | ---------- | --------------------- |
| M9 | Work index (katalog) | Post-MVP / magnet phase |
| M10 | Case / process detail | Post-MVP (magnet ringan ADR-007) |
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
| 5 | Lintas halaman | M5 Language + M6 Chrome |
| 6 | Destination hygiene | M7 Meta |
| 7 | Poles Should | Availability, paritas ID/EN, a11y dasar |
| 8 | Could (opsional) | M8 / motion / early case |

Detail jadwal rilis → `release-roadmap.md` (T-002.5).

---

# Prioritization Principles

1. **Clarity sebelum craft** — jangan tunda Home/About/Contact demi animasi atau case sempurna.
2. **Brand primer** — item yang mendorong hard sell / harga = Won't (arah produk).
3. **Magnet bertahap** — M9/M10 berharga, tetapi Won't untuk rilis MVP kecuali keputusan eksplisit geser ke opsi D.
4. **Should ≠ Must** — ship Must lengkap lebih penting daripada poles sempurna.
5. **Could tidak mencuri kapasitas** — form/motion/case awal hanya jika Must+Should sudah aman.
6. **Selaras dual north star** — prioritas yang tidak membantu recall atau soft inbound path dipertanyakan.
7. **Satu sumber modul** — ID M1–M12 dari `feature-modules.md`; jangan invent modul paralel di sini.

---

# Review Process

* Draft prioritas ini ditinjau bersama Boss Rezi sebelum Product Baseline (T-002.8).
* Naikkan item Won't → Must/Should hanya dengan alasan tertulis + dampak ke MVP (dan ADR bila material).
* Setelah baseline, perubahan MoSCoW material → ADR + update `mvp-definition.md` / roadmap.
* Detail interaksi/wireframe tidak diputus di dokumen ini (fase UX).

---

# Success Criteria

Prioritas dianggap cukup jika:

1. Setiap Must Have di `mvp-definition.md` terpetakan ke baris Must di sini
2. M9/M10 tetap Won't untuk rilis MVP (selaras ADR-010) kecuali keputusan baru
3. Urutan pengerjaan bisa dipakai langsung oleh `release-roadmap.md`
4. Tidak ada item Must yang bertentangan dengan no-pricing / soft CTA

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `product-scope.md` — batas produk
* `mvp-definition.md` — definisi MVP
* `feature-modules.md` — katalog modul M1–M12
* `release-roadmap.md` — jadwal rilis (berikutnya)
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
