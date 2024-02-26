// src/ts/abis/IWithGuardian.ts
var IWithGuardian_ABI = [
  {
    type: "function",
    name: "guardian",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "updateGuardian",
    inputs: [
      {
        name: "newGuardian",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "GuardianUpdated",
    inputs: [
      {
        name: "oldGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "newGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
export {
  IWithGuardian_ABI
};
//# sourceMappingURL=IWithGuardian.mjs.map