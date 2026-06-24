# UI Kit — JC GoAI TPD Workshop Website

An interactive, high-fidelity recreation of the **Teacher Professional Development
Workshop** site (26–28 Aug 2026, CUHK). It composes the design-system components —
nothing here re-implements a primitive.

## Run
Open `index.html`. It links `../../styles.css`, loads `../../_ds_bundle.js`, then mounts
the React app from `chrome.jsx` + `app.jsx` with content from `data.js`.

## What it demonstrates
- **Bilingual** EN / 繁 toggle in the header (drives all visible copy).
- **Home** — navy hero with frosted summary panel, three accent feature cards, the
  signature yellow/navy split-stat section, and green objective panels.
- **Day 1** — plenary agenda built from `SessionRow`s.
- **Day 2** — primary subject `ModuleCard` grid.
- **Resources / Logistics** — `InfoPanel` lists.
- Sticky blurred header with `Logo` + nav + language switcher + header CTA, and the
  multi-column footer with the gradient bar.

## Files
| File | Role |
|---|---|
| `index.html` | Layout CSS + script loading + `@dsCard` / `@startingPoint` tags |
| `data.js` | Curated bilingual programme content (`window.TPD`) |
| `chrome.jsx` | `Header`, `Footer` |
| `app.jsx` | Screens + `App` shell + mount |

## Components used
`Logo`, `Button`, `Tag`, `Eyebrow` (core) · `Card`, `StatBlock`, `SessionRow`,
`ModuleCard`, `InfoPanel` (content).

> A recreation, not a redesign. Sections not present in the source (events feed, photo
> gallery, partner-logo bar) are intentionally omitted rather than invented.
