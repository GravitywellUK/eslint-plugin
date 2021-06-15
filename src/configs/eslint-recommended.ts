import eslintRules from "../rules/eslint";
import javascriptTypescriptOverrides from "../overrides/javascript-typescript";
import jsonEslintOverrides from "../overrides/json-eslint";

export = {
  extends: [ "./configs/eslint" ],
  rules: eslintRules,
  overrides: [ ...javascriptTypescriptOverrides, ...jsonEslintOverrides ]
};
