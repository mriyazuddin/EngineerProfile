---
title: "Permalinks: readable URLs, and why to set them early"
series: wordpress
day: 13
date: 2026-11-14
description: "Permalinks are your posts' permanent web addresses. Choose Post name early, because changing the pattern later can break links."
tryIt: "Open Settings, then Permalinks, and see which pattern your site uses."
question: "Have you ever clicked an old link that led nowhere?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7527211799423688704/"
---

Which link would you rather click: yoursite.com/?p=123 or yoursite.com/contact?

![The Permalink Settings screen in WordPress, with Post name selected](/images/posts/wp13-permalinks.webp)

The second one is a permalink set up well, and it's easiest to fix early.

A permalink is the permanent web address of a post or page. WordPress lets you choose its pattern.

Go to Settings, then Permalinks. For most sites, Post name is a sensible choice. It builds the address from the title, which makes links easy to read, share and understand. Click Save Changes, and you're done.

Why do it early? Changing the pattern later changes your existing addresses. Old links in search results and on other sites can break unless you set up redirects, which send visitors from the old address to the new one.

You can also edit an individual post's address, called its slug, before publishing. Keep it short: /sql-basics rather than a full sentence.

WordPress.com vs self-hosted: WordPress.com sites have their own permalink defaults, so check what your plan shows.

Go deeper: [Permalinks settings guide](https://wordpress.org/documentation/article/settings-permalinks-screen/)
