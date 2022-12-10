import { Chain } from 'services/azureApi/types';

export const useChain = () => {
  const chainId = Chain.mainnet;

  const rpc = {
    [Chain.mainnet]: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
    [Chain.goerli]: process.env.NEXT_PUBLIC_RPC_URL_5 as string,
  };

  return {
    chainId,
    rpc: rpc[chainId],
  };
};
