import { createPublicClient, http } from "viem";
import { goerli, mainnet } from "viem/chains";

import { getInfuraUrl } from "utils/helpers";

const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

const chain = chainEnv === "goerli" ? goerli : mainnet;
const chainName = chainEnv === "goerli" ? "goerli" : "mainnet";

export const getViem = () => {
  const client = createPublicClient({
    chain,
    transport: http(getInfuraUrl({ chain: chainName, infuraKey })),
  });

  return client;
};
