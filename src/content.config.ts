import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.string(), // e.g. "2026"
    order: z.number().default(0),
  }),
});

export const collections = { projects };
