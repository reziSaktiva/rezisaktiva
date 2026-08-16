# Release Roadmap

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-07). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini merencanakan **rilis produk** website portofolio **rezisaktiva** — urutan nilai yang di-ship, bukan jadwal kalender kaku dan bukan sprint engineering detail.

---

# Overview

Strategi rilis: **bertahap menurut clarity → presence → craft** (ADR-006), dengan growth **destination + magnet ringan** (ADR-007).

* **R1 — MVP Clarity** = Hybrid lean Must (+ Should): Home / About / Work index (M9) + teaser + Contact modal (ADR-019) + bilingual + meta + theme toggle (ADR-021) + Quick Info (M13, ADR-022)
* **R2 — Magnet ringan** = case/proses singkat (M10); Work index (M9) sudah live sejak R1 (ADR-020)
* **R3 — Presence & craft** = poles pengalaman, Could terpilih (motion, form bila perlu)

Tanggal pasti **tidak dikunci** di discovery; exit tiap rilis = kriteria di bawah + dual north star (`success-metrics.md`).

---

# Roadmap Principles

1. **Milestone > kalender spekulatif** — ship saat kriteria terpenuhi, bukan karena tanggal.
2. **Clarity dulu** — R1 tidak menunggu case penuh atau craft spektakel.
3. **Satu destination** — setiap rilis menjaga URL resmi layak jadi link utama.
4. **Magnet setelah kerangka** — R2 mengaktifkan ADR-007 tanpa menggeser positioning.
5. **Soft CTA tetap** — tidak ada rilis yang menambah pricing / hard sell (ADR-008).
6. **Bilingual sejak R1** — bahasa bukan afterthought (ADR-002).
7. **Proporsional** — jangan parallel-build R2/R3 sebelum R1 live & tervalidasi arah.

---

# Release Strategy

| Aspek | Keputusan draft |
| ----- | --------------- |
| Model | Milestone releases (R1 → R2 → R3), bukan continuous feature dump tanpa tema |
| Basis prioritas | `feature-priority.md` MoSCoW |
| Validasi | Selaras fase metrik: Validation (R1) → Traction (R2) → Growth (R3+) |
| Konten | Konten Must R1 siap sebelum “R1 done”; case R2 boleh ditulis paralel *setelah* kerangka R1 jelas |
| Tech/stack | Diputus di Engineering; roadmap ini tidak mengunci framework/hosting |
| Hotfix | Bug/clarity blocker boleh patch di luar nomor rilis tanpa naik scope |

---

# Planned Releases

## R1 — MVP Clarity (Hybrid lean)

**Tujuan:** Destination layak evaluasi founder/PO; soft path inbound siap.

| Termasuk | Modul / item |
| -------- | ------------ |
| Must | M1 Home, M2 About, M3 Contact (modal global, ADR-019), M4 Work teaser, M5 Language, M6 Chrome (termasuk **theme toggle, ADR-021**), M7 Meta, **M9 Work index** (ADR-020), **M13 Quick Info** (ADR-022) |
| Should | Availability line, paritas ID/EN, teaser actionable, a11y dasar |
| Bukan | M10 (case/process detail), blog, CMS, pricing, craft sebagai blocker |

**Exit R1:**

1. Reviewer singkat bisa merangkum: product builder + fullstack + AI edge (NS-1 arah)
2. Contact soft path jelas (NS-2 path siap)
3. Situs layak dijadikan link utama (CV / chat / GitHub)
4. Scope tetap Hybrid lean (ADR-010)

Selaras **Phase 1 — Validation** di `success-metrics.md`.

---

## R2 — Magnet ringan

**Tujuan:** Memperkuat narrative & shareability dengan case/proses singkat di situs.

| Termasuk | Modul / item |
| -------- | ------------ |
| Inti | M10 ≥1 case/proses singkat (M9 Work index sudah live sejak R1 — ADR-020) |
| Opsional | Early case yang sempat Could di R1 dipindah/ dirapikan ke pola M9/M10 |
| Bukan | Blog volume, newsletter machine, distribusi sosial wajib |

**Exit R2:**

1. ≥1 magnet live yang mendukung evaluasi founder/PO
2. Teaser Home terhubung ke detail (bukan hanya tautan eksternal)
3. Traction signals mulai mungkin (recall berulang + inbound kontekstual) — selaras **Phase 2 — Traction**

Prasyarat: R1 exit terpenuhi (atau waiver eksplisit Boss Rezi).

---

## R3 — Presence & craft

**Tujuan:** Menaikkan kesan rumah brand dan kualitas interaksi tanpa mengubah model nilai.

| Termasuk (pilih sesuai kapasitas) | Modul / item |
| --------------------------------- | ------------ |
| Could terkurasi | Motion/craft **lanjutan** (di atas baseline identitas R1, ADR-017 — bukan mengulang klaim R1); M8 form/booking jika soft path kurang |
| Poles | IA/UX refine, performa, a11y lanjut, konsistensi visual |
| Bukan wajib | M11 writing hub, M12 playground sebagai panggung utama, social automation |

**Exit R3:**

1. Presence terasa “rumah brand”, bukan hanya tiga halaman cukup
2. Craft memperkuat cerita — tidak mengaburkan positioning
3. Siap ritme update konten proporsional (**Phase 3 — Growth** arah)

---

## Di luar nomor rilis (catatan)

| Item | Penempatan |
| ---- | ---------- |
| Discovery → Bootstrap → implementasi R1 | Proses project (`T-007`, Engineering) — bukan “R0 produk” wajib di sini |
| M11 Writing, M12 Experiments, distribusi aktif | `future-roadmap.md` |
| Pricing / CMS / auth member | Out of product direction (bukan backlog rilis) |

---

# Roadmap Review

* Baseline v1.0 dikunci (ADR-012); geser M9/M10 ke R1 = perubahan material (opsi D) → ADR + update MVP/priority. M9 sudah digeser (ADR-020, 2026-08-15); M10 masih menunggu keputusan terpisah bila diperlukan.
* Setelah live, review exit R1 sebelum memulai build R2 secara serius.
* Tanggal/estimasi minggu boleh ditambah di Engineering planning — bukan syarat dokumen ini.

---

# Success Criteria

Roadmap rilis dianggap cukup jika:

1. R1–R3 punya tujuan, isi modul, dan exit yang jelas
2. Selaras MoSCoW + ADR-006 / ADR-007 / ADR-010
3. Tidak mengunci tanggal spekulatif atau stack teknis
4. `future-roadmap.md` menampung peluang di luar R1–R3

---

# Decision Rules

* Menambah Must ke R1 di luar Hybrid lean → keputusan eksplisit + ADR bila material.
* Melewatkan R2 selamanya bertentangan ADR-007 (magnet) — boleh ditunda, jangan dihapus tanpa ADR.
* Hard sell / harga di sembarang rilis → ditolak (ADR-008).
* Detail sprint/ticket → setelah Engineering baseline; dokumen ini tetap SoT urutan nilai.

---

# Related Documents

* `README.md` — dokumentasi fase ini
* `mvp-definition.md` — definisi MVP (R1)
* `feature-priority.md` — MoSCoW
* `feature-modules.md` — M1–M13
* `future-roadmap.md` — peluang jangka panjang
* `../01-business/success-metrics.md` — Validation / Traction / Growth
* `../../project-manager/decisions/ADR-010-mvp-surface-hybrid-lean.md`
* `../../project-manager/decisions/ADR-012-product-baseline-v1.md` — Product Baseline v1.0
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-020-work-index-must-r1-nav-mobile-override.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/decisions/ADR-022-quick-info-panel-module.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
