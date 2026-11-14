---
title: "IN and BETWEEN"
series: sql
day: 13
date: 2026-11-14
description: "IN checks a value against a list and BETWEEN checks a range, including both ends, with one catch for dates and times."
tryIt: "Rewrite this using IN: status = 'Shipped' OR status = 'Delivered'."
question: "Which do you find easier to read, IN or a chain of ORs?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7527347484805890049/"
---

Once you've written city = 'Lisbon' OR city = 'Toronto' OR city = 'Sydney', you'll want something shorter. IN and BETWEEN make common conditions easier to read.

IN checks a value against a list:

```sql
SELECT name, city
FROM customers
WHERE city IN ('Lisbon', 'Toronto', 'Sydney');
```

It returns the same rows as those three OR conditions, with less typing. NOT IN gives you everything except the list.

BETWEEN checks a range:

```sql
SELECT name, price
FROM products
WHERE price BETWEEN 500 AND 1500;
```

BETWEEN includes both ends, so products priced at exactly 500 or 1,500 are returned.

It also works for dates, with one catch. If a column stores a date and a time, BETWEEN '2026-10-01' AND '2026-10-31' can miss orders placed during 31 October. A safer pattern is >= '2026-10-01' AND < '2026-11-01'.

Go deeper: [SQLite expressions](https://www.sqlite.org/lang_expr.html)
