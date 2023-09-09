export enum Status {
  Closed = "Closed",
  Upcoming = "Upcoming",
  Minting = "Minting",
}

export enum Artist {
  Matto = "Matto",
  ImmutableComputer = "Immutable Computer",
}

export const artistUrls: Record<Artist, string> = {
  [Artist.Matto]: "https://matto.xyz",
  [Artist.ImmutableComputer]: "http://immutablecomputer.com/",
};

export interface Project {
  name: string;
  artist: Artist;
  artistAddress?: string;
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
  scriptType?: string;
  aspectRatio: number;
  status: Status;
  local: boolean;
  openSeaSlug: string;
  externalUrl?: string;
  projectPageInfo: {
    description: string;
    collectionDetails: string;
    date: string;
    tools: string;
    license: string;
    notes?: string;
    interactivity?: string;
    royalties?: string;
  };
}

export const projects: Project[] = [
  // FIXME - this is only temporary: once the API is built, this project may come back with different properties than this. The only thing I need it to do right now is be a placeholder.
  {
    name: "100x10x1-a",
    projectSlug: "100x10x1-a",
    image:
      "https://mattoapi.blob.core.windows.net/images/100x10x1-a-goerli_0.png",
    artist: Artist.Matto,
    openSeaSlug: "100x10x1A",
    artistAddress: "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46",
    contractAddress: "0x0D257B5Eeebf30eF9Eb05589Bb5F94b1AA5D6dd6",
    currentSupply: 0,
    maxSupply: 100,
    isZeroIndexed: true,
    isTokenIdInTitle: false,
    status: Status.Upcoming,
    local: true,
    scriptType: "Solidity",
    aspectRatio: 1,
    usesTransfers: false,
    website: "https://matto.xyz/project/100x10x1",
    externalUrl: "https://substratum.art/project/100x10x1",
    projectPageInfo: {
      description: `100 component on-chain generative art layers (tokens 1 - 100).

        10 SVG layers in each component token (randomly generated at mint).
        
        1 composite artwork (token 0) of stacked layers that component owners rearrange.`,
      collectionDetails: "Algorithmic edition of 100 layers",
      date: "Apr. 2023",
      tools: "Solidity",
      notes:
        "Inspired by smart-contract art, long-form generative art, and abstract expressionism, 100x10x1 - Composition A explores new ground in crypto art. It empowers the community of component token owners, giving them control over the composite artwork's rendering - all on-chain and without dependencies.",
      license: "CC BY-NC 4.0",
    },
  },
  {
    name: "Crystallized Illusions",
    artist: Artist.Matto,
    website: "https://matto.xyz",
    projectSlug: "crystallized-illusions",
    contractAddress: "0x5B17395A9699D2819a9d009bA375a0825b077385",
    image: "/projects/crystallized-illusions.png",
    maxSupply: 99,
    currentSupply: 99,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: false,
    useTokenName: true,
    usesTransfers: false,
    status: Status.Closed,
    local: true,
    scriptType: "p5",
    openSeaSlug: "crystallized-illusions",
    projectPageInfo: {
      description:
        "Inspired by Buddhist philosophy, Crystallized Illusions is a collection of 99 pieces created through a generative process. Three variations of this process were made to correspond to the categories of illusions as described by Zhiyi (538-597 CE), the fourth patriarch of the T'ien-t'ai (or Tí Taî) Buddhist tradition. Each process was used to created 33 distinct images.",
      collectionDetails: "99 curated 1/1s (three groups of 33)",
      date: "Sept. 3, 2021",
      tools: "Canon 7D, ActionScript, Photoshop",
      notes:
        "Originally minted and sold on Opensea, the upgraded project is now bridging to Substratum.",
      license: "CC BY-NC 4.0",
      interactivity:
        "Double click on the image to mirror it along one axis, double click again to mirror along the other axis, and double click a third time to see the image mirrored along both axes. A final double-click will return the token to 'normal'.",
    },
  },
  {
    name: "Negative Carbon",
    artist: Artist.ImmutableComputer,
    website: "http://immutablecomputer.com/carbon.html",
    projectSlug: "negative-carbon",
    contractAddress: "0xa9132D23886b63D29858Fe541214fEad5815d64A",
    image: "/projects/negative-carbon.png",
    maxSupply: 128,
    currentSupply: 12,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    aspectRatio: 1.777777777777777,
    usesTransfers: true,
    status: Status.Minting,
    local: true,
    openSeaSlug: "negative-carbon",
    scriptType: "p5.js",
    projectPageInfo: {
      description:
        "Each Negative Carbon NFT (NCNFT) offsets more than its carbon footprint using rigorously validated, third-party audited, retired, carbon offsets. Each token is assigned an offset certificate and mint, and that certificate's serial number becomes the token's generative art's entropy. For more information, visit http://immutablecomputer.com/carbon.html.",
      collectionDetails: "Algorithmic edition of 128",
      date: "Jan. 1, 2023",
      tools: "Solidity, p5.js",
      notes:
        "Token entropy is determined by its carbon offset serial number, and is not publicly mintable. The artist is minting, giving, and selling tokens as they see fit.",
      license: "CC BY-NC 4.0",
    },
  },
  {
    name: "Mathare Memories",
    artist: Artist.Matto,
    website: "https://matto.xyz",
    projectSlug: "mathare-memories",
    contractAddress: "0x2eEa9f8eb2a3365175c7cb25Db9ae277bE218806",
    image: "/projects/mathare-memories.png",
    maxSupply: 68,
    currentSupply: 68,
    aspectRatio: 1,
    isZeroIndexed: false,
    isTokenIdInTitle: true,
    scriptType: "p5.js",
    usesTransfers: true,
    status: Status.Closed,
    local: true,
    openSeaSlug: "mathare-memories",
    projectPageInfo: {
      description:
        "Mathare Memories is an interactive, multimedia collection of 68 photographs taken in the Mathare slum of Nairobi, Kenya in 2007. High resolution images and audio files are permanently stored on Arweave, are backed up on Github, and are retrieved for display by on-chain JavaScript running in your browser.",
      collectionDetails: "68 curated 1/1s",
      date: "Dec. 19, 2022",
      tools: "Canon 300D and A700, p5.js",
      license: "All Rights Reserved",
      interactivity:
        "Press 'P' or long press/click & release on an image to play a short audio recording of Matto reading the token's description. Press 'N' or double-click to display the next token in the collection, and press 'R' to return to the token's starting content. Press '<' or '>' to change the brightness of the matte displayed behind the image.",
      royalties: `100% of all artist proceeds are being transparently directed to charity. 100% of all "creator" secondary fees are being transparently directed to charity. Matto and substratum.art (the platform that powers this multimedia collection) receive no compensation for this project.

      As a 100% charity project, 10% royalties are expected to be paid on all sales and should be sent to the collection's smart contract address.`,
    },
  },
  {
    name: "Texture and Hues",
    artist: Artist.Matto,
    website: "https://matto.xyz",
    projectSlug: "texture-and-hues",
    contractAddress: "0x15BF7610a7d50541e865EfA3adad434147a4E1A9",
    image: "/projects/texture.svg",
    maxSupply: 256,
    currentSupply: 256,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: false,
    status: Status.Closed,
    local: true,
    openSeaSlug: "texture-and-hues",
    scriptType: "solidity",
    projectPageInfo: {
      description:
        "Texture and Hues is an experimental project in minimalism. Images are vector graphic SVGs, and both the images and metadata are created on-chain. Coded by Matto.",
      collectionDetails: "Algorithmic edition of 256",
      date: "Aug. 26, 2022",
      tools: "Solidity",
      notes:
        "Tokens were freely claimable by all BLONKS mintors who paid a mint fee (50% of which went to charity).",
      license: "CC BY-NC 4.0",
    },
  },
  {
    name: "Chainlife",
    artist: Artist.Matto,
    website: "https://matto.xyz",
    projectSlug: "chainlife",
    contractAddress: "0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429",
    image: "/projects/chainlife.png",
    maxSupply: 4_096,
    currentSupply: 302,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: true,
    status: Status.Minting,
    local: false,
    scriptType: "p5.js",
    openSeaSlug: "chainlife-by-matto",
    externalUrl: "https://chainlife.xyz/",
    projectPageInfo: {
      description:
        "Chainlife is an interactive, evolving, collaborative, and extensible project exploring cellular automata. The individual tokens can be rendered in a variety of ways, and they combine together to form an everchanging world of on-chain data.",
      collectionDetails: "Algorithmic edition of 4096",
      date: "Nov. 6, 2022",
      tools: "Solidity, JavaScript, p5.js, Azure",
      notes:
        "The project is so complex it has its own website and documentation. Learn more at https://chainlife.xyz.",
      license: "CC BY-NC 4.0",
    },
  },
  {
    name: "BLONKS",
    artist: Artist.Matto,
    website: "https://matto.xyz",
    projectSlug: "blonks",
    contractAddress: "0x7f463b874eC264dC7BD8C780f5790b4Fc371F11f",
    image: "/projects/blonks.png",
    maxSupply: 4_444,
    currentSupply: 4_444,
    aspectRatio: 1,
    isZeroIndexed: true,
    isTokenIdInTitle: true,
    usesTransfers: true,
    status: Status.Closed,
    local: false,
    openSeaSlug: "blonks",
    externalUrl: "https://blonks.xyz/",
    projectPageInfo: {
      description:
        "BLONKS is a collection of 4,444 completely on-chain vector-graphic illustrations with personality and with unique design mechanics. BLONKS token images change their 'base' when transferred between wallets, they're licensed CC0, and they live on Ethereum.",
      collectionDetails: "Algorithmic edition of 4444",
      date: "May 24, 2022",
      tools: "Solidity",
      notes:
        "BLONKS are family friendly, have no external dependencies, are completely generative without predefined layers, and they change when they're transferred between wallets.",
      license: "CC0",
    },
  },
];

export enum ProjectSort {
  All,
  Minting,
  Upcoming,
  Closed,
}
