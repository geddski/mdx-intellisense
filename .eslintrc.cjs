module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: "plugin:mdx/recommended",
      settings: {
        // "mdx/code-blocks": true,
        ignoreRemarkConfig: false,
      },
      rules: {
        "no-unused-expressions": "off",
      },
    },
    // might need this in shopify.dev to make TS happy alongside MDX
    // {
    //   files: [".tsx", ".ts"],
    //   extends: "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
