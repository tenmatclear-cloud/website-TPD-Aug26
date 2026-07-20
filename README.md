# JC GoAI — Teacher Professional Development Workshop 2026

Bilingual (EN / 繁) event website for the JC GoAI TPD Workshop at CUHK, 26–28 August 2026.

Built with [Astro](https://astro.build/). Deployed as a static site (Vercel).

## Quick links — edit content

Click to open on GitHub (then use the pencil icon to edit):

| Page | File |
|---|---|
| Editing guide | [src/content/pages/README.md](src/content/pages/README.md) |
| Home | [src/content/pages/home.md](src/content/pages/home.md) |
| Day 1 | [src/content/pages/day-1.md](src/content/pages/day-1.md) |
| Day 2 | [src/content/pages/day-2.md](src/content/pages/day-2.md) |
| Day 3 | [src/content/pages/day-3.md](src/content/pages/day-3.md) |
| Logistics | [src/content/pages/logistics.md](src/content/pages/logistics.md) |
| Resources | [src/content/pages/resources.md](src/content/pages/resources.md) |
| Media | [src/content/pages/media.md](src/content/pages/media.md) |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build      # production build → dist/
npm run preview    # preview the build
npm run smoke-test # basic post-build checks
```

## Project layout

| Path | Purpose |
|---|---|
| `src/pages/` | Routes (home, day pages, content pages) |
| `src/components/` | Header, Hero, Footer, agenda, etc. |
| `src/content/pages/` | Editable bilingual copy (`.md`) — **edit content here** |
| `src/styles/global.css` | Design tokens and global styles |
| `public/brand/` | Logos used on the live site |
| `doc/` | Programme Word drafts (reference only; site does not read these) |
| `_archive/` | Unused design handoff, old drafts, leftover assets |

## Editing content

1. Update the latest programme draft in `doc/en/` if needed.
2. Transcribe changes into the `.md` files above (`en:` / `zh:` fields).
3. Follow the [editing guide](src/content/pages/README.md) for field-by-field help.

Chinese site pages are gated by `ZH_HK_ENABLED` in `src/content/programme.ts`.
