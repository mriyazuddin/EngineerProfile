---
title: "Comparison operators"
series: sql
day: 11
date: 2026-11-12
description: "Comparison operators let WHERE ask for values above, below or different from another value, and one character can change a report."
tryIt: "In your own words, write the condition for \"orders that aren't delivered\". Then write it in SQL."
question: "Which boundary mistake has caught you out in a report?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7526622717396201473/"
---

WHERE can do much more than check whether two values are equal. Comparison operators let you ask for anything above, below or different from a value.

The ones you'll use:

`=` equal to\
`<>` not equal to\
`>` greater than\
`<` less than\
`>=` greater than or equal to\
`<=` less than or equal to

Products under 1,000:

```sql
SELECT name, price
FROM products
WHERE price < 1000;
```

Orders placed on or after 1 October 2026:

```sql
SELECT order_id, order_date
FROM orders
WHERE order_date >= '2026-10-01';
```

Dates are written in quotes, and the year-month-day format is the safest choice. Some databases, such as PostgreSQL, also let you write DATE '2026-10-01' to mark the text as a date. SQLite doesn't accept this, so plain quotes are fine for practice.

Watch the boundary. < 1000 leaves out a product priced at exactly 1,000, while <= 1000 includes it. Many wrong reports come down to this one character.

Many systems also accept != for "not equal", but <> is the standard form.

Go deeper: [SQLite expressions](https://www.sqlite.org/lang_expr.html)
