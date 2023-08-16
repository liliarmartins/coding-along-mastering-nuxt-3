module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config", "plugin:prettier/recommended"],
  plugins: ["vue"],
  rules: {
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["**/*.ts"],
      extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
