# Decision ADR-031

### Title

Selected chrome: outline darah + teks aksen (mengganti splatter ADR-030)

### Status

Accepted

### Date

2026-09-07

### Decision

1. **Penanda selected** (nav halaman desktop, locale ID/EN, item hamburger yang terlihat) = **border 1px token darah** + **teks merah aksen**. Bukan bercak wine 3D, bukan bentuk organik, bukan percikan ke halaman.
2. **Blood splatter viewport dicabut.** Canvas overlay `BloodSplatterLayer` tidak lagi di-mount. ADR-030 **superseded**.
3. **Hover** pada item yang tidak terpilih = warna aksen saja, tanpa fill dan tanpa blob. Sliding pill indicator di nav/locale/hamburger **disembunyikan**.
4. **Token:** border `--color-accent`; teks `--color-text-accent`. Bukan `--chrome-pill-*` / `--elev-3d` untuk selected. Clarity (UX1) tetap: label nav tetap terbaca, tanpa overlay percikan di first viewport.

### Reason

- Boss Rezi mengunci (2026-09-07): hilangkan blood splatter pada selected nav dan selected language; bentuk selected (wine/blood) jadi border biasa merah dengan font merah.
- Splatter unbounded (ADR-030) menabrak scan halaman dan menumpuk di atas wallpaper Home. Outline di label cukup sebagai penanda aktif.

### Alternatives Considered

- Tetap bercak 3D tanpa percikan — ditolak; bentuk wine/blood juga diganti.
- Outline hanya di nav desktop; locale tetap blob — ditolak; bahasa terpilih ikut.
- Warna fill merah di dalam pill — ditolak; diminta border biasa, tanpa isi.

### Impact / Follow-up

- Implementasi: `globals.css` (`.site-nav-item` / `.site-locale-switch-item` / `.site-mobile-nav-item` `[data-selected]`), `layout.tsx` (cabut layer), hapus `blood-splatter-layer.tsx`.
- ADR-030 status **Superseded**.
- ADR-029 poin 1 & 4: splatter tidak lagi pengecualian selected.
- Catatan T-038.3 / T-040.2 / T-040.6 di [`tasks/v15-visual-identity.md`](../tasks/v15-visual-identity.md).
