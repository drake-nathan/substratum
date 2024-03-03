import type { Address, Hash } from "viem";

export const intlNumberFormat = (value: number) =>
  new Intl.NumberFormat().format(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const getInfuraUrl = ({
  chain,
  infuraKey,
}: {
  chain: string;
  infuraKey: string;
}) => {
  return `https://${chain}.infura.io/v3/${infuraKey}`;
};

type ChainId = 1 | 5 | 11155111;
const chainIds = [1, 5, 11155111];
export const getEtherscanUrl = ({
  chainId,
  type = "address",
  value,
}: {
  chainId: number;
  type?: "address" | "tx";
  // I know they're the same type, but the semantic helps
  // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
  value: Address | Hash;
}) => {
  const _chainId = chainIds.includes(chainId) ? chainId : 1;

  const chainMap: Record<ChainId, string> = {
    1: "",
    5: "goerli.",
    11155111: "sepolia.",
  };

  const chain = chainMap[_chainId as ChainId];

  return `https://${chain}etherscan.io/${type}/${value}`;
};
