import type { Address, Hash } from "viem";

import {
  useSimulateOneHundredXTop,
  useWriteOneHundredXTop,
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
}: Params) => {
  const { data, error } = useSimulateOneHundredXTop({
    args: vault ? [BigInt(tokenId), vault] : [BigInt(tokenId)],
    value: payableAmount,
  });

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } = useWriteOneHundredXTop();

  return {
    write:
      data ?
        () =>
          writeContract(data.request as TODO, {
            onError: handleError,
            onSuccess: handleSuccess,
          })
      : null,
  };
};
