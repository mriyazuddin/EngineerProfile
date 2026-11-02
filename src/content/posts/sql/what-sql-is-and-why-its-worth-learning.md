---
title: "What SQL is and why it's worth learning"
series: sql
day: 1
date: 2026-11-02
description: "SQL is the language you use to ask a database questions. Here's what a complete query looks like, read almost like English."
tryIt: "Think of one app you used today. Write down one question its database could answer, like \"Which of my orders haven't shipped yet?\""
question: "What's one question about your work data you'd love to answer yourself?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7523039547295735808/"
---

Every time a shopping site shows your order history, a database is answering a question. SQL is the language you use to ask those questions yourself.

SQL stands for Structured Query Language. You describe the result you want, and the database works out how to get it.

Starting today, I'm teaching it from the basics, one short post each weekday. No coding background needed.

Here's what a question looks like in SQL:

```sql
SELECT name, city
FROM customers
WHERE city = 'Hyderabad';
```

Read it almost like English:\
Show me the name and city,\
from the customers table,\
only where the city is Hyderabad.

That's a complete query. Over the next few weeks, you'll learn what every word does and start writing your own.
