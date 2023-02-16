export interface Project {
  name: string;
  artist: string;
  website: string;
  projectSlug: string;
  contractAddress: string;
  image: string;
  maxSupply: number;
  currentSupply?: number;
  isZeroIndexed: boolean;
  isTokenIdInTitle: boolean;
  usesTransfers: boolean;
  isMobileControls?: boolean;
  isAltGenerator?: boolean;
  useTokenName?: boolean;
  aspectRatio: number;
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
    artist: 'Matto',
    website: 'https://matto.xyz',
    projectSlug: 'crystallized-illusions',
    contractAddress: '0x5B17395A9699D2819a9d009bA375a0825b077385',
    image: '/projects/crystallized-illusions.png',
    maxSupply: 99,
    currentSupply: 99,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: false,
    useTokenName: true,
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
    artist: 'Immutable Computer',
    website: 'http://immutablecomputer.com/carbon.html',
    projectSlug: 'negative-carbon',
    contractAddress: '0xa9132D23886b63D29858Fe541214fEad5815d64A',
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
    artist: 'Matto',
    website: 'https://matto.xyz',
    projectSlug: 'mathare-memories',
    contractAddress: '0x2eEa9f8eb2a3365175c7cb25Db9ae277bE218806',
    image: '/projects/mathare-memories.png',
    maxSupply: 68,
    currentSupply: 68,
    aspectRatio: 1,
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
    name: 'Texture and Hues',
    artist: 'Matto',
    website: 'https://matto.xyz',
    projectSlug: 'texture-and-hues',
    contractAddress: '0x15BF7610a7d50541e865EfA3adad434147a4E1A9',
    image: '/projects/texture.svg',
    maxSupply: 256,
    currentSupply: 256,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: false,
    mintable: false,
    upcoming: false,
    local: true,
    openSeaSlug: 'texture-and-hues',
    description:
      'Texture and Hues is an experimental project in minimalism. Images are vector graphic SVGs, and both the images and metadata are created on-chain. Coded by Matto.',
  },
  {
    name: 'Chainlife',
    artist: 'Matto',
    website: 'https://matto.xyz',
    projectSlug: 'chainlife',
    contractAddress: '0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429',
    image: '/projects/chainlife.png',
    maxSupply: 4_096,
    aspectRatio: 1,
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
    name: 'BLONKS',
    artist: 'Matto',
    website: 'https://matto.xyz',
    projectSlug: 'blonks',
    contractAddress: '0x7f463b874eC264dC7BD8C780f5790b4Fc371F11f',
    image: '/projects/blonks.png',
    maxSupply: 4_444,
    currentSupply: 4_444,
    aspectRatio: 1,
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
];

export enum ProjectSort {
  all,
  minting,
  upcoming,
}
