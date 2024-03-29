import type { Address } from "viem";

import { z } from "zod";

import { isString } from "./helpers";

const isEthereumAddress = (value: unknown): value is Address => {
  return isString(value) && /^0x[a-fA-F0-9]{40}$/.test(value);
};

export const zodAddress = z.custom<Address>(isEthereumAddress);

export const zodJsonToBigInt = z.string().transform((val) => BigInt(val));

export const zodJsonToNumber = z.string().transform((val) => parseInt(val, 10));
