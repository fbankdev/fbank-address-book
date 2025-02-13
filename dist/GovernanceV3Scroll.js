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

// src/ts/GovernanceV3Scroll.ts
var GovernanceV3Scroll_exports = {};
__export(GovernanceV3Scroll_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER
});
module.exports = __toCommonJS(GovernanceV3Scroll_exports);
var CROSS_CHAIN_CONTROLLER = "0x03073D3F4769f6b6604d616238fD6c636C99AD0A";
var PAYLOADS_CONTROLLER = "0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE";
var PC_DATA_HELPER = "0xf438e33dCCEE260ee4371F9dceF408b0d7DBe424";
var EXECUTOR_LVL_1 = "0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24";
var CHAIN_ID = 534352;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CROSS_CHAIN_CONTROLLER,
  EXECUTOR_LVL_1,
  PAYLOADS_CONTROLLER,
  PC_DATA_HELPER
});
//# sourceMappingURL=GovernanceV3Scroll.js.map