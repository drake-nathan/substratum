import type { Hash } from "viem";

import {
  useSimulateDepositDepositWithTokenGateAndSetHoldingAddress,
  useWriteDepositDepositWithTokenGateAndSetHoldingAddress,
} from "../../wagmi/generated";
import { useDepositInitiative } from "./useDepositInitiative";

export const useTokenGateDeposit = ({
  handleError,
  handleSuccess,
  tokenId,
}: {
  handleError: (error: Error) => void;
  handleSuccess: (data: Hash) => void;
  tokenId: number;
}) => {
  const depositInitiative = useDepositInitiative();

  const { data, error } =
    useSimulateDepositDepositWithTokenGateAndSetHoldingAddress({
      args: [BigInt(tokenId)],
      value: depositInitiative?.tokenGateDepositAmount,
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
