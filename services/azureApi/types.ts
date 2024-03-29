export enum ProjectId {
  chainlifeTestnet,
  chainlifeMainnet,
  mathareMemories,
  negativeCarbon,
  crystallizedIllusions,
  textureAndHues,
}

export enum ProjectSlug {
  "100x10x1-a-goerli" = "100x10x1-a-goerli",
  blonks = "blonks",
  chainlifeMainnet = "chainlife",
  chainlifeTestnet = "chainlife-testnet",
  crystallizedIllusions = "crystallized-illusions",
  haiku = "haiku",
  mathareMemories = "mathare-memories",
  mfa = "mfa",
  negativeCarbon = "negative-carbon",
  textureAndHues = "texture-and-hues",
}

export enum Chain {
  goerli = "goerli",
  mainnet = "mainnet",
}

export interface IRoyaltyInfo {
  additional_payee?: string;
  additional_payee_bps?: number;
  artist_address?: string;
  charity_address?: string;
  royalty_fee_by_id: number;
}

export interface GenScripts {
  alt?: string;
  main?: string;
  mobileControls?: string;
  painting?: string;
  preMainScript?: string;
  world?: string;
}

export interface IDevParams {
  isBulkMint: boolean;
  useInDev: boolean;
  useInProd: boolean;
  usesPuppeteer: boolean;
  usesScriptInputs: boolean;
  usesSvgs?: boolean;
}

export interface IProject {
  _id: ProjectId;
  appended_description?: string;
  artist: string;
  artist_address: string;
  aspect_ratio: number;
  chain: Chain;
  collection_description: string;
  collection_image?: string;
  collection_name: string;
  contract_address: string;
  creation_block: number;
  current_supply?: number;
  description?: string;
  devParams: IDevParams;
  events: string[];
  external_url: string;
  gen_scripts?: GenScripts;
  license: string;
  maximum_supply: number;
  mintable: boolean;
  project_name: string;
  project_slug: ProjectSlug;
  royalty_info: IRoyaltyInfo;
  script_type?: string;
  starting_index: number;
  tx_count: number;
  website: string;
}

export interface IAttribute {
  trait_type: string;
  value: number | string;
}

export interface IScriptInputs {
  approved_shuffler?: string;
  audioURI_base?: string;
  current_owner?: string;
  custom_data?: string;
  custom_rule?: string;
  description?: string;
  imageURI_base?: string;
  level_shift?: number;
  media_URI?: string;
  previous_owner?: string;
  svg_parts?: string;
  title?: string;
  token_entropy?: string;
  token_id?: number;
  transfer_count?: number;
}

export interface IToken {
  _id?: string; // made by db
  additional_info?: {
    additional_description?: string;
    poem?: string;
  };
  animation_url?: string; // generation script
  artist: string; // project
  artist_address: string; // project
  aspect_ratio: number; // project
  attributes: IAttribute[]; // script
  collection_name: string; // project
  description: string; // project
  external_url: string; // project
  generator_alt?: string;
  generator_mobile?: string;
  generator_url?: string; // same as animation_url
  height_ratio?: number; // project
  image: string; // generation scripts
  image_data?: string; // not used for Chainlife
  image_mid?: string;
  image_small?: string;
  last_transfer_block?: number;
  license: string; // project*
  name: string; // projectname + tokenId 'Chainlife 9'
  project_id: number; // project
  project_name: string; // project
  project_slug: ProjectSlug; // project
  royalty_info: IRoyaltyInfo; // project
  script_inputs?: IScriptInputs;
  script_type?: string; // project
  svg?: string;
  svgGen?: string;
  thumbnail_url?: string;
  token_data_frozen?: boolean;
  token_id: number; // get from blockchain
  transfer_count?: number;
  website: string; // project
  width_ratio?: number; // project
}

export interface ITransaction {
  _id?: string;
  block_number: number;
  event_type: string;
  project_id: ProjectId;
  token_id: number;
  transaction_date: Date;
  transaction_hash: string;
}

export interface IThumbnail {
  _id?: string;
  artblocks_id: string;
  image_full: string;
  image_thumbnail: string;
  project_id: 34 | 181;
  project_slug: "enso" | "focus";
  token_id: number;
}

export interface ILevel {
  level_shift: number;
  token_id: number;
  transfer_count: number | undefined;
}

export interface ILevelSnapshot {
  _id?: string;
  levels: ILevel[];
  project_slug: ProjectSlug;
  snapshot_date: Date;
}

export interface TokenAbbr {
  artist: string;
  external_url: string;
  generator_url: string;
  image: string;
  image_mid?: string;
  image_small?: string;
  name: string;
  project_name: string;
  project_slug: ProjectSlug;
  script_inputs?: IScriptInputs;
  svgGen?: string;
  thumbnail_url: string;
  token_id: number;
  world_level?: number;
}

export interface CollectionResponse {
  currentSupply: number;
  hasMore: boolean;
  skip: number;
  tokens: TokenAbbr[];
}

export interface TxCounts {
  customRules: number;
  levelShifts: number;
  mints: number;
  total: number;
  transfers: number;
}
