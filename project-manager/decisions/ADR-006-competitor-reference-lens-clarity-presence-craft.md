# Decision ADR-006

### Title

Competitor / reference lens: clarity → presence → craft (hybrid referensi bernama + pesaing kategori)

### Status

Accepted

### Date

2026-08-07

### Decision

1. Analisis kompetitif portofolio memakai **hybrid**:
   - **Referensi bernama** sebagai inspirasi (bukan rival): bepatrickdavid.com, dunks1980.com, lauren-waller.com, p5aholic.me, cristianoronaldo.com
   - **Pesaing di level kategori** (belum named): LinkedIn/CV, GitHub profile, portofolio developer-stack, designer/agency, landing freelance productized
2. **Prioritas pelajaran dari referensi terkunci (opsi D):**
   1. Clarity (Lauren-waller pattern)
   2. Presence (Patrick + Ronaldo-lite: rumah brand)
   3. Craft (Dunks + p5aholic sebagai edge, bukan identitas utama)
3. MVP mengutamakan clarity + soft presence; craft naik bertahap.

### Reason

- Selaras ADR-002 (brand primer + evaluasi founder/PO) dan ADR-004 (visibility → narrative → evaluasi): butuh kejelasan *dan* rumah brand, bukan salah satu saja.
- Craft experimental relevan sebagai diferensiator teknis/AI edge, tetapi berisiko salah framing creative-dev jika jadi prioritas pertama.
- Named rival belum ditentukan Boss Rezi; kategori cukup untuk positioning v0.1.

### Alternatives Considered

- A Clarity first only — ditolak; risk brand tidak memorable.
- B Presence first only — ditolak; risk spektakuler tanpa fit evaluation.
- C Craft edge first — ditolak; risk menjauh dari product builder / ICP founder-PO.
- Hybrid dengan prioritas D — diterima.

### Update — 2026-08-15

**karolinahess.com** (tier craft — tipografi & interaksi: pola Quick info tab/drawer, ritme copy About) dan **mazurbartek.com** (tier presence — tipografi besar + whitespace: layout About sapaan+foto, ketenangan komposisi Home) ditambahkan ke set referensi bernama di `competitor-analysis.md`, setelah dipakai berulang sebagai acuan arah seni sepanjang sesi mockup 2026-08-14/15 (Home, About, Quick info drawer).

Ini memakai jalur yang sudah diizinkan di dokumen tersebut sendiri (Competitive Risks: "Named competitor muncul belakangan → Draft boleh ditambah named set tanpa mengubah kerangka D"; Success Criteria #5) — bukan perubahan kerangka. Urutan prioritas **clarity → presence → craft** tidak berubah; kedua referensi baru mengisi slot presence/craft yang sudah ada, bukan menambah lapisan baru.

### Update — 2026-08-24

Implementasi craft R1 (ADR-025) memakai Hess/Mazur sebagai acuan **ritme, tipe oversized, interaksi rest/active, inertia scroll, dan pita “let’s connect”** — bukan palet, bukan Framer spectacle. Bukti karya di Home/Work tetap diferensiasi vs Mazur. Kerangka D tidak berubah.
