---
title: "MIN and MAX"
series: sql
day: 24
date: 2026-11-25
description: "MIN and MAX find the extremes in a column, for numbers, dates and text. And why SELECT name, MAX(price) isn't what it seems."
tryIt: "Write a query that finds the earliest signup_date among your customers."
question: "Where would a MIN or MAX check catch bad data for you?"
---

What's our cheapest product? When was our most recent order? MIN and MAX find the extremes in a column, and they work on more than numbers.

```sql
SELECT MIN(price) AS cheapest,
MAX(price) AS most_expensive
FROM products;
```

For dates, MIN is the earliest and MAX is the latest:

```sql
SELECT MIN(order_date) AS first_order,
MAX(order_date) AS latest_order
FROM orders;
```

For text, they follow alphabetical order, so MIN(name) returns the first name in the alphabet.

Here's a common beginner mistake:

```sql
SELECT name, MAX(price) FROM products;
```

It looks like it should return the most expensive product's name. Most databases reject it. Some run it, but the name may come from the wrong row, so don't rely on it. For now, sort instead:

```sql
SELECT name, price
FROM products
ORDER BY price DESC;
```

The first row is your answer. We'll see better ways on Days 40 and 57.

Go deeper: [SQLite aggregate functions](https://www.sqlite.org/lang_aggfunc.html)
