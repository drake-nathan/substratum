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
    name: 'Chainlife',
    image: '/projects/chainlife.png',
    maxSupply: 4_096,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'chainlife-by-matto',
    url: 'https://chainlife.xyz/',
  },
  {
    name: 'Blonks',
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
    name: 'Ensō',
    image: '/projects/enso.jpeg',
    maxSupply: 1_000,
    currentSupply: 1_000,
    mintable: false,
    upcoming: false,
    local: false,
    openSeaSlug: 'enso-by-matto',
    url: 'https://matto.xyz/project/enso/',
  },
  {
    name: 'FOCUS',
    image: '/projects/focus.png',
    maxSupply: 1_000,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'focus-by-matto',
    url: 'https://matto.xyz/project/focus/',
  },
  {
    name: 'deFOCUSed',
    image: '/projects/defocused.png',
    maxSupply: 1_000,
    mintable: true,
    upcoming: false,
    local: false,
    openSeaSlug: 'defocused',
    url: 'https://matto.xyz/project/defocused/',
  },
  {
    name: 'Texture and Hues',
    image: '/projects/texture.svg',
    maxSupply: 1_000,
    mintable: true,
    upcoming: false,
    local: true,
    openSeaSlug: 'texture-and-hues',
    url: '/',
  },
];
