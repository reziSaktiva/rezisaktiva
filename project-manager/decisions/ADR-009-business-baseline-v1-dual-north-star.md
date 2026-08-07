# Decision ADR-009

### Title

Business Baseline v1.0: kunci `01-business/` + dual north star success metrics

### Status

Accepted

### Date

2026-08-07

### Decision

1. **Business Baseline v1.0 ditetapkan** untuk seluruh dokumen di `product-discovery/01-business/` (termasuk `pricing-strategy.md` sebagai N/A).
2. **Success metrics** memakai **dual north star** setara:
   - **NS-1** — brand recall / clarity (“Rezi = product builder (fullstack + AI edge)”)
   - **NS-2** — inbound berkualitas (kolaborasi / opportunity / project) tanpa hard sell
3. Traffic, engagement, dan analytics ringan adalah **health check**, bukan KPI utama / vanity north star.
4. Target numerik ketat **belum** dikunci; ditambahkan setelah situs live dan ada data Traction.
5. Perubahan material pada baseline bisnis setelah ini → **ADR baru** + revisi dokumen terdampak.

Paket keputusan yang terkunci bersama baseline ini (sudah Accepted sebelumnya): ADR-002, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008 (+ ADR-003 untuk privasi repo).

### Reason

- Seluruh dokumen `01-business/` sudah diisi dan disepakati (T-001.1–T-001.7); exit criteria fase Business terpenuhi.
- Dual north star menjaga model brand primer + soft inbound (ADR-002 / ADR-007) tanpa mengorbankan clarity demi volume kontak, atau sebaliknya.
- Menghindari vanity metrics selaras competitor lens clarity → presence → craft (ADR-006) dan anti-follower-KPI di target market (ADR-005).

### Alternatives Considered

- Brand clarity saja sebagai north star — ditolak; kurang sinyal “pintu terbuka” untuk soft inbound.
- Quality inbound saja sebagai north star — ditolak; risiko kejar volume kontak dan mengaburkan identitas.
- Scorecard vanity-heavy (pageview / award) — ditolak; bertentangan model nilai situs.
- Dual north star — diterima.
- Menunda baseline sampai angka keras ada — ditolak; angka spekulatif prematur; arah cukup untuk masuk fase Product.
