import { getCollection, type CollectionEntry } from "astro:content";
import type { SeriesKey } from "../data/site";

export type Post = CollectionEntry<"posts">;
export const PAGE_SIZE = 20;

// Newest first; on a shared date the SQL post sits above WordPress, as on the canvas.
export async function allPosts(series?: SeriesKey): Promise<Post[]> {
  const posts = await getCollection("posts", (p) => !series || p.data.series === series);
  return posts.sort(
    (a, b) =>
      b.data.date.getTime() - a.data.date.getTime() ||
      a.data.series.localeCompare(b.data.series),
  );
}

export const postSlug = (p: Post) => p.id.split("/").pop()!;
export const postPath = (p: Post) => `/blog/${p.data.series}/${postSlug(p)}`;
export const ogPath = (key: string) => `/og/${key}.png`;
export const postOgKey = (p: Post) => `post-${p.data.series}-${postSlug(p)}`;

const fmt = (d: Date, o: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...o }).format(d).replace(",", "");
export const shortDate = (d: Date) => fmt(d, { day: "numeric", month: "short" });
export const longDate = (d: Date) => fmt(d, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
