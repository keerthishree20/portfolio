# Portfolio — Complete Project Guide

## Table of Contents
1. [What is This?](#what-is-this)
2. [Quick Start](#quick-start)
3. [Architecture](#architecture)
4. [Code Walkthrough](#code-walkthrough)
5. [Editing the Content](#editing-the-content)
6. [Adding a Project](#adding-a-project)
7. [Checking Links Before Deploying](#checking-links-before-deploying)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## What is This?

KeerthiShree TS's personal portfolio site: a hero section, about, skills, a grid of projects linking
to their GitHub repositories and live demos, and contact details.

It is fully static. There is no backend, no database and no environment variable.

---

## Quick Start

Needs Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build, also checks TypeScript
```

---

## Architecture

```
src/app/layout.tsx     fonts, metadata, page shell
src/app/page.tsx       stacks the sections in order:
   Spotlight   cursor-following background glow, from Effects.tsx
   Navbar
   Hero        name, tagline, intro, social links
   About       #about
   Skills      #skills
   Projects    #projects   the project grid, featured row first
   Contact     #contact
   Footer
src/components/Effects.tsx   Spotlight, and ScrollReveal, a reveal-on-scroll wrapper using IntersectionObserver
public/report.html           a standalone "Project Portfolio Report" page
```

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and `lucide-react` icons.
`src/components/icons.tsx` holds extra icons.

The navigation links jump to the section ids `#about`, `#skills`, `#projects` and `#contact`.

---

## Code Walkthrough

| file | what it holds |
|---|---|
| `src/components/Hero.tsx` | name, tagline, intro, social links |
| `src/components/About.tsx` | the bio |
| `src/components/Skills.tsx` | skill groups |
| `src/components/Projects.tsx` | the `projects` array and the grid that renders it |
| `src/components/Contact.tsx` | contact details |
| `src/components/Navbar.tsx`, `Footer.tsx` | navigation and footer |
| `src/components/Effects.tsx` | the scroll reveal effect |
| `src/app/globals.css` | Tailwind setup and global styles |

---

## Editing the Content

All content is data at the top of each component. There is no CMS. To change your bio, open
`About.tsx` and edit the text. To change skills, edit the groups in `Skills.tsx`. The same goes for
every section.

---

## Adding a Project

Add an entry to the `projects` array in `src/components/Projects.tsx`:

```ts
{
  title: "Convoy",
  tagline: "one line under the title",
  description: "1 to 3 sentences: what it does and what is hard about it",
  tech: ["Python", "Raft", "asyncio"],   // shown as pills
  github: "https://github.com/keerthishree20/convoy",
  live: "https://...",                   // optional, adds a live-demo link
  featured: true,                        // optional, promotes it to the featured row
}
```

Guidelines:
- Every number in a description must match the project's README, with the same caveats.
- Link only public repositories. A private repo returns 404 to visitors.
- A repo with no README lands on a bare file list, so give it one before featuring it.

---

## Checking Links Before Deploying

Every link must work. Run this before deploying a content change:

```bash
grep -oE 'https://github.com/[^"]+|https://[a-z0-9.-]+\.(vercel\.app|onrender\.com)[^"]*' \
  src/components/Projects.tsx | sort -u |
  while read -r u; do printf "%s %s\n" "$(curl -s -o /dev/null -w '%{http_code}' -L "$u")" "$u"; done
```

Anything other than `200` is private, renamed or gone. Fix or remove it.

---

## Deployment

The directory is linked to a Vercel project through `.vercel/`.

```bash
npx vercel --prod
```

Or push to the connected GitHub repository if Vercel's Git integration is enabled. No environment
variables are needed.

---

## Troubleshooting

### `npm run build` fails on a type error
Usually a project entry missing a required field, or a typo in a field name. Check the entry you
just added against the shape above.

### A section does not appear
The scroll reveal starts elements hidden and shows them as they enter the viewport. If JavaScript
fails to load, they stay hidden. Check the browser console.

### A project link returns 404
The repository is private or was renamed. Run the link check above.

### `vercel` asks to log in
The Vercel command-line tool needs a browser login once per machine.
