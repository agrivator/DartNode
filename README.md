# DartNode

The API for the DART app.

## Installation

Prerequisites.

- Node. https://nodejs.org/en/download/
- Mongodb. https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
  (Add to environment variables if the installer doesn't do this automatically.)

Fork and clone the repo.

Use the package manager npm to install dependencies

```bash
npm install
```

(installs all the dependies specified in package.json)

## Run the project.

```bash
npm start
```

---

- Use npm install **--save** if you are installing any _new_ dependencies.
- Pull from upstream before working on any new feature.
- branch it and work on
- if facing eslintrc crlf error in windows machine add `end_of_line = lf` to code editor settings and or run

```bash
npm run-script lint
```
