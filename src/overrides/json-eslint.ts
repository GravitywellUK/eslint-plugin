export = [
  {
    files: [ "*.json" ],
    rules: {
      "object-curly-newline": [ "off" ],
      "quote-props": [ "off" ],
      "semi": [ "off" ],
      "array-bracket-newline": [
        "error",
        {
          multiline: true,
          minItems: 2
        }
      ]
    }
  }
];