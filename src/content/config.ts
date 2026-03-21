import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['fitness', 'kids', 'general']).default('general'),
  }),
});

export const collections = { news };
