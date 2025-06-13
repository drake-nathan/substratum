import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { mainnet, sepolia } from "wagmi/chains";

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
          [sepolia.id]: "0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B",
        },
        name: "deposit",
      },
    ],
    out: "wagmi/generated.ts",
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY,
        chainId: mainnet.id,
        contracts: [],
      }),
      react(),
    ],
  };
});
