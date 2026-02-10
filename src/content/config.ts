import { defineCollection, z } from 'astro:content';

const breeds = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    intro: z.string(),
    forWhom: z.string(),
    needs: z.string(),
    grooming: z.string(),
    image: z.string().optional()
  })
});

const dogs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    breed: z.string(),
    birthDate: z.string(),
    achievements: z.array(z.string()).default([]),
    health: z.array(z.string()).optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    exampleContent: z.boolean().default(true)
  })
});

const litters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['aktualne', 'plany', 'archiwum']),
    date: z.string(),
    summary: z.string()
  })
});

export const collections = { breeds, dogs, news, litters };
