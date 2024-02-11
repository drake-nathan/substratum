import type { Hash } from "viem";

import {
  useSimulateDepositDepositAndSetSelfAsReceiver,
  useWriteDepositDepositAndSetSelfAsReceiver,
} from "../../wagmi/generated";
import { useDepositInitiative } from "./useDepositInitiative";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (data: Hash) => void;
}

export const useDepositAndSetSelf = ({
  handleError,
  handleSuccess,
}: Params) => {
  const depositInitiative = useDepositInitiative();

  const { data, error } = useSimulateDepositDepositAndSetSelfAsReceiver({
    value: depositInitiative?.fullDeposit,
  });

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } = useWriteDepositDepositAndSetSelfAsReceiver();

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
