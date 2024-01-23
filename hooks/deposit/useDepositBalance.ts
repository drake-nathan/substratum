import { formatEther } from "viem";
import { useBalance, useChainId } from "wagmi";

import { depositAddress } from "../../wagmi/generated";

export const useDepositBalance = () => {
  const chainId = useChainId();

  type ValidChainIds = keyof typeof depositAddress;

  const isValidChainId = (chainId: number): chainId is ValidChainIds => {
    const validChainIds = Object.keys(depositAddress).map(Number);

    return validChainIds.includes(chainId);
  };

  const address = isValidChainId(chainId) ? depositAddress[chainId] : undefined;

  const { data, error } = useBalance({ address });

  if (error) {
    throw error;
  }

  if (data?.value !== undefined) {
    return formatEther(data.value);
  }

  return undefined;
};
