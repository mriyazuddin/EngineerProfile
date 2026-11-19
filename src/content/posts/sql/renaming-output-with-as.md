---
title: "Renaming output with AS"
series: sql
day: 18
date: 2026-11-19
description: "AS gives a column a friendlier name in your result without changing the table, and why aliases don't work in WHERE."
tryIt: "Run a SELECT on your practice table and rename both columns."
question: "What's the most confusing column name you've come across?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7529159575288045568/"
---

Column names are often written for databases, not for people. AS gives a column a friendlier name in your result, which makes reports far easier to read.

```sql
SELECT name AS customer_name,
signup_date AS joined_on
FROM customers;
```

The result now shows customer_name and joined_on as headings. The table itself doesn't change. The new name is called an alias, and it only lasts for this query.

For names with spaces, standard SQL uses double quotes:

```sql
SELECT name AS "Customer Name"
FROM customers;
```

Aliases also work in ORDER BY:

```sql
SELECT name AS customer_name, city
FROM customers
ORDER BY customer_name;
```

One catch: most systems don't let you use an alias in WHERE, because WHERE is processed before the SELECT list. We'll come back to that order on Day 29.

Aliases seem small now, but they become essential once we start calculating values and joining tables.

Go deeper: [SQLite SELECT reference](https://www.sqlite.org/lang_select.html)
