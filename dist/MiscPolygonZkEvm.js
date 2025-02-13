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

// src/ts/MiscPolygonZkEvm.ts
var MiscPolygonZkEvm_exports = {};
__export(MiscPolygonZkEvm_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscPolygonZkEvm_exports);
var PARASWAP_FEE_CLAIMER = "0xAe940e61E9863178b71500c9B5faE2a04Da361a1";
var TRANSPARENT_PROXY_FACTORY = "0x8B6851156023f4f5A66F68BEA80851c3D905Ac93";
var PROXY_ADMIN = "0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2";
var CREATE_3_FACTORY = "0xE2E8Badc5d50f8a6188577B89f50701cDE2D4e19";
var PROTOCOL_GUARDIAN = "0x8C05474F1f0161F71276677De0a2d8a347583c45";
var CHAIN_ID = 1101;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CREATE_3_FACTORY,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscPolygonZkEvm.js.map