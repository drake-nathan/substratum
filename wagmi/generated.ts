import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// oneHundredX
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const oneHundredXABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_method',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'OrderChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_method', internalType: 'uint256', type: 'uint256' }],
    name: 'SHUFFLE',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_method', internalType: 'uint256', type: 'uint256' },
      { name: '_vault', internalType: 'address', type: 'address' },
    ],
    name: 'SHUFFLE',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'SVGfilter',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'SVGstart',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'TOP',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_vault', internalType: 'address', type: 'address' },
    ],
    name: 'TOP',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'additionalData',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'artistAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'artistName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseShuffleFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'blackBackground',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'blackBackgroundDefault',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'collection',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'collectionDescription',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'collectionNotes',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'contractsFrozen',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'croppedCompositeDefault',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'externalUrl',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'freezeContracts',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'freezeLayerContent',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_cropped', internalType: 'bool', type: 'bool' },
      { name: '_blackBackground', internalType: 'bool', type: 'bool' },
    ],
    name: 'getAltCompositeSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_cropped', internalType: 'bool', type: 'bool' },
      { name: '_blackBackground', internalType: 'bool', type: 'bool' },
    ],
    name: 'getAltTokenSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getCompositeSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMethodFees',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getOrder',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenTraits',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'layerContentFrozen',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'loanToken0',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'maxSupply',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'methodDescriptions',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'mintToAddress',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'minterAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_layerContent', internalType: 'string', type: 'string' },
    ],
    name: 'overrideLayer',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'platformAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'platformBPS',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'retrieveToken0',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'royaltyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'royaltyBPS',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_additionalData', internalType: 'string', type: 'string' },
    ],
    name: 'setAdditionalData',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_artistName', internalType: 'string', type: 'string' }],
    name: 'setArtistName',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_baseShuffleFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setBaseShuffleFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_blackBackground', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'setBlackBackground',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_collection', internalType: 'string', type: 'string' }],
    name: 'setCollection',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_collectionDescription',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'setCollectionDescription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_collectionNotes', internalType: 'string', type: 'string' },
    ],
    name: 'setCollectionNotes',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_externalUrl', internalType: 'string', type: 'string' }],
    name: 'setExternalUrl',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_svgContract', internalType: 'address', type: 'address' },
      { name: '_shuffleContract', internalType: 'address', type: 'address' },
    ],
    name: 'setInterfaces',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_minterAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMinterAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_newOrder', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'setOrder',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_artistAddress', internalType: 'address', type: 'address' },
      { name: '_platformAddress', internalType: 'address', type: 'address' },
      { name: '_platformBPS', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'setPrimaryData',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_royaltyAddress', internalType: 'address', type: 'address' },
      { name: '_royaltyBPS', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'setRoyaltyData',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_SVGfilter', internalType: 'string', type: 'string' }],
    name: 'setSVGfilter',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_SVGstart', internalType: 'string[]', type: 'string[]' }],
    name: 'setSVGstart',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_token0ExtraDescription',
        internalType: 'string',
        type: 'string',
      },
    ],
    name: 'setToken0ExtraDescription',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_newBaseURI', internalType: 'string', type: 'string' }],
    name: 'setURI',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_website', internalType: 'string', type: 'string' }],
    name: 'setWebsite',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'shuffleContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'shuffleable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'svgContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'toggleBlackBackgroundDefault',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'toggleCroppedDefault',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'toggleShuffling',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token0ExtraDescription',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenDataOf',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenEntropy',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tokensMinted',
    outputs: [{ name: '_value', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tokensOwned',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_delegateContract', internalType: 'address', type: 'address' },
    ],
    name: 'updateDelegateContract',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'website',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const oneHundredXAddress = {
  5: '0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3',
} as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const oneHundredXConfig = {
  address: oneHundredXAddress,
  abi: oneHundredXABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"SVGfilter"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSvGfilter<
  TFunctionName extends 'SVGfilter',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'SVGfilter',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"SVGstart"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSvGstart<
  TFunctionName extends 'SVGstart',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'SVGstart',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"additionalData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXAdditionalData<
  TFunctionName extends 'additionalData',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'additionalData',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"artistAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXArtistAddress<
  TFunctionName extends 'artistAddress',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'artistAddress',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"artistName"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXArtistName<
  TFunctionName extends 'artistName',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'artistName',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"balanceOf"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"baseShuffleFee"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXBaseShuffleFee<
  TFunctionName extends 'baseShuffleFee',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'baseShuffleFee',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"baseURI"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXBaseUri<
  TFunctionName extends 'baseURI',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'baseURI',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"blackBackground"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXBlackBackground<
  TFunctionName extends 'blackBackground',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'blackBackground',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"blackBackgroundDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXBlackBackgroundDefault<
  TFunctionName extends 'blackBackgroundDefault',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'blackBackgroundDefault',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"collection"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXCollection<
  TFunctionName extends 'collection',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'collection',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"collectionDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXCollectionDescription<
  TFunctionName extends 'collectionDescription',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'collectionDescription',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"collectionNotes"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXCollectionNotes<
  TFunctionName extends 'collectionNotes',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'collectionNotes',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"contractsFrozen"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXContractsFrozen<
  TFunctionName extends 'contractsFrozen',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'contractsFrozen',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"croppedCompositeDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXCroppedCompositeDefault<
  TFunctionName extends 'croppedCompositeDefault',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'croppedCompositeDefault',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"externalUrl"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXExternalUrl<
  TFunctionName extends 'externalUrl',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'externalUrl',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getAltCompositeSVG"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetAltCompositeSvg<
  TFunctionName extends 'getAltCompositeSVG',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getAltCompositeSVG',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getAltTokenSVG"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetAltTokenSvg<
  TFunctionName extends 'getAltTokenSVG',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getAltTokenSVG',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getApproved"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getCompositeSVG"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetCompositeSvg<
  TFunctionName extends 'getCompositeSVG',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getCompositeSVG',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getMethodFees"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetMethodFees<
  TFunctionName extends 'getMethodFees',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getMethodFees',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getOrder"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetOrder<
  TFunctionName extends 'getOrder',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getOrder',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getTokenSVG"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetTokenSvg<
  TFunctionName extends 'getTokenSVG',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getTokenSVG',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"getTokenTraits"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXGetTokenTraits<
  TFunctionName extends 'getTokenTraits',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'getTokenTraits',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"isApprovedForAll"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"layerContentFrozen"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXLayerContentFrozen<
  TFunctionName extends 'layerContentFrozen',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'layerContentFrozen',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"maxSupply"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXMaxSupply<
  TFunctionName extends 'maxSupply',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'maxSupply',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"methodDescriptions"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXMethodDescriptions<
  TFunctionName extends 'methodDescriptions',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'methodDescriptions',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"minterAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXMinterAddress<
  TFunctionName extends 'minterAddress',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'minterAddress',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"name"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"owner"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"ownerOf"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"platformAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXPlatformAddress<
  TFunctionName extends 'platformAddress',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'platformAddress',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"platformBPS"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXPlatformBps<
  TFunctionName extends 'platformBPS',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'platformBPS',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"royaltyAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRoyaltyAddress<
  TFunctionName extends 'royaltyAddress',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'royaltyAddress',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"royaltyBPS"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRoyaltyBps<
  TFunctionName extends 'royaltyBPS',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'royaltyBPS',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"royaltyInfo"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRoyaltyInfo<
  TFunctionName extends 'royaltyInfo',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'royaltyInfo',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"shuffleContract"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXShuffleContract<
  TFunctionName extends 'shuffleContract',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'shuffleContract',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"shuffleable"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXShuffleable<
  TFunctionName extends 'shuffleable',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'shuffleable',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"supportsInterface"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"svgContract"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSvgContract<
  TFunctionName extends 'svgContract',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'svgContract',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"symbol"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"token0ExtraDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXToken0ExtraDescription<
  TFunctionName extends 'token0ExtraDescription',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'token0ExtraDescription',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"tokenDataOf"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTokenDataOf<
  TFunctionName extends 'tokenDataOf',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'tokenDataOf',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"tokenEntropy"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTokenEntropy<
  TFunctionName extends 'tokenEntropy',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'tokenEntropy',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"tokenURI"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"tokensMinted"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTokensMinted<
  TFunctionName extends 'tokensMinted',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'tokensMinted',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"tokensOwned"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTokensOwned<
  TFunctionName extends 'tokensOwned',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'tokensOwned',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"website"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXWebsite<
  TFunctionName extends 'website',
  TSelectData = ReadContractResult<typeof oneHundredXABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractRead({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'website',
    ...config,
  } as UseContractReadConfig<typeof oneHundredXABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof oneHundredXABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, TFunctionName, TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"SHUFFLE"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXShuffle<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'SHUFFLE'
        >['request']['abi'],
        'SHUFFLE',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'SHUFFLE' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'SHUFFLE', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'SHUFFLE'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'SHUFFLE', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'SHUFFLE',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"TOP"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTop<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'TOP'
        >['request']['abi'],
        'TOP',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'TOP' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'TOP', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'TOP'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'TOP', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'TOP',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXApprove<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'approve' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'approve', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'approve', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"freezeContracts"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXFreezeContracts<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'freezeContracts'
        >['request']['abi'],
        'freezeContracts',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'freezeContracts'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'freezeContracts',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'freezeContracts'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'freezeContracts', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'freezeContracts',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"freezeLayerContent"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXFreezeLayerContent<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'freezeLayerContent'
        >['request']['abi'],
        'freezeLayerContent',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'freezeLayerContent'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'freezeLayerContent',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'freezeLayerContent'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'freezeLayerContent', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'freezeLayerContent',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"loanToken0"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXLoanToken0<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'loanToken0'
        >['request']['abi'],
        'loanToken0',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'loanToken0' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'loanToken0', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'loanToken0'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'loanToken0', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'loanToken0',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"mintToAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXMintToAddress<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'mintToAddress'
        >['request']['abi'],
        'mintToAddress',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'mintToAddress'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'mintToAddress', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mintToAddress'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'mintToAddress', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'mintToAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"overrideLayer"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXOverrideLayer<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'overrideLayer'
        >['request']['abi'],
        'overrideLayer',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'overrideLayer'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'overrideLayer', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'overrideLayer'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'overrideLayer', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'overrideLayer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRenounceOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'renounceOwnership', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"retrieveToken0"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXRetrieveToken0<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'retrieveToken0'
        >['request']['abi'],
        'retrieveToken0',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'retrieveToken0'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'retrieveToken0', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'retrieveToken0'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'retrieveToken0', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'retrieveToken0',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'safeTransferFrom', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setAdditionalData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetAdditionalData<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setAdditionalData'
        >['request']['abi'],
        'setAdditionalData',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setAdditionalData'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setAdditionalData',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setAdditionalData'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setAdditionalData', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setAdditionalData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setApprovalForAll', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setArtistName"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetArtistName<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setArtistName'
        >['request']['abi'],
        'setArtistName',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setArtistName'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setArtistName', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setArtistName'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setArtistName', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setArtistName',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setBaseShuffleFee"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetBaseShuffleFee<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setBaseShuffleFee'
        >['request']['abi'],
        'setBaseShuffleFee',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setBaseShuffleFee'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setBaseShuffleFee',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setBaseShuffleFee'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setBaseShuffleFee', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setBaseShuffleFee',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setBlackBackground"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetBlackBackground<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setBlackBackground'
        >['request']['abi'],
        'setBlackBackground',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setBlackBackground'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setBlackBackground',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setBlackBackground'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setBlackBackground', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setBlackBackground',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollection"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetCollection<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setCollection'
        >['request']['abi'],
        'setCollection',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setCollection'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setCollection', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setCollection'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setCollection', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollection',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollectionDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetCollectionDescription<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setCollectionDescription'
        >['request']['abi'],
        'setCollectionDescription',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setCollectionDescription'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setCollectionDescription',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setCollectionDescription'
      } = {} as any,
) {
  return useContractWrite<
    typeof oneHundredXABI,
    'setCollectionDescription',
    TMode
  >({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollectionDescription',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollectionNotes"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetCollectionNotes<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setCollectionNotes'
        >['request']['abi'],
        'setCollectionNotes',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setCollectionNotes'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setCollectionNotes',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setCollectionNotes'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setCollectionNotes', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollectionNotes',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setExternalUrl"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetExternalUrl<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setExternalUrl'
        >['request']['abi'],
        'setExternalUrl',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setExternalUrl'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setExternalUrl', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setExternalUrl'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setExternalUrl', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setExternalUrl',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setInterfaces"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetInterfaces<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setInterfaces'
        >['request']['abi'],
        'setInterfaces',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setInterfaces'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setInterfaces', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setInterfaces'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setInterfaces', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setInterfaces',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setMinterAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetMinterAddress<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setMinterAddress'
        >['request']['abi'],
        'setMinterAddress',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setMinterAddress'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setMinterAddress',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setMinterAddress'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setMinterAddress', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setMinterAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setOrder"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetOrder<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setOrder'
        >['request']['abi'],
        'setOrder',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setOrder' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setOrder', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setOrder'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setOrder', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setOrder',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setPrimaryData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetPrimaryData<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setPrimaryData'
        >['request']['abi'],
        'setPrimaryData',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setPrimaryData'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setPrimaryData', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setPrimaryData'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setPrimaryData', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setPrimaryData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setRoyaltyData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetRoyaltyData<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setRoyaltyData'
        >['request']['abi'],
        'setRoyaltyData',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setRoyaltyData'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setRoyaltyData', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setRoyaltyData'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setRoyaltyData', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setRoyaltyData',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setSVGfilter"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetSvGfilter<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setSVGfilter'
        >['request']['abi'],
        'setSVGfilter',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setSVGfilter'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setSVGfilter', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setSVGfilter'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setSVGfilter', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setSVGfilter',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setSVGstart"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetSvGstart<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setSVGstart'
        >['request']['abi'],
        'setSVGstart',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setSVGstart'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setSVGstart', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setSVGstart'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setSVGstart', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setSVGstart',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setToken0ExtraDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetToken0ExtraDescription<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setToken0ExtraDescription'
        >['request']['abi'],
        'setToken0ExtraDescription',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'setToken0ExtraDescription'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'setToken0ExtraDescription',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setToken0ExtraDescription'
      } = {} as any,
) {
  return useContractWrite<
    typeof oneHundredXABI,
    'setToken0ExtraDescription',
    TMode
  >({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setToken0ExtraDescription',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setURI"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetUri<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setURI'
        >['request']['abi'],
        'setURI',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setURI' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setURI', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setURI'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setURI', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setURI',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setWebsite"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXSetWebsite<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'setWebsite'
        >['request']['abi'],
        'setWebsite',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setWebsite' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'setWebsite', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setWebsite'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'setWebsite', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setWebsite',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleBlackBackgroundDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXToggleBlackBackgroundDefault<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'toggleBlackBackgroundDefault'
        >['request']['abi'],
        'toggleBlackBackgroundDefault',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'toggleBlackBackgroundDefault'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'toggleBlackBackgroundDefault',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'toggleBlackBackgroundDefault'
      } = {} as any,
) {
  return useContractWrite<
    typeof oneHundredXABI,
    'toggleBlackBackgroundDefault',
    TMode
  >({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'toggleBlackBackgroundDefault',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleCroppedDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXToggleCroppedDefault<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'toggleCroppedDefault'
        >['request']['abi'],
        'toggleCroppedDefault',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'toggleCroppedDefault'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'toggleCroppedDefault',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'toggleCroppedDefault'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'toggleCroppedDefault', TMode>(
    {
      abi: oneHundredXABI,
      address: oneHundredXAddress[5],
      functionName: 'toggleCroppedDefault',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleShuffling"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXToggleShuffling<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'toggleShuffling'
        >['request']['abi'],
        'toggleShuffling',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'toggleShuffling'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'toggleShuffling',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'toggleShuffling'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'toggleShuffling', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'toggleShuffling',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTransferFrom<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof oneHundredXABI, 'transferFrom', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'transferFrom', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTransferOwnership<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'transferOwnership', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"updateDelegateContract"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXUpdateDelegateContract<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'updateDelegateContract'
        >['request']['abi'],
        'updateDelegateContract',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'updateDelegateContract'
      }
    : UseContractWriteConfig<
        typeof oneHundredXABI,
        'updateDelegateContract',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'updateDelegateContract'
      } = {} as any,
) {
  return useContractWrite<
    typeof oneHundredXABI,
    'updateDelegateContract',
    TMode
  >({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'updateDelegateContract',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"withdraw"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXWithdraw<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof oneHundredXAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof oneHundredXABI,
          'withdraw'
        >['request']['abi'],
        'withdraw',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'withdraw' }
    : UseContractWriteConfig<typeof oneHundredXABI, 'withdraw', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'withdraw'
      } = {} as any,
) {
  return useContractWrite<typeof oneHundredXABI, 'withdraw', TMode>({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'withdraw',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"SHUFFLE"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXShuffle(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'SHUFFLE'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'SHUFFLE',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'SHUFFLE'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"TOP"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXTop(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'TOP'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'TOP',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'TOP'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"approve"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'approve'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"freezeContracts"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXFreezeContracts(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'freezeContracts'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'freezeContracts',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'freezeContracts'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"freezeLayerContent"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXFreezeLayerContent(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'freezeLayerContent'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'freezeLayerContent',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'freezeLayerContent'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"loanToken0"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXLoanToken0(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'loanToken0'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'loanToken0',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'loanToken0'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"mintToAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXMintToAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'mintToAddress'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'mintToAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'mintToAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"overrideLayer"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXOverrideLayer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'overrideLayer'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'overrideLayer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'overrideLayer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"renounceOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'renounceOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"retrieveToken0"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXRetrieveToken0(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'retrieveToken0'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'retrieveToken0',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'retrieveToken0'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"safeTransferFrom"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'safeTransferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setAdditionalData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetAdditionalData(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setAdditionalData'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setAdditionalData',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setAdditionalData'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setApprovalForAll"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setApprovalForAll'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setArtistName"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetArtistName(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setArtistName'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setArtistName',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setArtistName'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setBaseShuffleFee"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetBaseShuffleFee(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setBaseShuffleFee'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setBaseShuffleFee',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setBaseShuffleFee'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setBlackBackground"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetBlackBackground(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setBlackBackground'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setBlackBackground',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setBlackBackground'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollection"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetCollection(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setCollection'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollection',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setCollection'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollectionDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetCollectionDescription(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof oneHundredXABI,
      'setCollectionDescription'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollectionDescription',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setCollectionDescription'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setCollectionNotes"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetCollectionNotes(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setCollectionNotes'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setCollectionNotes',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setCollectionNotes'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setExternalUrl"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetExternalUrl(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setExternalUrl'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setExternalUrl',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setExternalUrl'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setInterfaces"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetInterfaces(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setInterfaces'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setInterfaces',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setInterfaces'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setMinterAddress"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetMinterAddress(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setMinterAddress'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setMinterAddress',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setMinterAddress'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setOrder"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetOrder(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setOrder'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setOrder',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setOrder'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setPrimaryData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetPrimaryData(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setPrimaryData'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setPrimaryData',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setPrimaryData'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setRoyaltyData"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetRoyaltyData(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setRoyaltyData'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setRoyaltyData',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setRoyaltyData'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setSVGfilter"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetSvGfilter(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setSVGfilter'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setSVGfilter',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setSVGfilter'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setSVGstart"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetSvGstart(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setSVGstart'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setSVGstart',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setSVGstart'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setToken0ExtraDescription"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetToken0ExtraDescription(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof oneHundredXABI,
      'setToken0ExtraDescription'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setToken0ExtraDescription',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'setToken0ExtraDescription'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setURI"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetUri(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setURI'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setURI',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setURI'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"setWebsite"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXSetWebsite(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setWebsite'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'setWebsite',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'setWebsite'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleBlackBackgroundDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXToggleBlackBackgroundDefault(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof oneHundredXABI,
      'toggleBlackBackgroundDefault'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'toggleBlackBackgroundDefault',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'toggleBlackBackgroundDefault'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleCroppedDefault"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXToggleCroppedDefault(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof oneHundredXABI,
      'toggleCroppedDefault'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'toggleCroppedDefault',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'toggleCroppedDefault'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"toggleShuffling"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXToggleShuffling(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'toggleShuffling'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'toggleShuffling',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'toggleShuffling'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"transferFrom"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'transferFrom'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"transferOwnership"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'transferOwnership'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"updateDelegateContract"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXUpdateDelegateContract(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof oneHundredXABI,
      'updateDelegateContract'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'updateDelegateContract',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof oneHundredXABI,
    'updateDelegateContract'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link oneHundredXABI}__ and `functionName` set to `"withdraw"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function usePrepareOneHundredXWithdraw(
  config: Omit<
    UsePrepareContractWriteConfig<typeof oneHundredXABI, 'withdraw'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    functionName: 'withdraw',
    ...config,
  } as UsePrepareContractWriteConfig<typeof oneHundredXABI, 'withdraw'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__ and `eventName` set to `"Approval"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, 'Approval'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__ and `eventName` set to `"ApprovalForAll"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, 'ApprovalForAll'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__ and `eventName` set to `"OrderChanged"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXOrderChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, 'OrderChanged'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    eventName: 'OrderChanged',
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, 'OrderChanged'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__ and `eventName` set to `"OwnershipTransferred"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, 'OwnershipTransferred'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link oneHundredXABI}__ and `eventName` set to `"Transfer"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export function useOneHundredXTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof oneHundredXABI, 'Transfer'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof oneHundredXAddress } = {} as any,
) {
  return useContractEvent({
    abi: oneHundredXABI,
    address: oneHundredXAddress[5],
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof oneHundredXABI, 'Transfer'>)
}
