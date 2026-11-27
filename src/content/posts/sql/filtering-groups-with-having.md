---
title: "Filtering groups with HAVING"
series: sql
day: 26
date: 2026-11-27
description: "HAVING filters groups after they're counted, which WHERE can't do. Plus clause order and a quick way to find duplicates."
tryIt: "Write a query that lists customers with more than 5 orders, using customer_id from the orders table."
question: "Would that duplicate check find anything in your data?"
---

Which cities have more than 100 customers? You can't answer that with WHERE, because the count doesn't exist until the rows are grouped. That's the job of HAVING.

```sql
SELECT city, COUNT(*) AS customers
FROM customers
GROUP BY city
HAVING COUNT(*) > 100;
```

The database groups the rows, counts each group, then keeps only the groups that pass the test.

HAVING works with any aggregate. Here are categories whose average price is above 1,000:

```sql
SELECT category, AVG(price) AS average_price
FROM products
GROUP BY category
HAVING AVG(price) > 1000;
```

Clause order matters when you write a query:

SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.

A useful way to find duplicates is to look for values that appear more than once:

```sql
SELECT email, COUNT(*) AS times_used
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;
```

Go deeper: [PostgreSQL on HAVING](https://www.postgresql.org/docs/current/queries-table-expressions.html)
