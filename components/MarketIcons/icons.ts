import FirstMateLogo from 'public/icons/FirstMateLogo.svg';
import LooksRareLogo from 'public/icons/LooksRareLogo.svg';
import X2y2Logo from 'public/icons/X2y2Logo.svg';
import EtherscanLogo from 'public/icons/EtherscanLogo.svg';

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
  [Market.Etherscan]: 'https://etherscan.io/address',
  [Market.FirstMate]: 'https://market.substratum.art/1/collections/',
  [Market.LooksRare]: 'https://looksrare.org/collections',
  [Market.X2y2]: 'https://x2y2.io/collection',
} satisfies Record<Market, string>;

const MarketRootsToken = {
  [Market.Etherscan]: '',
  [Market.FirstMate]: 'https://market.substratum.art/1/',
  [Market.LooksRare]: 'https://looksrare.org/collections',
  [Market.X2y2]: 'https://x2y2.io/eth',
} satisfies Record<Market, string>;

interface Icon {
  market: Market;
  urlParam: UrlParam;
  src: any;
  id: string;
  altCollection: string;
  altToken: string;
  tooltipCollection: string;
  tooltipToken: string;
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
  tokenId: string | number,
): string => {
  const { market } = icon;

  const root = MarketRootsToken[market];

  return `${root}/${address}/${tokenId}`;
};

export const icons: Icon[] = [
  {
    market: Market.Etherscan,
    urlParam: UrlParam.address,
    src: EtherscanLogo,
    id: 'Etherscan',
    altCollection: 'Etherscan external contract link.',
    altToken: '',
    tooltipCollection: 'Etherscan contract page',
    tooltipToken: '',
  },
  {
    market: Market.FirstMate,
    urlParam: UrlParam.address,
    src: FirstMateLogo,
    id: 'FirstMate',
    altCollection: 'Community marketplace external collection link.',
    altToken: 'Community marketplace token link.',
    tooltipCollection: 'Community marketplace collection page',
    tooltipToken: 'Community marketplace token page',
  },
  {
    market: Market.LooksRare,
    urlParam: UrlParam.address,
    src: LooksRareLogo,
    id: 'LooksRare',
    altCollection: 'LooksRare external collection link.',
    altToken: 'LooksRare token link.',
    tooltipCollection: 'LooksRare collection page',
    tooltipToken: 'LooksRare token page',
  },
  {
    market: Market.X2y2,
    urlParam: UrlParam.address,
    src: X2y2Logo,
    id: 'X2y2',
    altCollection: 'X2y2 external collection link.',
    altToken: 'X2y2 token link.',
    tooltipCollection: 'X2y2 collection page',
    tooltipToken: 'X2y2 token page',
  },
];
