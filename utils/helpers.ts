import type { Address } from "viem";

import { addressRegex } from "./types";

export const intlNumberFormat = (value: number) =>
  new Intl.NumberFormat().format(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isAddress = (value: unknown): value is Address =>
  isString(value) && addressRegex.test(value);
