import OpenSeaLogo from 'public/icons/OpenSeaLogo.svg';
import LooksRareLogo from 'public/icons/LooksRareLogo.svg';
import X2y2Logo from 'public/icons/X2y2Logo.svg';
import EtherscanLogo from 'public/icons/EtherscanLogo.svg';

export enum Market {
  Etherscan,
  OpenSea,
  LooksRare,
  X2y2,
}

export enum UrlParam {
  slug,
  address,
}

export const MarketRoots = {
  [Market.Etherscan]: 'https://etherscan.io/address',
  [Market.OpenSea]: 'https://opensea.io/collection',
  [Market.LooksRare]: 'https://looksrare.org/collections',
  [Market.X2y2]: 'https://x2y2.io/collection',
} satisfies Record<Market, string>;

interface Icon {
  market: Market;
  urlParam: UrlParam;
  src: any;
  alt: string;
  id: string;
  tooltip: string;
}

export const getProjectMarketLink = (
  icon: Icon,
  slug: string,
  address: string,
): string => {
  const { market, urlParam } = icon;

  const root = MarketRoots[market];
  const param = urlParam === UrlParam.slug ? slug : address;

  return `${root}/${param}`;
};

export const icons: Icon[] = [
  {
    market: Market.Etherscan,
    urlParam: UrlParam.address,
    src: EtherscanLogo,
    alt: 'Etherscan external contract link.',
    id: 'Etherscan',
    tooltip: 'Etherscan contract page',
  },
  {
    market: Market.OpenSea,
    urlParam: UrlParam.slug,
    src: OpenSeaLogo,
    alt: 'OpenSea external collection link.',
    id: 'OpenSea',
    tooltip: 'OpenSea collection page',
  },
  {
    market: Market.LooksRare,
    urlParam: UrlParam.address,
    src: LooksRareLogo,
    alt: 'LooksRare external collection link.',
    id: 'LooksRare',
    tooltip: 'LooksRare collection page',
  },
  {
    market: Market.X2y2,
    urlParam: UrlParam.address,
    src: X2y2Logo,
    alt: 'X2y2 external collection link.',
    id: 'X2y2',
    tooltip: 'X2y2 collection page',
  },
];
