# Decision ADR-002

### Title

Visi portofolio: brand primer, positioning product builder, audiens founder/PO, bilingual geo-aware

### Status

Accepted

### Date

2026-08-06

### Decision

1. **Model nilai situs:** Brand primer; job opportunity dan client/project sebagai sekunder dengan soft CTA (Model A hybrid).
2. **Positioning berlapis:**
   - Cerita brand: **product builder**
   - Bukti: **fullstack** (~6 tahun)
   - Edge: **AI** (bukan AI specialist murni; desain bukan identitas utama)
3. **Audiens primer:** Founder / product owner. Sekunder: hiring manager/tech lead, calon klien project, peer/community.
4. **Bahasa:** Bilingual geo-aware — default ID di Indonesia, default EN di luar Indonesia; language switcher selalu ada. Implementasi deteksi/URL ditunda ke UX/Engineering.

### Reason

- Hybrid setara (brand = job = client) membuat pesan kabur; hierarki Brand primer menjaga kejelasan.
- Product builder mencerminkan aspirasi & outcome; fullstack + AI menjaga kejujuran kredibilitas.
- Founder/PO adalah audiens yang paling cocok mengevaluasi “bisa bawa ide ke live”.
- Geo-aware bilingual menyesuaikan konteks regional tanpa mengunci satu bahasa saja.

### Alternatives Considered

- Job magnet atau client acquisition sebagai primer — ditolak; Boss Rezi memilih brand sebagai inti.
- AI-forward atau fullstack-only sebagai cerita utama — digabung: product builder di permukaan, fullstack+AI sebagai bukti/edge.
- Bahasa tunggal (EN atau ID saja) — ditolak demi jangkauan regional + global.
- Deteksi hanya browser language — ditunda; keputusan produk saat ini adalah geo-aware + switcher.
