import type { Hash } from "viem";

import {
  useSimulateDepositDepositWithTokenGateAndSetHoldingAddress,
  useWriteDepositDepositWithTokenGateAndSetHoldingAddress,
} from "../../wagmi/generated";

export const useTokenGateDeposit = ({
  handleError,
  handleSuccess,
  tokenId,
}: {
  handleError: (error: Error) => void;
  handleSuccess: (data: Hash) => void;
  tokenId: string;
}) => {
  const { data, error } =
    useSimulateDepositDepositWithTokenGateAndSetHoldingAddress({
      args: [BigInt(tokenId)],
    });

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } =
    useWriteDepositDepositWithTokenGateAndSetHoldingAddress();

  return {
    ready: !error && data?.request,
    write:
      data ?
        () =>
          writeContract(data.request, {
            onError: handleError,
            onSuccess: handleSuccess,
          })
      : null,
  };
};
