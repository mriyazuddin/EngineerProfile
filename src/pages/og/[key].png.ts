import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import { decompress } from "wawoff2";
import type { APIRoute } from "astro";
import { series } from "../../data/site";
import { allPosts, postOgKey } from "../../lib/posts";

const fontDir = join(process.cwd(), "src/assets/og-fonts");
// resvg reads TTF files only, so the published WOFF2 files are decompressed at build time.
const tmp = mkdtempSync(join(tmpdir(), "og-fonts-"));
const fontFiles: string[] = [];
for (const name of ["IBMPlexSans-Bold", "IBMPlexMono-Medium"]) {
  const file = join(tmp, `${name}.ttf`);
  writeFileSync(file, await decompress(readFileSync(join(fontDir, `${name}.woff2`))));
  fontFiles.push(file);
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && (line + " " + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? line + " " + word : word;
  }
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

function card(label: string, title: string): Uint8Array {
  const size = title.length > 60 ? 60 : 72;
  const lines = wrap(title, size === 72 ? 26 : 32);
  const tspans = lines
    .map((l, i) => `<text x="80" y="${228 + i * (size + 14)}" font-family="IBM Plex Sans" font-weight="700" font-size="${size}" fill="#FFFFFF">${esc(l)}</text>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#11212B"/>
    <rect x="80" y="80" width="72" height="4" fill="#7FD6DC"/>
    <text x="80" y="134" font-family="IBM Plex Mono" font-weight="500" font-size="30" fill="#7FD6DC">${esc(label)}</text>
    ${tspans}
    <text x="80" y="560" font-family="IBM Plex Mono" font-weight="500" font-size="28" fill="#C5D3DA">Mohammed Riyazuddin · riyaz.blog</text>
  </svg>`;
  return new Resvg(svg, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "IBM Plex Sans" },
  }).render().asPng();
}

export async function getStaticPaths() {
  const fixed = [
    ["home", "status: open to work", "I find out why it broke, fix it, and write it down."],
    ["about", "about", "Support Engineer and Customer Success Engineer"],
    ["work", "work", "WordPress and WooCommerce projects"],
    ["blog", "blog", "Weekday lessons in WordPress and SQL"],
    ["blog-sql", "blog", series.sql.name],
    ["blog-wordpress", "blog", series.wordpress.name],
    ["contact", "contact", "Open a ticket with me."],
  ].map(([key, label, title]) => ({ params: { key }, props: { label, title } }));
  const posts = (await allPosts()).map((p) => ({
    params: { key: postOgKey(p) },
    props: { label: `${series[p.data.series].name} · Day ${p.data.day}`, title: p.data.title },
  }));
  return [...fixed, ...posts];
}

export const GET: APIRoute = ({ props }) =>
  new Response(card(props.label, props.title), { headers: { "Content-Type": "image/png" } });
