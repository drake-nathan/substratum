import { zodAddress } from "utils/zod";

import { useOneHundredXOwnerOf } from "../../wagmi/generated";

export const useTokenOwnerOf = (tokenId: number) => {
  const { data, error, isSuccess } = useOneHundredXOwnerOf({
    args: [BigInt(tokenId)],
  });

  if (error) {
    console.error("Error fetching owner of:", error);
  }

  const ownerAddress = data ? zodAddress.parse(data) : null;

  return { isSuccess, ownerAddress };
};
