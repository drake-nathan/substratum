import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// deposit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const depositAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_depositor',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Cancel',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_depositor',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_artistFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_platformFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FundsWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'artist',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'platform',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenGateContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fullDeposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenGateDiscount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'platformFeeBPS',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
      {
        name: 'numberOfDepositsAllowed',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
    ],
    name: 'NewInitiative',
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
      {
        name: '_holder',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_tokenGateContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenGateUsed',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'CANCEL_AND_REFUND',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_recipient', internalType: 'address', type: 'address' }],
    name: 'DEPOSIT_AND_SET_ANOTHER_RECEVIER',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'DEPOSIT_AND_SET_SELF_AS_RECEIVER',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_assetID', internalType: 'uint256', type: 'uint256' }],
    name: 'DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressHasDeposited',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressIsApprovedForPrivate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressIsRecipient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_addresses', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'approveAddresses',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'approvedAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_addressToCancel', internalType: 'address', type: 'address' },
    ],
    name: 'artistCancelAndRefundDeposit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'currentDepositorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'delegateContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'depositorToIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'depositors',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'depositorsToRecipients',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'depositsCompleted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'endInitiative',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllApprovedAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllDepositors',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllRecipientAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getContractStatus',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getInitiativeDetails',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_artist', internalType: 'address', type: 'address' },
      { name: '_platform', internalType: 'address', type: 'address' },
      { name: '_tokenGateContract', internalType: 'address', type: 'address' },
      { name: '_fullDeposit', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenGateDiscount', internalType: 'uint256', type: 'uint256' },
      { name: '_platformFeeBPS', internalType: 'uint16', type: 'uint16' },
      {
        name: '_numberOfDepositsAllowed',
        internalType: 'uint16',
        type: 'uint16',
      },
    ],
    name: 'newInitiative',
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
    inputs: [],
    name: 'privateDepositsEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'publicDepositsEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'receivedDiscount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'recipientAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [{ name: '_bool', internalType: 'bool', type: 'bool' }],
    name: 'setPrivateDepositBool',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_bool', internalType: 'bool', type: 'bool' }],
    name: 'setPublicDepositBool',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'thisDepositInitiative',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'artist', internalType: 'address', type: 'address' },
      { name: 'platform', internalType: 'address', type: 'address' },
      { name: 'tokenGateContract', internalType: 'address', type: 'address' },
      { name: 'fullDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenGateDiscount', internalType: 'uint256', type: 'uint256' },
      { name: 'platformFeeBPS', internalType: 'uint16', type: 'uint16' },
      {
        name: 'numberOfDepositsAllowed',
        internalType: 'uint16',
        type: 'uint16',
      },
    ],
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
      { name: '_artistAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateArtistAddress',
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_platformAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updatePlatformAddress',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'withdrawAllFunds',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const depositAddress = {
  11155111: '0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const depositConfig = {
  address: depositAddress,
  abi: depositAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// oneHundredX
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const oneHundredXAbi = [
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
  abi: oneHundredXAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDeposit = /*#__PURE__*/ createUseReadContract({
  abi: depositAbi,
  address: depositAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"addressHasDeposited"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositAddressHasDeposited =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'addressHasDeposited',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"addressIsApprovedForPrivate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositAddressIsApprovedForPrivate =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'addressIsApprovedForPrivate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"addressIsRecipient"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositAddressIsRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'addressIsRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"approvedAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositApprovedAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'approvedAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"currentDepositorCount"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositCurrentDepositorCount =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'currentDepositorCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"delegateContract"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositDelegateContract =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'delegateContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"depositorToIndex"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositDepositorToIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'depositorToIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"depositors"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositDepositors = /*#__PURE__*/ createUseReadContract({
  abi: depositAbi,
  address: depositAddress,
  functionName: 'depositors',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"depositorsToRecipients"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositDepositorsToRecipients =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'depositorsToRecipients',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"depositsCompleted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositDepositsCompleted =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'depositsCompleted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"getAllApprovedAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositGetAllApprovedAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'getAllApprovedAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"getAllDepositors"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositGetAllDepositors =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'getAllDepositors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"getAllRecipientAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositGetAllRecipientAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'getAllRecipientAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"getContractStatus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositGetContractStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'getContractStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"getInitiativeDetails"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositGetInitiativeDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'getInitiativeDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositOwner = /*#__PURE__*/ createUseReadContract({
  abi: depositAbi,
  address: depositAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"privateDepositsEnabled"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositPrivateDepositsEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'privateDepositsEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"publicDepositsEnabled"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositPublicDepositsEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'publicDepositsEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"receivedDiscount"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositReceivedDiscount =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'receivedDiscount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"recipientAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositRecipientAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'recipientAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"thisDepositInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useReadDepositThisDepositInitiative =
  /*#__PURE__*/ createUseReadContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'thisDepositInitiative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: depositAbi,
  address: depositAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"CANCEL_AND_REFUND"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositCancelAndRefund =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'CANCEL_AND_REFUND',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_AND_SET_ANOTHER_RECEVIER"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositDepositAndSetAnotherRecevier =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_AND_SET_ANOTHER_RECEVIER',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_AND_SET_SELF_AS_RECEIVER"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositDepositAndSetSelfAsReceiver =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_AND_SET_SELF_AS_RECEIVER',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositDepositWithTokenGateAndSetHoldingAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"approveAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositApproveAddresses =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'approveAddresses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"artistCancelAndRefundDeposit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositArtistCancelAndRefundDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'artistCancelAndRefundDeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"endInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositEndInitiative =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'endInitiative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"newInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositNewInitiative =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'newInitiative',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"setPrivateDepositBool"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositSetPrivateDepositBool =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'setPrivateDepositBool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"setPublicDepositBool"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositSetPublicDepositBool =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'setPublicDepositBool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updateArtistAddress"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositUpdateArtistAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updateArtistAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updateDelegateContract"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositUpdateDelegateContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updateDelegateContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updatePlatformAddress"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositUpdatePlatformAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updatePlatformAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"withdrawAllFunds"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWriteDepositWithdrawAllFunds =
  /*#__PURE__*/ createUseWriteContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'withdrawAllFunds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: depositAbi,
  address: depositAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"CANCEL_AND_REFUND"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositCancelAndRefund =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'CANCEL_AND_REFUND',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_AND_SET_ANOTHER_RECEVIER"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositDepositAndSetAnotherRecevier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_AND_SET_ANOTHER_RECEVIER',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_AND_SET_SELF_AS_RECEIVER"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositDepositAndSetSelfAsReceiver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_AND_SET_SELF_AS_RECEIVER',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositDepositWithTokenGateAndSetHoldingAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"approveAddresses"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositApproveAddresses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'approveAddresses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"artistCancelAndRefundDeposit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositArtistCancelAndRefundDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'artistCancelAndRefundDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"endInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositEndInitiative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'endInitiative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"newInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositNewInitiative =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'newInitiative',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"setPrivateDepositBool"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositSetPrivateDepositBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'setPrivateDepositBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"setPublicDepositBool"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositSetPublicDepositBool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'setPublicDepositBool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updateArtistAddress"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositUpdateArtistAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updateArtistAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updateDelegateContract"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositUpdateDelegateContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updateDelegateContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"updatePlatformAddress"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositUpdatePlatformAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'updatePlatformAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link depositAbi}__ and `functionName` set to `"withdrawAllFunds"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useSimulateDepositWithdrawAllFunds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: depositAbi,
    address: depositAddress,
    functionName: 'withdrawAllFunds',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: depositAbi,
  address: depositAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"Cancel"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositCancelEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'Cancel',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"Deposit"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"FundsWithdrawn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositFundsWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'FundsWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"NewInitiative"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositNewInitiativeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'NewInitiative',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link depositAbi}__ and `eventName` set to `"TokenGateUsed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6FFdEF0A5dDFF6AF79E6A2B2e77A081D170C8d4B)
 */
export const useWatchDepositTokenGateUsedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: depositAbi,
    address: depositAddress,
    eventName: 'TokenGateUsed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredX = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"SVGfilter"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXSvGfilter = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'SVGfilter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"SVGstart"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXSvGstart = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'SVGstart',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"additionalData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXAdditionalData =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'additionalData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"artistAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXArtistAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'artistAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"artistName"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXArtistName = /*#__PURE__*/ createUseReadContract(
  {
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'artistName',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"baseShuffleFee"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXBaseShuffleFee =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'baseShuffleFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"baseURI"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"blackBackground"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXBlackBackground =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'blackBackground',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"blackBackgroundDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXBlackBackgroundDefault =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'blackBackgroundDefault',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"collection"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXCollection = /*#__PURE__*/ createUseReadContract(
  {
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'collection',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"collectionDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXCollectionDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'collectionDescription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"collectionNotes"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXCollectionNotes =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'collectionNotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"contractsFrozen"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXContractsFrozen =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'contractsFrozen',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"croppedCompositeDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXCroppedCompositeDefault =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'croppedCompositeDefault',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"externalUrl"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXExternalUrl =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'externalUrl',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getAltCompositeSVG"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetAltCompositeSvg =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getAltCompositeSVG',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getAltTokenSVG"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetAltTokenSvg =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getAltTokenSVG',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getCompositeSVG"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetCompositeSvg =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getCompositeSVG',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getMethodFees"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetMethodFees =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getMethodFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getOrder"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetOrder = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'getOrder',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getTokenSVG"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetTokenSvg =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getTokenSVG',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"getTokenTraits"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXGetTokenTraits =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'getTokenTraits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"layerContentFrozen"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXLayerContentFrozen =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'layerContentFrozen',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"maxSupply"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXMaxSupply = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'maxSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"methodDescriptions"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXMethodDescriptions =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'methodDescriptions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"minterAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXMinterAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'minterAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXName = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXOwner = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"platformAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXPlatformAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'platformAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"platformBPS"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXPlatformBps =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'platformBPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"royaltyAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXRoyaltyAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'royaltyAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"royaltyBPS"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXRoyaltyBps = /*#__PURE__*/ createUseReadContract(
  {
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'royaltyBPS',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"royaltyInfo"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXRoyaltyInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'royaltyInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"shuffleContract"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXShuffleContract =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'shuffleContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"shuffleable"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXShuffleable =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'shuffleable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"svgContract"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXSvgContract =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'svgContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXSymbol = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"token0ExtraDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXToken0ExtraDescription =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'token0ExtraDescription',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"tokenDataOf"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXTokenDataOf =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'tokenDataOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"tokenEntropy"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXTokenEntropy =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'tokenEntropy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"tokensMinted"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXTokensMinted =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'tokensMinted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"tokensOwned"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXTokensOwned =
  /*#__PURE__*/ createUseReadContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'tokensOwned',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"website"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useReadOneHundredXWebsite = /*#__PURE__*/ createUseReadContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'website',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredX = /*#__PURE__*/ createUseWriteContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"SHUFFLE"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXShuffle = /*#__PURE__*/ createUseWriteContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'SHUFFLE',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"TOP"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXTop = /*#__PURE__*/ createUseWriteContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'TOP',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXApprove = /*#__PURE__*/ createUseWriteContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"freezeContracts"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXFreezeContracts =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'freezeContracts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"freezeLayerContent"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXFreezeLayerContent =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'freezeLayerContent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"loanToken0"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXLoanToken0 =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'loanToken0',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"mintToAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXMintToAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'mintToAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"overrideLayer"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXOverrideLayer =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'overrideLayer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"retrieveToken0"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXRetrieveToken0 =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'retrieveToken0',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setAdditionalData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetAdditionalData =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setAdditionalData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setArtistName"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetArtistName =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setArtistName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setBaseShuffleFee"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetBaseShuffleFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setBaseShuffleFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setBlackBackground"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetBlackBackground =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setBlackBackground',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollection"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetCollection =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollection',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollectionDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetCollectionDescription =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollectionDescription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollectionNotes"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetCollectionNotes =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollectionNotes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setExternalUrl"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetExternalUrl =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setExternalUrl',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setInterfaces"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetInterfaces =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setInterfaces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setMinterAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetMinterAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setMinterAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setOrder"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetOrder = /*#__PURE__*/ createUseWriteContract(
  {
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setOrder',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setPrimaryData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetPrimaryData =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setPrimaryData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setRoyaltyData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetRoyaltyData =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setRoyaltyData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setSVGfilter"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetSvGfilter =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setSVGfilter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setSVGstart"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetSvGstart =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setSVGstart',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setToken0ExtraDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetToken0ExtraDescription =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setToken0ExtraDescription',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setURI"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetUri = /*#__PURE__*/ createUseWriteContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
  functionName: 'setURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setWebsite"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXSetWebsite =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setWebsite',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleBlackBackgroundDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXToggleBlackBackgroundDefault =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleBlackBackgroundDefault',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleCroppedDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXToggleCroppedDefault =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleCroppedDefault',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleShuffling"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXToggleShuffling =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleShuffling',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"updateDelegateContract"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXUpdateDelegateContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'updateDelegateContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWriteOneHundredXWithdraw = /*#__PURE__*/ createUseWriteContract(
  {
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'withdraw',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredX = /*#__PURE__*/ createUseSimulateContract({
  abi: oneHundredXAbi,
  address: oneHundredXAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"SHUFFLE"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXShuffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'SHUFFLE',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"TOP"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXTop =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'TOP',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"freezeContracts"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXFreezeContracts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'freezeContracts',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"freezeLayerContent"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXFreezeLayerContent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'freezeLayerContent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"loanToken0"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXLoanToken0 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'loanToken0',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"mintToAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXMintToAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'mintToAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"overrideLayer"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXOverrideLayer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'overrideLayer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"retrieveToken0"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXRetrieveToken0 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'retrieveToken0',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setAdditionalData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetAdditionalData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setAdditionalData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setArtistName"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetArtistName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setArtistName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setBaseShuffleFee"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetBaseShuffleFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setBaseShuffleFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setBlackBackground"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetBlackBackground =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setBlackBackground',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollection"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetCollection =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollection',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollectionDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetCollectionDescription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollectionDescription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setCollectionNotes"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetCollectionNotes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setCollectionNotes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setExternalUrl"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetExternalUrl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setExternalUrl',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setInterfaces"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetInterfaces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setInterfaces',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setMinterAddress"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetMinterAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setMinterAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setOrder"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setPrimaryData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetPrimaryData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setPrimaryData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setRoyaltyData"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetRoyaltyData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setRoyaltyData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setSVGfilter"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetSvGfilter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setSVGfilter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setSVGstart"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetSvGstart =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setSVGstart',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setToken0ExtraDescription"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetToken0ExtraDescription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setToken0ExtraDescription',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setURI"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"setWebsite"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXSetWebsite =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'setWebsite',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleBlackBackgroundDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXToggleBlackBackgroundDefault =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleBlackBackgroundDefault',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleCroppedDefault"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXToggleCroppedDefault =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleCroppedDefault',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"toggleShuffling"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXToggleShuffling =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'toggleShuffling',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"updateDelegateContract"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXUpdateDelegateContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'updateDelegateContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link oneHundredXAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useSimulateOneHundredXWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__ and `eventName` set to `"OrderChanged"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXOrderChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    eventName: 'OrderChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link oneHundredXAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x6aBf38A6cB1f0ab87047E80Efd1B109C8E5CeFF3)
 */
export const useWatchOneHundredXTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: oneHundredXAbi,
    address: oneHundredXAddress,
    eventName: 'Transfer',
  })
