import eslintRules from "../rules/eslint";
import typescriptRules from "../rules/typescript";
import javascriptTypescriptOverrides from "../overrides/javascript-typescript";
import jsonEslintOverrides from "../overrides/json-eslint";
import jsonTypescriptOverrides from "../overrides/json-typescript";

export = {
  extends: [ "./configs/eslint", "./configs/typescript" ],
  rules: {
    ...eslintRules,
    ...typescriptRules
  },
  overrides: [
    ...javascriptTypescriptOverrides,
    ...jsonEslintOverrides,
    ...jsonTypescriptOverrides
  ]
};
