import { defineCollection } from 'astro:content';

// Registers `src/content/pages/` as a collection so Astro does not treat the
// folder as an implicit auto-collection. Programme data is still read in
// `programme.ts` via import.meta.glob — do not add a glob loader here or the
// same files are ingested twice (duplicate IDs).
const pages = defineCollection({
  type: 'content',
});

export const collections = { pages };
