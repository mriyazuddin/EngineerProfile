import type { APIRoute } from "astro";
import { SITE_URL, series, type SeriesKey } from "../data/site";
import { PAGE_SIZE, allPosts, postPath } from "../lib/posts";

export const GET: APIRoute = async () => {
  const posts = await allPosts();
  const paths = ["/", "/about", "/work", "/contact", "/blog"];
  for (let n = 2; n <= Math.ceil(posts.length / PAGE_SIZE); n++) paths.push(`/blog/page/${n}`);
  for (const key of Object.keys(series) as SeriesKey[]) {
    const inSeries = posts.filter((p) => p.data.series === key);
    if (!inSeries.length) continue;
    paths.push(series[key].path);
    for (let n = 2; n <= Math.ceil(inSeries.length / PAGE_SIZE); n++) paths.push(`${series[key].path}/page/${n}`);
  }
  paths.push(...posts.map(postPath));
  const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
