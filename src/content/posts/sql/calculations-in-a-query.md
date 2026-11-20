---
title: "Calculations in a query"
series: sql
day: 19
date: 2026-11-20
description: "SQL can add, subtract, multiply and divide as it reads your data, with two catches: whole-number division and NULL."
tryIt: "Write a query that shows each product's price with 18% added, under the name price_with_tax."
question: "What calculation do you currently do by hand in a spreadsheet?"
---

SQL can do arithmetic while it reads your data. You don't need to export anything to a spreadsheet just to multiply two columns.

The operators are + - * and /. Here's the value of each line in an order:

```sql
SELECT order_id, product_id,
quantity * unit_price AS line_total
FROM order_items;
```

Each row gets its own calculated result, and AS gives the new column a clear name. Nothing is saved back to the table.

You can use fixed numbers too. Here's every product with a 10% discount applied:

```sql
SELECT name, price,
price * 0.9 AS sale_price
FROM products;
```

Watch out for two things.

Dividing whole numbers can drop the decimals in some systems, so 5 / 2 may return 2. Writing 5.0 / 2 returns 2.5.

Any calculation involving NULL gives NULL. If quantity is missing, line_total is missing too.

Go deeper: [SQLite expressions](https://www.sqlite.org/lang_expr.html)
