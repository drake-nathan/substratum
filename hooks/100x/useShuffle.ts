import type { Address, Hash } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useOneHundredXShuffle,
  usePrepareOneHundredXShuffle,
} from "../../wagmi/generated";
import {
  type Method,
  methods,
} from "components/ProjectPage/100x/Shuffler/methods";

interface Params {
  handleError: (error: Error) => void;
  handleSuccess: (hash: Hash) => void;
  method: Method | undefined;
  payableAmount: bigint;
  vault?: Address;
}

export const useShuffle = ({
  handleError,
  handleSuccess,
  method,
  payableAmount,
  vault,
}: Params): {
  data: WriteContractResult | undefined;
  write: (() => void) | undefined;
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

  const { data, write } = useOneHundredXShuffle({
    ...config,
    onError: (error) => {
      if (method) {
        handleError(error);
        console.error(error);
      }
    },
    onSuccess: (data) => {
      handleSuccess(data.hash);
    },
  });

  return { data, write: method ? write : undefined };
};
