---
title: "Removing duplicates with DISTINCT"
series: sql
day: 8
date: 2026-11-09
description: "DISTINCT removes repeated values from a query's result, without changing the table, and helps you spot messy data."
tryIt: "Add a repeated city to your practice table, then run the query with and without DISTINCT."
question: "What column would you check for messy values first?"
---

Which cities do our customers come from? If you select the city column from customers, a city with 500 customers shows up 500 times. DISTINCT fixes that.

Without DISTINCT:

```sql
SELECT city FROM customers;
```

You get one row per customer, repeats included.

With DISTINCT:

```sql
SELECT DISTINCT city FROM customers;
```

Now each city appears once. The database removes the repeats from your result only. The table itself doesn't change.

With more than one column, DISTINCT looks at the combination:

```sql
SELECT DISTINCT city, name FROM customers;
```

This keeps every unique pairing of city and name, so a city can still appear more than once.

DISTINCT is useful for exploring a table you don't know. It quickly shows which values a column really contains, including typos such as Hyderabad and Hyderbad appearing as separate entries.

Go deeper: [SQLite SELECT reference](https://www.sqlite.org/lang_select.html)
