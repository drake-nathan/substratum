import type { Hash } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useDepositCancelAndRefund,
  usePrepareDepositCancelAndRefund,
} from "../../wagmi/generated";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (hash: Hash) => void;
  tokenId: number;
}

export const useCancelDeposit = ({
  handleError,
  handleSuccess,
  tokenId,
}: Params): {
  data: WriteContractResult | undefined;
  write: (() => void) | undefined;
} => {
  const { config } = usePrepareDepositCancelAndRefund({
    onError: (error) => {
      if (tokenId) {
        handleError(error);
        console.error(error);
      }
    },
  });

  const { data, write } = useDepositCancelAndRefund({
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
