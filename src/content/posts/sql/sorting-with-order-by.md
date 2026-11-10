---
title: "Sorting with ORDER BY"
series: sql
day: 9
date: 2026-11-10
description: "A database doesn't promise any row order unless you ask for it. ORDER BY sorts results, DESC reverses them, and you can sort by several columns."
tryIt: "Sort your practice table by name, then reverse it with DESC."
question: "What list at work do you re-sort most often?"
---

Here's something that surprises beginners: without instructions, a database doesn't promise any row order. If order matters, you have to ask for it with ORDER BY.

To list products from cheapest to most expensive:

```sql
SELECT name, price
FROM products
ORDER BY price;
```

Ascending is the default. Add DESC to reverse it:

```sql
SELECT name, price
FROM products
ORDER BY price DESC;
```

You can sort by more than one column. This groups customers by city, then sorts names alphabetically within each city:

```sql
SELECT name, city
FROM customers
ORDER BY city, name;
```

Numbers sort by value, dates by time and text alphabetically. Be careful with numbers stored as text, because '10' sorts before '9'.

To keep only the first few rows, standard SQL uses FETCH FIRST 5 ROWS ONLY. MySQL and SQLite use LIMIT 5 instead.

Go deeper: [SQLite SELECT reference](https://www.sqlite.org/lang_select.html)
