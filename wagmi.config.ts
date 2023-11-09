import { defineConfig, loadEnv } from "@wagmi/cli";
import { etherscan, react } from "@wagmi/cli/plugins";
import { goerli, mainnet } from "wagmi/chains";

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });

  return {
    out: "wagmi/generated.ts",
    contracts: [],
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_API_KEY ?? "",
        chainId: env.NEXT_PUBLIC_CHAIN === "mainnet" ? mainnet.id : goerli.id,
        contracts: [
          {
            name: "oneHundredX",
            address: {
              [goerli.id]: "0x0D257B5Eeebf30eF9Eb05589Bb5F94b1AA5D6dd6",
            },
          },
        ],
      }),
      react(),
    ],
  };
});
