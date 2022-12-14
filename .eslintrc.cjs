module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "mdx/code-blocks": true,
    ignoreRemarkConfig: false,
  },
  overrides: [
    {
      files: ["*.mdx", "*.md"],
      extends: "plugin:mdx/recommended",
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
