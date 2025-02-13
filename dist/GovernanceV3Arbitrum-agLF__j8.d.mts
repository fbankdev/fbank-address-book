declare const CROSS_CHAIN_CONTROLLER = "0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0";
declare const PAYLOADS_CONTROLLER = "0x89644CA1bB8064760312AE4F03ea41b05dA3637C";
declare const PC_DATA_HELPER = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
declare const EXECUTOR_LVL_1 = "0xFF1137243698CaA18EE364Cc966CF0e02A4e6327";
declare const CHAIN_ID = 42161;

declare const GovernanceV3Arbitrum_CHAIN_ID: typeof CHAIN_ID;
declare const GovernanceV3Arbitrum_CROSS_CHAIN_CONTROLLER: typeof CROSS_CHAIN_CONTROLLER;
declare const GovernanceV3Arbitrum_EXECUTOR_LVL_1: typeof EXECUTOR_LVL_1;
declare const GovernanceV3Arbitrum_PAYLOADS_CONTROLLER: typeof PAYLOADS_CONTROLLER;
declare const GovernanceV3Arbitrum_PC_DATA_HELPER: typeof PC_DATA_HELPER;
declare namespace GovernanceV3Arbitrum {
  export { GovernanceV3Arbitrum_CHAIN_ID as CHAIN_ID, GovernanceV3Arbitrum_CROSS_CHAIN_CONTROLLER as CROSS_CHAIN_CONTROLLER, GovernanceV3Arbitrum_EXECUTOR_LVL_1 as EXECUTOR_LVL_1, GovernanceV3Arbitrum_PAYLOADS_CONTROLLER as PAYLOADS_CONTROLLER, GovernanceV3Arbitrum_PC_DATA_HELPER as PC_DATA_HELPER };
}

export { CROSS_CHAIN_CONTROLLER as C, EXECUTOR_LVL_1 as E, GovernanceV3Arbitrum as G, PAYLOADS_CONTROLLER as P, PC_DATA_HELPER as a, CHAIN_ID as b };
