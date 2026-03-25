# Portfolio Redesign — Design Spec

## Overview
Complete rebuild of umairinayat.github.io from static HTML/CSS/JS to a Next.js + Tailwind CSS + Framer Motion portfolio. Deployed as static export on GitHub Pages.

## Tech Stack
- **Framework:** Next.js 14 (App Router, static export via `output: 'export'`)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Fonts:** Inter (body) + JetBrains Mono (code accents)
- **Deployment:** GitHub Pages via GitHub Actions (static export)
- **Theme:** Dark/Light mode toggle with `next-themes`

## Visual Design

### Color System
**Dark mode (default):** Deep navy (#0f172a) base with purple-to-blue-to-cyan gradient accents. Inspired by neural network / AI aesthetics.
- Background: `#0f172a` (slate-900)
- Surface: `rgba(255,255,255,0.03)` with subtle borders
- Primary gradient: `#8b5cf6 → #3b82f6 → #06b6d4` (violet → blue → cyan)
- Text: `#f8fafc` (primary), `#94a3b8` (muted)
- Accents: violet-400 `#a78bfa`, blue-400 `#60a5fa`, cyan-400 `#22d3ee`

**Light mode:** Clean whites with the same accent gradient.
- Background: `#ffffff`
- Surface: `#f8fafc` with light borders
- Same primary gradient for accents
- Text: `#0f172a` (primary), `#64748b` (muted)

### Typography
- Headings: Inter, 800 weight
- Body: Inter, 400/500
- Code/accents: JetBrains Mono
- Gradient text for key headings (name, section titles)

### Animations (Framer Motion)
- Scroll-triggered fade-in/slide-up for all sections
- Staggered children animations for grids and lists
- Count-up animation on stats
- Floating gradient orbs in hero (CSS animation)
- Page load entrance sequence (hero elements stagger in)
- Smooth section transitions
- Hover effects: scale, glow, border-color shift on cards

## Site Sections (9 total)

### 1. Navigation (Sticky)
- Logo: "UI." with violet accent dot
- Links: Home, About, Experience, Skills, Projects, Achievements, Contact
- Resume download button (gradient)
- Dark/Light mode toggle
- Mobile: hamburger → slide-in drawer
- Glassmorphism blur on scroll

### 2. Hero (Full viewport)
- Status badge: "Available for Opportunities"
- Greeting: "Hi, I'm"
- Name: "Umair Inayat" (large, bold)
- Title: "Computer Vision Engineer & AI Researcher" (gradient text)
- Description paragraph (2-3 sentences)
- CTA buttons: View Projects (gradient fill), Download Resume (outline)
- Social links: GitHub, LinkedIn, X, Kaggle
- Background: animated floating gradient orbs

### 3. Stats Bar
- 5 stats with scroll-triggered count-up animation
- 43+ Projects | 3.82 GPA | 8K+ LinkedIn Followers | 2 Competitions | 3 Merit Awards
- Each stat with gradient-colored number + label

### 4. About Me
- Two-column: text left, photo right
- Section label + heading + 2-3 paragraph summary
- Focus areas as tags (Computer Vision, NLP, LLMs, RAG Systems)
- Profile photo with gradient border ring effect
- Mention: CV Engineer at startup, research focus, open-source, MLSA, GDGoC

### 5. Experience & Education (Tabbed Timeline)
- 3 tabs: Experience | Education | Leadership
- **Experience tab:**
  - Computer Vision Engineer @ Startup (2026-Present)
  - Teaching Assistant @ UMT (Oct 2025-Present)
  - AI/ML Intern @ Texense (Jul-Sep 2025)
  - Teaching Assistant @ UMT (Mar 2024-Oct 2025)
  - Peer Mentor @ UMT (Nov 2023-Feb 2024)
- **Education tab:**
  - BS CS @ UMT (2022-2026), GPA 3.82
  - Dean's Award Fall 2023, Rector's Award Fall 2024, Merit Spring 2025
  - Pre-Engineering @ Punjab College (2020-2022)
- **Leadership tab:**
  - Beta Microsoft Student Ambassador (Jan 2024-Dec 2025)
  - Strategy Co-Lead @ MLSA Lahore
  - AI/ML Team Lead @ GDGoC UMT
  - Z.ai for Startups Program (2026)
- Vertical timeline with animated dots

### 6. Technical Skills
- 3-column grid of skill categories
- ML & AI: PyTorch, TensorFlow, Keras, Hugging Face, Computer Vision, NLP, Deep Learning, GenAI, Model Quantization, LangChain, LangGraph
- Development: Python, C++, JavaScript/TypeScript, Django, FastAPI, Flask, React, Next.js
- Tools & Infra: Docker, AWS, Azure, PostgreSQL, MongoDB, CUDA, Git, Jupyter
- Cards with category-specific gradient borders
- Tags within each card

### 7. Featured Projects
- Category filter tabs: All | Research | Products | Open Source | ML/DL
- **6 Flagship projects (large cards):**
  1. DeepContext — Hierarchical memory for AI agents (Python, FastAPI, React, PostgreSQL)
  2. XDenseQNet — Quantum-enhanced DenseNet121 for monkeypox classification (Research)
  3. AgentTrace — Observability for multi-agent AI systems (TypeScript)
  4. Reelmatic — SaaS YouTube Shorts generator (TypeScript)
  5. Specter-AI — Privacy-first AI screen/meeting copilot (TypeScript)
  6. EmotiEase — Mental health Flutter app with LLaMA 2 (Flutter, Python)
- **Compact grid for additional projects (~12 more):**
  - AI Text Detection with XAI, Humanizer (QLoRA), PostPilot-AI, CUDA 100 Days, MiniLangPP Compiler, Research Paper Analyzer, Retinal Vessel Segmentation (Vision Mamba), ViT from Scratch, Gender Classification (YOLO+EfficientNet), Satellite Imagery Detection, Flappy Bird NEAT/RL, Banking Management System
- Each card: title, description, tech tags, category badge, GitHub link
- Filter animation with Framer Motion layout transitions

### 8. Achievements & Certifications
- Two-column layout
- **Left — Competitions:**
  - TechnoVerse Comsat ML 2025: 3rd (66 tree species, 118k instances)
  - SofTech 2025 ML Challenge: 4th/5th (Hospital readmission, FAST Lahore)
- **Right — Awards & Certifications:**
  - Dean's Award (Fall 2023)
  - Rector's Award (Fall 2024, 4.0 GPA)
  - Merit Award (Spring 2025)
  - Z.ai for Startups Program (2026)
  - ML Specialization (Andrew Ng/Coursera)
  - Deep Learning Specialization (Coursera)
  - Data Scientist in Python (DataCamp)
  - MLOps Bootcamp

### 9. Contact + Footer
- Centered CTA: "Let's Build Something Together"
- Subtitle: "Open for CV/ML roles, research collaborations, and open-source projects"
- Buttons: Send Email (mailto), LinkedIn
- Footer: social links, copyright, "Built with Next.js, Tailwind & Framer Motion"

## SEO Strategy
- `<title>`: "Umair Inayat | Computer Vision Engineer & AI Researcher"
- Meta description targeting key terms
- Open Graph tags (title, description, image, url)
- Twitter Card tags
- JSON-LD structured data (Person schema)
- Canonical URLs
- `sitemap.xml` (auto-generated or manual)
- `robots.txt`
- Semantic HTML (proper heading hierarchy, landmarks)
- Alt text on images

## Responsive Design
- **Desktop:** Full layouts as designed (>1024px)
- **Tablet:** 2-column → 1-column where needed (768-1024px)
- **Mobile:** Single column, hamburger nav, stacked cards (<768px)
- Touch-optimized targets (min 44px)
- No custom cursor on mobile
- Stats bar: 5-across → 3+2 on tablet → 2+2+1 on mobile

## Accessibility
- ARIA labels on interactive elements (theme toggle, hamburger, filter tabs, timeline tabs)
- Focus management for mobile drawer (trap focus, restore on close)
- `prefers-reduced-motion` media query: disable Framer Motion animations
- Color contrast: verify muted text meets WCAG AA (min 4.5:1 for body text)
- Keyboard navigation: all tabs, filters, and buttons focusable and operable
- Skip-to-content link

## Performance
- Images: WebP format, lazy loading via `loading="lazy"` on below-fold images
- Profile photo: max 400x400, optimized
- Dynamic import Framer Motion for non-critical animations
- Fonts: `next/font/google` for self-hosted Inter + JetBrains Mono (no layout shift)

## Theme Implementation
- `next-themes` with `attribute="class"` to integrate with Tailwind `darkMode: 'class'`
- `suppressHydrationWarning` on `<html>` element to prevent FOUC
- `ThemeProvider` wraps app in root layout with `defaultTheme="dark"`
- Theme toggle button in navbar with sun/moon icon transition

## Deployment
- `next.config.js`: `output: 'export'`, `images: { unoptimized: true }`
- `basePath`: not needed (this is a `*.github.io` user site, deployed to root domain)
- GitHub Actions workflow: Node 20, `npm ci`, `npm run build`, deploy via `actions/deploy-pages`
- Cache `node_modules` via `actions/cache`
- Custom 404 page (`src/app/not-found.tsx`)

## File Structure
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, theme provider
│   │   ├── page.tsx            # Home page (all sections)
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── globals.css         # Tailwind imports + custom styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── GradientOrbs.tsx
│   │       ├── CountUp.tsx
│   │       └── ScrollReveal.tsx
│   ├── data/
│   │   ├── siteConfig.ts       # Name, title, social links, email, resume path, meta
│   │   ├── projects.ts         # All project data
│   │   ├── experience.ts       # Experience/education/leadership
│   │   ├── skills.ts           # Skills by category
│   │   └── achievements.ts     # Competitions, awards, certs
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── images/                 # Profile pic, project screenshots
│   ├── Umair_Resume.pdf
│   ├── sitemap.xml
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml
```
