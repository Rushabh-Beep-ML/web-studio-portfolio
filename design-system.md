# WEBNITY Design System (Milestone 2, draft)

Source of truth: `frontend/src/styles/tokens.css`. Colours and sizes are estimates from the Framer "Devcraft" screenshots and need verification.

## Principles
- Black canvas, one teal accent, white text. Gradients only on the hero text, primary buttons, and the CTA banner.
- Two-tone headings: white text with one teal keyword.
- Motion is short and purposeful (fade/rise on scroll, hover lift). All motion respects `prefers-reduced-motion`.

## Components (variants)
- **Button:** `primary` (teal gradient, arrow icon), `secondary` (dark surface, subtle border), `ghost` (text only). Focus ring: 2px accent outline.
- **Badge:** pill, accent-soft fill, accent text; sits above every section heading.
- **Card:** `service` (icon circle, title, text), `team` (photo placeholder, name, role, bio, tags, socials), `project` (image with overlay title and category), `timeline` (accent gradient border and corner glow), `tech` (icon and label).
- **Form fields:** surface fill, line border, accent border on focus, danger border and message on error.

## Responsive rules
- Desktop (>=1200px): 3-column grids, alternating timeline, inline nav.
- Tablet (810-1199px): 2 columns, services as horizontal rows, hamburger nav with CTA visible.
- Mobile (<810px): single column, centred footer, stats stacked.
- These are recomposed layouts, not shrunken desktop.

## Accessibility
- Muted text (#9aa3ad on black) must stay at or above 4.5:1 contrast; verify in QA.
- Visible focus states, keyboard-operable nav drawer, semantic landmarks.
