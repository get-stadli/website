// Helpers shared by the article listing, article pages and cards
import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;
export type ArticleType = Article["data"]["type"];

export const articleTypes: Record<ArticleType, { label: string; plural: string; tone: string }> = {
  article: { label: "Article", plural: "Articles", tone: "neutral" },
  "case-study": { label: "Case study", plural: "Case studies", tone: "violet" },
  news: { label: "News", plural: "News", tone: "blue" }
};

export async function getArticles(): Promise<Article[]> {
  const entries = await getCollection("articles", ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const articleUrl = (entry: Article) => `/articles/${entry.id}`;
export const typeUrl = (type: ArticleType) => `/articles?type=${type}`;

const longDate = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const shortDate = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

/** The grey line next to the badge: "New client · October 20, 2026", "Jun 8, 2026 · 9 min" … */
export function articleMeta(entry: Article): string {
  const { type, date, kicker, minutes } = entry.data;
  if (type === "case-study") return kicker ?? "";
  if (type === "news") return [kicker, longDate.format(date)].filter(Boolean).join(" · ");
  return [kicker, shortDate.format(date), minutes ? `${minutes} min` : undefined].filter(Boolean).join(" · ");
}
