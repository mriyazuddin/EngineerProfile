---
title: "What a database is"
series: sql
day: 2
date: 2026-11-03
description: "A database is an organized collection of data, stored so it can be searched and changed quickly and safely."
tryIt: "Pick an app you used today and write down four things it must remember about you."
question: "What did your list include that surprised you?"
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7523370499557662720/"
---

When you order something online, the shop has to remember it: who you are, what you bought, where to send it. That memory lives in a database.

A database is an organized collection of data, stored so it can be searched and changed quickly and safely.

Picture a small online shop. It needs to keep track of four things: customers, products, orders, and the items inside each order. We'll use this shop for the rest of the series.

You could keep it all in one spreadsheet, and with ten orders that works. With thousands of orders and several people editing at once, it gets messy. One customer's address is typed three different ways. An order points to a customer nobody can find.

A database is built for that job. It can refuse an order for a customer who doesn't exist, and it keeps the data consistent when many people use it at once.

One thing to keep straight: the database is the data. MySQL, PostgreSQL and SQLite are the software that manages it. SQL is the language you use to talk to that software.
