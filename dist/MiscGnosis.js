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

// src/ts/MiscGnosis.ts
var MiscGnosis_exports = {};
__export(MiscGnosis_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY,
  wstETH_stETH_AGGREGATOR: () => wstETH_stETH_AGGREGATOR
});
module.exports = __toCommonJS(MiscGnosis_exports);
var TRANSPARENT_PROXY_FACTORY = "0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A";
var PROXY_ADMIN = "0xe892E40C92c2E4D281Be59b2E6300F271d824E75";
var CREATE_3_FACTORY = "0x2cC41488f4494c5e11cB6cbA82199442B9f495B6";
var PROTOCOL_GUARDIAN = "0xF163b8698821cefbD33Cf449764d69Ea445cE23D";
var wstETH_stETH_AGGREGATOR = "0x0064AC007fF665CF8D0D3Af5E0AD1c26a3f853eA";
var CHAIN_ID = 100;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CREATE_3_FACTORY,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY,
  wstETH_stETH_AGGREGATOR
});
//# sourceMappingURL=MiscGnosis.js.map