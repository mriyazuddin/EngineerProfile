---
title: "Pattern matching with LIKE"
series: sql
day: 15
date: 2026-11-16
description: "LIKE finds partial matches using two wildcards: % for any number of characters and _ for exactly one."
tryIt: "Write a pattern for names that end in \"a\"."
question: "What would you search for with LIKE at work?"
---

What if you only know part of what you're looking for? Maybe it's an email ending in gmail.com, or a product with "leather" somewhere in its name. That's what LIKE is for.

LIKE uses two wildcards:

`%` matches any number of characters, including none.\
`_` matches exactly one character.

Customers with a Gmail address:

```sql
SELECT name, email
FROM customers
WHERE email LIKE '%@gmail.com';
```

Products with "Leather" anywhere in the name:

```sql
SELECT name
FROM products
WHERE name LIKE '%Leather%';
```

Three-letter names like Jan, Jen or Jon:

```sql
SELECT name
FROM customers
WHERE name LIKE 'J_n';
```

Case rules vary. In PostgreSQL, LIKE is case-sensitive. MySQL and SQLite usually ignore case by default. If results look incomplete, check this first.

A pattern starting with % can also be slow on large tables, because the database may need to check every row.

Go deeper: [SQLite expressions, including LIKE](https://www.sqlite.org/lang_expr.html)
