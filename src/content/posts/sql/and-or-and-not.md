---
title: "AND, OR and NOT"
series: sql
day: 12
date: 2026-11-13
description: "AND, OR and NOT combine conditions in one query. AND runs before OR, so use brackets to say what you mean."
tryIt: "Write a condition for \"customers in Lisbon who signed up in 2026\" using signup_date."
question: "Do you add brackets even when they aren't strictly needed?"
---

Real questions often have more than one condition. Bags under 2,000. Customers in Lisbon or Hyderabad. AND, OR and NOT let you say that in one query.

AND needs both conditions to be true:

```sql
SELECT name, price
FROM products
WHERE category = 'Bags' AND price < 2000;
```

OR needs at least one to be true:

```sql
SELECT name, city
FROM customers
WHERE city = 'Lisbon' OR city = 'Hyderabad';
```

NOT flips a condition:

```sql
SELECT order_id, status
FROM orders
WHERE NOT status = 'Delivered';
```

The classic trap is mixing them, because AND is evaluated before OR. Use brackets to say what you mean:

```sql
SELECT name, price
FROM products
WHERE (category = 'Bags' OR category = 'Suits')
AND price < 2000;
```

Without the brackets, the price limit would apply to suits only.

Go deeper: [SQLite expressions](https://www.sqlite.org/lang_expr.html)
