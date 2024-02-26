// src/ts/abis/IExecutor.ts
var IExecutor_ABI = [
  {
    type: "function",
    name: "executeTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "event",
    name: "ExecutedAction",
    inputs: [
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      },
      {
        name: "resultData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  }
];
export {
  IExecutor_ABI
};
//# sourceMappingURL=IExecutor.mjs.map