# design-mockups — v4 "Monolith" (interactive)

Static HTML/CSS/JS direction prototype (v4: masthead nav + quiet dock, WebGL contour-field background, lerped smooth scroll, hover-blur project cards, fully rewritten copy): monochrome editorial look (oversized type, ink / paper / cream
bands, grayscale photography) with a small vanilla scroll/pointer engine in `shared.js`:
wordmark that shrinks into the nav, pinned scroll-scrubbed process, sticky title under overlapping
cards, scrubbed text, clip-path image reveals with parallax, custom cursor, magnetic CTA, curtain page
transitions, accordions, filters, hover previews, stacking cards.

Serve the repo root (`python3 -m http.server`) and open `design-mockups/home.html`.
Pages: `home.html`, `workflow.html`, `work.html` (grid + sticky title + floating nav), `work-case.html`, `contact.html` (sticky portrait + info panel + form). Content and images come from
`content/` and `public/`.

Status: during S-002 (Monolith redesign, ADR-052, ADR-053) the v5 mockups here are the working reference for redesign work until cutover (T-086). They are a reference, not a pixel-exact contract. Production code (`app/`) stays the visual source of truth for anything outside S-002 (ADR-024), and after cutover this folder returns to archive.
