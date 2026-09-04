import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    journal: z.string(),
  }),
});

export const collections = {
  articles,
};