import eslintRules from "../rules/eslint";
import jsonEslintOverrides from "../overrides/json-eslint";

export = {
  extends: [ "./configs/eslint" ],
  rules: eslintRules,
  overrides: [ ...jsonEslintOverrides ]
};
