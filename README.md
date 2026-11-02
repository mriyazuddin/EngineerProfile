# riyaz.blog

Portfolio and blog of Mohammed Riyazuddin, built with [Astro](https://astro.build) as a fully static site. Every page is pre-rendered to its own HTML file with its own title, description and link-preview image.

## Develop

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # local server
npm run build    # writes the site to dist/
npm run preview  # serves dist/
```

## Content

- Profile, experience and projects: `src/data/site.ts`
- Resume: `public/resume.pdf`
- Project screenshots: `public/projects/`

## Add a blog post

Add one Markdown file at `src/content/posts/<sql|wordpress>/<slug>.md`. The file name becomes the URL, `/blog/<series>/<slug>`.

```markdown
---
title: "What SQL is and why it's worth learning"
series: sql
day: 1
date: 2026-11-02
description: "One sentence for search results and link previews."
tryIt: "The post's Try it step, without the 'Try it:' label."
question: "The post's closing question."
linkedinUrl: "https://www.linkedin.com/feed/update/..."  # optional
---

The post body. Leave out the "Day N of 60" line and the hashtags.

If text follows the Try it step, leave out `tryIt` and put the step in the body so the order stays the same:
`<aside class="try"><h2>Try it</h2><p>...</p></aside>`
```

Lists, pagination, previous/next links, the sitemap and the preview image update automatically.

## Deploy

Vercel builds the site using `vercel.json`. `cleanUrls` serves each generated HTML file at its extensionless address, so direct links such as `/about` work.
