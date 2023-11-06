import type { Address, Hash } from "viem";

type Params = {
  chain: "mainnet" | "goerli";
  type: "address" | "tx";
  value: Address | Hash;
};

export const getEtherscanLink = ({ chain, type, value }: Params) => {
  const baseUrl = `https://${
    chain === "goerli" ? "goerli." : ""
  }etherscan.io/${type}/`;

  return baseUrl + value;
};
