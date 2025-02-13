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

// src/ts/MiscScroll.ts
var MiscScroll_exports = {};
__export(MiscScroll_exports, {
  CHAIN_ID: () => CHAIN_ID,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY,
  wstETH_stETH_AGGREGATOR: () => wstETH_stETH_AGGREGATOR
});
module.exports = __toCommonJS(MiscScroll_exports);
var TRANSPARENT_PROXY_FACTORY = "0xFa2eeb2d0054C3Db2A606E2cd9EE111b62707D1e";
var PROXY_ADMIN = "0x782559e349b084bB7C07c08404aE6E3436cDAE2E";
var PROTOCOL_GUARDIAN = "0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7";
var wstETH_stETH_AGGREGATOR = "0xE61Da4C909F7d86797a0D06Db63c34f76c9bCBDC";
var CHAIN_ID = 534352;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY,
  wstETH_stETH_AGGREGATOR
});
//# sourceMappingURL=MiscScroll.js.map