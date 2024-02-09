import type { Hash } from "viem";

import {
  useSimulateDepositCancelAndRefund,
  useWriteDepositCancelAndRefund,
} from "../../wagmi/generated";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (data: Hash) => void;
}

export const useCancelDeposit = ({ handleError, handleSuccess }: Params) => {
  const { data, error } = useSimulateDepositCancelAndRefund();

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } = useWriteDepositCancelAndRefund();

  return {
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
