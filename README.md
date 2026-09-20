# Portfolio — KeerthiShree TS

[![build](https://github.com/keerthishree20/portfolio/actions/workflows/build.yml/badge.svg)](https://github.com/keerthishree20/portfolio/actions/workflows/build.yml)

Personal site: hero, about, skills, and a project grid linking to the public
repos and live deployments.

**Live:** deployed on Vercel (this directory is linked via `.vercel/`).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4,
`lucide-react` for icons. Static — no backend, no database, no environment
variables. Sections reveal on scroll via an `IntersectionObserver` wrapper in
`src/components/Effects.tsx`.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing the content

Everything is data at the top of a component — there is no CMS.

| What | Where |
|---|---|
| Name, tagline, intro, social links | `src/components/Hero.tsx` |
| Bio | `src/components/About.tsx` |
| Skill groups | `src/components/Skills.tsx` |
| **The project grid** | `src/components/Projects.tsx` — the `projects` array |
| Contact details | `src/components/Contact.tsx` |

A project entry is:

```ts
{
  title: string;
  tagline: string;        // one line under the title
  description: string;    // 1-3 sentences; say what it does and what is hard about it
  tech: string[];         // shown as pills
  github: string;
  live?: string;          // adds the live-demo link
  featured?: boolean;     // promotes it into the featured row
}
```

## Keeping the links honest

Every `github` and `live` URL is a promise to whoever clicks it. A dead link on
a portfolio is worse than a missing project. Before deploying a content change:

```bash
grep -oE 'https://github.com/[^"]+|https://[a-z0-9.-]+\.(vercel\.app|onrender\.com)[^"]*' \
  src/components/Projects.tsx | sort -u |
  while read -r u; do printf "%s %s\n" "$(curl -s -o /dev/null -w '%{http_code}' -L "$u")" "$u"; done
```

Anything that isn't `200` is either private, renamed, or gone.

## Status

Verified on 2026-09-07: builds clean under TypeScript, and all 16 project links
return 200.

Changes made in that pass:

- **Removed a dead link.** `autocorrect-nlp` returned 404 — that repo does not
  exist on the account.
- **Added four real projects that were missing**, all with public repos:
  Cutline (featured — the payment risk scorer is the most rigorous piece of work
  on the account and was absent entirely), ResumeCraft, SpendLens, AeroInspect.
- **Corrected the Job Apply Assistant entry.** It credited Google Gemini; that
  project has always used Groq. The description also said it "auto-submits"
  applications, which undersells the actual design — it previews and waits for
  confirmation.

Still worth doing: several listed repos (`rag-chatbot`, `document-classifier-training`,
`image-prediction-api`, `TrueFrame`, `smart-doorbell`) have no README on GitHub,
so the link lands on a bare file tree. The portfolio entry is the only
description a visitor gets.
