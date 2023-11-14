import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;
const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY;
const chainEnv = process.env.NEXT_PUBLIC_CHAIN;

if (!projectId || !infuraKey || !chainEnv) {
  throw new Error("Missing env variables");
}

const chain = chainEnv === "goerli" ? goerli : mainnet;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [chain],
  [
    w3mProvider({ projectId }),
    infuraProvider({ apiKey: infuraKey }),
    publicProvider(),
  ],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
  webSocketPublicClient,
});

export const web3ModalClient = new EthereumClient(wagmiConfig, chains);
