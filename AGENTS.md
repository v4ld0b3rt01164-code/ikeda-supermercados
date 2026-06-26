# AGENTS.md - Ikeda Supermercados

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project Structure

```
ikeda-site/
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── campanhas/
│   │   ├── cartao-fidelidade/
│   │   ├── contato/
│   │   ├── institucional/
│   │   ├── lojas/
│   │   ├── ofertas/
│   │   ├── receitas/
│   │   └── trabalhe-conosco/
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-3d.png
│   │   ├── ifood.png
│   │   └── ikeda.jpg
│   ├── hero-pc-compressed.mp4
│   └── hero-mobile-compressed.mp4
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Tech Stack

- **Framework**: Astro v7
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages

## Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
npx wrangler pages deploy dist --project-name=ikeda-supermercados --branch=main --commit-dirty=true
```

## Design System

### Colors
- **Primary (Azul Royal)**: `#1e40af`
- **Secondary (Amarelo)**: `#facc15`
- **Text**: `#0a0a0a`
- **Background**: `#ffffff`

### Fonts
- **Main**: DM Sans (400, 500, 600, 700)
- **Hero**: Dancing Script (handwritten style)

### Components
- Cards with yellow border (`3px solid #facc15`)
- Large shadows and hover effects (scale 1.05)
- Buttons with gradient backgrounds

## Key Features

1. **Hero Section**: Video background (different for mobile/desktop)
2. **Responsive Navigation**: Transparent on home (scroll effect), white on other pages
3. **Mobile Menu**: Full-screen overlay with hamburger toggle
4. **Video Optimization**: Compressed MP4 with H.264, CRF 23, no audio

## Deployment

The site is deployed to Cloudflare Pages:
- **Production URL**: https://ikeda-supermercados.pages.dev
- **Production Branch**: main
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Content

- **Receitas**: 4 real recipes from original site
- **Lojas**: 2 physical stores (Junqueirópolis and Dracena)
- **Ofertas**: FlipHTML5 iframe for weekly flyer
- **Campanhas**: 4 historical campaigns
- **Institucional**: Full company history since 1941

## Contact Information

- **WhatsApp**: +55 18 99737-4186
- **iFood**: https://www.ifood.com.br/delivery/dracena-sp/supermercados-ikeda-centro/521de33b-9449-43be-9c61-97b76c4d78d2
- **Instagram**: @stilluspropaganda
- **Facebook**: facebook.com/ikedaDracena

## Store Locations

### Junqueirópolis
- **Address**: Rua Rui Barbosa, 481
- **Phone**: (18) 3841-1326
- **Hours**: Seg-Sex: 07:30 - 21:00, Sáb: 07:30 - 18:00

### Dracena
- **Address**: Rua Messias Ferreira da Palma, 266
- **Phone**: (18) 3822-3272
- **Hours**: Seg-Sex: 07:30 - 21:00, Sáb: 07:30 - 18:00, Dom: 08:00 - 13:00
