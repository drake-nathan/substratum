import type { ConfigOptions } from "@web3modal/wagmi/dist/types/src/utils/defaultWagmiCoreConfig";

import { createConfig, http } from "wagmi";
import { goerli, mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

import { getInfuraUrl } from "utils/helpers";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;
const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!projectId || !infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

export const chains = chainEnv === "goerli" ? [goerli, sepolia] : [mainnet];

const metadata: ConfigOptions["metadata"] = {
  description: "Web3Modal Example",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  name: "Web3Modal",
  url: "https://web3modal.com",
};

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected({ shimDisconnect: true }),
    walletConnect({ metadata, projectId, showQrModal: false }),
    coinbaseWallet({
      appLogoUrl: metadata.icons[0],
      appName: metadata.name,
    }),
  ],
  transports: {
    [goerli.id]: http(getInfuraUrl({ chain: "goerli", infuraKey })),
    [mainnet.id]: http(getInfuraUrl({ chain: "mainnet", infuraKey })),
    [sepolia.id]: http(getInfuraUrl({ chain: "sepolia", infuraKey })),
  },
});
