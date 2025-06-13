// @ts-check
import { eslintConfig } from "js-style-kit";

export default eslintConfig({
  ignores: [".next", "wagmi/generated.ts"],
  react: {
    framework: "next",
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
});
