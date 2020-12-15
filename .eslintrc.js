"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
const eslint_1 = __importDefault(require("./dist/rules/eslint"));
const typescript_1 = __importDefault(require("./dist/rules/typescript"));
const javascript_typescript_1 = __importDefault(require("./dist/overrides/javascript-typescript"));
const json_eslint_1 = __importDefault(require("./dist/overrides/json-eslint"));
const json_typescript_1 = __importDefault(require("./dist/overrides/json-typescript"));

module.exports = {
  extends: [ "./dist/configs/eslint", "./dist/configs/typescript" ],
  rules: Object.assign(
    {},
    eslint_1.default,
    typescript_1.default,
    {
      "no-restricted-imports": [ "off" ],
      "@typescript-eslint/no-restricted-imports": [ "off" ],
      "import/no-relative-parent-imports": [ "off" ]
    }
  ),
  overrides: [
    ...javascript_typescript_1.default,
    ...json_eslint_1.default,
    ...json_typescript_1.default
  ]
};
