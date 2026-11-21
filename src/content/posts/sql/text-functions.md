---
title: "Text functions: UPPER, LOWER, LENGTH, SUBSTR"
series: sql
day: 20
date: 2026-11-21
description: "UPPER, LOWER, LENGTH, SUBSTR and TRIM clean up and reshape text as you read it, without changing the stored data."
tryIt: "Show the first three letters of each city in your practice table, in capitals."
question: "What's the messiest text column you've had to deal with?"
---

Real data is messy. Names arrive in odd capitals, with stray spaces and codes squeezed together. Text functions let you clean these up as you read them.

```sql
SELECT name,
       UPPER(name) AS capitals,
       LOWER(name) AS small,
       LENGTH(name) AS characters
FROM customers;
```

SUBSTR takes part of a text value, from a starting position for a number of characters. Positions start at 1:

```sql
SELECT SUBSTR('Hyderabad', 1, 3);
```

That returns Hyd.

TRIM removes spaces from both ends, which is a common reason two values that look identical don't match:

```sql
SELECT TRIM(' Lisbon ');
```

Functions can also be used inside WHERE, which helps when capitals are inconsistent:

```sql
SELECT name
FROM customers
WHERE LOWER(city) = 'istanbul';
```

Names vary between systems. SQL Server uses LEN and SUBSTRING, for example, so check yours. None of these change the stored data unless you use them in an UPDATE.

Go deeper: [SQLite core functions](https://www.sqlite.org/lang_corefunc.html)
