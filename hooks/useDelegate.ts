import type { Address } from "viem";

import { useQuery } from "@tanstack/react-query";

import { delegate } from "services/delegateCash";

export const useDelegate = (
  to: Address,
  from: Address,
  contract: Address,
  tokenId: number,
) => {
  const query = useQuery({
    queryFn: async () =>
      await delegate.checkDelegateForERC721(to, from, contract, tokenId),
    queryKey: ["delegate"],
  });

  return query;
};
