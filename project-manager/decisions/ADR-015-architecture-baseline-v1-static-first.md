# Decision ADR-015

### Title

Architecture Baseline v1.0: static-first SSG + konten di repo; kunci `05-architecture/`

### Status

Accepted

### Date

2026-08-11

### Decision

1. **Architecture Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/05-architecture/`.
2. **Bentuk sistem R1** = **Opsi A — Static-first (SSG) + konten di repository** (bukan SSR default, bukan headless CMS).
3. Paket dokumen:
   - `domain-model.md` — lean content/surface model; **DDD bounded context = N/A**
   - `database-strategy.md` — **N/A** (SoT konten = file di repo)
   - `application-layer.md` — SSG + entry/redirect locale selaras ADR-014
   - `integration-layer.md` — mailto + satelit LinkedIn/GitHub + geo/locale redirect; analytics opsional
   - `background-jobs.md` — **N/A**
   - `realtime-strategy.md` — **N/A**
   - `auth-architecture.md` — **N/A** (selaras ADR-011); preferensi locale ≠ auth
4. Tidak ada perubahan Must terhadap Product/User/UX Baseline (ADR-010–014).
5. Framework, hosting, CI, tokens → **06-engineering** (T-006); harus menghormati bentuk A.
6. Perubahan material setelah ini → **ADR baru** + revisi dokumen terdampak.

### Reason

- Portofolio Hybrid lean publik tidak membutuhkan DB, auth, jobs, atau realtime untuk memenuhi dual north star.
- SSG + konten di repo menjaga proporsi, destination cepat/shareable, dan authoring via git/deploy.
- File N/A tetap ada sebagai jejak keputusan (pola ADR-008 / ADR-011).

### Alternatives Considered

- **B — SSR/hybrid ringan sebagai default R1** — ditolak; kompleksitas runtime tanpa Must produk baru; geo/i18n dapat dipenuhi redirect edge + SSG.
- **C — Frontend + headless CMS** — ditolak untuk R1; overkill bagi pemilik tunggal yang kurasi via repo.
- Architecture Baseline v1.0 seperti di atas (A) — diterima.
