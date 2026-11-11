---
title: "WHERE: asking for specific rows"
series: sql
day: 10
date: 2026-11-11
description: "WHERE keeps only the rows that match a condition. Text goes in single quotes, and WHERE comes after FROM and before ORDER BY."
tryIt: "Filter your practice table to one city. Then try a city that doesn't exist and see what comes back."
question: "What's the first filter you'd run on your own data?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7526260260483776512/"
---

So far, every query has returned every row. Real questions are narrower: which customers live in Lisbon? WHERE is how you ask.

```sql
SELECT name, city
FROM customers
WHERE city = 'Lisbon';
```

The database checks each row against the condition and keeps only the rows where it's true. It's like a filter on a spreadsheet, written in a sentence.

Three details trip up beginners:

Text goes in single quotes: 'Lisbon'. Numbers don't need quotes: WHERE price = 500.

Whether 'lisbon' matches 'Lisbon' depends on your database and its settings, so match the stored spelling until you know.

Order matters in the query. FROM comes before WHERE, and WHERE comes before ORDER BY:

```sql
SELECT name, price
FROM products
WHERE category = 'Bags'
ORDER BY price;
```

If no rows match, you get an empty result, not an error.

Go deeper: [PostgreSQL on WHERE and table expressions](https://www.postgresql.org/docs/current/queries-table-expressions.html)
