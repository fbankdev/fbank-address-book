// src/ts/abis/IGovernanceDataHelper.ts
var IGovernanceDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getConstants",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Constants",
        name: "",
        type: "tuple",
        components: [
          {
            internalType: "struct IGovernanceDataHelper.VotingConfig[]",
            name: "votingConfigs",
            type: "tuple[]",
            components: [
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "struct IGovernanceCore.VotingConfig",
                name: "config",
                type: "tuple",
                components: [
                  {
                    internalType: "uint24",
                    name: "coolDownBeforeVotingStart",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint24",
                    name: "votingDuration",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesThreshold",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesNoDifferential",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "minPropositionPower",
                    type: "uint56",
                    components: []
                  }
                ]
              }
            ]
          },
          {
            internalType: "uint256",
            name: "precisionDivider",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cooldownPeriod",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cancellationFee",
            type: "uint256",
            components: []
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "votingChainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IGovernanceCore.Proposal",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "enum IGovernanceCore.State",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "creationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingActivationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuingTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "address",
                name: "votingPortal",
                type: "address",
                components: []
              },
              {
                internalType: "bytes32",
                name: "snapshotBlockHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "bytes32",
                name: "ipfsHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "cancellationFee",
                type: "uint256",
                components: []
              },
              {
                internalType: "struct PayloadsControllerUtils.Payload[]",
                name: "payloads",
                type: "tuple[]",
                components: [
                  {
                    internalType: "uint256",
                    name: "chain",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "address",
                    name: "payloadsController",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "uint40",
                    name: "payloadId",
                    type: "uint40",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
        components: []
      },
      {
        internalType: "uint256[]",
        name: "chainIds",
        type: "uint256[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getRepresentationData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Representatives[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "representative",
            type: "address",
            components: []
          }
        ]
      },
      {
        internalType: "struct IGovernanceDataHelper.Represented[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address[]",
            name: "votersRepresented",
            type: "address[]",
            components: []
          }
        ]
      }
    ]
  }
];
export {
  IGovernanceDataHelper_ABI
};
//# sourceMappingURL=IGovernanceDataHelper.mjs.map