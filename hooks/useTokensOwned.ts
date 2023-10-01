import type { Address } from "viem";
import { z } from "zod";

import { useOneHundredXTokensOwned } from "../wagmi/generated";

export const useTokensOwned = (wallet: Address) => {
  const { data, error } = useOneHundredXTokensOwned({
    args: [wallet],
  });

  if (error) {
    console.error("Error fetching method fees:", error);
  }

  const schema = z.array(z.bigint());

  const tokensOwned = schema.parse(data ?? []);

  return { methodFees: tokensOwned };
};
