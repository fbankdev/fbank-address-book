declare const CROSS_CHAIN_CONTROLLER = "0x48A9FE90bce5EEd790f3F4Ce192d1C0B351fd4Ca";
declare const PAYLOADS_CONTROLLER = "0x0E1a3Af1f9cC76A62eD31eDedca291E63632e7c4";
declare const PC_DATA_HELPER = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
declare const EXECUTOR_LVL_1 = "0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf";
declare const CHAIN_ID = 10;

declare const GovernanceV3Optimism_CHAIN_ID: typeof CHAIN_ID;
declare const GovernanceV3Optimism_CROSS_CHAIN_CONTROLLER: typeof CROSS_CHAIN_CONTROLLER;
declare const GovernanceV3Optimism_EXECUTOR_LVL_1: typeof EXECUTOR_LVL_1;
declare const GovernanceV3Optimism_PAYLOADS_CONTROLLER: typeof PAYLOADS_CONTROLLER;
declare const GovernanceV3Optimism_PC_DATA_HELPER: typeof PC_DATA_HELPER;
declare namespace GovernanceV3Optimism {
  export { GovernanceV3Optimism_CHAIN_ID as CHAIN_ID, GovernanceV3Optimism_CROSS_CHAIN_CONTROLLER as CROSS_CHAIN_CONTROLLER, GovernanceV3Optimism_EXECUTOR_LVL_1 as EXECUTOR_LVL_1, GovernanceV3Optimism_PAYLOADS_CONTROLLER as PAYLOADS_CONTROLLER, GovernanceV3Optimism_PC_DATA_HELPER as PC_DATA_HELPER };
}

export { CROSS_CHAIN_CONTROLLER as C, EXECUTOR_LVL_1 as E, GovernanceV3Optimism as G, PAYLOADS_CONTROLLER as P, PC_DATA_HELPER as a, CHAIN_ID as b };
