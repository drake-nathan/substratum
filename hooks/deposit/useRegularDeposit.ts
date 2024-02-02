import type { Hash } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useDepositDepositAndSetSelfAsReceiver,
  usePrepareDepositDepositAndSetSelfAsReceiver,
} from "../../wagmi/generated";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (hash: Hash) => void;
}

export const useRegularDeposit = ({
  handleError,
  handleSuccess,
}: Params): {
  data: WriteContractResult | undefined;
  write: (() => void) | undefined;
} => {
  const { config } = usePrepareDepositDepositAndSetSelfAsReceiver({
    onError: (error) => {
      handleError(error);
      console.error(error);
    },
  });

  const { data, write } = useDepositDepositAndSetSelfAsReceiver({
    ...config,
    onError: (error) => {
      handleError(error);
      console.error(error);
    },
    onSuccess: (data) => handleSuccess(data.hash),
  });

  return { data, write };
};
