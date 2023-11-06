import {
  type Method,
  methods,
} from "components/ProjectPage/100x/Shuffler/methods";
import type { Address, Hash } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useOneHundredXShuffle,
  usePrepareOneHundredXShuffle,
} from "../../wagmi/generated";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (hash: Hash) => void;
  payableAmount: bigint;
  method: Method | undefined;
  vault?: Address;
}

export const useShuffle = ({
  handleError,
  handleSuccess,
  payableAmount,
  method,
  vault,
}: Params): {
  write: (() => void) | undefined;
  data: WriteContractResult | undefined;
} => {
  const { config } = usePrepareOneHundredXShuffle({
    args: vault
      ? [BigInt(method ? methods[method] : 0), vault]
      : [BigInt(method ? methods[method] : 0)],
    onError: (error) => {
      if (method) {
        handleError(error);
        console.error(error);
      }
    },
    value: payableAmount,
  });

  const { write, data } = useOneHundredXShuffle({
    ...config,
    onError: (error) => {
      if (method) {
        handleError(error);
        console.error(error);
      }
    },
    onSuccess: (data) => handleSuccess(data.hash),
  });

  return { data, write: method ? write : undefined };
};
