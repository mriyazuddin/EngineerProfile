---
title: "NULL: the missing value"
series: sql
day: 16
date: 2026-11-17
description: "NULL means a value is missing or unknown. Why WHERE email = NULL returns nothing, and how IS NULL fixes it."
tryIt: "Think of a form where a field can be left blank. Should a blank be stored as NULL or as empty text?"
question: "Has a missing value ever broken one of your reports?"
---

Here's a query that looks right and returns nothing: WHERE email = NULL. If that seems odd, you're about to learn one of SQL's most important ideas.

NULL means a value is missing or unknown. It isn't zero, and it isn't empty text. A customer with a NULL email simply has no email recorded.

Because NULL is unknown, comparing anything to it gives an unknown result, and WHERE only keeps rows where the condition is true. Even NULL = NULL isn't true.

So SQL has a special test:

```sql
SELECT name
FROM customers
WHERE email IS NULL;
```

And its opposite:

```sql
SELECT name, email
FROM customers
WHERE email IS NOT NULL;
```

NULL also hides rows quietly. WHERE city <> 'Lisbon' doesn't return customers whose city is NULL, because the comparison is unknown rather than true.

Whenever a count looks too low, check for NULLs.

Go deeper: [SQLite on NULL handling](https://www.sqlite.org/nulls.html)
