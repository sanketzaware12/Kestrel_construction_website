# Kestrel Build & Engineering — Premium Theme v3 (compact)
Static site (HTML / CSS / vanilla JS). Run: `python3 -m http.server 8000`, open http://localhost:8000

**Palette:** Vanilla `#F8F1E8`, Dusty rose `#D9C5B8`, Mauve taupe `#887168`, Bronze `#A87852`; dark tones derived from mauve taupe (`#2F2623`, `#483A35`, `#5E4C44`). CSS variables at the top of `css/style.css`.
**Fonts:** Instrument Serif + Hanken Grotesk (Google Fonts, system fallbacks).

## Editing
- Phone / email / address, nav, header, footer, CTA: top of `js/main.js` (`PHONE`, `TEL`, `MAIL`, `ADDR`).
- Projects (names, locations, areas, photos): `js/projects.js`.
- Contact form: `js/contact.js`. On submit it opens WhatsApp with a formatted enquiry for +91 96999 38110 (`WA` constant). The visitor taps Send in WhatsApp.
- Photos are loaded from Unsplash by photo ID. To swap one, replace the ID in the page HTML / `projects.js`. If a photo cannot load, a blueprint-style panel shows instead of a broken image.
- Team portraits: dummy stock photos, falling back to `assets/images/l1-3.svg`. Replace with real staff photos.

## v3 changes
- Wider container (1400px) so there is no empty space on the left/right; every section is more compact (`--sp`, `--w` at the top of `css/style.css`).
- Buttons have hover effects only (no magnetic movement, no entrance animation). Contact form note under the submit button removed.
- New shapes: stat plaques (concave corners), service cards (framed image), values (pennant), safety cards (ID badge), project cards (glass caption, outline hover).
- Projects page uses a new bento layout (`lay()` in `js/projects.js`); home Featured work shows 4 projects.
- Services page uses expanding panels (vertical accordion on mobile).
- Mobile menu is a small glass drop-down with a close icon; mobile footer shows Services beside Company.
- If a stock photo fails to load, a local illustration from `assets/images/ph-*.svg` is shown instead of an empty frame.
