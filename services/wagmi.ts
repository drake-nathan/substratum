import type { ConfigOptions } from "@web3modal/wagmi/dist/types/src/utils/defaultWagmiCoreConfig";

import { defaultWagmiConfig } from "@web3modal/wagmi/react";
import { goerli, mainnet } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;
const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!projectId || !infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

export const chains = chainEnv === "goerli" ? [goerli] : [mainnet];

const metadata: ConfigOptions["metadata"] = {
  description: "Web3Modal Example",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  name: "Web3Modal",
  url: "https://web3modal.com",
};

export const wagmiConfig = defaultWagmiConfig({ chains, metadata, projectId });
