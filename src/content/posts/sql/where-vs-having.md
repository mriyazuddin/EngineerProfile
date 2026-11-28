---
title: "WHERE vs HAVING"
series: sql
day: 27
date: 2026-11-28
description: "WHERE filters rows before grouping, HAVING filters groups after. A simple rule for choosing between them, with an example."
tryIt: "Say which clause fits each one: \"orders in 2026\" and \"customers with over 10 orders\"."
question: "Did you get them right? Tell me below."
---

WHERE and HAVING both filter, and that's why people mix them up. The difference comes down to one question: are you filtering rows or groups?

WHERE filters individual rows before they're grouped.\
HAVING filters groups after they're calculated.

A query can use both:

```sql
SELECT category, COUNT(*) AS products
FROM products
WHERE price < 2000
GROUP BY category
HAVING COUNT(*) >= 2;
```

Read it in steps. First, keep products under 2,000. Next, group what remains by category and count each group. Finally, keep only categories with at least two.

Swapping them produces an error or a different answer. WHERE COUNT(*) >= 2 fails, because no count exists when WHERE runs.

A simple rule: if the condition uses an aggregate like COUNT or SUM, it belongs in HAVING. If it's about a single row's value, put it in WHERE.

Using WHERE when you can also helps performance, because fewer rows need to be grouped.

Go deeper: [PostgreSQL on HAVING](https://www.postgresql.org/docs/current/queries-table-expressions.html)
