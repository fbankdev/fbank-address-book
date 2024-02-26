// src/ts/abis/IVotingStrategy.ts
var IVotingStrategy_ABI = [
  {
    type: "function",
    name: "DATA_WAREHOUSE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POWER_SCALE_FACTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "STK_AAVE_SLASHING_EXCHANGE_RATE_PRECISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "STK_AAVE_SLASHING_EXCHANGE_RATE_SLOT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingPower",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "storageSlot",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "power",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "hasRequiredRoots",
    inputs: [
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "view"
  }
];
export {
  IVotingStrategy_ABI
};
//# sourceMappingURL=IVotingStrategy.mjs.map