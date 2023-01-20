export interface Project {
  name: string;
  projectSlug: string;
  image: string;
  maxSupply: number;
  currentSupply?: number;
  isZeroIndexed: boolean;
  isTokenIdInTitle: boolean;
  usesTransfers: boolean;
  isMobileControls?: boolean;
  isAltGenerator?: boolean;
  aspectRatio?: number;
  mintable: boolean;
  upcoming: boolean;
  local: boolean;
  openSeaSlug: string;
  externalUrl?: string;
  description: string;
  interactivity?: string;
  royalties?: string;
}

export const projects: Project[] = [
  {
    name: 'Crystallized Illusions',
    projectSlug: 'crystallized-illusions',
    image: '/projects/crystallized-illusions.png',
    maxSupply: 99,
    currentSupply: 99,
    isZeroIndexed: true,
    isTokenIdInTitle: false,
    usesTransfers: false,
    mintable: false,
    upcoming: false,
    local: true,
    openSeaSlug: 'crystallized-illusions',
    description:
      "Inspired by Buddhist philosophy, Crystallized Illusions is a collection of 99 pieces created through a generative process. Three variations of this process were made to correspond to the categories of illusions as described by Zhiyi (538-597 CE), the fourth patriarch of the T'ien-t'ai (or Tí Taî) Buddhist tradition. Each process was used to created 33 distinct images.",
  },
  {
    name: 'Negative Carbon',
    projectSlug: 'negative-carbon',
    image: '/projects/negative-carbon.png',
    maxSupply: 128,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    aspectRatio: 1.777777777777777,
    usesTransfers: true,
    mintable: true,
    upcoming: false,
    local: true,
    openSeaSlug: 'negative-carbon',
    description:
      "Each Negative Carbon NFT (NCNFT) offsets more than its carbon footprint using rigorously validated, third-party audited, retired, carbon offsets. Each token is assigned an offset certificate and mint, and that certificate's serial number becomes the token's generative art's entropy. For more information, visit http://immutablecomputer.com/carbon.html.",
  },
  {
    name: 'Mathare Memories',
    projectSlug: 'mathare-memories',
    image: '/projects/mathare-memories.png',
    maxSupply: 68,
    currentSupply: 68,
    isZeroIndexed: false,
    isTokenIdInTitle: true,
    usesTransfers: true,
    mintable: false,
    upcoming: false,
    local: true,
    openSeaSlug: 'mathare-memories',
    description:
      'Mathare Memories is an interactive, multimedia collection of 68 photographs taken in the Mathare slum of Nairobi, Kenya in 2007. High resolution images and audio files are permanently stored on Arweave, are backed up on Github, and are retrieved for display by on-chain JavaScript running in your browser.',
    interactivity:
      "Press 'P' or long press/click & release on an image to play a short audio recording of Matto reading the token's description. Press 'N' or double-click to display the next token in the collection, and press 'R' to return to the token's starting content. Press '<' or '>' to change the brightness of the matte displayed behind the image.",
    royalties: `100% of all artist proceeds are being transparently directed to charity. 100% of all "creator" secondary fees are being transparently directed to charity. Matto and substratum.art (the platform that powers this multimedia collection) receive no compensation for this project.

    As a 100% charity project, 10% royalties are expected to be paid on all sales and should be sent to the collection's smart contract address.`,
  },
  {
    name: 'Chainlife',
    projectSlug: 'chainlife',
    image: '/projects/chainlife.png',
    maxSupply: 4_096,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: true,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'chainlife-by-matto',
    externalUrl: 'https://chainlife.xyz/',
    description: 'Chainlife is',
  },
  {
    name: 'Blonks',
    projectSlug: 'blonks',
    image: '/projects/blonks.png',
    maxSupply: 4_444,
    currentSupply: 4_444,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: true,
    mintable: false,
    upcoming: false,
    local: false,
    openSeaSlug: 'blonks',
    externalUrl: 'https://blonks.xyz/',
    description: 'BLONKS is',
  },
  {
    name: 'Textures',
    projectSlug: 'textures',
    image: '/projects/texture.svg',
    maxSupply: 1_000,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: true,
    mintable: false,
    upcoming: false,
    local: false,
    openSeaSlug: 'texture-and-hues',
    externalUrl:
      'https://opensea.io/collection/texture-and-hues?search[sortAscending]=true&search[sortBy]=CREATED_DATE',
    description: 'Textures is',
  },
];

export enum ProjectSort {
  all,
  minting,
  upcoming,
}
