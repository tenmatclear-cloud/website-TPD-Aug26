import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// The editable page content lives in src/content/pages/*.md. The data is read in
// src/content/programme.ts via import.meta.glob; this collection definition just
// registers the folder with Astro (avoiding the auto-collection deprecation
// warning). Frontmatter shape is intentionally unvalidated so editors can add
// fields freely — see src/content/pages/README.md.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
});

export const collections = { pages };
