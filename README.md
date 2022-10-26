# Node.js Typescript template

<div align="center">
  <img src="https://nodejs.org/static/images/favicons/favicon.ico" alt="Node.js" width="32" height="32">
  <img src="https://www.typescriptlang.org/favicon-32x32.png" alt="TS" width="32" height="32">
  <img src="https://www.rollupjs.org/favicon.png" alt="Rollup" width="32" height="32">
  <img src="https://yarnpkg.com/favicon.svg" alt="Yarn" width="32" height="32">
</div>

Quick boilerplate setup for making Node.js applications in Typescript.

## Getting started
```sh
git clone https://github.com/Eyewavu/node-typescript-rollup.git my-app
cd my-app
yarn install && yarn dev
```


## Folder structure
```
my-app/
├── node_modules/
├── .gitignore
├── rollup.config.js
├── package.json
├── tsconfig.json
├── yarn.lock
├── README.md
│
├── src/
│   └── index.ts
│   └── utils/
│
└── dist/
    └── index.js
    └── index.js.map
    └── index.d.ts

```


## Folder aliases
```
"@"  - src/
"@u" - src/utils/
```