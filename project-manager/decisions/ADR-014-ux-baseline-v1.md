# Decision ADR-014

### Title

UX Baseline v1.0: kunci `04-ux/` (path locale + Contact soft Email primer)

### Status

Accepted

### Date

2026-08-10

### Decision

1. **UX Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/04-ux/`.
2. Paket yang terkunci bersama baseline ini:
   - **Prinsip** = UX1–UX7 di `ux-principles.md` (clarity first; lean surface; soft path; bahasa sebagai journey)
   - **IA** = tiga halaman R1 (Home / About / Contact) + work teaser di Home; **locale path prefix** `/id/...` dan `/en/...`; geo default (ID di Indonesia, EN di luar) + fallback browser language + switcher selalu ada; preferensi setelah switch dihormati
   - **Flows** = F1–F3, F6 primer; F4–F5 sekunder tipis; F7 case = Later R2
   - **Navigasi** = chrome lean Home · About · Contact + switcher; footer satelit bukan pengganti Contact
   - **Key screens** = pola blok S0–S3 (bukan token visual final)
   - **Soft CTA Contact** = **Email primer**; **LinkedIn & GitHub** satelit; **tanpa** WA / Instagram / form / calendar di R1
3. Tidak ada perubahan Must terhadap Product Baseline (ADR-010–012) atau User Baseline (ADR-013); keputusan URL bahasa mengisi celah yang ditunda di ADR-002.
4. Perubahan material pada baseline UX setelah ini → **ADR baru** + revisi dokumen terdampak.

### Reason

- Seluruh dokumen `04-ux/` sudah diisi dan disepakati (T-004.1); exit criteria fase UX terpenuhi.
- Path prefix dipilih agar URL shareable per bahasa (SC6) dan switcher punya sibling path yang jelas.
- Contact lean (Email + LinkedIn/GitHub) menjaga soft inbound tanpa noise saluran sosial yang tidak esensial untuk evaluasi founder/PO.

### Alternatives Considered

- Locale tanpa prefix (cookie saja) — ditolak; URL kurang shareable per bahasa.
- Query `?lang=` — ditolak; lemah untuk share/SEO destination.
- Tunda skema URL penuh ke Engineering tanpa kunci UX — ditolak; IA/flows butuh kontrak path.
- Soft CTA menambahkan WA/IG di Contact R1 — ditolak (opsi A Boss Rezi); menjaga satu primer tenang.
- UX Baseline v1.0 seperti di atas — diterima.
