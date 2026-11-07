---
title: "Choosing columns and common data types"
series: sql
day: 6
date: 2026-11-07
description: "List only the columns you need in a SELECT, and learn the common data types that decide what each column can hold."
tryIt: "For a table you'd want at work, list four columns and choose a type for each."
question: "Which column was hardest to choose a type for?"
---

SELECT * is handy for a first look, but real tables can have dozens of columns. Most of the time, you only want a few.

List the columns you need, separated by commas:

```sql
SELECT name, price FROM products;
```

The result shows those columns in the order you listed them, for every row in products.

Each column also has a data type, which tells the database what it can hold. The ones you'll meet most are:

Text, such as a name. Written in single quotes in queries: 'Hyderabad'.\
Integer, a whole number, such as a quantity.\
Decimal, a number with exact fractions, such as a price.\
Date, a calendar date, such as an order date.

Types matter because they decide what you can do. You can add up prices, sort dates in time order and search text. Type names vary slightly between database systems, but the idea is the same.

Go deeper: [SQLite datatypes](https://www.sqlite.org/datatype3.html)
