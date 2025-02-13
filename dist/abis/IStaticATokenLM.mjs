// src/ts/abis/IStaticATokenLM.ts
var IStaticATokenLM_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
        components: []
      },
      {
        internalType: "contract IRewardsController",
        name: "rewardsController",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "SafeERC20FailedOperation",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Approval",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Deposit",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version",
        type: "uint8",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "aToken",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "string",
        name: "staticATokenName",
        type: "string",
        components: [],
        indexed: false
      },
      {
        internalType: "string",
        name: "staticATokenSymbol",
        type: "string",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RewardTokenRegistered",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Transfer",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Withdraw",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "INCENTIVES_CONTROLLER",
    outputs: [
      {
        internalType: "contract IRewardsController",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "METADEPOSIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "METAWITHDRAWAL_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "STATIC__ATOKEN_LM_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "aToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewards",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsOnBehalf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsToSelf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "collectAndUpdateRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
        components: []
      },
      {
        internalType: "bool",
        name: "depositToAave",
        type: "bool",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getClaimableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getCurrentRewardsIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getTotalClaimableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAToken",
        type: "address",
        components: []
      },
      {
        internalType: "string",
        name: "staticATokenName",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "staticATokenSymbol",
        type: "string",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "isRegisteredRewardToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
        components: []
      },
      {
        internalType: "bool",
        name: "depositToAave",
        type: "bool",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "struct IStaticATokenLM.PermitParams",
        name: "permit",
        type: "tuple",
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      },
      {
        internalType: "struct IStaticATokenLM.SignatureParams",
        name: "sigParams",
        type: "tuple",
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "metaDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "bool",
        name: "withdrawFromAave",
        type: "bool",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "struct IStaticATokenLM.SignatureParams",
        name: "sigParams",
        type: "tuple",
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "metaWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
        components: []
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
        components: []
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "permit",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "bool",
        name: "withdrawFromAave",
        type: "bool",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "refreshRewardTokens",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "rewardTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  }
];
export {
  IStaticATokenLM_ABI
};
//# sourceMappingURL=IStaticATokenLM.mjs.map