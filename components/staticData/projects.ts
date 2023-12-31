const blobRoot = process.env.NEXT_PUBLIC_BLOB_ROOT;

if (!blobRoot) {
  throw new Error("NEXT_PUBLIC_BLOB_ROOT is not defined");
}

export enum Status {
  Closed = "Closed",
  Minting = "Minting",
  Upcoming = "Upcoming",
}

export enum Artist {
  ImmutableComputer = "Immutable Computer",
  Matto = "Matto",
}

export const artistUrls: Record<Artist, string> = {
  [Artist.Matto]: "https://matto.xyz",
  [Artist.ImmutableComputer]: "http://immutablecomputer.com/",
};

export interface Project {
  artist: Artist;
  artistAddress?: string;
  aspectRatio: number;
  contractAddress: string;
  externalUrl?: string;
  image: string;
  isAltGenerator?: boolean;
  isMobileControls?: boolean;
  isTokenIdInTitle: boolean;
  isZeroIndexed: boolean;
  local: boolean;
  maxSupply: number;
  name: string;
  openSeaSlug: string;
  projectPageInfo: {
    collectionDetails: string;
    date: string;
    description: string;
    interactivity?: string;
    license: string;
    notes?: string;
    royalties?: string;
    tools: string;
  };
  projectSlug: string;
  scriptType?: string;
  status: Status;
  useTokenName?: boolean;
  usesTransfers: boolean;
  website: string;
}

export const projects: Project[] = [
  {
    artist: Artist.Matto,
    artistAddress: "0xF8d9056db2C2189155bc25A30269dc5dDeD15d46",
    aspectRatio: 0.5625,
    contractAddress: "0xCC55af23d9861e41C5875F1e76fb3c4122E8C4Fa",
    externalUrl: "https://substratum.art/project/100x10x1",
    image: `${blobRoot}/images/100x10x1-a-goerli_0.png`,
    isTokenIdInTitle: false,
    isZeroIndexed: true,
    local: true,
    maxSupply: 101,
    name: "100x10x1-A",
    openSeaSlug: "100x10x1A",
    projectPageInfo: {
      collectionDetails: "Algorithmic edition of 100 layers",
      date: "Apr. 2023",
      description: `100 component on-chain generative art layers (tokens 1 - 100).

        10 SVG layers in each component token (randomly generated at mint).
        
        1 composite artwork (token 0) of stacked layers that component owners rearrange.`,
      license: "CC BY-NC 4.0",
      notes:
        "Inspired by smart-contract art, long-form generative art, and abstract expressionism, 100x10x1 - Composition A explores new ground in crypto art. It empowers the community of component token owners, giving them control over the composite artwork’s rendering - all on-chain and without dependencies.",
      tools: "Solidity",
    },
    projectSlug: "100x10x1-a-goerli",
    scriptType: "Solidity",
    status: Status.Upcoming,
    usesTransfers: false,
    website: "https://matto.xyz/project/100x10x1",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x74C093fD987Fff140677Aa83B6CC4680B8ef2956",
    image: "/projects/haiku.png",
    isTokenIdInTitle: false,
    isZeroIndexed: false,
    local: true,
    maxSupply: 1000000,
    name: "Freestyle H-ai-ku",
    openSeaSlug: "freestyle-h-ai-ku",
    projectPageInfo: {
      collectionDetails: "",
      date: "Sept. 29, 2023",
      description:
        '"Freestyle H-ai-ku" is an AI-enhanced exploration of my Freestyle Haiku poetry (freestylehaiku.com). This project utilizes AI as a collective unconscious that not only intensifies the expressiveness of my poetry but also unveils hidden truths and newfound meanings within my words. Each poem is individually stored in the smart contract, while image media, AI-generated poem interpretations, and attributes metadata is stored on Arweave. The resulting work is more than a poem or a visual, it is also a vehicle for the introspection of the human condition through the lens of early Artificial Intelligence systems.',
      license: "CC BY-NC 4.0",
      tools: "Solidity, Stable Diffusion, Transformer LLM, GAN, CNN",
    },
    projectSlug: "haiku",
    status: Status.Minting,
    usesTransfers: false,
    website: "https://matto.xyz/project/freestyle-h-ai-ku/",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x5B17395A9699D2819a9d009bA375a0825b077385",
    image: "/projects/crystallized-illusions.png",
    isTokenIdInTitle: false,
    isZeroIndexed: true,
    local: true,
    maxSupply: 99,
    name: "Crystallized Illusions",
    openSeaSlug: "crystallized-illusions",
    projectPageInfo: {
      collectionDetails: "99 curated 1/1s (three groups of 33)",
      date: "Sept. 3, 2021",
      description:
        "Inspired by Buddhist philosophy, Crystallized Illusions is a collection of 99 pieces created through a generative process. Three variations of this process were made to correspond to the categories of illusions as described by Zhiyi (538-597 CE), the fourth patriarch of the T'ien-t'ai (or Tí Taî) Buddhist tradition. Each process was used to created 33 distinct images.",
      interactivity:
        "Double click on the image to mirror it along one axis, double click again to mirror along the other axis, and double click a third time to see the image mirrored along both axes. A final double-click will return the token to 'normal'.",
      license: "CC BY-NC 4.0",
      notes:
        "Originally minted and sold on Opensea, the upgraded project is now bridging to Substratum.",
      tools: "Canon 7D, ActionScript, Photoshop",
    },
    projectSlug: "crystallized-illusions",
    scriptType: "p5",
    status: Status.Closed,
    useTokenName: true,
    usesTransfers: false,
    website: "https://matto.xyz",
  },
  {
    artist: Artist.ImmutableComputer,
    aspectRatio: 1.777777777777777,
    contractAddress: "0xa9132D23886b63D29858Fe541214fEad5815d64A",
    image: "/projects/negative-carbon.png",
    isTokenIdInTitle: true,
    isZeroIndexed: true,
    local: true,
    maxSupply: 128,
    name: "Negative Carbon",
    openSeaSlug: "negative-carbon",
    projectPageInfo: {
      collectionDetails: "Algorithmic edition of 128",
      date: "Jan. 1, 2023",
      description:
        "Each Negative Carbon NFT (NCNFT) offsets more than its carbon footprint using rigorously validated, third-party audited, retired, carbon offsets. Each token is assigned an offset certificate and mint, and that certificate's serial number becomes the token's generative art's entropy. For more information, visit http://immutablecomputer.com/carbon.html.",
      license: "CC BY-NC 4.0",
      notes:
        "Token entropy is determined by its carbon offset serial number, and is not publicly mintable. The artist is minting, giving, and selling tokens as they see fit.",
      tools: "Solidity, p5.js",
    },
    projectSlug: "negative-carbon",
    scriptType: "p5.js",
    status: Status.Minting,
    usesTransfers: true,
    website: "http://immutablecomputer.com/carbon.html",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x2eEa9f8eb2a3365175c7cb25Db9ae277bE218806",
    image: "/projects/mathare-memories.png",
    isTokenIdInTitle: true,
    isZeroIndexed: false,
    local: true,
    maxSupply: 68,
    name: "Mathare Memories",
    openSeaSlug: "mathare-memories",
    projectPageInfo: {
      collectionDetails: "68 curated 1/1s",
      date: "Dec. 19, 2022",
      description:
        "Mathare Memories is an interactive, multimedia collection of 68 photographs taken in the Mathare slum of Nairobi, Kenya in 2007. High resolution images and audio files are permanently stored on Arweave, are backed up on Github, and are retrieved for display by on-chain JavaScript running in your browser.",
      interactivity:
        "Press 'P' or long press/click & release on an image to play a short audio recording of Matto reading the token's description. Press 'N' or double-click to display the next token in the collection, and press 'R' to return to the token's starting content. Press '<' or '>' to change the brightness of the matte displayed behind the image.",
      license: "All Rights Reserved",
      royalties: `100% of all artist proceeds are being transparently directed to charity. 100% of all "creator" secondary fees are being transparently directed to charity. Matto and substratum.art (the platform that powers this multimedia collection) receive no compensation for this project.

      As a 100% charity project, 10% royalties are expected to be paid on all sales and should be sent to the collection's smart contract address.`,
      tools: "Canon 300D and A700, p5.js",
    },
    projectSlug: "mathare-memories",
    scriptType: "p5.js",
    status: Status.Closed,
    usesTransfers: true,
    website: "https://matto.xyz",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x15BF7610a7d50541e865EfA3adad434147a4E1A9",
    image: "/projects/texture.svg",
    isTokenIdInTitle: true,
    isZeroIndexed: true,
    local: true,
    maxSupply: 256,
    name: "Texture and Hues",
    openSeaSlug: "texture-and-hues",
    projectPageInfo: {
      collectionDetails: "Algorithmic edition of 256",
      date: "Aug. 26, 2022",
      description:
        "Texture and Hues is an experimental project in minimalism. Images are vector graphic SVGs, and both the images and metadata are created on-chain. Coded by Matto.",
      license: "CC BY-NC 4.0",
      notes:
        "Tokens were freely claimable by all BLONKS mintors who paid a mint fee (50% of which went to charity).",
      tools: "Solidity",
    },
    projectSlug: "texture-and-hues",
    scriptType: "solidity",
    status: Status.Closed,
    usesTransfers: false,
    website: "https://matto.xyz",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x4E171e0F14a9046e14B93221f31Acd2EC4Af8429",
    externalUrl: "https://chainlife.xyz/",
    image: "/projects/chainlife.png",
    isTokenIdInTitle: true,
    isZeroIndexed: true,
    local: false,
    maxSupply: 4_096,
    name: "Chainlife",
    openSeaSlug: "chainlife-by-matto",
    projectPageInfo: {
      collectionDetails: "Algorithmic edition of 4096",
      date: "Nov. 6, 2022",
      description:
        "Chainlife is an interactive, evolving, collaborative, and extensible project exploring cellular automata. The individual tokens can be rendered in a variety of ways, and they combine together to form an everchanging world of on-chain data.",
      license: "CC BY-NC 4.0",
      notes:
        "The project is so complex it has its own website and documentation. Learn more at https://chainlife.xyz.",
      tools: "Solidity, JavaScript, p5.js, Azure",
    },
    projectSlug: "chainlife",
    scriptType: "p5.js",
    status: Status.Minting,
    usesTransfers: true,
    website: "https://matto.xyz",
  },
  {
    artist: Artist.Matto,
    aspectRatio: 1,
    contractAddress: "0x7f463b874eC264dC7BD8C780f5790b4Fc371F11f",
    externalUrl: "https://blonks.xyz/",
    image: "/projects/blonks.png",
    isTokenIdInTitle: true,
    isZeroIndexed: true,
    local: false,
    maxSupply: 4_444,
    name: "BLONKS",
    openSeaSlug: "blonks",
    projectPageInfo: {
      collectionDetails: "Algorithmic edition of 4444",
      date: "May 24, 2022",
      description:
        "BLONKS is a collection of 4,444 completely on-chain vector-graphic illustrations with personality and with unique design mechanics. BLONKS token images change their 'base' when transferred between wallets, they're licensed CC0, and they live on Ethereum.",
      license: "CC0",
      notes:
        "BLONKS are family friendly, have no external dependencies, are completely generative without predefined layers, and they change when they're transferred between wallets.",
      tools: "Solidity",
    },
    projectSlug: "blonks",
    status: Status.Closed,
    usesTransfers: true,
    website: "https://matto.xyz",
  },
];

export type ProjectSort = "all" | "minting" | "upcoming" | "closed";
