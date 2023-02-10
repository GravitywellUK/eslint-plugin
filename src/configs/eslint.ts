export = {
  env: { es6: true },
  plugins: [ "import", "import-newlines" ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:json/recommended"
  ],
  overrides: [
    {
      files: [ "*.js" ],
      rules: { "no-undef": "off" }
    }
  ]
};
