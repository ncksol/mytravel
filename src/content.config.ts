import { defineCollection, z } from 'astro:content';

const japan2026 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { japan2026 };
