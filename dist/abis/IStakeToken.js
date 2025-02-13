"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/abis/IStakeToken.ts
var IStakeToken_exports = {};
__export(IStakeToken_exports, {
  IStakeToken_ABI: () => IStakeToken_ABI
});
module.exports = __toCommonJS(IStakeToken_exports);
var IStakeToken_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "contract IERC20",
        name: "stakedToken",
        type: "address",
        components: []
      },
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "unstakeWindow",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "rewardsVault",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "emissionManager",
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
        name: "target",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "AddressEmptyCode",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "AddressInsufficientBalance",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "ECDSAInvalidSignature",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ECDSAInvalidSignatureLength",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    type: "error",
    name: "ECDSAInvalidSignatureS",
    outputs: []
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
        name: "allowance",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InsufficientAllowance",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InsufficientBalance",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidApprover",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidReceiver",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidSender",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidSpender",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC2612ExpiredSignature",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
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
    type: "error",
    name: "ERC2612InvalidSigner",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "FailedInnerCall",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "InvalidAccountNonce",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidInitialization",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidShortString",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "NotInitializing",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
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
        internalType: "string",
        name: "str",
        type: "string",
        components: []
      }
    ],
    type: "error",
    name: "StringTooLong",
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
        name: "value",
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
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "emission",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "AssetConfigUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "AssetIndexUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
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
    name: "Cooldown",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "CooldownSecondsChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "DistributionEndChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    type: "event",
    name: "EIP712DomainChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint216",
        name: "exchangeRate",
        type: "uint216",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "ExchangeRateChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "FundsReturned",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "version",
        type: "uint64",
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
        internalType: "uint256",
        name: "newPercentage",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "MaxSlashablePercentageChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "PendingAdminChanged",
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
    name: "Redeem",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: [],
        indexed: false
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
    name: "RewardsAccrued",
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
    name: "RewardsClaimed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RoleClaimed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
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
    name: "Slashed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "windowSeconds",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "SlashingExitWindowDurationChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    type: "event",
    name: "SlashingSettled",
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
    name: "Staked",
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
        name: "value",
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
        name: "user",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "UserIndexUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "CLAIM_HELPER_ROLE",
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
    name: "COOLDOWN_ADMIN_ROLE",
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
    name: "EMISSION_MANAGER",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "EXCHANGE_RATE_UNIT",
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
    name: "INITIAL_EXCHANGE_RATE",
    outputs: [
      {
        internalType: "uint216",
        name: "",
        type: "uint216",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "LOWER_BOUND",
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
    name: "PRECISION",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "REWARDS_VAULT",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "REWARD_TOKEN",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "SLASH_ADMIN_ROLE",
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
    name: "STAKED_TOKEN",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "UNSTAKE_WINDOW",
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
        name: "value",
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
    name: "assets",
    outputs: [
      {
        internalType: "uint128",
        name: "emissionPerSecond",
        type: "uint128",
        components: []
      },
      {
        internalType: "uint128",
        name: "lastUpdateTimestamp",
        type: "uint128",
        components: []
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    name: "claimRewards",
    outputs: []
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
        name: "claimAmount",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsAndRedeem",
    outputs: []
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
        name: "claimAmount",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsAndRedeemOnBehalf",
    outputs: []
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
    name: "claimRewardsOnBehalf",
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
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRoleAdmin",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]",
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "configureAssets",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "cooldown",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "cooldownOnBehalfOf",
    outputs: []
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "distributionEnd",
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
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
        components: []
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
        components: []
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
        components: []
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
        components: []
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getAdmin",
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
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getCooldownSeconds",
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
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint216",
        name: "",
        type: "uint216",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getMaxSlashablePercentage",
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
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPendingAdmin",
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
        name: "staker",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getTotalRewardsBalance",
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
        name: "asset",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUserAssetData",
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
    name: "inPostSlashingPeriod",
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
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
        components: []
      },
      {
        internalType: "address",
        name: "slashingAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "cooldownPauseAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "claimHelper",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "maxSlashablePercentage",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
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
        name: "owner",
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
    name: "previewStake",
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
    name: "redeem",
    outputs: []
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
    name: "redeemOnBehalf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "returnFunds",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setCooldownSeconds",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDistributionEnd",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setDistributionEnd",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setMaxSlashablePercentage",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setPendingAdmin",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "settleSlashing",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
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
    name: "slash",
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
    name: "stake",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
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
    name: "stakeWithPermit",
    outputs: []
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
    name: "stakerRewardsToClaim",
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
    name: "stakersCooldowns",
    outputs: [
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
        components: []
      },
      {
        internalType: "uint216",
        name: "amount",
        type: "uint216",
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
        name: "value",
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
        name: "value",
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
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IStakeToken_ABI
});
//# sourceMappingURL=IStakeToken.js.map