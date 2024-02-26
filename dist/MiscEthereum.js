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

// src/ts/MiscEthereum.ts
var MiscEthereum_exports = {};
__export(MiscEthereum_exports, {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER: () => AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  AAVE_MERKLE_DISTRIBUTOR: () => AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE: () => AAVE_POL_ETH_BRIDGE,
  AAVE_SWAPPER: () => AAVE_SWAPPER,
  CHAIN_ID: () => CHAIN_ID,
  CREATE_3_FACTORY: () => CREATE_3_FACTORY,
  ECOSYSTEM_RESERVE: () => ECOSYSTEM_RESERVE,
  EUR_USD_AGGREGATOR: () => EUR_USD_AGGREGATOR,
  GHO_FLASHMINTER_FACILITATOR: () => GHO_FLASHMINTER_FACILITATOR,
  GHO_TOKEN: () => GHO_TOKEN,
  GSM_REGISTRY: () => GSM_REGISTRY,
  GSM_USDC: () => GSM_USDC,
  GSM_USDC_FEE_STRATEGY: () => GSM_USDC_FEE_STRATEGY,
  GSM_USDC_ORACLE_SWAP_FREEZER: () => GSM_USDC_ORACLE_SWAP_FREEZER,
  GSM_USDC_PRICE_STRATEGY: () => GSM_USDC_PRICE_STRATEGY,
  GSM_USDT: () => GSM_USDT,
  GSM_USDT_FEE_STRATEGY: () => GSM_USDT_FEE_STRATEGY,
  GSM_USDT_ORACLE_SWAP_FREEZER: () => GSM_USDT_ORACLE_SWAP_FREEZER,
  GSM_USDT_PRICE_STRATEGY: () => GSM_USDT_PRICE_STRATEGY,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN: () => PROTOCOL_GUARDIAN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  PROXY_ADMIN_LONG: () => PROXY_ADMIN_LONG,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY,
  agEUR_EUR_AGGREGATOR: () => agEUR_EUR_AGGREGATOR,
  sDAI_POT: () => sDAI_POT,
  stEUR: () => stEUR
});
module.exports = __toCommonJS(MiscEthereum_exports);
var AAVE_ECOSYSTEM_RESERVE_CONTROLLER = "0x3d569673dAa0575c936c7c67c4E6AedA69CC630C";
var ECOSYSTEM_RESERVE = "0x25F2226B597E8F9514B3F68F00f494cF4f286491";
var PROXY_ADMIN_LONG = "0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517";
var AAVE_SWAPPER = "0x3ea64b1C0194524b48F9118462C8E9cd61a243c7";
var AAVE_POL_ETH_BRIDGE = "0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36";
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var TRANSPARENT_PROXY_FACTORY = "0xB4e496f70602fE2AC6Ae511D028BA4D194773B29";
var PROXY_ADMIN = "0xD3cF979e676265e4f6379749DECe4708B9A22476";
var CREATE_3_FACTORY = "0xcc3C54B95f3f1867A43009B80ed4DD930E3cE2F7";
var PROTOCOL_GUARDIAN = "0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633";
var AAVE_MERKLE_DISTRIBUTOR = "0xa88c6D90eAe942291325f9ae3c66f3563B93FE10";
var GHO_TOKEN = "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f";
var GHO_FLASHMINTER_FACILITATOR = "0xb639D208Bcf0589D54FaC24E655C79EC529762B8";
var GSM_REGISTRY = "0x167527DB01325408696326e3580cd8e55D99Dc1A";
var GSM_USDC = "0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578";
var GSM_USDT = "0x686F8D21520f4ecEc7ba577be08354F4d1EB8262";
var GSM_USDC_FEE_STRATEGY = "0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5";
var GSM_USDT_FEE_STRATEGY = "0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5";
var GSM_USDC_PRICE_STRATEGY = "0x430BEdcA5DfA6f94d1205Cb33AB4f008D0d9942a";
var GSM_USDT_PRICE_STRATEGY = "0x4c707764cbFB4FFa078e169e6b8A6AdbE7526a2c";
var GSM_USDC_ORACLE_SWAP_FREEZER = "0xef6beCa8D9543eC007bceA835aF768B58F730C1f";
var GSM_USDT_ORACLE_SWAP_FREEZER = "0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5";
var sDAI_POT = "0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7";
var stEUR = "0x004626A008B1aCdC4c74ab51644093b155e59A23";
var agEUR_EUR_AGGREGATOR = "0xb4d5289C58CE36080b0748B47F859D8F50dFAACb";
var EUR_USD_AGGREGATOR = "0xb49f677943BC038e9857d61E7d053CaA2C1734C1";
var CHAIN_ID = 1;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  AAVE_MERKLE_DISTRIBUTOR,
  AAVE_POL_ETH_BRIDGE,
  AAVE_SWAPPER,
  CHAIN_ID,
  CREATE_3_FACTORY,
  ECOSYSTEM_RESERVE,
  EUR_USD_AGGREGATOR,
  GHO_FLASHMINTER_FACILITATOR,
  GHO_TOKEN,
  GSM_REGISTRY,
  GSM_USDC,
  GSM_USDC_FEE_STRATEGY,
  GSM_USDC_ORACLE_SWAP_FREEZER,
  GSM_USDC_PRICE_STRATEGY,
  GSM_USDT,
  GSM_USDT_FEE_STRATEGY,
  GSM_USDT_ORACLE_SWAP_FREEZER,
  GSM_USDT_PRICE_STRATEGY,
  PARASWAP_FEE_CLAIMER,
  PROTOCOL_GUARDIAN,
  PROXY_ADMIN,
  PROXY_ADMIN_LONG,
  TRANSPARENT_PROXY_FACTORY,
  agEUR_EUR_AGGREGATOR,
  sDAI_POT,
  stEUR
});
//# sourceMappingURL=MiscEthereum.js.map