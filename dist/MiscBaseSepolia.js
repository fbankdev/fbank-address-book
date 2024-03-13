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

// src/ts/MiscBaseSepolia.ts
var MiscBaseSepolia_exports = {};
__export(MiscBaseSepolia_exports, {
  CHAIN_ID: () => CHAIN_ID,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscBaseSepolia_exports);
var TRANSPARENT_PROXY_FACTORY = "0xD90f09Ea5eE893b8c0564719E855f1CF0455D894";
var PROXY_ADMIN = "0xF9e48edc704BDF494309cA457BCea4c0696f591d";
var CHAIN_ID = 84532;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscBaseSepolia.js.map