// src/ts/abis/IAggregatedStakeToken.ts
var IAggregatedStakeToken_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
        components: []
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
        components: []
      }
    ],
    stateMutability: "payable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "previousAdmin",
        type: "address",
        components: [],
        indexed: false
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "AdminChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
        components: [],
        indexed: true
      }
    ],
    type: "event",
    name: "Upgraded",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "fallback",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "changeAdmin",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "upgradeTo",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
        components: []
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
        components: []
      }
    ],
    stateMutability: "payable",
    type: "function",
    name: "upgradeToAndCall",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "receive",
    outputs: []
  }
];
export {
  IAggregatedStakeToken_ABI
};
//# sourceMappingURL=IAggregatedStakeToken.mjs.map