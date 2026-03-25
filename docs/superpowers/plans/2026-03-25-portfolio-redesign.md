# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild umairinayat.github.io as a Next.js + Tailwind + Framer Motion portfolio with neural gradient theme, dark/light mode, 9 sections, full SEO, and GitHub Pages deployment.

**Architecture:** Single-page portfolio app using Next.js 14 App Router with static export. All content lives in TypeScript data files. Framer Motion handles scroll animations. `next-themes` manages dark/light mode with Tailwind's `darkMode: 'class'`. Deployed via GitHub Actions to GitHub Pages.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3.4, Framer Motion 11, next-themes, Lucide React, next/font/google (Inter + JetBrains Mono)

**Spec:** `docs/superpowers/specs/2026-03-25-portfolio-redesign-design.md`

---

## Chunk 1: Project Scaffolding & Configuration

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `.gitignore`

- [ ] **Step 1: Clean existing static files**

Move old site files out of the way. The old `index.html`, `styles.css`, `script.js`, `projects/`, and `assets/` will be replaced.

```bash
# Back up profile image
mkdir -p public/images
cp assets/imgs/my_photo.png public/images/profile.png 2>/dev/null || true
cp assets/imgs/Umair_Resume.pdf public/Umair_Resume.pdf 2>/dev/null || true

# Remove old site files
rm -f index.html styles.css script.js
rm -rf projects/ assets/
```

- [ ] **Step 2: Initialize Next.js with TypeScript and Tailwind**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm
```

If the directory is not empty, use `--yes` flag or answer prompts. This creates the scaffolding.

- [ ] **Step 3: Install dependencies**

```bash
npm install framer-motion next-themes lucide-react
```

- [ ] **Step 4: Configure next.config.js for static export**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 5: Configure tailwind.config.ts**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-border": "var(--surface-border)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 6: Write globals.css with CSS variables for dark/light**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #ffffff;
    --foreground: #0f172a;
    --surface: #f8fafc;
    --surface-border: #e2e8f0;
    --muted: #64748b;
  }

  .dark {
    --background: #0f172a;
    --foreground: #f8fafc;
    --surface: rgba(255, 255, 255, 0.03);
    --surface-border: rgba(255, 255, 255, 0.06);
    --muted: #94a3b8;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }
}

@layer utilities {
  .gradient-text {
    @apply bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent;
  }

  .gradient-border {
    @apply border border-violet-500/20;
  }
}
```

- [ ] **Step 7: Write root layout.tsx with fonts and theme provider**

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Umair Inayat | Computer Vision Engineer & AI Researcher",
  description:
    "Portfolio of Umair Inayat — Computer Vision Engineer & AI Researcher specializing in PyTorch, LLMs, RAG systems, and production AI. 43+ projects, competition placements, and open-source contributions.",
  keywords: [
    "Umair Inayat",
    "Computer Vision Engineer",
    "AI Researcher",
    "Machine Learning",
    "PyTorch",
    "Deep Learning",
    "NLP",
    "LLMs",
    "Portfolio",
  ],
  authors: [{ name: "Umair Inayat" }],
  openGraph: {
    title: "Umair Inayat | Computer Vision Engineer & AI Researcher",
    description:
      "Building production AI systems at the edge. 43+ projects in CV, NLP, LLMs, and full-stack AI.",
    url: "https://umairinayat.github.io",
    siteName: "Umair Inayat Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Inayat | CV Engineer & AI Researcher",
    description:
      "Building production AI systems at the edge. 43+ projects in CV, NLP, LLMs.",
    creator: "@umairstuff",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 8: Create ThemeProvider component**

Create: `src/components/ThemeProvider.tsx`

```tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

- [ ] **Step 9: Write minimal page.tsx placeholder**

```tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-content h-screen">
        <h1 className="text-4xl font-bold gradient-text">Building...</h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 10: Verify build works**

```bash
npm run build
```

Expected: Build succeeds, `out/` directory created with static HTML.

- [ ] **Step 11: Commit scaffolding**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind, Framer Motion, and next-themes"
```

---

### Task 2: Create data files

**Files:**
- Create: `src/data/siteConfig.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/achievements.ts`

- [ ] **Step 1: Create siteConfig.ts**

```ts
export const siteConfig = {
  name: "Umair Inayat",
  title: "Computer Vision Engineer & AI Researcher",
  description:
    "Building production AI systems at the edge. Specializing in computer vision, NLP, and large language models with 43+ projects shipped.",
  email: "umairinayat975@gmail.com",
  location: "Lahore, Pakistan",
  resumePath: "/Umair_Resume.pdf",
  social: {
    github: "https://github.com/umairinayat",
    linkedin: "https://www.linkedin.com/in/umairinayat/",
    twitter: "https://x.com/umairstuff",
    kaggle: "https://www.kaggle.com/umairinayat",
  },
  stats: [
    { label: "Projects", value: 43, suffix: "+" },
    { label: "GPA", value: 3.82, decimals: 2 },
    { label: "LinkedIn", value: 8, suffix: "K+" },
    { label: "Competitions", value: 2 },
    { label: "Merit Awards", value: 3 },
  ],
};
```

- [ ] **Step 2: Create projects.ts with all project data**

Include 6 flagship projects + 12 additional projects. Each project has: id, title, description, tech array, category (research | product | opensource | ml | academic), github url, live url (optional), featured boolean.

```ts
export type ProjectCategory = "research" | "product" | "opensource" | "ml" | "academic";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "deepcontext",
    title: "DeepContext",
    description:
      "Hierarchical memory system for AI agents with knowledge graphs, hybrid retrieval (vector + keyword + graph), and Ebbinghaus forgetting curve decay. Full-stack: Python/FastAPI backend with 188 tests, React dashboard.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "LangChain"],
    category: "opensource",
    github: "https://github.com/umairinayat/DeepContext",
    featured: true,
  },
  {
    id: "xdenseqnet",
    title: "XDenseQNet",
    description:
      "Quantum-Enhanced DenseNet121 for Monkeypox Skin Lesion Classification. Research paper combining quantum computing with deep learning for medical image analysis.",
    tech: ["Python", "PyTorch", "Quantum ML", "DenseNet"],
    category: "research",
    github: "https://github.com/umairinayat/XDenseQNet",
    featured: true,
  },
  {
    id: "agenttrace",
    title: "AgentTrace",
    description:
      "Open-source observability platform for multi-agent AI systems. See exactly what your agents are doing — every step, every decision, every cost.",
    tech: ["TypeScript", "React", "Node.js"],
    category: "opensource",
    github: "https://github.com/umairinayat/AgentTrace",
    featured: true,
  },
  {
    id: "reelmatic",
    title: "Reelmatic",
    description:
      "Full-stack SaaS that generates complete YouTube Shorts from a URL or idea. Produces 9:16 MP4, SEO description, hashtags, and thumbnail.",
    tech: ["TypeScript", "Next.js", "AI", "FFmpeg"],
    category: "product",
    github: "https://github.com/umairinayat/Reelmatic",
    featured: true,
  },
  {
    id: "specter-ai",
    title: "Specter AI",
    description:
      "Open-source, privacy-first AI screen & meeting copilot. Transparent always-on-top overlay invisible to screen share, real-time OCR, audio transcription.",
    tech: ["TypeScript", "Electron", "OCR", "AI"],
    category: "product",
    github: "https://github.com/umairinayat/Specter-AI",
    featured: true,
  },
  {
    id: "emotiease",
    title: "EmotiEase",
    description:
      "Mental health mobile app with personalized AI chatbot. Fine-tuned LLaMA 2 on therapist-client data and quantized for efficient mobile deployment.",
    tech: ["Flutter", "Python", "FastAPI", "LLaMA 2", "Azure"],
    category: "ml",
    github: "https://github.com/umairinayat/Emotiease",
    featured: true,
  },
  {
    id: "ai-text-detection",
    title: "AI Text Detection with XAI",
    description:
      "XAI framework achieving 98.4% binary and 86.8% 12-class accuracy using RoBERTa embeddings with stylometric features, LIME, SHAP, and Captum.",
    tech: ["Python", "PyTorch", "RoBERTa", "LIME", "SHAP"],
    category: "research",
    github: "https://github.com/umairinayat/ai-text-detection-lime-shap",
    featured: false,
  },
  {
    id: "humanizer",
    title: "Humanizer",
    description:
      "QLoRA fine-tuning pipeline for natural text generation. Downloads human-written text from 5 HuggingFace datasets, trains LoRA adapter on Llama 3.2 3B.",
    tech: ["Python", "PyTorch", "QLoRA", "Llama 3.2"],
    category: "ml",
    github: "https://github.com/umairinayat/humanizer",
    featured: false,
  },
  {
    id: "cuda-100-days",
    title: "CUDA 100 Days",
    description:
      "GPU kernel programming challenge. Writing CUDA kernels from scratch to build deep understanding of GPU computing.",
    tech: ["CUDA", "C++", "GPU Programming"],
    category: "ml",
    github: "https://github.com/umairinayat/cuda-100-days",
    featured: false,
  },
  {
    id: "minilangpp",
    title: "MiniLang++ Compiler",
    description:
      "Full C++ compiler with all 6 phases: lexical analysis, parsing, semantic analysis, IR generation, optimization, and x86-64 assembly output. 4000+ LOC.",
    tech: ["Python", "Compiler Design", "x86-64"],
    category: "academic",
    github: "https://github.com/umairinayat/MiniLangPP-Compiler",
    featured: false,
  },
  {
    id: "research-paper-analyzer",
    title: "Research Paper Analyzer",
    description:
      "AI-powered web app integrating ArXiv, Google Scholar, PubMed, IEEE for comprehensive paper search with LangChain and Groq API.",
    tech: ["Django", "Python", "LangChain", "Groq API", "PostgreSQL"],
    category: "product",
    github: "https://github.com/umairinayat/paper-parser-",
    featured: false,
  },
  {
    id: "retinal-vessel",
    title: "Retinal Vessel Segmentation",
    description:
      "Deep learning with Vision Mamba and UNETR architecture for retinal vessel segmentation in medical imaging.",
    tech: ["Python", "PyTorch", "Vision Mamba", "UNETR"],
    category: "research",
    github: "https://github.com/umairinayat/Retinal-vessel-segmentation-using-deep-learning-Vision-Mamaba-with-UNETR",
    featured: false,
  },
  {
    id: "vit-from-scratch",
    title: "Vision Transformer from Scratch",
    description:
      "PyTorch ViT implementation with Tiny/Small/Base variants, Mixup/CutMix augmentation, LR scheduling on CIFAR-100.",
    tech: ["Python", "PyTorch", "ViT", "CIFAR-100"],
    category: "ml",
    github: "https://github.com/umairinayat/vit-from-scratch-cifar-100-dataset",
    featured: false,
  },
  {
    id: "gender-classification",
    title: "Gender Classification",
    description:
      "YOLOv11 face detection + EfficientNet V2 classification with MTCNN preprocessing and real-time pipeline.",
    tech: ["Python", "YOLO", "EfficientNet", "MTCNN"],
    category: "ml",
    github: "https://github.com/umairinayat/gender-classification-yolo-efficientnet",
    featured: false,
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    description:
      "Multilingual document understanding with translation, NER, sentiment analysis & RAG-based Q&A.",
    tech: ["Python", "NLP", "RAG", "Translation"],
    category: "ml",
    github: "https://github.com/umairinayat/document-intelligence",
    featured: false,
  },
  {
    id: "postpilot-ai",
    title: "PostPilot AI",
    description:
      "AI-powered social media post generation and scheduling tool.",
    tech: ["TypeScript", "AI", "Social Media"],
    category: "product",
    github: "https://github.com/umairinayat/PostPilot-AI",
    featured: false,
  },
  {
    id: "flappy-bird-neat",
    title: "Flappy Bird NEAT & RL",
    description:
      "Training agents to play Flappy Bird using NEAT evolutionary algorithm vs reinforcement learning baseline.",
    tech: ["Python", "NEAT", "Reinforcement Learning", "Pygame"],
    category: "ml",
    github: "https://github.com/umairinayat/flappy-bird-neat-rl",
    featured: false,
  },
  {
    id: "banking-system",
    title: "Banking Management System",
    description:
      "OOP semester project with full banking operations. 32 stars on GitHub.",
    tech: ["C++", "OOP"],
    category: "academic",
    github: "https://github.com/umairinayat/Banking-management-system",
    featured: false,
  },
];
```

- [ ] **Step 3: Create experience.ts**

```ts
export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "experience" | "education" | "leadership";
}

export const timelineItems: TimelineItem[] = [
  {
    title: "Computer Vision Engineer",
    organization: "Startup",
    period: "2026 — Present",
    description:
      "Building production computer vision systems and AI pipelines at a fast-paced startup.",
    type: "experience",
  },
  {
    title: "Teaching Assistant",
    organization: "University of Management and Technology",
    period: "Oct 2025 — Present",
    description:
      "TA for Deep Learning and Theory of Automata. Assisting with labs in Python, PyTorch, and TensorFlow. Conducting graded assessments and one-on-one guidance for 100+ students.",
    type: "experience",
  },
  {
    title: "AI/ML Intern",
    organization: "Texense",
    period: "Jul 2025 — Sep 2025",
    description:
      "Contributed to production-level AI/ML solutions. Worked on model development, optimization, and deployment in a startup environment.",
    type: "experience",
  },
  {
    title: "Teaching Assistant",
    organization: "University of Management and Technology",
    period: "Mar 2024 — Oct 2025",
    description:
      "Assisted in teaching OOP, Data Structures, Database Systems, ML/DL, and Operating Systems. Mentored students in complex programming concepts.",
    type: "experience",
  },
  {
    title: "Peer Mentor",
    organization: "University of Management and Technology",
    period: "Nov 2023 — Feb 2024",
    description:
      "Peer tutor for Programming Fundamentals in Fall 2023.",
    type: "experience",
  },
  {
    title: "BS Computer Science",
    organization: "University of Management and Technology",
    period: "2022 — 2026",
    description:
      "GPA: 3.82/4.0. Dean's Award (Fall 2023), Rector's Award (Fall 2024, 4.0 GPA), Merit Award (Spring 2025). Coursework: ML/DL, NLP, Data Structures, SE, Database, OS.",
    type: "education",
  },
  {
    title: "Pre-Engineering",
    organization: "Punjab College of Engineering & Technology",
    period: "2020 — 2022",
    description: "High school diploma with Grade A in Pre-Engineering.",
    type: "education",
  },
  {
    title: "Beta Microsoft Student Ambassador",
    organization: "Microsoft",
    period: "Jan 2024 — Dec 2025",
    description:
      "Global campus leader helping create tech communities and share technical knowledge. Organized Connect Lahore MLSA Summit uniting 15 universities.",
    type: "leadership",
  },
  {
    title: "Strategy Co-Lead",
    organization: "MLSA Lahore",
    period: "2025",
    description:
      "Driving impactful initiatives and creating experiences as Strategy Co-Lead at Microsoft Learn Student Ambassadors Lahore chapter.",
    type: "leadership",
  },
  {
    title: "AI/ML Team Lead",
    organization: "Google Developer Group on Campus — UMT",
    period: "2026",
    description:
      "Leading the AI/ML team helping students understand, build, and apply machine learning beyond theory.",
    type: "leadership",
  },
  {
    title: "Z.ai for Startups Program",
    organization: "Z.ai",
    period: "2026",
    description:
      "Accepted into Z.ai for Startups with DeepContext. Receiving dedicated technical support, priority API access, and early model access.",
    type: "leadership",
  },
];
```

- [ ] **Step 4: Create skills.ts**

```ts
export interface SkillCategory {
  title: string;
  color: "violet" | "blue" | "cyan";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "ML & AI",
    color: "violet",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Generative AI",
      "Model Quantization",
      "LangChain",
      "LangGraph",
      "YOLO",
    ],
  },
  {
    title: "Development",
    color: "blue",
    skills: [
      "Python",
      "C++",
      "TypeScript",
      "JavaScript",
      "Django",
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
      "Flutter",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Infrastructure",
    color: "cyan",
    skills: [
      "Docker",
      "AWS",
      "Azure",
      "PostgreSQL",
      "MongoDB",
      "CUDA",
      "Git",
      "Jupyter",
      "Google Colab",
      "Linux",
    ],
  },
];
```

- [ ] **Step 5: Create achievements.ts**

```ts
export interface Competition {
  title: string;
  position: string;
  description: string;
  year: number;
}

export interface Award {
  title: string;
  subtitle: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export const competitions: Competition[] = [
  {
    title: "TechnoVerse Comsat ML Competition",
    position: "3rd",
    description: "66 tree species classification with 118k instances",
    year: 2025,
  },
  {
    title: "SofTech 2025 ML Challenge",
    position: "4th",
    description: "Hospital readmission prediction — FAST Lahore, national-level",
    year: 2025,
  },
];

export const awards: Award[] = [
  { title: "Dean's Award", subtitle: "Fall 2023" },
  { title: "Rector's Award", subtitle: "Fall 2024 — 4.0 GPA" },
  { title: "Merit Award", subtitle: "Spring 2025" },
  { title: "Z.ai for Startups", subtitle: "Accepted 2026" },
];

export const certifications: Certification[] = [
  { title: "Machine Learning Specialization", issuer: "Andrew Ng / Coursera" },
  { title: "Deep Learning Specialization", issuer: "Coursera" },
  { title: "Data Scientist in Python", issuer: "DataCamp" },
  { title: "MLOps Bootcamp", issuer: "10+ End-to-End ML Projects" },
];
```

- [ ] **Step 6: Commit data files**

```bash
git add src/data/
git commit -m "feat: add all content data files (projects, experience, skills, achievements, config)"
```

---

## Chunk 2: Shared UI Components

### Task 3: ScrollReveal wrapper

**Files:**
- Create: `src/components/ui/ScrollReveal.tsx`

- [ ] **Step 1: Create ScrollReveal**

A reusable Framer Motion wrapper that fades in children on scroll entry.

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/ScrollReveal.tsx
git commit -m "feat: add ScrollReveal animation wrapper"
```

### Task 4: SectionHeading component

**Files:**
- Create: `src/components/ui/SectionHeading.tsx`

- [ ] **Step 1: Create SectionHeading**

```tsx
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="text-center mb-16">
      <p className="text-violet-400 text-sm uppercase tracking-[3px] mb-3 font-mono">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/SectionHeading.tsx
git commit -m "feat: add SectionHeading component"
```

### Task 5: CountUp component

**Files:**
- Create: `src/components/ui/CountUp.tsx`

- [ ] **Step 1: Create CountUp with scroll trigger**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ end, decimals = 0, suffix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/CountUp.tsx
git commit -m "feat: add CountUp animation component"
```

### Task 6: GradientOrbs background

**Files:**
- Create: `src/components/ui/GradientOrbs.tsx`

- [ ] **Step 1: Create GradientOrbs**

```tsx
export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/GradientOrbs.tsx
git commit -m "feat: add GradientOrbs background component"
```

### Task 7: ThemeToggle component

**Files:**
- Create: `src/components/ThemeToggle.tsx`

- [ ] **Step 1: Create ThemeToggle**

```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface border border-surface-border hover:border-violet-500/30 transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 text-violet-500" />
      )}
    </button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ThemeToggle.tsx
git commit -m "feat: add dark/light theme toggle"
```

---

## Chunk 3: Section Components (Part 1 — Navbar, Hero, Stats, About)

### Task 8: Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Build Navbar with mobile drawer**

Full sticky navbar with glassmorphism, desktop links, mobile hamburger with slide-in drawer, resume button, and theme toggle. Smooth scroll to section IDs.

The component should:
- Be `"use client"` (needs state for mobile menu and scroll position)
- Track scroll position for background blur effect
- Have links: Home, About, Experience, Skills, Projects, Achievements, Contact
- Include ThemeToggle and Resume download button
- Mobile: hamburger icon → animated slide-in drawer with backdrop
- Use `framer-motion` AnimatePresence for drawer animation
- Smooth scroll via `scrollIntoView({ behavior: "smooth" })`

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add responsive Navbar with mobile drawer and theme toggle"
```

### Task 9: Hero section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Build Hero section**

Full viewport hero with:
- GradientOrbs background
- Status badge: "Available for Opportunities"
- Staggered Framer Motion entrance animations
- Name (large), title (gradient text), description
- CTA buttons: View Projects + Download Resume
- Social icon links (GitHub, LinkedIn, X, Kaggle) using Lucide icons
- Data from siteConfig

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero section with animations and gradient orbs"
```

### Task 10: Stats section

**Files:**
- Create: `src/components/Stats.tsx`

- [ ] **Step 1: Build Stats bar**

Horizontal bar with 5 stats using CountUp component. Each stat has gradient-colored number and label. Responsive: 5-col → 3+2 → 2+2+1.

- [ ] **Step 2: Commit**

```bash
git add src/components/Stats.tsx
git commit -m "feat: add Stats section with scroll-triggered count-up"
```

### Task 11: About section

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Build About section**

Two-column layout: text left, photo right. Professional summary covering: CV Engineer at startup, research focus (XAI, medical imaging), open-source (DeepContext, AgentTrace), MLSA, GDGoC lead. Focus area tags. Profile photo with gradient border ring.

- [ ] **Step 2: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add About section with profile and focus tags"
```

---

## Chunk 4: Section Components (Part 2 — Experience, Skills, Projects)

### Task 12: Experience section

**Files:**
- Create: `src/components/Experience.tsx`

- [ ] **Step 1: Build tabbed timeline**

3 tabs (Experience | Education | Leadership) with vertical timeline. Each tab filters `timelineItems` by type. Animated tab switching. Timeline dots with gradient colors. ScrollReveal on each entry.

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.tsx
git commit -m "feat: add Experience section with tabbed timeline"
```

### Task 13: Skills section

**Files:**
- Create: `src/components/Skills.tsx`

- [ ] **Step 1: Build skill grid**

3-column responsive grid. Each card has category-specific gradient border (violet/blue/cyan). Skills as tags inside cards. Hover glow effect. ScrollReveal staggered entrance.

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: add Skills section with animated grid"
```

### Task 14: Projects section

**Files:**
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Build project showcase with filters**

Category filter tabs: All | Research | Products | Open Source | ML/DL. Featured projects as large cards (top section). Non-featured as compact grid. Framer Motion `layout` animations for filter transitions. Each card: title, description, tech tags, category badge, GitHub link. AnimatePresence for enter/exit.

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add Projects section with category filters and animations"
```

---

## Chunk 5: Section Components (Part 3 — Achievements, Contact, Footer) + Assembly

### Task 15: Achievements section

**Files:**
- Create: `src/components/Achievements.tsx`

- [ ] **Step 1: Build achievements layout**

Two-column: competitions left (with position badges), awards + certifications right. Cards with subtle gradient backgrounds. ScrollReveal animations.

- [ ] **Step 2: Commit**

```bash
git add src/components/Achievements.tsx
git commit -m "feat: add Achievements section with competitions and certifications"
```

### Task 16: Contact section

**Files:**
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Build Contact CTA**

Centered section: heading, subtitle, email + LinkedIn buttons. Gradient background effect.

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: add Contact CTA section"
```

### Task 17: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Build Footer**

Social links, copyright, "Built with Next.js, Tailwind & Framer Motion". Simple, clean.

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer component"
```

### Task 18: Assemble page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Import all sections and compose the page**

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble all sections into homepage"
```

---

## Chunk 6: SEO, 404, Deployment

### Task 19: SEO files

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://umairinayat.github.io/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://umairinayat.github.io</loc>
    <lastmod>2026-03-25</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Create not-found.tsx**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-muted text-lg mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
```

- [ ] **Step 4: Add JSON-LD structured data to layout.tsx**

Add a `<script type="application/ld+json">` in layout.tsx head with Person schema for Umair.

- [ ] **Step 5: Commit**

```bash
git add public/robots.txt public/sitemap.xml src/app/not-found.tsx src/app/layout.tsx
git commit -m "feat: add SEO files (robots.txt, sitemap, JSON-LD, 404 page)"
```

### Task 20: GitHub Actions deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

- [ ] **Step 2: Add .nojekyll to public/**

```bash
touch public/.nojekyll
```

This prevents GitHub Pages from processing the site with Jekyll.

- [ ] **Step 3: Build locally to verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add .github/workflows/deploy.yml public/.nojekyll
git commit -m "feat: add GitHub Actions workflow for GitHub Pages deployment"
```

---

## Chunk 7: Final Polish

### Task 21: Responsive testing and fixes

- [ ] **Step 1: Run dev server and test all breakpoints**

```bash
npm run dev
```

Test at: 1440px (desktop), 1024px (tablet), 768px (small tablet), 375px (mobile).

- [ ] **Step 2: Fix any responsive issues found**

- [ ] **Step 3: Test dark/light mode toggle on all sections**

- [ ] **Step 4: Verify all links work (GitHub repos, LinkedIn, email, resume download)**

- [ ] **Step 5: Run final build**

```bash
npm run build
```

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "fix: responsive polish and final adjustments"
```
