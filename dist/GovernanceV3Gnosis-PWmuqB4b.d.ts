declare const CROSS_CHAIN_CONTROLLER = "0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F";
declare const CL_EMERGENCY_ORACLE = "0xF937ffAeA1363e4Fa260760bDFA2aA8Fc911F84D";
declare const PAYLOADS_CONTROLLER = "0x9A1F491B86D09fC1484b5fab10041B189B60756b";
declare const PC_DATA_HELPER = "0xF1c11BE0b4466728DDb7991A0Ac5265646ec9672";
declare const EXECUTOR_LVL_1 = "0x1dF462e2712496373A347f8ad10802a5E95f053D";
declare const EXECUTOR_LVL_2 = "0x0000000000000000000000000000000000000000";
declare const CHAIN_ID = 100;

declare const GovernanceV3Gnosis_CHAIN_ID: typeof CHAIN_ID;
declare const GovernanceV3Gnosis_CL_EMERGENCY_ORACLE: typeof CL_EMERGENCY_ORACLE;
declare const GovernanceV3Gnosis_CROSS_CHAIN_CONTROLLER: typeof CROSS_CHAIN_CONTROLLER;
declare const GovernanceV3Gnosis_EXECUTOR_LVL_1: typeof EXECUTOR_LVL_1;
declare const GovernanceV3Gnosis_EXECUTOR_LVL_2: typeof EXECUTOR_LVL_2;
declare const GovernanceV3Gnosis_PAYLOADS_CONTROLLER: typeof PAYLOADS_CONTROLLER;
declare const GovernanceV3Gnosis_PC_DATA_HELPER: typeof PC_DATA_HELPER;
declare namespace GovernanceV3Gnosis {
  export { GovernanceV3Gnosis_CHAIN_ID as CHAIN_ID, GovernanceV3Gnosis_CL_EMERGENCY_ORACLE as CL_EMERGENCY_ORACLE, GovernanceV3Gnosis_CROSS_CHAIN_CONTROLLER as CROSS_CHAIN_CONTROLLER, GovernanceV3Gnosis_EXECUTOR_LVL_1 as EXECUTOR_LVL_1, GovernanceV3Gnosis_EXECUTOR_LVL_2 as EXECUTOR_LVL_2, GovernanceV3Gnosis_PAYLOADS_CONTROLLER as PAYLOADS_CONTROLLER, GovernanceV3Gnosis_PC_DATA_HELPER as PC_DATA_HELPER };
}

export { CROSS_CHAIN_CONTROLLER as C, EXECUTOR_LVL_1 as E, GovernanceV3Gnosis as G, PAYLOADS_CONTROLLER as P, CL_EMERGENCY_ORACLE as a, PC_DATA_HELPER as b, EXECUTOR_LVL_2 as c, CHAIN_ID as d };
