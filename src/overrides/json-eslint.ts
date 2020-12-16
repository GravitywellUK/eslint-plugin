export = [
  {
    files: [ "*.json" ],
    rules: {
      "object-curly-newline": [ "off" ],
      "quote-props": [ "off" ],
      "semi": [ "off" ],
      "array-bracket-newline": [ "error", { minItems: 1 } ]
    }
  }
];