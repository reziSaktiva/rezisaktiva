# Baseline visual T-032.1

Acuan **T-037.6**. Bukan mockup HTML. Sumber: kode produksi `http://localhost:3000` (locale `en`), cookie `rz-theme`, `prefers-reduced-motion: reduce`. Diambil 2026-09-01.

## Viewport

| Kunci nama file | Ukuran |
| --------------- | ------ |
| `320` | 320 × 720 |
| `desktop` | 1440 × 900 |

Halaman = `fullPage`. Overlay (Contact, Quick Info, project sheet) = viewport saja.

## File

Pola: `{light\|dark}-{320\|desktop}-{home\|about\|work\|contact\|quick-info\|project-sheet}.png`

Project sheet = tile pertama di `/en/projects` (Social Media Management Platform).

Token computed: [`computed-tokens.json`](computed-tokens.json). Ringkasan juga di `COMPLETE_TASK.md` (entri 2026-09-01 T-032.1).

## Ulangi capture

Dev server harus hidup. Playwright tidak jadi dependency repo:

```bash
PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs BASE_URL=http://localhost:3000 node capture.mjs
```

Default `PLAYWRIGHT_MODULE` menunjuk install sementara `/tmp/pw-t032` (boleh diganti).
