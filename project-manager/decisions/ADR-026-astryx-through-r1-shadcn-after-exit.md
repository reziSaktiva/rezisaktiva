# Decision ADR-026

### Title

Tetap Astryx sampai exit R1; evaluasi migrasi ke shadcn hanya setelah T-018

### Status

Accepted

### Date

2026-08-26

### Decision

1. **ADR-018 tetap berlaku** untuk R1: sistem komponen + token = Astryx (`@astryxdesign/core` + theme `rezisaktiva`). Tidak uninstall Astryx, tidak pasang shadcn/Tailwind paralel di R1.
2. **Tidak hybrid** Astryx + shadcn (satu sistem styling — alasan ADR-018).
3. **Evaluasi migrasi ke shadcn** (atau tetap Astryx jika beta sudah menutup gap, mis. sheet dari tepi kiri/kanan) **hanya setelah exit R1 (`T-018`)**. Bukan pekerjaan di tengah copy T-021 / polish R1.
4. Overlay yang Astryx tidak sediakan sebagai primitive (Quick Info dari kanan) **tetap overlay custom** seperti sekarang sampai evaluasi pasca-R1.

### Reason

- Boss Rezi mengunci timing: frustrasi pada keterbatasan Astryx (masih beta, BottomSheet hanya dari bawah, tidak ada Drawer kiri/kanan seperti shadcn) diakui, tetapi pindah stack di tengah R1 menunda T-021 dan T-018 serta merisikokan regresi visual (ADR-024).
- Astryx beta masih bisa menambah primitive; menunggu satu siklus rilis setelah kerangka clarity hidup lebih murah daripada migrasi dua kali.
- Situs R1 lean; migrasi tetap feasible nanti, bukan alasan memulai sekarang.

### Alternatives Considered

- Migrasi ke shadcn sekarang — ditolak; pause R1 terlalu mahal vs sisa copy/exit.
- Hybrid Astryx + shadcn `Sheet` untuk Quick Info / project sheet — ditolak; dua token/konvensi.
- Cabut Astryx tanpa pengganti (Tailwind murni) — tidak dipilih; evaluasi pasca-R1 yang membandingkan shadcn vs Astryx update.

### Impact / Follow-up

- `product-discovery/06-engineering/dependency-strategy.md` — catatan: evaluasi shadcn bukan R1.
- Task **T-026** (project sheet, Must R1, ADR-027) tetap di Astryx (`BottomSheet` atau overlay custom) — bukan alasan migrasi shadcn.
- Evaluasi stack pasca-T-018 = ADR baru jika memutuskan pindah (supersede ADR-018).
