import type React from "react";
import type { Address } from "viem";

import { z } from "zod";

import { isString } from "./helpers";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const addressRegex = /^0x[a-fA-F0-9]{40}$/;

export const AddressZod = z.custom<Address>((value) => {
  if (!isString(value) || !addressRegex.test(value)) {
    throw new Error("Invalid address");
  }
  return value;
});
