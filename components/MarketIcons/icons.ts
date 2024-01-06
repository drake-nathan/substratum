/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import EtherscanLogo from "public/icons/EtherscanLogo.svg";
import FirstMateLogo from "public/icons/FirstMateLogo.svg";
import LooksRareLogo from "public/icons/LooksRareLogo.svg";
import X2y2Logo from "public/icons/X2y2Logo.svg";

export enum Market {
  Etherscan,
  FirstMate,
  LooksRare,
  X2y2,
}

enum UrlParam {
  slug,
  address,
}

const MarketRootsCollection = {
  [Market.Etherscan]: "https://etherscan.io/address",
  [Market.FirstMate]: "https://market.substratum.art/1/collections/",
  [Market.LooksRare]: "https://looksrare.org/collections",
  [Market.X2y2]: "https://x2y2.io/collection",
} satisfies Record<Market, string>;

const MarketRootsToken = {
  [Market.Etherscan]: "",
  [Market.FirstMate]: "https://market.substratum.art/1/",
  [Market.LooksRare]: "https://looksrare.org/collections",
  [Market.X2y2]: "https://x2y2.io/eth",
} satisfies Record<Market, string>;

interface Icon {
  altCollection: string;
  altToken: string;
  id: string;
  market: Market;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
  tooltipCollection: string;
  tooltipToken: string;
  urlParam: UrlParam;
}

export const getProjectMarketLink = (
  icon: Icon,
  slug: string,
  address: string,
): string => {
  const { market, urlParam } = icon;

  const root = MarketRootsCollection[market];
  const param = urlParam === UrlParam.slug ? slug : address;

  return `${root}/${param}`;
};

export const getTokenMarketLink = (
  icon: Icon,
  address: string,
  tokenId: number | string,
): string => {
  const { market } = icon;

  const root = MarketRootsToken[market];

  return `${root}/${address}/${tokenId}`;
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
    altCollection: "LooksRare external collection link.",
    altToken: "LooksRare token link.",
    id: "LooksRare",
    market: Market.LooksRare,
    src: LooksRareLogo,
    tooltipCollection: "LooksRare collection page",
    tooltipToken: "LooksRare token page",
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
