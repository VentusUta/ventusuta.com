import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const links = defineCollection({
	loader: file('src/content/links.yaml'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		url: z.url(),
		icon: z.string().optional(),
		description: z.string().optional(),
		rss: z.url().optional(),
	}),
});

export const collections = { blog, links };
