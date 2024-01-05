module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-keys-fix",
    "typescript-sort-keys",
    "sort-destructure-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "import/no-anonymous-default-export": "off",
    "import/prefer-default-export": "off",
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": ["error"],
    "react/require-default-props": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};