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

// src/ts/abis/IStaticATokenFactory.ts
var IStaticATokenFactory_exports = {};
__export(IStaticATokenFactory_exports, {
  IStaticATokenFactory_ABI: () => IStaticATokenFactory_ABI
});
module.exports = __toCommonJS(IStaticATokenFactory_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IStaticATokenFactory_ABI
});
//# sourceMappingURL=IStaticATokenFactory.js.map