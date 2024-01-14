import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { goerli, mainnet, sepolia } from "wagmi/chains";

import { depositAbi } from "./data/depositAbi";

export default defineConfig(() => {
  const env = loadEnv({
    envDir: process.cwd(),
    mode: process.env.NODE_ENV,
  });

  return {
    contracts: [
      {
        abi: depositAbi,
        address: {
          [sepolia.id]: "0xC042DBF6f75C25CD2EBBeA24879a14B59B9Ae80c",
        },
        name: "deposit",
      },
    ],
    out: "wagmi/generated.ts",
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY,
        chainId: env.NEXT_PUBLIC_CHAIN === "mainnet" ? mainnet.id : goerli.id,
        contracts: [
          {
            address: {
              [goerli.id]: "0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3",
            },
            name: "oneHundredX",
          },
        ],
      }),
      react(),
    ],
  };
});
