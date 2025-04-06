import { getInfuraUrl } from "utils/helpers";
import { createPublicClient, http } from "viem";
import { goerli, mainnet } from "viem/chains";

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
