import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Articles, case studies and news. One Markdown file per entry in
 * src/content/articles/. The file name is the URL: /articles/<file-name>.
 */
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    type: z.enum(["article", "case-study", "news"]),
    date: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string().default(""),
    /** Short line next to the badge, e.g. "New client" or "Lakeshore Mariners · Baseball" */
    kicker: z.string().optional(),
    /** Minutes to read, shown on articles */
    minutes: z.number().optional(),
    draft: z.boolean().default(false),
    /** Side panel for case studies */
    client: z
      .object({
        name: z.string(),
        about: z.string().optional(),
        sport: z.string().optional(),
        location: z.string().optional(),
        venue: z.string().optional(),
        website: z.string().url().optional(),
        results: z.array(z.object({ figure: z.string(), label: z.string() })).default([]),
        products: z.array(z.string()).default([])
      })
      .optional()
  })
});

export const collections = { articles };
