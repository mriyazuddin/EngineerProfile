---
title: "COALESCE: handling NULLs"
series: sql
day: 17
date: 2026-11-18
description: "COALESCE returns the first value that isn't NULL, so you can choose what a missing value shows in your results."
tryIt: "On your practice table, show 'Unknown' for any person whose city is NULL."
question: "Where would a fallback value make your reports clearer?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7528797085698060288/"
---

A report with blank cells raises questions. Is the value zero, unknown or a bug? COALESCE lets you decide what a NULL should show.

COALESCE takes a list of values and returns the first one that isn't NULL:

```sql
SELECT name,
       COALESCE(email, 'No email') AS contact
FROM customers;
```

Customers with an email show it. Everyone else shows No email. The stored data doesn't change.

You can list several fallbacks, and it works through them in order:

```sql
SELECT name,
       COALESCE(mobile, phone, 'Not given') AS contact
FROM customers;
```

It also rescues calculations, since anything involving NULL gives NULL:

```sql
SELECT name,
       price + COALESCE(shipping, 0) AS total
FROM products;
```

Be careful with what you choose, though. Treating a missing value as 0 is only right if missing really means zero. A missing price isn't a free product.

Go deeper: [SQLite core functions](https://www.sqlite.org/lang_corefunc.html)
