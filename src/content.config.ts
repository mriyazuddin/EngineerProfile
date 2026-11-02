import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    series: z.enum(["sql", "wordpress"]),
    day: z.number().int().min(1).max(60),
    date: z.coerce.date(),
    description: z.string(),
    tryIt: z.string().optional(),
    question: z.string().optional(),
    linkedinUrl: z.string().url().optional(),
  }),
});

export const collections = { posts };
