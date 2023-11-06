import type { Address } from "viem";
import { z } from "zod";

import { useOneHundredXTokensOwned } from "../../wagmi/generated";

export const useTokensOwned = (wallet: Address) => {
  const { data, error, isError, isSuccess } = useOneHundredXTokensOwned({
    args: [wallet],
  });

  if (error) {
    console.error("Error fetching tokens owned:", error);
  }

  const schema = z.number();

  const tokensOwned: number = data ? schema.parse(Number(data.toString())) : 0;

  return {
    isError,
    isSuccess,
    tokensOwned,
  };
};
