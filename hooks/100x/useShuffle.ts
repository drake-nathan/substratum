import type { Address, Hash } from "viem";

import {
  useSimulateOneHundredXShuffle,
  useWriteOneHundredXShuffle,
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
}: Params) => {
  const { data, error } = useSimulateOneHundredXShuffle({
    args:
      vault ?
        [BigInt(method ? methods[method] : 0), vault]
      : [BigInt(method ? methods[method] : 0)],
    value: payableAmount,
  });

  if (error) {
    handleError(error);
    console.error(error);
  }

  const { writeContract } = useWriteOneHundredXShuffle();

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
