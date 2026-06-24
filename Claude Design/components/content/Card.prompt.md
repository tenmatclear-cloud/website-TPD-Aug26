Feature card — white panel with a coloured left accent bar, optional 4:3 image, meta pill, title and description.

```jsx
<Card
  accent="programme"
  meta="Day 1"
  title="Our Programme"
  description="A three-day guide across AI pedagogy, resources and subject modules."
  image="assets/cover.jpg"
  href="/day-1"
/>
```

The left accent bar carries the semantic role colour: `programme` (orange), `teachers` (green), `schools` (yellow), `blue`, or any CSS colour. Pass `href` to make the whole tile a hover-lifting link. `meta` is a light-blue pill above the title. Use one accent per card — never stack accents. Cards lean on the border + accent bar, not heavy shadow (shadow appears only on hover).
