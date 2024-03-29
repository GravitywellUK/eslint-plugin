export = {
  "@typescript-eslint/semi": [ "error", "always" ],
  "@typescript-eslint/quotes": [ "error", "double" ],
  "@typescript-eslint/ban-ts-comment": [ "warn" ],
  "@typescript-eslint/explicit-function-return-type": [ "off" ],
  "@typescript-eslint/no-use-before-define": [ "off" ],
  "@typescript-eslint/no-unused-vars": [ "warn", { argsIgnorePattern: "^_" } ],
  "@typescript-eslint/camelcase": [ "off" ],
  "@typescript-eslint/no-empty-function": [ "warn" ],
  "@typescript-eslint/type-annotation-spacing": [
    "error",
    {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true
        }
      }
    }
  ],
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
      readonly: "array-simple"
    }
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "typeLike",
      format: [ "PascalCase" ]
    },
    {
      selector: "enumMember",
      format: [ "UPPER_CASE", "PascalCase" ]
    }
  ]
};
