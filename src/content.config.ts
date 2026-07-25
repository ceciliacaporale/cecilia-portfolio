import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    lang: z.enum(["en", "pt", "es"]).default("en"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
