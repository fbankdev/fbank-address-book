// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
import {IGovernanceCore, IPayloadsControllerCore, IDataWarehouse, IVotingStrategy} from './GovernanceV3.sol';

library GovernanceV3Arbitrum {
  // https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0
  address internal constant CROSS_CHAIN_CONTROLLER = 0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0;

  // https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C
  IPayloadsControllerCore internal constant PAYLOADS_CONTROLLER =
    IPayloadsControllerCore(0x89644CA1bB8064760312AE4F03ea41b05dA3637C);

  // https://arbiscan.io/address/0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A
  address internal constant PC_DATA_HELPER = 0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A;

  // https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327
  address internal constant EXECUTOR_LVL_1 = 0xFF1137243698CaA18EE364Cc966CF0e02A4e6327;
}
