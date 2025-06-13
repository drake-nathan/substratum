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
    type: 'function',
    inputs: [],
    name: 'CANCEL_AND_REFUND',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_recipient', internalType: 'address', type: 'address' }],
    name: 'DEPOSIT_AND_SET_ANOTHER_RECEVIER',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEPOSIT_AND_SET_SELF_AS_RECEIVER',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_assetID', internalType: 'uint256', type: 'uint256' }],
    name: 'DEPOSIT_WITH_TOKEN_GATE_AND_SET_HOLDING_ADDRESS',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressHasDeposited',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressIsApprovedForPrivate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'addressIsRecipient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_addresses', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'approveAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'approvedAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_addressToCancel', internalType: 'address', type: 'address' },
    ],
    name: 'artistCancelAndRefundDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentDepositorCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delegateContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'depositorToIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'depositors',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'depositorsToRecipients',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'depositsCompleted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endInitiative',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllApprovedAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllDepositors',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllRecipientAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContractStatus',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInitiativeDetails',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
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
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'privateDepositsEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'publicDepositsEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'receivedDiscount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'recipientAddresses',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_bool', internalType: 'bool', type: 'bool' }],
    name: 'setPrivateDepositBool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_bool', internalType: 'bool', type: 'bool' }],
    name: 'setPublicDepositBool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
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
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_artistAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateArtistAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_delegateContract', internalType: 'address', type: 'address' },
    ],
    name: 'updateDelegateContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_platformAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updatePlatformAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawAllFunds',
    outputs: [],
    stateMutability: 'nonpayable',
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
