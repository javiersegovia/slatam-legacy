# WEB folder structure 🏗

<br>

| File or folder    | Description |
| ----------------- | ------------------------------------------------------------------------------------|
| `graphql/`        | All GraphQL related functions. |
| `pages/`          | This is where we define the pages that NextJS will serve. It is our routing system. |
| `public/`         | Static assets across the frontend. |
| `src/components`  | Main folder to store the reusable React components. |
| `src/hooks`       | React hooks used across the React components. |
| `src/lib`         | Utility and helper functions. |
| `src/views`       | This is where we build the components views structure used by the React components in `pages/`. Every folder/file here, should map the name of a folder/file on `pages/`. |
| `.babelrc`        | Here we define babel plugins and aliases. |
| `.eslintrc`       | ESlint rules and aliases previously defined on `.babelrc` |
| `constants.js`    | Constants are values that never change and are used in multiple places across the codebase. |
