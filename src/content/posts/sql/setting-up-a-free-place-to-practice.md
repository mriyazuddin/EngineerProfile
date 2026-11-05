---
title: "Setting up a free place to practice"
series: sql
day: 4
date: 2026-11-05
description: "You can run your first SQL query in a browser in about two minutes, with nothing to install, using a free online editor."
tryIt: "Change the names to your own and add a third row by copying an INSERT line. Press Run again."
question: "Did it work the first time? Tell me what you saw."
linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:share:7524100258386112512/"
---

You can't learn SQL by reading alone. The good news is that you can run your first query in a browser in about two minutes, with nothing to install.

Open mycompiler.io/online-sql-editor. It's free and doesn't need an account unless you want to save your work. It uses SQLite, a small database that follows most of the SQL we'll cover.

Delete anything in the editor, paste these lines and press Run:

```sql
CREATE TABLE people (name TEXT, city TEXT);
INSERT INTO people VALUES ('Alex', 'Lisbon');
INSERT INTO people VALUES ('Ben', 'Taipei');
SELECT * FROM people;
```

You should see both rows in the output. The first line creates a table, the next two add rows and the last one reads them back. We'll cover each command properly later, so don't worry about the details yet.
