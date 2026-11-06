---
title: "Your first SELECT"
series: sql
day: 5
date: 2026-11-06
description: "SELECT reads data from a table without changing anything, which makes it the safest place to begin with SQL."
tryIt: "Open your practice editor, paste the four lines from Day 4, then press Run. The last line is SELECT * FROM people;"
question: "What's the first question you'd want to ask your own data?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7524448256752250881/"
---

Most SQL you'll ever write starts with one word: SELECT. It reads data from a table without changing anything, which makes it the safest place to begin.

Here's the simplest useful query:

```sql
SELECT * FROM customers;
```

Read it left to right. SELECT means "show me". The star means "every column". FROM customers names the table. The semicolon marks the end of the statement.

The database returns every row and every column in customers. The result is a temporary table on your screen. Your stored data stays exactly as it was.

SQL keywords aren't case-sensitive, so select and SELECT behave the same. Writing keywords in capitals is a habit that makes queries easier to read.

Spelling does matter for table names. If the table doesn't exist, you get an error, and that's normal. Read the message, because it usually tells you what went wrong.

Go deeper: [SQLite SELECT reference](https://www.sqlite.org/lang_select.html)

![The myCompiler SQL editor with four lines of SQL on the left, and the output Alex|Lisbon and Ben|Taipei on the right](/images/posts/sql5-first-select.webp)
