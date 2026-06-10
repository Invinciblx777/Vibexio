# Vibexio.ai — Official Website

Production website for [Vibexio](https://vibexio.ai) — enterprise-grade AI, OCR, and custom software development. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion, fully ported from the original Vite/React site with all content, imagery, brand fonts, and animations preserved.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with typing animation, client logo marquee, core services, process, strategic edge, testimonials |
| **Inside** | `/inside` | Company story, mission/vision, principles, journey, team |
| **Marketplace** | `/ecosystem` | Product ecosystem — Clario, Kubyn, Edutech & Healthcare (coming soon) |
| **Clario** | `/clario` | AI-powered OCR & analytics product page |
| **Kubyn** | `/kubyn` | AI personal finance & risk intelligence product page |
| **AI Solutions** | `/aisolutions` | Core AI services, build flow, enterprise AI overview |
| **IT Solutions** | `/itsolutions` | Digital/IT services, design thinking, sector vision |
| **Pathways** | `/pathways` | Careers — open positions, hiring process, life at Vibexio, application form |
| **Collaborate** | `/collaborate` | Contact / partnership form with project details |
| **Privacy** | `/privacypolicies` | Privacy policy and terms & conditions |

## Tech

- **Next.js 16** App Router — every route statically prerendered, per-page SEO via `metadata` exports, sitemap at `/sitemap.xml`
- **Tailwind CSS v4** with the original Vibexio design system (`#5B7C99` / `#BECCDD` palette)
- **Framer Motion** — section animations plus a global page-transition template
- **Brand fonts** — Avenir LT Std family + Kollektif, self-hosted in `public/fonts`
- All site imagery in `public/images`, organized per page

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (all routes static)
npm start      # serve the production build
```

## Structure

```
src/
  app/          # Routes: thin server components exporting metadata + rendering views
  views/        # Page section components (home, clario, kubyn, ...)
  components/   # Navbar, Footer, FloatingMenu, icons, shared cards
public/
  images/       # All site imagery (webp)
  fonts/        # Avenir LT Std + Kollektif
```
