# AGENTS.md - Ikeda Supermercados

## Quick Start

```bash
npm install
astro dev --background    # Start dev server in background
astro dev stop            # Stop background server
astro dev status          # Check server status
astro dev logs            # View server logs
```

## Build & Deploy

```bash
npm run build                           # Production build to dist/
npm run preview                         # Preview build locally
npx wrangler pages deploy dist --project-name=ikeda-supermercados --branch=main --commit-dirty=true
```

## Tech Stack

- **Astro v7** with Tailwind CSS v4 (via @tailwindcss/vite)
- **TypeScript** (strict mode, extends astro/tsconfigs/strict)
- **Cloudflare Pages** deployment (wrangler.toml configured)
- **No lint/typecheck scripts** defined — no eslint/prettier configured

## Project Structure

```
src/
├── components/        # Astro components (Navbar, Footer, Hero, Features, etc.)
├── layouts/Layout.astro
├── pages/             # File-based routing (one dir per route)
└── styles/global.css  # Tailwind imports + design tokens + custom utilities
public/
├── images/
│   ├── logo.png, logo-3d.png, ifood.png, ikeda.jpg
│   ├── campanhas/     # Local copies of campaign images
│   ├── receitas/      # Local copies of recipe images
│   └── institucional/ # Local copies of institutional images
├── hero-mobile-compressed.mp4   # ~3.2 MB, H.264 CRF 28
└── hero-pc-compressed.mp4       # ~2.5 MB, H.264 CRF 28
```

## Critical Gotchas

### Navbar Mobile (fixed positioning)
- Navbar uses `fixed top-0` with `will-change-transform` — do NOT add `position: relative` or `position: absolute` to parent elements
- Logo uses `absolute` positioning with `top-1/2 -translate-y-1/2` on mobile for centering
- Home page navbar is transparent by default, becomes opaque on scroll via JS
- Hero section on index.astro MUST have `pt-[120px]` to account for fixed navbar height

### iOS/iPhone Compatibility
- All hero videos must have `playsinline` attribute
- Video element has `transform: translateZ(0)` for GPU compositing
- Layout has `viewport-fit=cover` and safe-area-inset support
- `apple-mobile-web-app-capable` and `black-translucent` status bar configured

### Performance
- All images below the fold use `loading="lazy"`
- FlipHTML5 iframe (ofertas) uses IntersectionObserver lazy loading
- External images are served locally (not hotlinked from ikedasupermercados.com.br)
- Videos compressed with ffmpeg: H.264, CRF 28, no audio, faststart flag
- Google Fonts: DM Sans (400-800) + Dancing Script (400-700) with display=swap

### Design Tokens (global.css @theme)
```
--color-primary: #1e40af    (Azul Royal — navbar, headings)
--color-secondary: #facc15  (Amarelo — accents, borders, buttons)
--color-navy: #0f2a4a       (Dark navy — sections, cards)
--color-gold: #c8a24a       (Gold — refined accent)
--color-cream: #faf7f0      (Warm background)
--color-muted: #6b7280      (Gray text)
```

### Content Pages
- **Campanhas**: 4 campaigns with images from `/public/images/campanhas/`
- **Receitas**: 4 recipes with images from `/public/images/receitas/`
- **Institucional**: 3 images from `/public/images/institucional/`
- **Ofertas**: FlipHTML5 iframe (`online.fliphtml5.com`)
- **Contato/Trabalhe Conosco/Cartão Fidelidade**: Forms (no backend — form submission not wired)

## Deployment

- **Production URL**: https://ikeda-supermercados.pages.dev
- **GitHub repo**: https://github.com/v4ld0b3rt0164-code/ikeda-supermercados
- **Branch**: `master` (local) → `main` (Cloudflare)
