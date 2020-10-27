import eslintRules from "../rules/eslint";
import typescriptRules from "../rules/typescript";
import jsonEslintOverrides from "../overrides/json-eslint";
import jsonTypescriptOverrides from "../overrides/json-typescript";

export = {
  extends: [ "./configs/eslint", "./configs/typescript" ],
  rules: {
    ...eslintRules,
    ...typescriptRules
  },
  overrides: [ ...jsonEslintOverrides, jsonTypescriptOverrides ]
};
