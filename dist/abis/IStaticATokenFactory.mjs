// src/ts/abis/IStaticATokenFactory.ts
var IStaticATokenFactory_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "proxyAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "contract ITransparentProxyFactory",
        name: "transparentProxyFactory",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "staticATokenImpl",
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
        name: "staticAToken",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "underlying",
        type: "address",
        components: [],
        indexed: true
      }
    ],
    type: "event",
    name: "StaticTokenCreated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "ADMIN",
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
    name: "STATIC_A_TOKEN_IMPL",
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
    name: "TRANSPARENT_PROXY_FACTORY",
    outputs: [
      {
        internalType: "contract ITransparentProxyFactory",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "underlyings",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "createStaticATokens",
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
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getStaticAToken",
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
    name: "getStaticATokens",
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
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
  }
];
export {
  IStaticATokenFactory_ABI
};
//# sourceMappingURL=IStaticATokenFactory.mjs.map