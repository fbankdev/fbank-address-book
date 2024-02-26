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

// src/ts/abis/IAggregatedStakeToken.ts
var IAggregatedStakeToken_exports = {};
__export(IAggregatedStakeToken_exports, {
  IAggregatedStakeToken_ABI: () => IAggregatedStakeToken_ABI
});
module.exports = __toCommonJS(IAggregatedStakeToken_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IAggregatedStakeToken_ABI
});
//# sourceMappingURL=IAggregatedStakeToken.js.map