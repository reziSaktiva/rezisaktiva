# Decision ADR-012

### Title

Product Baseline v1.0: kunci `02-product/` (Hybrid lean + MoSCoW + R1–R3)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **Product Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/02-product/` (termasuk `roles-permissions.md` sebagai N/A).
2. Paket produk yang terkunci bersama baseline ini:
   - **Surface MVP** = Hybrid lean — Home + About + Contact; Work teaser di Home (ADR-010)
   - **Modul** = M1–M12 di `feature-modules.md`; Must R1 = M1–M7
   - **Prioritas** = MoSCoW untuk rilis MVP clarity (`feature-priority.md`)
   - **Rilis** = R1 Clarity → R2 Magnet ringan (M9/M10) → R3 Presence/craft (`release-roadmap.md`); tanpa tanggal spekulatif
   - **Future** = peluang M11/M12 & distribusi di `future-roadmap.md`, bukan Must dekat
   - **Roles & permissions** = N/A untuk situs publik (ADR-011)
3. Perubahan material pada baseline produk setelah ini → **ADR baru** + revisi dokumen terdampak.

Paket keputusan Accepted yang diikat: ADR-010, ADR-011 (+ ADR-002, ADR-006, ADR-007, ADR-008, ADR-009 sebagai konteks bisnis).

### Reason

- Seluruh dokumen `02-product/` sudah diisi dan disepakati (T-002.1–T-002.7); exit criteria fase Product terpenuhi.
- Mengunci Hybrid lean + urutan R1–R3 agar fase User/UX tidak menggeser scope MVP atau memasukkan case penuh ke Must.
- Menjaga magnet bertahap (ADR-007) tanpa overbuild catalog Work di ship pertama.

### Alternatives Considered

- Menunda baseline sampai wireframe UX siap — ditolak; scope produk cukup untuk masuk User Discovery.
- Mengunci Hybrid penuh (opsi D, case wajib di MVP) — ditolak; sudah ditunda di ADR-010.
- Baseline tanpa mengunci urutan R2 magnet — ditolak; mengaburkan komitmen magnet ringan ADR-007.
- Product Baseline v1.0 seperti di atas — diterima.
