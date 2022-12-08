module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // settings: {
  //   "mdx/code-blocks": true,
  //   // optional, if you want to disable language mapper, set it to `false`
  //   // if you want to override the default language mapper inside, you can provide your own
  //   "mdx/language-mapper": {},
  // },
  overrides: [
    {
      files: ["*.mdx", "*.md"],
      extends: "plugin:mdx/recommended",
      rules: {
        "no-unused-expressions": "off",
      },
    },
    // might need this to make TS happy alongside MDX
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
