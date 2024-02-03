import { render, screen } from "@testing-library/react";
import { expect, test } from "bun:test";

import Button from "components/Button";

test("Button", () => {
  render(<Button>Test</Button>);

  expect(screen.getByRole("button")).toBeDefined();
  expect(screen.getByText("Test")).toBeDefined();
});
