import { eslintConfig, prettierConfig } from "js-style-kit";

export const eslint = eslintConfig(
  {
    ignores: [".next", "wagmi/generated.ts"],
    react: {
      framework: "nextjs",
    },
  },
  {
    name: "project-overrrides",
    rules: {
      "unicorn/filename-case": "off",
    },
  },
);

export const prettier = prettierConfig({});
