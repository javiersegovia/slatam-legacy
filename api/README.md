# API structure 🏗

<br>

| File or folder    | Description                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data/`           | Migrations and seeds used by Knex to populate the database.                                                                                                                                                                 |
| `lib/`            | Utility functions used in multiple places across the codebase.                                                                                                                                                              |
| `models/`         | This is where we define the models used by KeystoneJS. All of them are imported (and exported) on `models/index`                                                                                                            |
| `server.js`       | This is the main server file that we use to initialize the app.                                                                                                                                                             |
