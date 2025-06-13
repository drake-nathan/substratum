import EtherscanLogo from "public/icons/EtherscanLogo.svg";
import FirstMateLogo from "public/icons/FirstMateLogo.svg";
import MagicEdenLogo from "public/icons/MagicEdenLogo.svg";
import X2y2Logo from "public/icons/X2y2Logo.svg";

export enum Market {
  Etherscan,
  FirstMate,
  MagicEden,
  X2y2,
}

enum UrlParam {
  openseaSlug,
  address,
}

const MarketRootsCollection = {
  [Market.Etherscan]: "https://etherscan.io/address",
  [Market.FirstMate]: "https://market.substratum.art/1/collections",
  [Market.MagicEden]: "https://magiceden.io/collections/ethereum",
  [Market.X2y2]: "https://x2y2.io/collection",
} satisfies Record<Market, string>;

const MarketRootsToken = {
  [Market.Etherscan]: "",
  [Market.FirstMate]: "https://market.substratum.art/1",
  [Market.MagicEden]: "https://magiceden.io/item-details/ethereum",
  [Market.X2y2]: "https://x2y2.io/eth",
} satisfies Record<Market, string>;

interface Icon {
  altCollection: string;
  altToken: string;
  id: string;
  market: Market;
  // necessary for svgr
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  tooltipCollection: string;
  tooltipToken: string;
  urlParam: UrlParam;
}

export const getProjectMarketLink = ({
  address,
  icon: { market },
}: {
  address: string;
  icon: Icon;
}): string => {
  const root = MarketRootsCollection[market];
  const param = address;

  return `${root}/${param}`;
};

export const getTokenMarketLink = ({
  address,
  icon: { market },
  tokenId,
}: {
  address: string;
  icon: Icon;
  tokenId: number | string;
}): string => {
  const root = MarketRootsToken[market];

  return `${root}/${address.toLowerCase()}/${tokenId}`;
};

export const icons: Icon[] = [
  {
    altCollection: "Etherscan external contract link.",
    altToken: "",
    id: "Etherscan",
    market: Market.Etherscan,
    src: EtherscanLogo,
    tooltipCollection: "Etherscan contract page",
    tooltipToken: "",
    urlParam: UrlParam.address,
  },
  {
    altCollection: "Substratum community marketplace external collection link.",
    altToken: "Substratum community marketplace token link.",
    id: "FirstMate",
    market: Market.FirstMate,
    src: FirstMateLogo,
    tooltipCollection: "Substratum community marketplace collection page",
    tooltipToken: "Substratum community marketplace token page",
    urlParam: UrlParam.address,
  },
  {
    altCollection: "MagicEden external collection link.",
    altToken: "MagicEden token link.",
    id: "MagicEden",
    market: Market.MagicEden,
    src: MagicEdenLogo,
    tooltipCollection: "MagicEden collection page",
    tooltipToken: "MagicEden token page",
    urlParam: UrlParam.address,
  },
  {
    altCollection: "X2y2 external collection link.",
    altToken: "X2y2 token link.",
    id: "X2y2",
    market: Market.X2y2,
    src: X2y2Logo,
    tooltipCollection: "X2y2 collection page",
    tooltipToken: "X2y2 token page",
    urlParam: UrlParam.address,
  },
];
