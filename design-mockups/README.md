# design-mockups — v4 "Monolith" (interactive)

Static HTML/CSS/JS direction prototype (v4: masthead nav + quiet dock, WebGL contour-field background, lerped smooth scroll, hover-blur project cards, fully rewritten copy): monochrome editorial look (oversized type, ink / paper / cream
bands, grayscale photography) with a small vanilla scroll/pointer engine in `shared.js`:
wordmark that shrinks into the nav, pinned scroll-scrubbed process, sticky title under overlapping
cards, scrubbed text, clip-path image reveals with parallax, custom cursor, magnetic CTA, curtain page
transitions, accordions, filters, hover previews, stacking cards.

Serve the repo root (`python3 -m http.server`) and open `design-mockups/home.html`.
Pages: `home.html`, `workflow.html`, `work.html` (grid + sticky title + floating nav), `work-case.html`, `contact.html` (sticky portrait + info panel + form). Content and images come from
`content/` and `public/`.

Status: for Boss Rezi's review only. Production code (`app/`) stays the visual source of truth until
a direction is approved (ADR-024).
