# Ikeda Supermercados

```bash
npm install
npm run dev         # astro dev
npm run build       # only validation — no lint/typecheck scripts exist
npm run preview     # preview dist/ locally
npx wrangler pages deploy dist --project-name=ikeda-supermercados --branch=main --commit-dirty=true
```

**Stack:** Astro v7 · Tailwind CSS v4 (`@tailwindcss/vite`) · TypeScript strict · Cloudflare Pages (static)

## Design Tokens (`@theme` in `global.css`)

Use `navy`/`gold`/`cream`/`muted` for new work. Legacy `primary`/`secondary`/`surface` exist only for Navbar compatibility.

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#0f2a4a` | Sections, cards, headings |
| `--color-gold` | `#c8a24a` | Refined accent, hover states |
| `--color-cream` | `#faf7f0` | Warm section backgrounds |
| `--color-muted` | `#6b7280` | Body text |
| `--color-whatsapp` | `#25d366` | WhatsApp elements |

Utility classes in `global.css`: `.card`, `.card-hover`, `.btn-primary`, `.btn-secondary`, `.btn-gold`, `.btn-outline`, `.btn-outline-dark`, `.eyebrow`, `.divider-gold`, `.heading-display`, `.field-label`, `.field-input`, `.field-select`, `.field-textarea`, `.reveal*`, `.delay-*`, `.float-animation`, `.text-balance`, `.bg-navy-section`.

## Navbar (fixed, 120px)

- `fixed top-0 h-[120px]` with `will-change-transform` — **do not override** positioning on parent elements
- Mobile logo: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`
- Home page: transparent, becomes `bg-white/90 backdrop-blur-lg` on scroll > 50px
- Other pages: opaque white from load
- Internal pages hero MUST have `pt-[120px]` (or `pt-32 md:pt-40` if using `PageHero.astro`)
- Mobile menu has focus trapping + Escape-to-close — preserve when modifying

## iOS / Video

- Hero videos MUST have `playsinline`, `poster` attribute, and `transform: translateZ(0)`
- Layout: `viewport-fit=cover`, `apple-mobile-web-app-capable`, `black-translucent` status bar
- Safe-area inset support in `global.css`
- Videos: H.264 CRF 28, no audio, faststart flag

## Data

Store info lives in `src/data/lojas.ts` (single source). Import from there; do not duplicate.

## Forms (all pages)

No backend wired — forms are presentational. If wiring, add `action` attributes.

## Project layout

```
src/
├── components/   # 11 Astro components
├── data/         # lojas.ts (shared store data)
├── layouts/      # Layout.astro (SEO, OG, Twitter tags)
├── pages/        # 9 routes, file-based
└── styles/       # global.css (Tailwind + all utilities)
```

Dead components removed: `Hero.astro`, `CartaoFidelidade.astro`, `TrabalheConosco.astro` — do not recreate.
