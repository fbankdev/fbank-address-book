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

// src/ts/MiscArbitrumSepolia.ts
var MiscArbitrumSepolia_exports = {};
__export(MiscArbitrumSepolia_exports, {
  CHAIN_ID: () => CHAIN_ID,
  GHO_TOKEN: () => GHO_TOKEN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscArbitrumSepolia_exports);
var TRANSPARENT_PROXY_FACTORY = "0x43A8B7eC945a12a3Acb127B77ede19bd73ad76f8";
var PROXY_ADMIN = "0xCB5B3ca20603231945dC5731C33E7f7F7679Ea89";
var GHO_TOKEN = "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810";
var CHAIN_ID = 421614;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  GHO_TOKEN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscArbitrumSepolia.js.map