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

// src/ts/AaveGovernanceV2.ts
var AaveGovernanceV2_exports = {};
__export(AaveGovernanceV2_exports, {
  ARBITRUM_BRIDGE_EXECUTOR: () => ARBITRUM_BRIDGE_EXECUTOR,
  ARC_TIMELOCK: () => ARC_TIMELOCK,
  BASE_BRIDGE_EXECUTOR: () => BASE_BRIDGE_EXECUTOR,
  CHAIN_ID: () => CHAIN_ID,
  CROSSCHAIN_FORWARDER_ARBITRUM: () => CROSSCHAIN_FORWARDER_ARBITRUM,
  CROSSCHAIN_FORWARDER_BASE: () => CROSSCHAIN_FORWARDER_BASE,
  CROSSCHAIN_FORWARDER_METIS: () => CROSSCHAIN_FORWARDER_METIS,
  CROSSCHAIN_FORWARDER_OPTIMISM: () => CROSSCHAIN_FORWARDER_OPTIMISM,
  CROSSCHAIN_FORWARDER_POLYGON: () => CROSSCHAIN_FORWARDER_POLYGON,
  LONG_EXECUTOR: () => LONG_EXECUTOR,
  METIS_BRIDGE_EXECUTOR: () => METIS_BRIDGE_EXECUTOR,
  OPTIMISM_BRIDGE_EXECUTOR: () => OPTIMISM_BRIDGE_EXECUTOR,
  POLYGON_BRIDGE_EXECUTOR: () => POLYGON_BRIDGE_EXECUTOR,
  SHORT_EXECUTOR: () => SHORT_EXECUTOR
});
module.exports = __toCommonJS(AaveGovernanceV2_exports);
var SHORT_EXECUTOR = "0xEE56e2B3D491590B5b31738cC34d5232F378a8D5";
var LONG_EXECUTOR = "0x79426A1c24B2978D90d7A5070a46C65B07bC4299";
var ARC_TIMELOCK = "0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218";
var POLYGON_BRIDGE_EXECUTOR = "0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772";
var OPTIMISM_BRIDGE_EXECUTOR = "0x7d9103572bE58FfE99dc390E8246f02dcAe6f611";
var ARBITRUM_BRIDGE_EXECUTOR = "0x7d9103572bE58FfE99dc390E8246f02dcAe6f611";
var METIS_BRIDGE_EXECUTOR = "0x8EC77963068474a45016938Deb95E603Ca82a029";
var BASE_BRIDGE_EXECUTOR = "0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45";
var CROSSCHAIN_FORWARDER_POLYGON = "0x158a6bC04F0828318821baE797f50B0A1299d45b";
var CROSSCHAIN_FORWARDER_OPTIMISM = "0x5f5C02875a8e9B5A26fbd09040ABCfDeb2AA6711";
var CROSSCHAIN_FORWARDER_ARBITRUM = "0xd1B3E25fD7C8AE7CADDC6F71b461b79CD4ddcFa3";
var CROSSCHAIN_FORWARDER_METIS = "0x2fE52eF191F0BE1D98459BdaD2F1d3160336C08f";
var CROSSCHAIN_FORWARDER_BASE = "0x3215225538da1546FE0DA88ee13019f402078942";
var CHAIN_ID = 1;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ARBITRUM_BRIDGE_EXECUTOR,
  ARC_TIMELOCK,
  BASE_BRIDGE_EXECUTOR,
  CHAIN_ID,
  CROSSCHAIN_FORWARDER_ARBITRUM,
  CROSSCHAIN_FORWARDER_BASE,
  CROSSCHAIN_FORWARDER_METIS,
  CROSSCHAIN_FORWARDER_OPTIMISM,
  CROSSCHAIN_FORWARDER_POLYGON,
  LONG_EXECUTOR,
  METIS_BRIDGE_EXECUTOR,
  OPTIMISM_BRIDGE_EXECUTOR,
  POLYGON_BRIDGE_EXECUTOR,
  SHORT_EXECUTOR
});
//# sourceMappingURL=AaveGovernanceV2.js.map