# Portfolio — Complete Project Guide

A complete guide to KeerthiShree TS's personal portfolio site: how it is built, how each effect works,
and how to edit, check and deploy it. It is self-contained: you can paste it into any AI chat and ask
questions about the project without sharing the repository.

**Repository:** https://github.com/keerthishree20/portfolio

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Why](#2-tech-stack--why)
3. [Project Setup from Scratch](#3-project-setup-from-scratch)
4. [Project Structure](#4-project-structure)
5. [Page Layout](#5-page-layout)
6. [Layout, Fonts & SEO Metadata](#6-layout-fonts--seo-metadata)
7. [Theme & Global Styles](#7-theme--global-styles)
8. [Scroll Reveal Effect](#8-scroll-reveal-effect)
9. [Cursor Spotlight](#9-cursor-spotlight)
10. [Navbar](#10-navbar)
11. [Hero](#11-hero)
12. [About](#12-about)
13. [Skills](#13-skills)
14. [Projects: Data-Driven Grid](#14-projects-data-driven-grid)
15. [Contact & Footer](#15-contact--footer)
16. [The Standalone Report Page](#16-the-standalone-report-page)
17. [Adding or Editing a Project](#17-adding-or-editing-a-project)
18. [Checking Links Before Deploying](#18-checking-links-before-deploying)
19. [Deployment](#19-deployment)
20. [Known Issues](#20-known-issues)
21. [Troubleshooting](#21-troubleshooting)
22. [Complete Feature Summary](#22-complete-feature-summary)

---

## 1. Project Overview

A single-page personal portfolio: hero, about, skills, a grid of **26 projects** (6 featured) linking to
their GitHub repositories and live demos, and contact details. It has a dark theme with a grain overlay,
a dot grid, a cursor spotlight and sections that fade in as you scroll.

It is **fully static**: no backend, no database, no environment variables.

---

## 2. Tech Stack & Why

| Technology | Role | Why We Chose It |
|---|---|---|
| **Next.js 16** (App Router) | Framework | static pages, built-in font loading and SEO metadata, one-command Vercel deploy |
| **React 19** | UI | each section is a component |
| **TypeScript** | Types | the `Project` interface catches a missing field at build time |
| **Tailwind CSS v4** | Styling | utility classes; theme colours defined once in `@theme` |
| **lucide-react** | Icons | clean line icons; brand icons (GitHub, LinkedIn) are in `icons.tsx` |
| **IntersectionObserver** | Scroll reveal | built into browsers, no animation library needed |
| **Vercel** | Hosting | free for static Next.js sites |

### Why no animation library (Framer Motion)?
The only animations are "fade up when visible" and "glow follows the cursor". Both are a few lines with
browser APIs and CSS transitions, and adding a library would make the page heavier.

---

## 3. Project Setup from Scratch

### Prerequisites
- Node.js 18+

### Steps
```bash
git clone https://github.com/keerthishree20/portfolio.git
cd portfolio
npm install
npm run dev          # http://localhost:3000
npm run build        # production build; also type-checks
```

---

## 4. Project Structure

```
src/
  app/
    layout.tsx        fonts (Inter, JetBrains Mono), SEO metadata, <html>/<body>
    page.tsx          stacks the sections in order
    globals.css       theme tokens, grain, dot grid, glass cards, gradients, scroll reveal, spotlight
  components/
    Effects.tsx       Spotlight + ScrollReveal
    Navbar.tsx        fixed nav, blurs after scrolling, mobile menu
    Hero.tsx          name, tagline, CTA buttons, social links
    About.tsx         bio card and highlights
    Skills.tsx        skill categories as pills
    Projects.tsx      the projects array + featured and other grids
    Contact.tsx       email, LinkedIn, GitHub
    Footer.tsx
    icons.tsx         GitHub and LinkedIn SVG icons
public/
  report.html         standalone "Project Portfolio Report" page (served at /report.html)
```

---

## 5. Page Layout

`src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div className="grain dot-grid">
      <Spotlight />
      <Navbar />
      <main>
        <Hero />
        <About />      {/* #about */}
        <Skills />     {/* #skills */}
        <Projects />   {/* #projects */}
        <Contact />    {/* #contact */}
      </main>
      <Footer />
    </div>
  );
}
```

Each section has an `id`, so the navbar links (`#about`, `#skills`, `#projects`, `#contact`) scroll to it.

---

## 6. Layout, Fonts & SEO Metadata

`src/app/layout.tsx` loads fonts through `next/font/google`, which downloads them at build time and
serves them from the site itself (no request to Google at runtime, no layout shift):

```tsx
const inter = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeerthiShree TS | AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of KeerthiShree TS — Computer Science undergraduate specializing in AI/ML systems, ...",
  keywords: ["KeerthiShree TS", "AI Engineer", "ML Engineer", "Full-Stack Developer", "Python", ...],
  authors: [{ name: "KeerthiShree TS" }],
  openGraph: { title: "...", description: "...", type: "website" },
};
```

`openGraph` controls the preview card when the link is shared on LinkedIn or WhatsApp.

---

## 7. Theme & Global Styles

`src/app/globals.css` defines colours as CSS variables and exposes them to Tailwind:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-card-bg: var(--card-bg);
  --color-muted: var(--muted);
  --color-glass: var(--glass);
  ...
}
```

So `text-accent`, `bg-card-bg` and so on work as Tailwind classes. Change a colour in one place and the
whole site follows.

Background layers:

```css
/* Grain overlay: an SVG noise texture over everything, very faint */
.grain::before {
  content: ""; position: fixed; inset: 0; z-index: 9999;
  pointer-events: none;          /* never blocks clicks */
  opacity: 0.025;
  background-image: url("data:image/svg+xml,...feTurbulence...");
}

/* Dot grid */
.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

It also defines glass cards, gradient text and borders, a section divider, fade-in keyframes and a thin
purple scrollbar.

---

## 8. Scroll Reveal Effect

`src/components/Effects.tsx`:

```tsx
export function ScrollReveal({ children, className = "" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);          // reveal once, then stop watching
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }   // 10% visible, 40px above the bottom
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>;
}
```

```css
.scroll-reveal { opacity: 0; transform: translateY(32px);
                 transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.scroll-reveal.visible { opacity: 1; transform: translateY(0); }
```

### Why IntersectionObserver instead of a scroll listener?
A scroll listener runs on every scroll frame and must measure positions itself. The browser tells an
observer exactly when an element enters view, with no work in between.

---

## 9. Cursor Spotlight

```tsx
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="spotlight hidden lg:block" />;
}
```

```css
.spotlight { position: fixed; width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.06), transparent 70%);
  pointer-events: none; z-index: 1; transition: transform 0.15s ease; }
```

A 400 px purple glow follows the mouse. `- 200` centres it on the cursor. Setting `style.transform`
directly (not React state) avoids re-rendering on every mouse move. `hidden lg:block` hides it on
phones and tablets, which have no cursor.

---

## 10. Navbar

`Navbar.tsx` is fixed at the top:
- `scrolled` state turns on after 20 px of scrolling and adds a blurred background, so the bar is clear
  over the hero and readable over content,
- `mobileOpen` toggles a menu on small screens (the "Toggle menu" button),
- links jump to the section ids.

---

## 11. Hero

`Hero.tsx`: name, tagline and intro, two buttons (**View My Work** → `#projects`, **Get in Touch** →
`#contact`), and social links:

```tsx
{ icon: GithubIcon,   href: "https://github.com/keerthishree20",            label: "GitHub" },
{ icon: LinkedinIcon, href: "https://www.linkedin.com/in/keerthishree-ts/", label: "LinkedIn" },
{ icon: Mail,         href: "mailto:keerthishreets@gmail.com",              label: "Email" },
```

External links open in a new tab. `mailto:` links don't, because they open the mail app. A scroll-down
arrow links to `#about`.

---

## 12. About

`About.tsx` has:
- a glass card with the bio (Computer Science student at SNS College of Technology, Coimbatore, focused
  on applied AI and software engineering),
- three focus cards with Lucide icons, the last being "Automation & Tools" (Playwright, Docker, Pandas,
  Raspberry Pi),
- an Education card with coursework,
- three stat tiles: **18+ Projects Built, 10+ Technologies, 3+ Live Deployments**.

Keep the stats honest: the project grid lists 26, so "18+" is safe, but check "3+ Live Deployments"
against what is actually live before each deploy.

---

## 13. Skills

`Skills.tsx` is a data array rendered as pills:

```ts
const skillCategories = [
  { title: "Languages", color: "from-purple-500/20 to-indigo-500/20",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "HTML", "CSS", "SQL", "Bash"] },
  { title: "Frameworks & Libraries", skills: ["FastAPI", "Next.js", "React", "Tailwind CSS", ...] },
  { title: "AI / ML & Data Science", skills: ["Google Gemini", "OpenAI API", "PyTorch", "scikit-learn", ...] },
  { title: "Databases", skills: ["MongoDB", "MySQL", "SQLite"] },
  { title: "DevOps & Infrastructure", skills: ["Git", "GitHub", "Docker", "Linux", "REST APIs", "Vercel", "Render"] },
  { title: "Tools & Platforms", skills: ["VS Code", "Figma", "Jupyter Notebook", "Raspberry Pi", "IoT", "Postman"] },
];
```

Each category has its own gradient. To add a skill, add a string to the right list.

---

## 14. Projects: Data-Driven Grid

`Projects.tsx` holds all projects as data:

```ts
interface Project {
  title: string;
  tagline: string;       // small uppercase line above the title
  description: string;
  tech: string[];        // pills
  github: string;
  live?: string;         // adds a "Live Demo" link
  featured?: boolean;    // goes in the top row
}

const projects: Project[] = [
  {
    title: "Tether",
    tagline: "Durable Job Queue",
    description: "Job queue on Postgres that keeps its promises when workers die. ... 3,000 in-flight tasks, none lost.",
    tech: ["Python", "PostgreSQL", "Docker", "Chaos testing"],
    github: "https://github.com/keerthishree20/tether",
    featured: true,
  },
  ...
];
```

```tsx
const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured);
```

- **Featured (6):** Tether, Keel, Wake, Berth, Anchor, Cutline. Shown in a 3-column grid of
  gradient-bordered cards.
- **Other (20):** Sextant, Headway, Cardsmith, ShelfLife Sentinel, Noise to Insights, RevCast AI, Job
  Apply Assistant, Eternova, ResumeCraft, SpendLens, AeroInspect, RAG Chatbot, Blog Writing Platform,
  Image Prediction API, Document Classifier, TrueFrame, Smart Doorbell, Employee Attrition Predictor,
  Shelf-Life Predictor, Insurance Cost Predictor.

Each card shows tagline, title, description, tech pills, a **Source Code** link and, if set, **Live Demo**.

### Why data plus one renderer?
Adding a project is adding an object. The layout, links and styling stay consistent, and TypeScript
fails the build if a required field is missing.

---

## 15. Contact & Footer

`Contact.tsx` lists email (`mailto:keerthishreets@gmail.com`), LinkedIn and GitHub as cards.
`Footer.tsx` is a short footer line.

---

## 16. The Standalone Report Page

`public/report.html` is a self-contained HTML page (its own CSS, no React) titled "KeerthiShree TS —
Project Portfolio Report", with a cover, contents and project write-ups. It has print styles, so it can
be saved as a PDF. Files in `public/` are served as they are, so it is at `/report.html` on the deployed
site.

It is dated **June 2026** and counts 14 projects, so it is older than the main page (see
[Known Issues](#20-known-issues)).

---

## 17. Adding or Editing a Project

Add an object to the `projects` array in `src/components/Projects.tsx`:

```ts
{
  title: "Convoy",
  tagline: "Raft Consensus + Chaos Simulator",
  description: "1 to 3 sentences: what it does and what is hard about it, with real measured numbers",
  tech: ["Python", "Raft", "asyncio"],
  github: "https://github.com/keerthishree20/convoy",
  // live: "https://...",
  // featured: true,
}
```

Rules:
- **Every number must match the project's README**, with the same caveats. Never round up.
- **Link only public repositories.** A private repo returns 404 to visitors (for example
  freelance-website is private on purpose).
- A repo with no README lands on a bare file list, so give it one before linking it.
- Keep the featured row at a multiple of 3 so the grid has no gaps.

Then run `npm run build` to catch type errors.

---

## 18. Checking Links Before Deploying

Every link must work. Run this from the repo root:

```bash
grep -oE 'https://github.com/[^"]+|https://[a-z0-9.-]+\.(vercel\.app|onrender\.com)[^"]*' \
  src/components/Projects.tsx | sort -u |
  while read -r u; do printf "%s %s\n" "$(curl -s -o /dev/null -w '%{http_code}' -L "$u")" "$u"; done
```

Anything other than `200` is private, renamed or gone. Fix or remove it.

---

## 19. Deployment

On this machine the folder is linked to a Vercel project (`.vercel/`, which is git-ignored):

```bash
npx vercel --prod
```

On a new machine, `npx vercel` asks you to log in and link the project the first time. Alternatively,
connect the GitHub repo in the Vercel dashboard so every push deploys. No environment variables are
needed.

---

## 20. Known Issues

- **Convoy is not listed.** The Raft project (github.com/keerthishree20/convoy) was built after the
  project list was last updated. Add it with numbers from its README.
- **`report.html` is stale.** It says June 2026 and 14 projects; the main page has 26. Update or remove it.
- **Deployment not re-checked** after the latest content changes. Run the link check and `npm run build`,
  then deploy.

---

## 21. Troubleshooting

| Problem | Fix |
|---|---|
| `npm run build` fails on a type error | a project entry is missing a field or has a typo; compare with the `Project` interface |
| a section never appears | scroll reveal starts hidden; if JavaScript failed, check the browser console |
| a project link returns 404 | the repo is private or renamed; run the link check |
| the spotlight isn't visible | it only shows on large screens (`lg:`) with a mouse |
| `vercel` asks to log in | log in once per machine in the browser |

---

## 22. Complete Feature Summary

### All Features Built

| # | Feature | Type | Key Files |
|---|---|---|---|
| 1 | Single-page layout with anchor sections | Frontend | `page.tsx` |
| 2 | Self-hosted fonts and SEO/Open Graph metadata | Frontend | `layout.tsx` |
| 3 | Theme tokens, grain, dot grid, glass cards | Styling | `globals.css` |
| 4 | Scroll reveal (IntersectionObserver) | Effect | `Effects.tsx` |
| 5 | Cursor spotlight (desktop only) | Effect | `Effects.tsx` |
| 6 | Fixed navbar with scroll blur and mobile menu | Frontend | `Navbar.tsx` |
| 7 | Hero with CTAs and social links | Frontend | `Hero.tsx`, `icons.tsx` |
| 8 | About and skills from data | Frontend | `About.tsx`, `Skills.tsx` |
| 9 | 26 projects, featured row + grid, typed data | Frontend | `Projects.tsx` |
| 10 | Contact and footer | Frontend | `Contact.tsx`, `Footer.tsx` |
| 11 | Printable standalone report | Static page | `public/report.html` |
| 12 | Link check script | Tooling | this guide, README |

### Data Flow Architecture

```
npm run build ──► static HTML/CSS/JS ──► Vercel
                                            │
Visitor ──► /  ──► layout.tsx (fonts, metadata)
                     └─ page.tsx
                         ├─ Spotlight   (mousemove → transform)
                         ├─ Navbar      (scroll → blur; #anchors)
                         ├─ Hero · About · Skills
                         ├─ Projects    (projects[] → featured / other grids)
                         │    └─ each section wrapped in ScrollReveal (IntersectionObserver)
                         └─ Contact · Footer
        ──► /report.html   (standalone, from public/)
```

### Tech Stack at a Glance

```
Framework:  Next.js 16 (App Router) + React 19 + TypeScript
Styling:    Tailwind CSS v4 (@theme tokens) + custom CSS effects
Icons:      lucide-react + custom GitHub/LinkedIn SVGs
Effects:    IntersectionObserver, mousemove, CSS transitions
Hosting:    Vercel (static, no env vars)
```
