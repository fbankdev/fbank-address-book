// src/ts/abis/IDefaultInterestRateStrategy.ts
var IDefaultInterestRateStrategy_ABI = [
  {
    type: "function",
    name: "ADDRESSES_PROVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolAddressesProvider"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO",
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
    name: "MAX_EXCESS_USAGE_RATIO",
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
    name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO",
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
    name: "OPTIMAL_USAGE_RATIO",
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
    name: "calculateInterestRates",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct DataTypes.CalculateInterestRatesParams",
        components: [
          {
            name: "unbacked",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityAdded",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityTaken",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "totalStableDebt",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "totalVariableDebt",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "averageStableBorrowRate",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserveFactor",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserve",
            type: "address",
            internalType: "address"
          },
          {
            name: "aToken",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
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
    name: "getBaseStableBorrowRate",
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
    name: "getBaseVariableBorrowRate",
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
    name: "getMaxVariableBorrowRate",
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
    name: "getStableRateExcessOffset",
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
    name: "getStableRateSlope1",
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
    name: "getStableRateSlope2",
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
    name: "getVariableRateSlope1",
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
    name: "getVariableRateSlope2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  }
];
export {
  IDefaultInterestRateStrategy_ABI
};
//# sourceMappingURL=IDefaultInterestRateStrategy.mjs.map