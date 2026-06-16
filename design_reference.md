# Design Reference — JC GoAI Website

> **Source:** [https://www.jcgoai.hk/en](https://www.jcgoai.hk/en)  
> **Purpose:** Design system reference for AI-assisted webpage design. Use these tokens, patterns, and layout rules when building or styling pages in this project.

---

## 1. Design Concept

### Brand Positioning
- **Category:** Education technology / non-profit institutional website
- **Tone:** Professional, trustworthy, forward-looking, approachable
- **Audience:** Students, teachers, parents, schools in Hong Kong
- **Visual identity:** Deep navy authority + bright accent colors + friendly mascot characters (GoAI "G" / "O" / "AI" motifs)

### Visual Language
- **Primary color:** Deep navy blue — conveys trust and institutional credibility (Hong Kong Jockey Club Charities Trust)
- **Accent colors:** Yellow, orange, green — add energy, differentiation, and section hierarchy
- **Rounded geometry:** Heavy use of border-radius (hero bottom corners, pill buttons, card containers)
- **Imagery:** Mix of illustrations, mascot graphics, and real photography
- **Signature pattern:** Split-color sections (50/50 yellow + navy gradient) for high-impact stats areas
- **Whitespace:** Generous padding; content max-width 1280px with 40px horizontal gutters

### Do
- Use navy as the dominant brand color for headers, CTAs, and full-width sections
- Use accent colors sparingly — one accent per card or tag, not all at once
- Prefer pill-shaped buttons (`border-radius: 999px`)
- Keep body text in dark neutral (`#0D121D`), secondary text in muted gray (`#5E646D`)
- Use Galano Grotesque for headings and Gotham for body copy

### Don't
- Don't use flat, all-white pages — navy sections are core to the brand
- Don't mix more than 2 accent colors in a single component
- Don't use sharp 0-radius buttons — everything should feel soft and approachable
- Don't use heavy drop shadows — the design relies on color blocks and borders, not elevation

---

## 2. Color Palette

### Primary / Brand

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#022169` | Brand navy — titles, CTA backgrounds, section backgrounds, links |
| `--color-hero-bg` | `#04246F` | Hero section background (slightly lighter than primary) |
| `--color-accent-blue` | `#0473EA` | Secondary accent, footer gradient end |
| `--color-light-blue` | `#E8F0FF` | Loading screen, light background tint |
| `--color-soft-blue-1` | `#D0E0FF` | Supporting light blue tone |
| `--color-soft-blue-2` | `#F0F4FF` | Supporting light blue tone |

### Accent Colors (Cards / Tags)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent-orange` | `#FF8B12` | "Our Programme" card, Event article tags |
| `--color-accent-green` | `#00CD7A` | "Teacher Co-creation" card |
| `--color-accent-yellow` | `#FECF13` | "Our Schools" card, News tags, impact section split |
| `--color-accent-gold` | `#FAD000` | Header CTA text, hero subtitle highlight |

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-white` | `#FFFFFF` | Backgrounds, button fills, card tags |
| `--color-text-primary` | `#0D121D` | Body text, nav links, footer links |
| `--color-text-secondary` | `#5E646D` | Card descriptions, muted copy |
| `--color-border` | `#E8E8E8` | Header bottom border, footer dividers |
| `--color-bg-gray` | `#F5F5F5` | Light gray background (mobile menu) |

### Gradients

```css
/* Impact / stats section — 50/50 split */
background: linear-gradient(to right, #FECF13 50%, #022169 50%);

/* Footer color bar */
background: linear-gradient(270deg, #022169, #0473EA);
```

### Quick Swatch

```
Primary Navy   #022169  ████████
Hero BG        #04246F  ████████
Accent Blue    #0473EA  ████████
Orange         #FF8B12  ████████
Green          #00CD7A  ████████
Yellow         #FECF13  ████████
Gold           #FAD000  ████████
Light Blue BG  #E8F0FF  ████████
Text Primary   #0D121D  ████████
Text Muted     #5E646D  ████████
White          #FFFFFF  ████████
```

---

## 3. Typography

### Font Families

| Role | Font | Fallback |
|------|------|----------|
| Headings | **Galano Grotesque** | `sans-serif` |
| Body | **Gotham** | `sans-serif` |
| Supplementary | Manrope (Google Fonts) | loaded but secondary to Galano/Gotham |

### Type Scale

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Hero title | Galano Grotesque | 56px | 700 | 1.1 | `#FFFFFF` |
| Hero subtitle highlight | — | 24px | 600 | 1.4 | `#FAD000` |
| Section title | Galano Grotesque | 32px | 700 | 56px | `#022169` |
| Card title | — | 22px | 700 | 30px | `#022169` |
| Card subtitle | — | 16px | 400 | 24px | `#5E646D` |
| Body / description | Gotham | 16px | 400 | 24px | `#022169` or `#0D121D` |
| Stats number | Galano Grotesque | 40px | 700 | 60px | `#022169` |
| Footer column title | — | 14px | 600 | 20px | `#0D121D` (uppercase) |
| Footer link | — | 14px | 400 | 20px | `#0D121D` |
| Footer copyright | — | 12px | 400 | 16px | `#0D121D` |
| Card tag | Galano Grotesque | 12px | 700 | 16px | varies (uppercase) |

---

## 4. Layout Structure

### Page Grid
- **Max content width:** `1280px`
- **Horizontal padding:** `40px` (desktop)
- **Header height offset:** `64px` (fixed header — add `margin-top: 64px` to hero)

### Homepage Section Order

```
┌─────────────────────────────────────────┐
│  Fixed Header (white, 64px)             │
├─────────────────────────────────────────┤
│  Hero Section                           │
│  Left: title + subtitle + CTA           │
│  Right: image carousel                  │
│  BG: #04246F, bottom-radius: 40px       │
├─────────────────────────────────────────┤
│  Feature Cards (3-col, overlaps hero)   │
│  Each card has unique accent color bar  │
├─────────────────────────────────────────┤
│  Impact Stats Section                   │
│  Split BG: yellow 50% | navy 50%        │
│  4 stat counters in a row               │
├─────────────────────────────────────────┤
│  Events & News Section                  │
│  Full-width navy BG (#022169)           │
│  White card list + mascot illustration  │
├─────────────────────────────────────────┤
│  Footer                                 │
│  Multi-column links + partner logos     │
│  Bottom gradient color bar (16px)       │
└─────────────────────────────────────────┘
```

### Content Wrapper
```css
.content-wrapper {
  max-width: min(1280px, calc(100% - 128px));
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 32px 32px 0 0;
  margin-top: -64px;
  position: relative;
  z-index: 10;
}
```

---

## 5. Component Styles

### Header
```css
.jc-header {
  width: 100vw;
  background: #fff;
  border-bottom: 1px solid #E8E8E8;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.menu-link {
  color: #0D121D;
  font-weight: 400;
  padding: 8px 0;
  transition: color 0.2s ease;
}
.jc-header-button {
  padding: 10px 12px;
  border-radius: 20px;
  background: #022169;
  color: #FAD000;
  font-weight: 600;
  border: none;
}
```

### Hero
```css
.home {
  min-height: 720px;
  background: #04246F;
  border-radius: 0 0 40px 40px;
  margin-top: 64px;
  overflow: hidden;
}
.home-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
}
.home-subtitle-highlight {
  font-size: 24px;
  font-weight: 600;
  color: #FAD000;
}
.home-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: #fff;
  color: #022169;
  font-size: 16px;
  border: none;
}
```

### Feature Cards
```css
.hp-card-title {
  font-size: 22px;
  font-weight: 700;
  color: #022169;
}
.hp-card-subtitle {
  font-size: 16px;
  color: #5E646D;
}
.hp-card-image-wrapper {
  aspect-ratio: 4 / 3;
  overflow: hidden;
}
/* Per-card accent (set via CMS / inline style) */
/* Card 1: #FF8B12 | Card 2: #00CD7A | Card 3: #FECF13 */
```

### Impact Stats
```css
.impact-section {
  background: linear-gradient(to right, #FECF13 50%, #022169 50%);
  margin-top: 64px;
  overflow: hidden;
}
.impact-card-count {
  font-family: 'Galano Grotesque', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #022169;
}
```

### Events & News Section
```css
.ai-knowledge {
  background: #022169;
  padding: 80px 40px;
}
.ai-knowledge-btn {
  padding: 12px 24px;
  border: 2px solid #fff;
  border-radius: 999px;
  background: transparent;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.ai-knowledge-card-tag {
  padding: 6px 12px;
  background: #fff;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
/* Tag colors: Event = #022169 | News = #FECF13 */
```

### Footer
```css
.jc-footer {
  background: #fff;
  overflow: hidden;
}
.footer-column-title {
  font-size: 14px;
  font-weight: 600;
  color: #0D121D;
  text-transform: uppercase;
}
.footer-link {
  font-size: 14px;
  color: #0D121D;
}
.footer-color-bar {
  height: 16px;
  width: 100%;
  background: linear-gradient(270deg, #022169, #0473EA);
}
```

---

## 6. Button Variants

| Variant | Background | Text | Border | Radius |
|---------|-----------|------|--------|--------|
| Hero CTA | `#FFFFFF` | `#022169` | none | `999px` |
| Header CTA | `#022169` | `#FAD000` | none | `20px` |
| Ghost (on navy) | transparent | `#FFFFFF` | `2px solid #fff` | `999px` |

All buttons use `inline-flex`, `align-items: center`, `gap: 8px`, and include a small circular arrow icon where applicable.

---

## 7. Spacing & Sizing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--space-section-y` | `64px` | Section vertical margin |
| `--space-section-y-lg` | `80px` | Large section padding (Events & News) |
| `--space-gutter` | `40px` | Horizontal page padding |
| `--radius-hero` | `40px` | Hero bottom corners |
| `--radius-content` | `32px` | Content wrapper top corners |
| `--radius-button` | `999px` | Pill buttons |
| `--radius-tag` | `24px` | Card tags |
| `--header-height` | `64px` | Fixed header offset |

---

## 8. Imagery & Brand Assets

- **Mascot characters:** GoAI "G", "O", "AI" letter mascots used as decorative elements on cards and sections
- **Hero carousel:** Full-height photos with curved clip-path on the left edge
- **Partner logos:** HKJC Charities Trust, EDB, CUHK — displayed in footer
- **Footer mascots bar:** Colorful mascot strip image above the gradient color bar
- **Icon style:** Simple line icons, navy stroke (`#022169`), 16×16px in buttons

### Image Aspect Ratios
- Feature card images: **4:3**
- Hero carousel: full container height (~720px min)
- Article thumbnails: flexible, contained in card layout

---

## 9. Interaction & Motion

- **Nav hover:** Color transition `0.2s ease`
- **Card hover:** Subtle `transform` transition `0.2s ease`
- **Stats cards:** Staggered fade-in animation with `--animation-delay: 0ms / 150ms / 300ms / 450ms`
- **Mascot elements:** `slideUpFadeIn` animation `0.8s ease-out`
- **Loading screen:** Spinner on `#E8F0FF` background, navy spinner border `#022169`

---

## 10. CSS Custom Properties (Suggested)

Copy these into your project's root stylesheet for consistent token usage:

```css
:root {
  /* Brand */
  --color-primary: #022169;
  --color-hero-bg: #04246F;
  --color-accent-blue: #0473EA;

  /* Accents */
  --color-accent-orange: #FF8B12;
  --color-accent-green: #00CD7A;
  --color-accent-yellow: #FECF13;
  --color-accent-gold: #FAD000;

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-text-primary: #0D121D;
  --color-text-secondary: #5E646D;
  --color-border: #E8E8E8;
  --color-bg-light: #E8F0FF;

  /* Typography */
  --font-heading: 'Galano Grotesque', sans-serif;
  --font-body: 'Gotham', sans-serif;

  /* Layout */
  --max-width: 1280px;
  --gutter: 40px;
  --header-height: 64px;

  /* Radius */
  --radius-hero: 40px;
  --radius-content: 32px;
  --radius-button: 999px;
  --radius-tag: 24px;
}
```

---

## 11. Notes for AI Implementation

1. **This is a reference, not a copy.** Adapt colors and layout to fit the TPD project content while preserving the overall tone and hierarchy.
2. **Accent colors are semantic.** Orange = programme, Green = teachers, Yellow = schools/news. Assign consistently.
3. **Navy sections alternate with white sections** to create visual rhythm down the page.
4. **The split yellow/navy stats section is a signature element** — use it for key metrics or impact data.
5. **All CTAs are pill-shaped** — never use rectangular buttons with small radius.
6. **Typography hierarchy is strict:** Galano for display/headings, Gotham for body. Do not swap.
7. **Mobile:** Header collapses to hamburger menu (320px drawer). Cards stack vertically. Hero min-height adjusts.
