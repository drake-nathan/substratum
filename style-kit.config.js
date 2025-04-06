// @ts-check
import { eslintConfig, prettierConfig } from "js-style-kit";
import tseslint from "typescript-eslint";

export const eslint = eslintConfig(
  {
    ignores: [".next", "wagmi/generated.ts"],
    react: {
      framework: "next",
    },
  },
  {
    languageOptions: {
      // @ts-expect-error typescript-eslint bullshit
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    name: "project-overrrides",
    plugins: {
      // @ts-expect-error typescript-eslint bullshit
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        {
          ignorePrimitives: { string: true },
        },
      ],
      "nextjs/no-img-element": "off",
      "unicorn/filename-case": "off",
    },
  },
);

export const prettier = prettierConfig({});
