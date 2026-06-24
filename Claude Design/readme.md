# JC GoAI — Design System

A design system for **JC GoAI** (賽馬會人工智能教育 / Jockey Club GoAI), the Hong Kong
Jockey Club Charities Trust's AI-in-education initiative, and specifically for the
**Teacher Professional Development (TPD) Workshop** programme site — a bilingual
(English / 繁體中文) institutional event website co-created with **CUHK** and **MIT**.

This system captures the brand's deep-navy authority, bright accent palette, soft
rounded geometry, and the friendly-but-trustworthy voice used to speak to Hong Kong
principals, teachers, parents and schools.

---

## Sources

This system was reverse-engineered from a real codebase and reference material. None of
these are bundled here in full — they are recorded so a future reader can trace origins.

| Source | What it is |
|---|---|
| `website-TPD-Aug26/` (Astro codebase) | The TPD 2026 workshop site. Source of truth for tokens, components, layout & copy. Key files: `src/styles/global.css`, `src/components/*.astro`, `src/content/programme.ts` (bilingual programme data), `src/content/i18n.ts`. |
| `website-TPD-Aug26/design_reference.md` | A written design reference distilled from the live brand site `https://www.jcgoai.hk/en`. |
| `https://www.jcgoai.hk/en` | The live JC GoAI brand site (referenced; not crawled here). |
| GOAI logo lockup | Extracted from the reference website export → `assets/goai-logo.png`. |

> The `Reference-website_before/` folder in the codebase is an obfuscated Google Sites
> HTML export and was not used as a design source.

---

## Brand & product context

**JC GoAI** is a territory-wide programme bringing structured AI literacy into Hong Kong
primary and secondary classrooms. It provides AI learning & teaching resources, a GenAI
tools platform, school support, a teacher community, and parent engagement. The
curriculum spans **AI Foundation / TechEd (P4–P6)** and **AI + Subjects** (Chinese, English,
Math, Science, Humanities, Citizenship, Visual Arts) up to **S3**.

The **TPD Workshop** (26–28 August 2026, CUHK) is a three-day professional-development
event: Day 1 is plenary (framework, pedagogy, international + local perspectives, pilot
cases); Days 2–3 are subject-module deep dives for primary and secondary teachers.

**Audience:** principals, teachers, teacher-trainers. **Register:** institutional, calm,
credible, action-oriented. The site is bilingual throughout — every string exists in
English and Traditional Chinese.

---

## Content fundamentals

How JC GoAI writes. Match this voice in any copy you produce.

- **Tone:** professional, trustworthy, forward-looking, approachable. Calm institutional
  authority — never hype, never salesy, no exclamation marks.
- **Person:** addresses the reader as *participants / teachers / schools* (third person)
  in programme copy; instructional notes use plain imperatives ("Bring a laptop or
  tablet, charger, and power bank.").
- **Casing:** **Title Case for session and section titles** ("The Power of Peer Coaching",
  "Latest Trends in Educational AI Applications"); sentence case for body copy. Eyebrows,
  tags and footer column titles are **UPPERCASE**.
- **Bilingual parity:** English and 繁體中文 carry equal weight. Keep both in sync; the
  language switcher is EN / 繁. Chinese uses Traditional Hong Kong forms (e.g. 賽馬會人工智能教育).
- **Honest status language:** the programme is a living draft — copy openly says so
  ("To be confirmed.", "Programme details are based on the August 2026 draft and will be
  updated as sessions are confirmed."). Don't overstate certainty.
- **Specific, concrete nouns:** names, times, durations, venues, contacts. e.g.
  "Primary school contact: Ms. Vanessa Kiu, vanessakiu@cuhk.edu.hk."
- **No emoji.** Ever. The brand expresses warmth through colour and the GOAI mascot
  geometry, not emoji or exclamation.
- **Vibe:** "a friendly, well-run institution that respects your time." Energetic accent
  colours over a serious navy base — optimistic, but grounded.

Example copy (from the real site):
> *"A three-day guide for participating principals and teachers to explore AI learning and
> teaching resources, pedagogy, implementation cases, and subject-specific modules."*

---

## Visual foundations

- **Colour.** Deep navy `#022169` is the dominant brand colour — headers, CTAs, dark
  sections, links. Bright accents add energy and **semantic section coding**: orange =
  programme/events, green = teachers/objectives, yellow = schools/news/impact. Gold
  `#FAD000` is the highlight on navy (eyebrows, header CTA text). Use **one accent per
  component** — never rainbow. Backgrounds alternate navy ↔ white down the page for rhythm.
- **Type.** Display = **Montserrat** (substitute for the brand's *Galano Grotesque*),
  weights 700–900. Body = **Manrope** (substitute for *Gotham*), 400–600. Strict
  hierarchy: geometric grotesque for headings, clean grotesque for body — never swap.
  Headings are heavy (800) and tight (1.12); body is generous (1.6).
- **Geometry & radii.** Everything is soft. Pill buttons & tags (`999px`), cards `28px`,
  section panels `32px`, the hero's bottom-only `40px` corners. **No sharp corners** on
  interactive elements.
- **Backgrounds.** Solid colour blocks, not photos-everywhere. Three signature treatments:
  the **hero** (navy with a soft blue radial glow, top-down `40px` bottom radius), the
  **50/50 yellow→navy split** stats section (the brand's hero metric device), and the
  **footer bar** (16px `270deg` navy→blue gradient). Page background is a barely-there
  blue-white `#F7F9FF`.
- **Elevation.** The brand relies on **borders + colour blocks, not heavy shadows.**
  Default cards are a 1px `#E8E8E8` hairline with no shadow. Floating section panels use a
  single soft long shadow (`0 20px 60px rgb(2 33 105 / 0.08)`). Cards gain a subtle lift
  shadow only on hover.
- **Cards.** White fill, hairline border, large radius, often a **7px coloured left accent
  bar** carrying the semantic role colour. Module/info cards use a faint blue-white fill
  (`#FBFCFF`). Objective items use a 6px green left border on `#F8FBFF`.
- **Borders.** Hairline `#E8E8E8` dividers; ghost buttons use a 2px white (on navy) or navy
  (on light) outline; language switcher pills use a 1px border that fills navy when active.
- **Transparency & blur.** Used lightly: the sticky header is `rgb(255 255 255 / 0.96)`
  with `backdrop-filter: blur(18px)`; the hero summary panel is a `rgb(255 255 255 / 0.12)`
  frosted card with a faint white border. Don't over-glass.
- **Motion.** Restrained and quick. Nav/colour transitions `0.2s ease`; card hover is a
  small `translateY(-3px)`; content fades/slides up `~0.8s` on entrance (staggered for
  stat rows). Standard easing `cubic-bezier(0.2, 0, 0, 1)`. No bounces, no looping
  decorative animation.
- **Hover / press.** Hover = slight lift + `brightness(0.97)`; nav links go navy + bold.
  No aggressive scale or colour inversion. Disabled = `opacity 0.45`.
- **Layout.** Max content width `1280px`, fluid gutter `clamp(20px, 5vw, 40px)`, sticky
  72px header. Sections are large rounded white panels separated by `28px`, floating over
  the page tint. Hero is full-bleed navy; content shell pulls up `-48px` to overlap it.
- **Imagery vibe.** Real classroom / event photography, warm and bright, set in 4:3 card
  crops; plus the geometric GOAI mascot letterforms (G / O / triangle-A / I) as decorative
  brand elements. No b&w, no heavy grain, no gradients-over-photos.

---

## Iconography

JC GoAI is **icon-light**. The brand carries meaning through colour blocks, pill shapes
and the GOAI letterform geometry rather than a dense icon set.

- **What's actually used:** a single simple line **arrow** inside buttons (navy/white
  stroke, ~2px, 16×16) — implemented directly in the `Button` component (`showArrow`).
  Nav and the language switcher use **no icons** (text only: "EN" / "繁").
- **No icon font, no sprite** ships with the brand. There is no proprietary icon set.
- **No emoji, no unicode glyph icons.** The split divider in the logo lockup ("JC GoAI │ …")
  is a literal vertical rule, not an icon.
- **Mascot geometry** (the G / O / A / I shapes) is the brand's signature decorative motif,
  not an icon system — use the logo assets, don't redraw.

**If you need more icons** (e.g. for a richer UI kit), substitute **[Lucide](https://lucide.dev)**
— its thin, rounded-cap line style matches the brand's single arrow. Load from CDN and keep
strokes ~2px in navy. **This is a substitution** (the brand ships no icon set); flag it when
you use it and keep icon usage sparse.

**Logo assets** (in `assets/`):
- `goai-logo.png` — full bilingual lockup (GOAI + JC GoAI · 賽馬會人工智能教育), colour on transparent.
- `goai-mark.png` — GOAI symbol only, for compact headers.
- `goai-logo-white.png`, `goai-mark-white.png` — reversed (white + gold) variants for navy/dark surfaces.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import` manifest only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — logo lockups + reversed variants.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**Components** (`window.JCGoAIDesignSystem_019a01.<Name>`)
- `components/core/` — **Button**, **Tag**, **Eyebrow**, **Logo**
- `components/content/` — **Card**, **StatBlock**, **SessionRow**, **ModuleCard**, **InfoPanel**

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a group
`@dsCard` HTML (`core.card.html`, `content.card.html`).

**Foundations** (`guidelines/foundations/` — Design System tab cards)
- Colours: brand navy & blues, accents, neutrals
- Type: display (Montserrat), body (Manrope), labels & eyebrows
- Spacing: scale, corner radii
- Brand: logo, signature gradients, accent role map, elevation

**UI kit** (`ui_kits/tpd-website/`)
- A high-fidelity recreation of the TPD workshop site — home, day programme, resources/
  logistics — composing the components above. Entry: `index.html`.

---

## Font substitution notice

The brand's licensed typefaces — **Galano Grotesque** (display) and **Gotham** (body) —
are commercial and not webfont-licensable here, so this system substitutes the closest
free Google Fonts: **Montserrat** → Galano Grotesque, **Manrope** → Gotham. If you hold the
licensed web kits, drop the woff2 files into `assets/fonts/` and replace the `@import` in
`tokens/fonts.css` with local `@font-face` rules — the token names never change.
