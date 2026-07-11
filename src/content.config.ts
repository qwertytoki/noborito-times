import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './consts';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    category: z.enum(Object.keys(CATEGORIES) as [string, ...string[]]),
    tags: z.array(z.string()).default([]),
    // 記事の根拠となった出典URL。必ず1件以上。
    sources: z.array(z.string().url()).min(1),
  }),
});

export const collections = { posts };
