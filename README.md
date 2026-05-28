# Vibexio — Premium AI Company Website

A complete redesign of the Vibexio website, inspired by the clean, premium, professional aesthetic of Anthropic, OpenAI, DeepMind, and Mistral AI.

## 🏗️ What Was Rebuilt

All **10 pages** from the original Vibexio website have been rebuilt from scratch:

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with typing animation, industry marquee, features, products, stats, testimonials, CTA |
| **Inside Vibexio** | `/inside` | Mission, vision, values, team narrative |
| **Ecosystem** | `/ecosystem` | Products (Clario, Kubyn) & services (AI, IT) overview |
| **Clario AI** | `/clario` | AI document intelligence product page |
| **Kubyn** | `/kubyn` | Unified business platform product page |
| **AI Solutions** | `/aisolutions` | AI capabilities, industries, build process |
| **IT Solutions** | `/itsolutions` | IT services, design thinking, challenge/solution pairs |
| **Pathways** | `/pathways` | Careers, culture, hiring process, team |
| **Collaborate** | `/collaborate` | Contact methods and partnership info |
| **Privacy Policy** | `/privacypolicies` | Privacy policy and terms & conditions |

## 🚀 How to Run

```bash
# Navigate to the project directory
cd Vibexio

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Framer Motion** | Smooth animations and transitions |
| **next/font** | Optimized font loading (Inter + Sora) |

## 📁 Folder Structure

```
Vibexio/
├── public/               # Static assets (OG image, favicon, robots.txt)
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout (fonts, metadata, navbar, footer)
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Design system and global styles
│   │   ├── inside/       # Inside Vibexio page
│   │   ├── ecosystem/    # Ecosystem page
│   │   ├── clario/       # Clario AI product page
│   │   ├── kubyn/        # Kubyn product page
│   │   ├── aisolutions/  # AI Solutions page
│   │   ├── itsolutions/  # IT Solutions page
│   │   ├── pathways/     # Careers page
│   │   ├── collaborate/  # Contact page
│   │   └── privacypolicies/ # Legal page
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   └── ui/           # Reusable UI components
│   └── lib/
│       └── constants.ts  # All site data, content, and configuration
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 📝 Content Preserved from Original

All original content has been preserved including:

- **SEO metadata** — titles, descriptions, OG tags, Twitter cards, geo meta
- **Navigation structure** — same routes, dropdown structure, mobile menu
- **All page content** — headings, descriptions, feature cards, stats
- **Contact information** — email, phone, WhatsApp, social media links
- **Product details** — Clario AI and Kubyn features and descriptions
- **Service descriptions** — AI and IT solutions details
- **Testimonials** — all 5 client testimonials
- **Career content** — why join, culture, hiring process, team members
- **Legal content** — privacy policy and terms & conditions
- **Footer** — addresses, social links, copyright, "Built from Tamil Nadu" tagline

## 🎨 Design Direction

- **Dark premium theme** — zinc-950 base with subtle vibexio accent blues
- **Gradient text effects** — for headings and emphasis
- **Dot-grid backgrounds** — subtle texture for depth
- **Glass/blur navbar** — transparent to blurred on scroll
- **Animated sections** — scroll-triggered fade-up animations
- **Hover glow effects** — subtle border glow on interactive cards
- **Responsive design** — mobile-first, works on all screen sizes
- **Semantic HTML** — accessible, clean markup

## ⚡ Production Build

```bash
npm run build
npm start
```
