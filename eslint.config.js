// @ts-nocheck
import { defineConfig } from "eslint/config";

import eslintTs from "typescript-eslint";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginAntfu from "eslint-plugin-antfu";

import eslintRules from "@pawover/eslint-rules";

const plugins = {
  typescript: {
    ts: eslintTs.plugin,
  },
  stylistic: {
    stylistic: eslintPluginStylistic,
  },
  antfu: {
    antfu: eslintPluginAntfu,
  },
};

export default defineConfig([
  {
    ignores: [...eslintRules.GLOB_EXCLUDE, "eslint.config.js"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: eslintTs.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ...plugins.typescript,
      ...plugins.stylistic,
      ...plugins.antfu,
    },
    rules: {
      ...eslintRules.javascript,
      ...eslintRules.typescript,
      ...eslintRules.stylistic,
      ...eslintRules.antfu,
    },
  },
]);
