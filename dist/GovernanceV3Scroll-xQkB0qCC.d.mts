declare const CROSS_CHAIN_CONTROLLER = "0x03073D3F4769f6b6604d616238fD6c636C99AD0A";
declare const PAYLOADS_CONTROLLER = "0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE";
declare const PC_DATA_HELPER = "0xf438e33dCCEE260ee4371F9dceF408b0d7DBe424";
declare const EXECUTOR_LVL_1 = "0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24";
declare const CHAIN_ID = 534352;

declare const GovernanceV3Scroll_CHAIN_ID: typeof CHAIN_ID;
declare const GovernanceV3Scroll_CROSS_CHAIN_CONTROLLER: typeof CROSS_CHAIN_CONTROLLER;
declare const GovernanceV3Scroll_EXECUTOR_LVL_1: typeof EXECUTOR_LVL_1;
declare const GovernanceV3Scroll_PAYLOADS_CONTROLLER: typeof PAYLOADS_CONTROLLER;
declare const GovernanceV3Scroll_PC_DATA_HELPER: typeof PC_DATA_HELPER;
declare namespace GovernanceV3Scroll {
  export { GovernanceV3Scroll_CHAIN_ID as CHAIN_ID, GovernanceV3Scroll_CROSS_CHAIN_CONTROLLER as CROSS_CHAIN_CONTROLLER, GovernanceV3Scroll_EXECUTOR_LVL_1 as EXECUTOR_LVL_1, GovernanceV3Scroll_PAYLOADS_CONTROLLER as PAYLOADS_CONTROLLER, GovernanceV3Scroll_PC_DATA_HELPER as PC_DATA_HELPER };
}

export { CROSS_CHAIN_CONTROLLER as C, EXECUTOR_LVL_1 as E, GovernanceV3Scroll as G, PAYLOADS_CONTROLLER as P, PC_DATA_HELPER as a, CHAIN_ID as b };
