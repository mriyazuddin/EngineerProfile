---
title: "SUM and AVG"
series: sql
day: 23
date: 2026-11-24
description: "SUM totals a column and AVG finds the mean, in one query. Plus two catches: both ignore NULLs, and an average can mislead."
tryIt: "Write a query for the total quantity of items ever sold."
question: "Which business number would you check with SUM first?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7530971538364194817/"
---

What's the total value of everything we've sold? What's a typical order size? SUM and AVG answer these in a single query, however many rows are involved.

SUM adds up a column:

```sql
SELECT SUM(quantity * unit_price) AS revenue
FROM order_items;
```

Each row's quantity is multiplied by its price, then all of those results are added together into one number.

AVG calculates the mean:

```sql
SELECT AVG(price) AS average_price
FROM products;
```

Both can use WHERE, so you can total or average only part of your data:

```sql
SELECT AVG(price) AS average_bag_price
FROM products
WHERE category = 'Bags';
```

Two details matter here.

Both functions ignore NULLs. If 2 of 10 prices are missing, AVG divides by 8, not 10.

An average can mislead. One very expensive product can pull it well above what most products cost, so look at the range as well.

Go deeper: [SQLite aggregate functions](https://www.sqlite.org/lang_aggfunc.html)
