import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkLintFencedCodeFlag from "remark-lint-fenced-code-flag";
import presetPrettier from "remark-preset-prettier";
// import remarkToc from "remark-toc";

const remarkConfig = {
  settings: {
    bullet: "*", // Use `*` for list item bullets (default)
    // See <https://github.com/remarkjs/remark/tree/main/packages/remark-stringify> for more options.
  },
  plugins: [
    remarkPresetLintConsistent, // Check that markdown is consistent.
    remarkPresetLintRecommended, // Few recommended rules.
    // Generate a table of contents in `## Contents`
    // [remarkToc, { heading: "contents" }],
    remarkLintFencedCodeFlag,
    presetPrettier,
    ["remark-lint-list-item-indent", "space"],
  ],
};

export default remarkConfig;
