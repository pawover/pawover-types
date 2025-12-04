import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
      react: "src/react.ts",
    },
    dts: true,
    target: "es2020",
    platform: "neutral",
    tsconfig: "tsconfig.build.json",
  },
]);
