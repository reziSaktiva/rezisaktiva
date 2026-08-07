# Decision ADR-013

### Title

User Baseline v1.0: kunci `03-user/` (assumption-led + R1 primer & sekunder tipis)

### Status

Accepted

### Date

2026-08-07

### Decision

1. **User Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/03-user/`.
2. Paket yang terkunci bersama baseline ini:
   - **Metode discovery** = Assumption-led sintesis dari Business & Product Baseline, divalidasi Boss Rezi, plus **rencana riset ringan opsional** (3–5 chat/peer review) yang **tidak memblokir** kunci baseline
   - **Segments / personas** = Dual primer setara P1 early founder & P2 product owner (SEA); sekunder P3 hiring & P4 klien project (tipis) — selaras ADR-005
   - **Journey scope** = R1 Clarity sebagai poros (Home → About/teaser → Contact); cabang sekunder tipis untuk P3/P4 pada permukaan yang sama; case detail = Later R2
   - **JTBD Must R1** = J1–J4, J7 (clarity, bukti, About, soft contact, bahasa); J5 Should tipis; J6 Later
   - **Insight inti** = I1–I7 di `insights.md` (clarity first visit; satu brand dua penekanan; teaser vs case; soft path; secondary = signal; i18n sebagai journey; situs sebagai assembler cerita)
3. **Tidak ada perubahan Must** terhadap Product Baseline (ADR-010–012) dari temuan User.
4. Perubahan material pada baseline user setelah ini → **ADR baru** + revisi dokumen terdampak.

### Reason

- Seluruh dokumen `03-user/` sudah diisi dan disepakati (T-003.1); exit criteria fase User terpenuhi.
- Portofolio pribadi tidak membutuhkan interview wajib sebelum baseline; riset ringan tetap direncanakan agar asumsi (terutama soft CTA dan kecukupan teaser) bisa diuji setelah draft/live.
- Journey sekunder tipis menjaga hiring/klien terlayani tanpa menggeser brand product builder atau menambah surface MVP.

### Alternatives Considered

- Assumption-led murni tanpa rencana riset — ditolak; kehilangan jalur validasi A3/PP11 yang murah.
- Riset wajib (interview) sebelum baseline — ditolak; menunda UX tanpa proporsi untuk situs solo.
- Journey R1 only tanpa cabang sekunder — ditolak; hiring/klien tetap relevan sebagai soft inbound.
- Journey R1+R2 penuh di peta Must — ditolak; overlapping Product R2 dan risiko scope creep case di MVP.
- User Baseline v1.0 seperti di atas — diterima.
