/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: false,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
  ],
rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-tslint-comment":"error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-type-definitions": ["warn","type"],
    "arrow-spacing":["warn"],
    "consistent-return":["error"],
    "default-case-last":["error"],
    "default-case":["warn"],
    "dot-notation":["error"],
    "eqeqeq":["error"],
    "linebreak-style": ["error","unix"],
    "no-constant-binary-expression":["error"],
    "no-duplicate-imports":["warn",{"includeExports":true}],
    "no-empty-function":["error"],
    "no-eval":["error"],
    "no-floating-decimal":["warn"],
    "no-lone-blocks":["error"],
    "no-lonely-if":["error"],
    "no-new-wrappers":["error"],
    "no-self-compare":["error"],
    "no-unreachable-loop":["error"],
    indent: ["error",2],
    quotes: ["error","double"],
    semi: ["warn","never"],
  }}
