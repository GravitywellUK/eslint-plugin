import eslintRules from "../rules/eslint";
import typescriptRules from "../rules/typescript";
import reactRules from "../rules/react";
import reactNativeRules from "../rules/react-native";
import javascriptTypescriptOverrides from "../overrides/javascript-typescript";
import jsonEslintOverrides from "../overrides/json-eslint";
import jsonTypescriptOverrides from "../overrides/json-typescript";

export = {
  extends: [
    "./configs/eslint",
    "./configs/typescript",
    "./configs/react",
    "./configs/react-native"
  ],
  rules: {
    ...eslintRules,
    ...typescriptRules,
    ...reactRules,
    ...reactNativeRules
  },
  overrides: [
    ...javascriptTypescriptOverrides,
    ...jsonEslintOverrides,
    ...jsonTypescriptOverrides
  ]
};
