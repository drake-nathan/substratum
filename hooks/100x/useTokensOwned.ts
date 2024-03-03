import type { Address } from "viem";

import { z } from "zod";

import { useReadOneHundredXTokensOwned } from "../../wagmi/generated";

export const useTokensOwned = (wallet: Address, vault: Address | undefined) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  const { data, error, isError, isSuccess } = useReadOneHundredXTokensOwned({
    args: [vault ?? wallet],
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
