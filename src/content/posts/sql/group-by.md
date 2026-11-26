---
title: "GROUP BY"
series: sql
day: 25
date: 2026-11-26
description: "GROUP BY turns one total into a breakdown, like a pivot table. How it groups rows, and the one rule for the SELECT list."
tryIt: "Write a query that counts orders for each status."
question: "What breakdown do you build most often in a pivot table?"
---

COUNT tells you how many customers you have. But how many are there in each city? GROUP BY turns one total into a breakdown, and it's the most useful thing we've learned so far.

```sql
SELECT city, COUNT(*) AS customers
FROM customers
GROUP BY city;
```

The database gathers rows with the same city into a group, then calculates COUNT once per group. You get one row for each city.

It works with any aggregate. Here's the average price per category:

```sql
SELECT category, AVG(price) AS average_price
FROM products
GROUP BY category
ORDER BY average_price DESC;
```

There's one rule to remember. Every column in your SELECT must either appear in GROUP BY or sit inside an aggregate function. Selecting name here wouldn't make sense, because each group contains many names.

You can group by several columns too. GROUP BY city, status would give one row per combination.

If this reminds you of a pivot table, you've got the right idea.

Go deeper: [PostgreSQL on GROUP BY](https://www.postgresql.org/docs/current/queries-table-expressions.html)

![An online SQL editor running SELECT city, COUNT(*) AS customers FROM customers GROUP BY city, with one result row per city](/images/posts/sql25-group-by.webp)
