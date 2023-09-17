import {
  type Method,
  methods,
} from "components/ProjectPage/LayeredCollection/Shuffler/methods";
import { SetState } from "utils/types";
import type { Address } from "viem";
import type { WriteContractResult } from "wagmi/dist/actions";

import {
  useOneHundredXShuffle,
  usePrepareOneHundredXShuffle,
} from "../wagmi/generated";

interface Params {
  handleError: (error: string) => void;
  payableAmount: bigint;
  method: Method | undefined;
  setMethod: SetState<Method | undefined>;
  vault?: Address;
}

export const useShuffle = ({
  handleError,
  payableAmount,
  method,
  setMethod,
  vault,
}: Params): {
  write: (() => void) | undefined;
  data: WriteContractResult | undefined;
} => {
  const { config } = usePrepareOneHundredXShuffle({
    args: vault
      ? [BigInt(method ? methods[method] : 0), vault]
      : [BigInt(method ? methods[method] : 0)],
    value: payableAmount,
    onError: (error) => {
      if (method) {
        handleError(`Error preparing ${method} shuffle`);
        setMethod(undefined);
        console.error(error);
      }
    },
  });

  const { write, data } = useOneHundredXShuffle({
    ...config,
    onError: (error) => {
      if (method) {
        handleError(`Error executing ${method} shuffle`);
        console.error(error);
      }
    },
  });

  return { write: method ? write : undefined, data };
};
