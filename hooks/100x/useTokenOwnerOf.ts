import { useReadOneHundredXOwnerOf } from "../../wagmi/generated";
import { zodAddress } from "utils/zod";

export const useTokenOwnerOf = (tokenId: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
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
