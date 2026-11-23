---
title: "Counting rows with COUNT"
series: sql
day: 22
date: 2026-11-23
description: "COUNT turns many rows into one number. COUNT(*) vs COUNT(column), counting with WHERE, and counting unique values with DISTINCT."
tryIt: "Write a query that counts how many orders have a status of 'Delivered'."
question: "What number would you want to count first in your own data?"
---

How many customers do we have? So far, you'd have to scroll through a list and count. COUNT gives you the answer in one line.

```sql
SELECT COUNT(*) AS total_customers
FROM customers;
```

COUNT is an aggregate function: it takes many rows and returns one value. The star means "count every row".

Add WHERE to count only some of them:

```sql
SELECT COUNT(*) AS lisbon_customers
FROM customers
WHERE city = 'Lisbon';
```

Put a column name inside and the meaning changes. COUNT(email) counts rows where email isn't NULL:

```sql
SELECT COUNT(*) AS all_rows,
COUNT(email) AS with_email
FROM customers;
```

Comparing the two tells you how many emails are missing, which makes this a quick data-quality check.

You can also count unique values:

```sql
SELECT COUNT(DISTINCT city) AS cities
FROM customers;
```

Go deeper: [SQLite aggregate functions](https://www.sqlite.org/lang_aggfunc.html)
