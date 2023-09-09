import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const projectId = process.env.NEXT_PUBLIC_W3M_PROJECT_ID;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_W3M_PROJECT_ID");
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [publicProvider()],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
  webSocketPublicClient,
});

export const web3ModalClient = new EthereumClient(wagmiConfig, chains);
