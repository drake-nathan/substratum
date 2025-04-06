import { zodAddress } from "utils/zod";

import { useReadOneHundredXOwnerOf } from "../../wagmi/generated";

export const useTokenOwnerOf = (tokenId: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data, error, isSuccess } = useReadOneHundredXOwnerOf({
    args: [BigInt(tokenId)],
  });

  if (error) {
    console.error("Error fetching owner of:", error);
  }

  const ownerAddress = data ? zodAddress.parse(data) : null;

  return { isSuccess, ownerAddress };
};
