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

// src/ts/MiscOptimismSepolia.ts
var MiscOptimismSepolia_exports = {};
__export(MiscOptimismSepolia_exports, {
  CHAIN_ID: () => CHAIN_ID,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscOptimismSepolia_exports);
var TRANSPARENT_PROXY_FACTORY = "0xb172a90A7C238969CE9B27cc19D13b60A91e7F00";
var PROXY_ADMIN = "0xe892E40C92c2E4D281Be59b2E6300F271d824E75";
var CHAIN_ID = 11155420;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscOptimismSepolia.js.map