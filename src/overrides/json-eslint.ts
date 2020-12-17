export = [
  {
    files: [ "*.json" ],
    rules: {
      "object-curly-newline": [ "off" ],
      "quote-props": [ "off" ],
      "semi": [ "off" ],
      "array-bracket-newline": [ "error", { minItems: 1 } ],
      "array-element-newline": [
        "error",
        {
          ArrayExpression: {
            multiline: true,
            minItems: 1
          },
          ArrayPattern: {
            multiline: true,
            minItems: 1
          }
        }
      ]
    }
  }
];