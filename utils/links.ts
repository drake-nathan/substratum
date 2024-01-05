import type { Address } from "viem";

type Params = {
  chain: "goerli" | "mainnet";
  type: "address" | "tx";
  value: Address;
};

export const getEtherscanLink = ({ chain, type, value }: Params) => {
  const baseUrl = `https://${
    chain === "goerli" ? "goerli." : ""
  }etherscan.io/${type}/`;

  return baseUrl + value;
};
