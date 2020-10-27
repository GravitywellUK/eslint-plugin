import eslintRules from "../rules/eslint";
import typescriptRules from "../rules/typescript";
import reactRules from "../rules/react";
import jsonEslintOverrides from "../overrides/json-eslint";
import jsonTypescriptOverrides from "../overrides/json-typescript";

export = {
  extends: [
    "./configs/eslint",
    "./configs/typescript",
    "./configs/react"
  ],
  rules: {
    ...eslintRules,
    ...typescriptRules,
    ...reactRules
  },
  overrides: [ ...jsonEslintOverrides, jsonTypescriptOverrides ]
};
