/** @type {import('prettier').Config} */
export default {
  printWidth: 120,
  singleAttributePerLine: true,
  quoteProps: "consistent",
  overrides: [
    { files: ["*.json", "*.jsonc"], options: { trailingComma: "none" } },
  ],
};
