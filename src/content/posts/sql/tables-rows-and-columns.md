---
title: "Tables, rows and columns"
series: sql
day: 3
date: 2026-11-04
description: "A table stores one kind of thing, with columns for each piece of information and rows for each record."
tryIt: "Pick something you track today, like invoices or contacts. Write down its table name, three columns and one sample row."
question: "What would you store in your first table?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7523740092952174592/"
---

Picture a spreadsheet with stricter rules. That's the quickest way to understand a database table, and tables are where all your data lives.

A table stores one kind of thing. A shop might keep a customers table, a products table and an orders table.

Each column is one piece of information, such as name or city. Every value in a column should be the same kind of data.

Each row is one record. One row in customers is one customer.

```text
customers
name | city
Alex | Lisbon
Ben | Taipei
```

This table has 2 columns and 2 rows. Alex's row holds everything we know about Alex, and the city column holds every customer's city.

The difference from a spreadsheet is discipline. A spreadsheet lets you type anything into any cell. A database table enforces the structure you define, which keeps large amounts of data reliable.
