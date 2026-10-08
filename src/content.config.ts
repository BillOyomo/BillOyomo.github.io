import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  // "Load every .json file in this folder"
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(['journal', 'book-chapter', 'preprint', 'conference']),
    venue: z.string().optional(),      // journal or book title
    publisher: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),        // just the DOI, e.g. "10.1021/..."
    pdf: z.string().optional(),        // link to a free copy, if allowed
    code: z.string().optional(),       // link to code/data, e.g. GitHub
  }),
});

export const collections = { publications };