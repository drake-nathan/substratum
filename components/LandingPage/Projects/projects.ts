export interface Project {
  name: string;
  projectSlug: string;
  image: string;
  maxSupply: number;
  currentSupply?: number;
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
    name: 'MATHARE MEMORIES',
    projectSlug: 'mathare-memories',
    image: '/projects/mathare-memories.png',
    maxSupply: 68,
    currentSupply: 68,
    mintable: false,
    upcoming: true,
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
    name: 'CHAINLIFE',
    projectSlug: 'chainlife',
    image: '/projects/chainlife.png',
    maxSupply: 4_096,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'chainlife-by-matto',
    externalUrl: 'https://chainlife.xyz/',
    description: 'Chainlife is',
  },
  {
    name: 'BLONKS',
    projectSlug: 'blonks',
    image: '/projects/blonks.png',
    maxSupply: 4_444,
    currentSupply: 4_444,
    mintable: false,
    upcoming: false,
    local: false,
    openSeaSlug: 'blonks',
    externalUrl: 'https://blonks.xyz/',
    description: 'BLONKS is',
  },
  {
    name: 'TEXTURES',
    projectSlug: 'textures',
    image: '/projects/texture.svg',
    maxSupply: 1_000,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'texture-and-hues',
    externalUrl: 'https://matto.xyz/project/texture-and-hues/',
    description: 'Textures is',
  },
];

export enum ProjectSort {
  all,
  minting,
  upcoming,
}
