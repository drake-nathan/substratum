import type { Address, Hash } from "viem";

import {
  useSimulateDepositDepositAndSetAnotherRecevier,
  useWriteDepositDepositAndSetAnotherRecevier,
} from "../../wagmi/generated";

export const useDepositAndSetRecipent = ({
  handleError,
  handleSuccess,
  recipientAddress,
}: {
  handleError: (error: Error) => void;
  handleSuccess: (data: Hash) => void;
  recipientAddress: Address;
}) => {
  const { data, error } = useSimulateDepositDepositAndSetAnotherRecevier({
    args: [recipientAddress],
  });

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } = useWriteDepositDepositAndSetAnotherRecevier();

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
