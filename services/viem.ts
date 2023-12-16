import { createPublicClient, http } from "viem";
import { goerli, mainnet } from "viem/chains";

const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

const chain = chainEnv === "goerli" ? goerli : mainnet;
const chainName = chainEnv === "goerli" ? "goerli" : "mainnet";

const rpc = `https://${chainName}.infura.io/v3/${infuraKey}`;

export const getViem = () => {
  const client = createPublicClient({
    chain,
    transport: http(rpc),
  });

  return client;
};
