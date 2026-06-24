---
name: jcgoai-design
description: Use this skill to generate well-branded interfaces and assets for JC GoAI (賽馬會人工智能教育 / Jockey Club GoAI) and its Teacher Professional Development programme, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`tokens/`, `components/`, `guidelines/foundations/`, `ui_kits/tpd-website/`, `assets/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view — link `styles.css` for tokens/fonts,
and copy the logo assets from `assets/`. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

Key facts to load first:
- **Brand:** deep navy `#022169` authority + bright accents (orange=programme,
  green=teachers, yellow=schools) + soft rounded geometry (pill buttons, big radii).
- **Type:** Montserrat (display, sub for Galano Grotesque) + Manrope (body, sub for Gotham).
- **Voice:** professional, trustworthy, approachable, bilingual EN / 繁; Title Case titles;
  honest draft language; no emoji.
- **Logo:** `assets/goai-logo.png` / `goai-mark.png` (+ `*-white.png` reversed for navy).
- **Components:** `window.JCGoAIDesignSystem_019a01` — Button, Tag, Eyebrow, Logo, Card,
  StatBlock, SessionRow, ModuleCard, InfoPanel.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
