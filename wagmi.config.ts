import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { goerli, mainnet } from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    envDir: process.cwd(),
    mode: process.env.NODE_ENV,
  });

  return {
    contracts: [],
    out: "wagmi/generated.ts",
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY ?? "",
        chainId: env.NEXT_PUBLIC_CHAIN === "mainnet" ? mainnet.id : goerli.id,
        contracts: [
          {
            address: {
              [goerli.id]: "0xa9132D23886b63D29858Fe541214fEad5815d64A",
            },
            name: "oneHundredX",
          },
        ],
      }),
      react(),
    ],
  };
});
