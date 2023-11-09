import type { Address, Hash } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useOneHundredXTop,
  usePrepareOneHundredXTop,
} from "../../wagmi/generated";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (hash: Hash) => void;
  payableAmount: bigint;
  tokenId: number;
  vault?: Address;
}

export const useTop = ({
  handleError,
  handleSuccess,
  payableAmount,
  tokenId,
  vault,
}: Params): {
  data: WriteContractResult | undefined;
  write: (() => void) | undefined;
} => {
  const { config } = usePrepareOneHundredXTop({
    args: vault ? [BigInt(tokenId), vault] : [BigInt(tokenId)],
    onError: (error) => {
      if (tokenId) {
        handleError(error);
        console.error(error);
      }
    },
    value: payableAmount,
  });

  const { write, data } = useOneHundredXTop({
    ...config,
    onError: (error) => {
      if (tokenId) {
        handleError(error);
        console.error(error);
      }
    },
    onSuccess: (data) => handleSuccess(data.hash),
  });

  return { data, write: tokenId ? write : undefined };
};
