Pill-shaped call-to-action — the brand's primary interactive element; always rounded, weight 800, optional trailing arrow.

```jsx
<Button variant="solid" showArrow href="/day-1">View programme</Button>
<Button variant="primary" size="lg">Register</Button>
<Button variant="ghost">Logistics</Button>
```

Variants:
- `solid` — navy fill, white text. Primary CTA on light/white surfaces.
- `primary` — white fill, navy text. Primary CTA on navy / hero surfaces.
- `ghost` — transparent, white outline + white text. Secondary on navy.
- `ghostDark` — transparent, navy outline + navy text. Secondary on light.
- `header` — compact navy fill, gold text, 20px radius. Top-bar CTA only.

Sizes: `sm` / `md` (default) / `lg`. Set `showArrow` for the circular-arrow affordance, `disabled` to dim + block. Never use a small/sharp radius — every button is a pill.
