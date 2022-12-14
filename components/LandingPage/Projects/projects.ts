export interface Project {
  name: string;
  image: string;
  maxSupply: number;
  currentSupply?: number;
  mintable: boolean;
  upcoming: boolean;
  local: boolean;
  openSeaSlug: string;
  url: string;
  description?: string;
}

export const projects: Project[] = [
  {
    name: 'CHAINLIFE',
    image: '/projects/chainlife.png',
    maxSupply: 4_096,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'chainlife-by-matto',
    url: 'https://chainlife.xyz/',
  },
  {
    name: 'BLONKS',
    image: '/projects/blonks.png',
    maxSupply: 4_444,
    currentSupply: 4_444,
    mintable: false,
    upcoming: false,
    local: true,
    openSeaSlug: 'blonks',
    url: '/',
  },
  {
    name: 'TEXTURES',
    image: '/projects/texture.svg',
    maxSupply: 1_000,
    mintable: true,
    upcoming: false,
    local: true,
    openSeaSlug: 'texture-and-hues',
    url: '/',
  },
];
