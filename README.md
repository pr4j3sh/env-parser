# env parser

This is a javascript npm package that parses `ENV` variables to `JSON`.

## Installation

- Install using npm

```bash
npm i @pr4j3sh/env-parser
```

## Usage

- Require `@pr4j3sh/env-parser` as a module in your file.

```js
const { Parser } = require("@pr4j3sh/env-parser");

const p = new Parser();

let json = p
  .input(
    "APP_NAME=MyApp\nAPP_ENV=production\nAPP_PORT=4892\nAPP_SECRET=sdj32j42hfs73ksdlfh29dsfsd\n",
  )
  .parse()
  .toJson();

// provide file path
json = p.fileInput(".env").parse().toJson();
```

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)
