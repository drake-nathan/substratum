import { DelegateV2 } from "@delegatexyz/sdk";
import { http } from "viem";

const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

const chainName = chainEnv === "goerli" ? "goerli" : "mainnet";

const rpc = `https://${chainName}.infura.io/v3/${infuraKey}`;

export const delegate = new DelegateV2(http(rpc));
