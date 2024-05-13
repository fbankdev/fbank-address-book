var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/ts/AaveV3FantomTestnet.ts
var AaveV3FantomTestnet_exports = {};
__export(AaveV3FantomTestnet_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN: () => ACL_ADMIN,
  ACL_MANAGER: () => ACL_MANAGER,
  ASSETS: () => ASSETS,
  CHAIN_ID: () => CHAIN_ID,
  COLLECTOR: () => COLLECTOR,
  DEFAULT_A_TOKEN_IMPL_REV_1: () => DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
  E_MODES: () => E_MODES,
  FAUCET: () => FAUCET,
  ORACLE: () => ORACLE,
  POOL: () => POOL,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR,
  POOL_CONFIGURATOR_IMPL: () => POOL_CONFIGURATOR_IMPL,
  POOL_IMPL: () => POOL_IMPL,
  UI_INCENTIVE_DATA_PROVIDER: () => UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER: () => UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY: () => WETH_GATEWAY
});
var POOL_ADDRESSES_PROVIDER = "0x1157237B2cf48adb612329671D5FcB48DC980B4B";
var POOL = "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb";
var POOL_IMPL = "0xB73F346a92172bF85C4b14ffcFd9Df86E10f7376";
var POOL_CONFIGURATOR = "0x642C744Df4E8c2cfEb044fc1984C6c0cfA29890B";
var POOL_CONFIGURATOR_IMPL = "0x5952c1690EA1669bb32aF239503d3b0bCA96FAe7";
var ORACLE = "0xb4e9901a5C29f9acC607c49867dFDC0A92C25E49";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x806264B38BEb2E5f9A0207B0A4d8A73f5f041205";
var ACL_MANAGER = "0xe2E3eCE41A29cBcf2a7a198F30De6185Bc6CB3C3";
var ACL_ADMIN = "0x9dd64152E20372B2C4D8982e2b174D0C84f07D29";
var COLLECTOR = "0x57f46e6eE23882F995eFE32ca2ee2A7b762e84Bb";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x784220cCEE9002227f52fB257AA1FEa25de73b2C";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x6d8BE31e17c5388e296A8E4d2e371a0dBFb75ccA";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0xC96882345c2c9B8B7450eBCf6CE1c98417335a8F";
var FAUCET = "0x1b0cF5697Dd9b087a2213aCc059ef4211B9f5eB1";
var UI_INCENTIVE_DATA_PROVIDER = "0x978855a8f269EC8dDc96513c5974a9185D5a1b4A";
var UI_POOL_DATA_PROVIDER = "0x69256C3EB7b657c8aF0d51Cf6e462b09b94C45ec";
var WALLET_BALANCE_PROVIDER = "0x473b16Fdf6e7017893c4c7AE7843C1F765a6d853";
var WETH_GATEWAY = "0x37d7ce66F01Bd4B483835cf6982D1988Da5Ed568";
var CHAIN_ID = 4002;
var ASSETS = {
  DAI: {
    decimals: 18,
    UNDERLYING: "0xdF0687BCcb6bb7D046d26a5Cf38D81758468ab10",
    A_TOKEN: "0x2D2771A626DAAd0F1D0b5A1C28db73950d624448",
    S_TOKEN: "0x29ef8984336D8A2E0A94987E0c14469e1896B479",
    V_TOKEN: "0xe22F79d689e5b0e5da6E70B5c1d71e9eC4B8b320",
    INTEREST_RATE_STRATEGY: "0x26fBAA25ae753F4Ded5BE845E0aD6FCaE773d3e7",
    ORACLE: "0xc27c957F734A5E43956d2dd95fe22917c682a85b"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0x7567951F7A80505D0CAa843113834ed4dD0f7Fe5",
    A_TOKEN: "0xc028Ce7431ABa4d621453Fb30b2b2Dd67a79196b",
    S_TOKEN: "0xf5649F5Fbc7f2aDca02BEe329176441ee7f0F4Ac",
    V_TOKEN: "0x3CEc44143D90Ac3BE840E5d1f408e832378A628c",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0x07BAecfcCd919e54c186554Ab43574519F8d3cfE",
    A_TOKEN: "0xd69EBc885a338CD842eB1B9B3ba9BBf3De609b83",
    S_TOKEN: "0xb7c6Ca17D19f107f008f50Cb351b072274ECbDa5",
    V_TOKEN: "0xacEF6533C60D5E5f1F168d5B270345b2143C1669",
    INTEREST_RATE_STRATEGY: "0x690eC0D0d9C75915E8782C53919dA2E7850C5532",
    ORACLE: "0x6Ee8DBDF1504225efCB4c79CC681266e147182a2"
  },
  WBTC: {
    decimals: 8,
    UNDERLYING: "0x8e4Fde5647b31566C1bf8c7AE0f5558aA17b0Cd1",
    A_TOKEN: "0xeEe16cE6F70b5f7D6c04bCf6E29FE027611AA745",
    S_TOKEN: "0x2f6B07C57bF2f2AA7fDA7d0Adb5E36A4Ff6565c4",
    V_TOKEN: "0xB39ec8c025f8b86682B7d909aE6070B0840FdCc4",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0x65E8d79f3e8e36fE48eC31A2ae935e92F5bBF529"
  },
  WETH: {
    decimals: 18,
    UNDERLYING: "0x7f0a70f9737EC6B3C3b6Ad93b536f332Eed8a0EF",
    A_TOKEN: "0xEF9D79EbC57FE94CEA2157d1789841deD482965c",
    S_TOKEN: "0x578a19920eAE5e9e8cFAB1995A982Bf95734360c",
    V_TOKEN: "0xAcB72f254cA0003E4c0fb5ee9478723D55d7C38A",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0xB8C458C957a6e6ca7Cc53eD95bEA548c52AFaA24"
  },
  USDT: {
    decimals: 6,
    UNDERLYING: "0x5904aEF9215D681e2Fcd63040DBb955d24C778EA",
    A_TOKEN: "0x442447221D6cD2E9Ff8e0dB48907a03d1Be2E0B8",
    S_TOKEN: "0xC57b3638d50823Fc8D3875E3BC71bA02f6c471D1",
    V_TOKEN: "0xa734Fb1cA20d4Af01F621cF8196cD38eA6139881",
    INTEREST_RATE_STRATEGY: "0x690eC0D0d9C75915E8782C53919dA2E7850C5532",
    ORACLE: "0x9BB8A6dcD83E36726Cc230a97F1AF8a84ae5F128"
  },
  AAVE: {
    decimals: 18,
    UNDERLYING: "0x8f28c17affc0Fce7C68bfFb130253E93b99Abcba",
    A_TOKEN: "0x5fbBdEf9E8139dCdfcd7Cd661dC66245E7c051e1",
    S_TOKEN: "0xbF3AF4D830050cD9CcFF903b4468719a3fa01A2c",
    V_TOKEN: "0x9429d2aA9462EF55a7613d93c3923CE121e96f51",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0xe41037CA6Dcf2d80a8BB3BccF56B73742d948a26"
  },
  WFTM: {
    decimals: 18,
    UNDERLYING: "0x71E10f1BeD205C1212B4d1Ce4a32BdB7295BFbC0",
    A_TOKEN: "0x11f77005Da9a3432c7Fcb6622534Bf4E722f233B",
    S_TOKEN: "0x249261f0746e2D982C07861cF725b0426afA4421",
    V_TOKEN: "0x7e85dD96bCc440E6fFeC8E00F7Cd170F12e15cAD",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0xe04676B9A9A2973BCb0D1478b5E1E9098BBB7f3D"
  },
  CRV: {
    decimals: 18,
    UNDERLYING: "0x8763ce2AD58Cf589F18d868c43FEfA21BE6310DA",
    A_TOKEN: "0x45c8618053Bb5399f705Bf14114AfAb676946895",
    S_TOKEN: "0xfBD4419147f438e893fe992B2491df6DA577e840",
    V_TOKEN: "0x643cC03Bb528EB59EBEDCC918AF33575655db915",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0x3BBCF4313bB1Ac81996094B62Cf2434983191666"
  },
  SUSHI: {
    decimals: 18,
    UNDERLYING: "0xe733F960BF9Eab5993Dccd61856579939bA2019f",
    A_TOKEN: "0x664eD46f40749015279bdcbD7d8773bC7Ae1B866",
    S_TOKEN: "0x882e4B066443897EE2BBF7934F3Eac6dE0476120",
    V_TOKEN: "0xF57a2892Aa22558F4fAC3d5c52712EC9a7FfEb88",
    INTEREST_RATE_STRATEGY: "0x1cC884593cf21216cAc9249bE1367df6dAa51513",
    ORACLE: "0xd8c5DaC0A776a1Aa10A3aFb3A0071223ab0ffF53"
  }
};
var E_MODES = {
  NONE: 0,
  STABLECOINS: 1
};

// src/ts/AaveV3Fantom.ts
var AaveV3Fantom_exports = {};
__export(AaveV3Fantom_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER2,
  ACL_ADMIN: () => ACL_ADMIN2,
  ACL_MANAGER: () => ACL_MANAGER2,
  ASSETS: () => ASSETS2,
  CHAIN_ID: () => CHAIN_ID2,
  COLLECTOR: () => COLLECTOR2,
  DEFAULT_A_TOKEN_IMPL_REV_1: () => DEFAULT_A_TOKEN_IMPL_REV_12,
  DEFAULT_INCENTIVES_CONTROLLER: () => DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_2: () => DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_2,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_12,
  EMISSION_MANAGER: () => EMISSION_MANAGER,
  E_MODES: () => E_MODES2,
  ORACLE: () => ORACLE2,
  POOL: () => POOL2,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER2,
  POOL_ADDRESSES_PROVIDER_REGISTRY: () => POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR2,
  POOL_CONFIGURATOR_IMPL: () => POOL_CONFIGURATOR_IMPL2,
  POOL_IMPL: () => POOL_IMPL2,
  REPAY_WITH_COLLATERAL_ADAPTER: () => REPAY_WITH_COLLATERAL_ADAPTER,
  SWAP_COLLATERAL_ADAPTER: () => SWAP_COLLATERAL_ADAPTER,
  UI_INCENTIVE_DATA_PROVIDER: () => UI_INCENTIVE_DATA_PROVIDER2,
  UI_POOL_DATA_PROVIDER: () => UI_POOL_DATA_PROVIDER2,
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER2,
  WETH_GATEWAY: () => WETH_GATEWAY2
});
var POOL_ADDRESSES_PROVIDER2 = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
var POOL2 = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
var POOL_IMPL2 = "0xDF9e4ABdbd94107932265319479643D3B05809dc";
var POOL_CONFIGURATOR2 = "0x8145eddDf43f50276641b55bd3AD95944510021E";
var POOL_CONFIGURATOR_IMPL2 = "0xD6FA681E22306b0F4E605B979b7c9a1dFa865ade";
var ORACLE2 = "0xfd6f3c1845604C8AE6c6E402ad17fb9885160754";
var AAVE_PROTOCOL_DATA_PROVIDER2 = "0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654";
var ACL_MANAGER2 = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
var ACL_ADMIN2 = "0x39CB97b105173b56b5a2b4b33AD25d6a50E6c949";
var COLLECTOR2 = "0xBe85413851D195fC6341619cD68BfDc26a25b928";
var DEFAULT_INCENTIVES_CONTROLLER = "0x929EC64c34a17401F460460D4B9390518E5B473e";
var DEFAULT_A_TOKEN_IMPL_REV_12 = "0xa5ba6E5EC19a1Bf23C857991c857dB62b2Aa187B";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_12 = "0x81387c40EB75acB02757C1Ae55D5936E78c9dEd3";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_2 = "0xa88c6D90eAe942291325f9ae3c66f3563B93FE10";
var EMISSION_MANAGER = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
var REPAY_WITH_COLLATERAL_ADAPTER = "0x1408401B2A7E28cB747b3e258D0831Fc926bAC51";
var SWAP_COLLATERAL_ADAPTER = "0xE387c6053CE8EC9f8C3fa5cE085Af73114a695d3";
var UI_INCENTIVE_DATA_PROVIDER2 = "0x67Da261c14fd94cE7fDd77a0A8476E5b244089A9";
var UI_POOL_DATA_PROVIDER2 = "0xddf65434502E459C22263BE2ed7cF0f1FaFD44c0";
var WALLET_BALANCE_PROVIDER2 = "0xBc790382B3686abffE4be14A030A96aC6154023a";
var WETH_GATEWAY2 = "0x1DcDA4de2Bf6c7AD9a34788D22aE6b7d55016e1f";
var CHAIN_ID2 = 250;
var ASSETS2 = {
  DAI: {
    decimals: 18,
    UNDERLYING: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
    A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
    S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B",
    V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC",
    INTEREST_RATE_STRATEGY: "0xA9F3C3caE095527061e6d270DBE163693e6fda9D",
    ORACLE: "0x91d5DEFAFfE2854C7D02F50c80FA1fdc8A721e52"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
    A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
    S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4",
    V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0x221C773d8647BC3034e91a0c47062e26D20d97B4"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
    S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007",
    V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989",
    INTEREST_RATE_STRATEGY: "0xf4a0039F2d4a2EaD5216AbB6Ae4C4C3AA2dB9b82",
    ORACLE: "0x2553f4eeb82d5A26427b8d1106C51499CBa5D99c"
  },
  BTC: {
    decimals: 8,
    UNDERLYING: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249",
    S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e",
    V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0x8e94C22142F4A64b99022ccDd994f4e9EC86E4B4"
  },
  ETH: {
    decimals: 18,
    UNDERLYING: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
    S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6",
    V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0x11DdD3d147E5b83D01cee7070027092397d63658"
  },
  fUSDT: {
    decimals: 6,
    UNDERLYING: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
    A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
    S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802",
    V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7",
    INTEREST_RATE_STRATEGY: "0xf4a0039F2d4a2EaD5216AbB6Ae4C4C3AA2dB9b82",
    ORACLE: "0xF64b636c5dFe1d3555A847341cDC449f612307d0"
  },
  AAVE: {
    decimals: 18,
    UNDERLYING: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
    A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
    S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48",
    V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0xE6ecF7d2361B6459cBb3b4fb065E0eF4B175Fe74"
  },
  WFTM: {
    decimals: 18,
    UNDERLYING: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
    S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E",
    V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0xf4766552D15AE4d256Ad41B6cf2933482B0680dc"
  },
  CRV: {
    decimals: 18,
    UNDERLYING: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
    A_TOKEN: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
    S_TOKEN: "0x08Cb71192985E936C7Cd166A8b268035e400c3c3",
    V_TOKEN: "0x77CA01483f379E58174739308945f044e1a764dc",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0xa141D7E3B44594cc65142AE5F2C7844Abea66D2B"
  },
  SUSHI: {
    decimals: 18,
    UNDERLYING: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
    A_TOKEN: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
    S_TOKEN: "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841",
    V_TOKEN: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907",
    INTEREST_RATE_STRATEGY: "0x4aa694e6c06D6162d95BE98a2Df6a521d5A7b521",
    ORACLE: "0xCcc059a1a17577676c8673952Dc02070D29e5a66"
  }
};
var E_MODES2 = {
  NONE: 0,
  STABLECOINS: 1
};

// src/ts/MiscFantom.ts
var MiscFantom_exports = {};
__export(MiscFantom_exports, {
  CHAIN_ID: () => CHAIN_ID3,
  PARASWAP_FEE_CLAIMER: () => PARASWAP_FEE_CLAIMER
});
var PARASWAP_FEE_CLAIMER = "0x9abf798f5314BFd793A9E57A654BEd35af4A1D60";
var CHAIN_ID3 = 250;

// src/ts/AaveGovernanceV2.ts
var AaveGovernanceV2_exports = {};
__export(AaveGovernanceV2_exports, {
  ARBITRUM_BRIDGE_EXECUTOR: () => ARBITRUM_BRIDGE_EXECUTOR,
  ARC_TIMELOCK: () => ARC_TIMELOCK,
  BASE_BRIDGE_EXECUTOR: () => BASE_BRIDGE_EXECUTOR,
  CHAIN_ID: () => CHAIN_ID4,
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
var CHAIN_ID4 = 1;

// src/ts/AaveSafetyModule.ts
var AaveSafetyModule_exports = {};
__export(AaveSafetyModule_exports, {
  CHAIN_ID: () => CHAIN_ID5,
  STK_AAVE: () => STK_AAVE,
  STK_AAVE_WSTETH_BPTV2: () => STK_AAVE_WSTETH_BPTV2,
  STK_AAVE_WSTETH_BPTV2_ORACLE: () => STK_AAVE_WSTETH_BPTV2_ORACLE,
  STK_ABPT: () => STK_ABPT,
  STK_ABPT_ORACLE: () => STK_ABPT_ORACLE,
  STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR: () => STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR,
  STK_GHO: () => STK_GHO
});
var STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
var STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
var STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
var STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR = "0xecD4bd3121F9FD604ffaC631bF6d41ec12f1fafb";
var STK_GHO = "0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d";
var STK_AAVE_WSTETH_BPTV2 = "0x9eDA81C21C273a82BE9Bbc19B6A6182212068101";
var STK_AAVE_WSTETH_BPTV2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";
var CHAIN_ID5 = 1;

// src/ts/abis/ICollector.ts
var ICollector_ABI = [
  {
    type: "function",
    name: "ETH_MOCK_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "who",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cancelStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createStream",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "deposit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "startTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "stopTime",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "streamId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getFundsAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getNextStreamId",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "deposit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "startTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "stopTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "remainingBalance",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "ratePerSecond",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "fundsAdmin",
        type: "address",
        internalType: "address"
      },
      {
        name: "nextStreamId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setFundsAdmin",
    inputs: [
      {
        name: "admin",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdrawFromStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancelStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "senderBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "recipientBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CreateStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "deposit",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "tokenAddress",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "stopTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewFundsAdmin",
    inputs: [
      {
        name: "fundsAdmin",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "WithdrawFromStream",
    inputs: [
      {
        name: "streamId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/AggregatorInterface.ts
var AggregatorInterface_ABI = [
  {
    type: "function",
    name: "getAnswer",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "int256",
        internalType: "int256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTimestamp",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "latestAnswer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "int256",
        internalType: "int256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "latestRound",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "latestTimestamp",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "AnswerUpdated",
    inputs: [
      {
        name: "current",
        type: "int256",
        indexed: true,
        internalType: "int256"
      },
      {
        name: "roundId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "updatedAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewRound",
    inputs: [
      {
        name: "roundId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "startedBy",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "startedAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IPayloadsControllerCore.ts
var IPayloadsControllerCore_ABI = [
  {
    type: "function",
    name: "EXPIRATION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GRACE_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_EXECUTION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_EXECUTION_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cancelPayload",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createPayload",
    inputs: [
      {
        name: "actions",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address"
          },
          {
            name: "withDelegateCall",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "signature",
            type: "string",
            internalType: "string"
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "executePayload",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "getExecutorSettingsByAccessControl",
    inputs: [
      {
        name: "accessControl",
        type: "uint8",
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayloadsControllerCore.ExecutorConfig",
        components: [
          {
            name: "executor",
            type: "address",
            internalType: "address"
          },
          {
            name: "delay",
            type: "uint40",
            internalType: "uint40"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadById",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayloadsControllerCore.Payload",
        components: [
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "maximumAccessLevelRequired",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "state",
            type: "uint8",
            internalType: "enum IPayloadsControllerCore.PayloadState"
          },
          {
            name: "createdAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "queuedAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "executedAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "cancelledAt",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "expirationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "delay",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "gracePeriod",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "actions",
            type: "tuple[]",
            internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
            components: [
              {
                name: "target",
                type: "address",
                internalType: "address"
              },
              {
                name: "withDelegateCall",
                type: "bool",
                internalType: "bool"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "value",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "signature",
                type: "string",
                internalType: "string"
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes"
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadState",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IPayloadsControllerCore.PayloadState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPayloadsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "updateExecutors",
    inputs: [
      {
        name: "executors",
        type: "tuple[]",
        internalType: "struct IPayloadsControllerCore.UpdateExecutorInput[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "executorConfig",
            type: "tuple",
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            components: [
              {
                name: "executor",
                type: "address",
                internalType: "address"
              },
              {
                name: "delay",
                type: "uint40",
                internalType: "uint40"
              }
            ]
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ExecutorSet",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "executor",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delay",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadCancelled",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadCreated",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: true,
        internalType: "uint40"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "actions",
        type: "tuple[]",
        indexed: false,
        internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
        components: [
          {
            name: "target",
            type: "address",
            internalType: "address"
          },
          {
            name: "withDelegateCall",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "signature",
            type: "string",
            internalType: "string"
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "maximumAccessLevelRequired",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadExecuted",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadExecutionMessageReceived",
    inputs: [
      {
        name: "originSender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "delivered",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "message",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "reason",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadQueued",
    inputs: [
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IVotingMachineWithProofs.ts
var IVotingMachineWithProofs_ABI = [
  {
    type: "function",
    name: "DATA_WAREHOUSE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GOVERNANCE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REPRESENTATIVES_SLOT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTE_SUBMITTED_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_ASSET_WITH_SLOT_RAW",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_ASSET_WITH_SLOT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_STRATEGY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IVotingStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "closeAndSendVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getProposalById",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "sentToGovernance",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "startTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "endTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "votingClosedAndSentTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "forVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "againstVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "creationBlockNumber",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "votingClosedAndSentBlockNumber",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IVotingMachineWithProofs.ProposalState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalVoteConfiguration",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
        components: [
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "l1ProposalBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsVoteConfigurationIds",
    inputs: [
      {
        name: "skip",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "size",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUserProposalVote",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.Vote",
        components: [
          {
            name: "support",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "votingPower",
            type: "uint248",
            internalType: "uint248"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "startProposalVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteAsRepresentative",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteAsRepresentativeBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "signatureParams",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.SignatureParams",
        components: [
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ProposalResultsSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "againstVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteConfigurationBridged",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "voteCreated",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteStarted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "l1BlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "endTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteEmitted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IGovernanceCore.ts
var IGovernanceCore_ABI = [
  {
    type: "function",
    name: "ACHIEVABLE_VOTING_PARTICIPATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "CANCELLATION_FEE_COLLECTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COOLDOWN_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_VOTING_DURATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PRECISION_DIVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PROPOSAL_EXPIRATION_TIME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_TOKENS_CAP",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "activateVoting",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "addVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cancelProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createProposal",
    inputs: [
      {
        name: "payloads",
        type: "tuple[]",
        internalType: "struct PayloadsControllerUtils.Payload[]",
        components: [
          {
            name: "chain",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "payloadsController",
            type: "address",
            internalType: "address"
          },
          {
            name: "payloadId",
            type: "uint40",
            internalType: "uint40"
          }
        ]
      },
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "executeProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getCancellationFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowerStrategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.Proposal",
        components: [
          {
            name: "state",
            type: "uint8",
            internalType: "enum IGovernanceCore.State"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "creationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingActivationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "queuingTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "cancelTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "votingPortal",
            type: "address",
            internalType: "address"
          },
          {
            name: "snapshotBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "ipfsHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "forVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "againstVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "cancellationFee",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "payloads",
            type: "tuple[]",
            internalType: "struct PayloadsControllerUtils.Payload[]",
            components: [
              {
                name: "chain",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "payloadsController",
                type: "address",
                internalType: "address"
              },
              {
                name: "payloadId",
                type: "uint40",
                internalType: "uint40"
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IGovernanceCore.State"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentativeByChain",
    inputs: [
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentedVotersByChain",
    inputs: [
      {
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingConfig",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.VotingConfig",
        components: [
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "yesNoDifferential",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "minPropositionPower",
            type: "uint56",
            internalType: "uint56"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingPortalsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isVotingPortalApproved",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "queueProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "againstVotes",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "redeemCancellationFee",
    inputs: [
      {
        name: "proposalIds",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "removeVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rescueVotingPortal",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPowerStrategy",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setVotingConfigs",
    inputs: [
      {
        name: "votingConfigs",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.SetVotingConfigInput[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "yesNoDifferential",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "minPropositionPower",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateCancellationFee",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateRepresentativesForChain",
    inputs: [
      {
        name: "representatives",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.RepresentativeInput[]",
        components: [
          {
            name: "representative",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancellationFeeRedeemed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "success",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CancellationFeeUpdated",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      },
      {
        name: "payloadsController",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadNumberOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "numberOfPayloadsOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PowerStrategyUpdated",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCanceled",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalExecuted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalFailed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalQueued",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RepresentativeUpdated",
    inputs: [
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "representative",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteForwarded",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingAssetsWithSlot",
        type: "tuple[]",
        indexed: false,
        internalType: "struct IVotingMachineWithProofs.VotingAssetWithSlot[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          }
        ]
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingActivated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "snapshotBlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingConfigUpdated",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "coolDownBeforeVotingStart",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "yesThreshold",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "yesNoDifferential",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "minPropositionPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingPortalUpdated",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "approved",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IVotingStrategy.ts
var IVotingStrategy_ABI = [
  {
    type: "function",
    name: "DATA_WAREHOUSE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POWER_SCALE_FACTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "STK_AAVE_SLASHING_EXCHANGE_RATE_PRECISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "STK_AAVE_SLASHING_EXCHANGE_RATE_SLOT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingPower",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "storageSlot",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "power",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "hasRequiredRoots",
    inputs: [
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "view"
  }
];

// src/ts/abis/IVotingPortal.ts
var IVotingPortal_ABI = [
  {
    type: "function",
    name: "CROSS_CHAIN_CONTROLLER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GOVERNANCE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_MACHINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_MACHINE_CHAIN_ID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decodeMessage",
    inputs: [
      {
        name: "message",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "forwardStartVotingMessage",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        internalType: "uint24"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getStartVotingGasLimit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "receiveCrossChainMessage",
    inputs: [
      {
        name: "originSender",
        type: "address",
        internalType: "address"
      },
      {
        name: "originChainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setStartVotingGasLimit",
    inputs: [
      {
        name: "gasLimit",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "StartVotingGasLimitUpdated",
    inputs: [
      {
        name: "gasLimit",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteMessageReceived",
    inputs: [
      {
        name: "originSender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "delivered",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "message",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "reason",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IGovernancePowerStrategy.ts
var IGovernancePowerStrategy_ABI = [
  {
    type: "function",
    name: "getFullPropositionPower",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getFullVotingPower",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  }
];

// src/ts/abis/IDataWarehouse.ts
var IDataWarehouse_ABI = [
  {
    type: "function",
    name: "getRegisteredSlot",
    inputs: [
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStorage",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "storageProof",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IDataWarehouse.SlotValue",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStorageRoots",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "processStorageRoot",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "blockHeaderRLP",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "accountStateProofRLP",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "processStorageSlot",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "storageProof",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "StorageRootProcessed",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "StorageSlotProcessed",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "slot",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IExecutorWithTimelock.ts
var IExecutorWithTimelock_ABI = [
  {
    type: "function",
    name: "GRACE_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAXIMUM_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MINIMUM_DELAY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_DURATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "cancelTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "executeTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "getAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelay",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPendingAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isActionQueued",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isProposalOverGracePeriod",
    inputs: [
      {
        name: "governance",
        type: "address",
        internalType: "address"
      },
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "queueTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancelledAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ExecutedAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      },
      {
        name: "resultData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewAdmin",
    inputs: [
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewDelay",
    inputs: [
      {
        name: "delay",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewPendingAdmin",
    inputs: [
      {
        name: "newPendingAdmin",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "QueuedAction",
    inputs: [
      {
        name: "actionHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IERC20.ts
var IERC20_ABI = [
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IERC20Detailed.ts
var IERC20Detailed_ABI = [
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IAToken.ts
var IAToken_ABI = [
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "RESERVE_TREASURY_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "UNDERLYING_ASSET_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "receiverOfUnderlying",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getPreviousIndex",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getScaledUserBalanceAndSupply",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "handleRepayment",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "contract IPool"
      },
      {
        name: "treasury",
        type: "address",
        internalType: "address"
      },
      {
        name: "underlyingAsset",
        type: "address",
        internalType: "address"
      },
      {
        name: "incentivesController",
        type: "address",
        internalType: "contract IAaveIncentivesController"
      },
      {
        name: "aTokenDecimals",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "aTokenName",
        type: "string",
        internalType: "string"
      },
      {
        name: "aTokenSymbol",
        type: "string",
        internalType: "string"
      },
      {
        name: "params",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "mintToTreasury",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rescueTokens",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "scaledBalanceOf",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "scaledTotalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOnLiquidation",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferUnderlyingTo",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "BalanceTransfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "balanceIncrease",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "underlyingAsset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "treasury",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "incentivesController",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "aTokenDecimals",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      },
      {
        name: "aTokenName",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "aTokenSymbol",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "params",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "balanceIncrease",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IDefaultInterestRateStrategy.ts
var IDefaultInterestRateStrategy_ABI = [
  {
    type: "function",
    name: "ADDRESSES_PROVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolAddressesProvider"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_EXCESS_USAGE_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "OPTIMAL_USAGE_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "calculateInterestRates",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct DataTypes.CalculateInterestRatesParams",
        components: [
          {
            name: "unbacked",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityAdded",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityTaken",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "totalStableDebt",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "totalVariableDebt",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "averageStableBorrowRate",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserveFactor",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserve",
            type: "address",
            internalType: "address"
          },
          {
            name: "aToken",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getBaseStableBorrowRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getBaseVariableBorrowRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getMaxVariableBorrowRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStableRateExcessOffset",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStableRateSlope1",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getStableRateSlope2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVariableRateSlope1",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVariableRateSlope2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  }
];

// src/ts/abis/IAaveOracle.ts
var IAaveOracle_ABI = [
  {
    type: "function",
    name: "ADDRESSES_PROVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolAddressesProvider"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "BASE_CURRENCY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "BASE_CURRENCY_UNIT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAssetPrice",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAssetsPrices",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getFallbackOracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSourceOfAsset",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setAssetSources",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "sources",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setFallbackOracle",
    inputs: [
      {
        name: "fallbackOracle",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "AssetSourceUpdated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "source",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "BaseCurrencySet",
    inputs: [
      {
        name: "baseCurrency",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "baseCurrencyUnit",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "FallbackOracleUpdated",
    inputs: [
      {
        name: "fallbackOracle",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IExecutor.ts
var IExecutor_ABI = [
  {
    type: "function",
    name: "executeTransaction",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "event",
    name: "ExecutedAction",
    inputs: [
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "signature",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "executionTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "withDelegatecall",
        type: "bool",
        indexed: false,
        internalType: "bool"
      },
      {
        name: "resultData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/ICrossChainController.ts
var ICrossChainController_ABI = [
  {
    type: "function",
    name: "allowReceiverBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdaptersInput",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ReceiverBridgeAdapterConfigInput[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "approveSenders",
    inputs: [
      {
        name: "senders",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deliverEnvelope",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disableBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdapters",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.BridgeAdapterToDisable[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "disallowReceiverBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdaptersInput",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ReceiverBridgeAdapterConfigInput[]",
        components: [
          {
            name: "bridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainIds",
            type: "uint256[]",
            internalType: "uint256[]"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "emergencyEtherTransfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "emergencyTokenTransfer",
    inputs: [
      {
        name: "erc20Token",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "enableBridgeAdapters",
    inputs: [
      {
        name: "bridgeAdapters",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.ForwarderBridgeAdapterConfigInput[]",
        components: [
          {
            name: "currentChainBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "destinationBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "forwardMessage",
    inputs: [
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "destination",
        type: "address",
        internalType: "address"
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getConfigurationByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.ReceiverConfiguration",
        components: [
          {
            name: "requiredConfirmation",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "validityTimestamp",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCurrentEnvelopeNonce",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCurrentTransactionNonce",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getEnvelopeState",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum ICrossChainReceiver.EnvelopeState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getEnvelopeState",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum ICrossChainReceiver.EnvelopeState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getForwarderBridgeAdaptersByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct ICrossChainForwarder.ChainIdBridgeConfig[]",
        components: [
          {
            name: "destinationBridgeAdapter",
            type: "address",
            internalType: "address"
          },
          {
            name: "currentChainBridgeAdapter",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReceiverBridgeAdaptersByChain",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSupportedChains",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTransactionState",
    inputs: [
      {
        name: "transaction",
        type: "tuple",
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.TransactionStateWithoutAdapters",
        components: [
          {
            name: "confirmations",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "firstBridgedAt",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTransactionState",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ICrossChainReceiver.TransactionStateWithoutAdapters",
        components: [
          {
            name: "confirmations",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "firstBridgedAt",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isEnvelopeRegistered",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isEnvelopeRegistered",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isReceiverBridgeAdapterAllowed",
    inputs: [
      {
        name: "bridgeAdapter",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isSenderApproved",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isTransactionForwarded",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isTransactionForwarded",
    inputs: [
      {
        name: "transaction",
        type: "tuple",
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isTransactionReceivedByAdapter",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "bridgeAdapter",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "receiveCrossChainMessage",
    inputs: [
      {
        name: "encodedTransaction",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "originChainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "removeSenders",
    inputs: [
      {
        name: "senders",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "retryEnvelope",
    inputs: [
      {
        name: "envelope",
        type: "tuple",
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "retryTransaction",
    inputs: [
      {
        name: "encodedTransaction",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "gasLimit",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "bridgeAdaptersToRetry",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateConfirmations",
    inputs: [
      {
        name: "newConfirmations",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ConfirmationInput[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "requiredConfirmations",
            type: "uint8",
            internalType: "uint8"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateMessagesValidityTimestamp",
    inputs: [
      {
        name: "newValidityTimestamp",
        type: "tuple[]",
        internalType: "struct ICrossChainReceiver.ValidityTimestampInput[]",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "validityTimestamp",
            type: "uint120",
            internalType: "uint120"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "whoCanRescue",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "BridgeAdapterUpdated",
    inputs: [
      {
        name: "destinationChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "destinationBridgeAdapter",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ConfirmationsUpdated",
    inputs: [
      {
        name: "newConfirmations",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ERC20Rescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EnvelopeDeliveryAttempted",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelope",
        type: "tuple",
        indexed: false,
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "isDelivered",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EnvelopeRegistered",
    inputs: [
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "envelope",
        type: "tuple",
        indexed: false,
        internalType: "struct Envelope",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "origin",
            type: "address",
            internalType: "address"
          },
          {
            name: "destination",
            type: "address",
            internalType: "address"
          },
          {
            name: "originChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NativeTokensRescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NewInvalidation",
    inputs: [
      {
        name: "invalidTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReceiverBridgeAdaptersUpdated",
    inputs: [
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SenderUpdated",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "isApproved",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TransactionForwardingAttempted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "encodedTransaction",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      },
      {
        name: "destinationChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "destinationBridgeAdapter",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "adapterSuccessful",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "returnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "TransactionReceived",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "envelopeId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "transaction",
        type: "tuple",
        indexed: false,
        internalType: "struct Transaction",
        components: [
          {
            name: "nonce",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "encodedEnvelope",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "bridgeAdapter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "confirmations",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IWithGuardian.ts
var IWithGuardian_ABI = [
  {
    type: "function",
    name: "guardian",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "updateGuardian",
    inputs: [
      {
        name: "newGuardian",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "GuardianUpdated",
    inputs: [
      {
        name: "oldGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "newGuardian",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IRescuable.ts
var IRescuable_ABI = [
  {
    type: "function",
    name: "emergencyEtherTransfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "emergencyTokenTransfer",
    inputs: [
      {
        name: "erc20Token",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "whoCanRescue",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "ERC20Rescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "NativeTokensRescued",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IOwnable.ts
var IOwnable_ABI = [
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];

// src/ts/abis/IPayloadsControllerDataHelper.ts
var IPayloadsControllerDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getExecutorConfigs",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "enum PayloadsControllerUtils.AccessControl",
            name: "accessLevel",
            type: "uint8",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            name: "config",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "executor",
                type: "address",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "uint40[]",
        name: "payloadsIds",
        type: "uint40[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPayloadsData",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.Payload[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.Payload",
            name: "data",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "maximumAccessLevelRequired",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum IPayloadsControllerCore.PayloadState",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "createdAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "executedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelledAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "expirationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "gracePeriod",
                type: "uint40",
                components: []
              },
              {
                internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
                name: "actions",
                type: "tuple[]",
                components: [
                  {
                    internalType: "address",
                    name: "target",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "bool",
                    name: "withDelegateCall",
                    type: "bool",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "string",
                    name: "signature",
                    type: "string",
                    components: []
                  },
                  {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// src/ts/abis/IGovernanceDataHelper.ts
var IGovernanceDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getConstants",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Constants",
        name: "",
        type: "tuple",
        components: [
          {
            internalType: "struct IGovernanceDataHelper.VotingConfig[]",
            name: "votingConfigs",
            type: "tuple[]",
            components: [
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "struct IGovernanceCore.VotingConfig",
                name: "config",
                type: "tuple",
                components: [
                  {
                    internalType: "uint24",
                    name: "coolDownBeforeVotingStart",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint24",
                    name: "votingDuration",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesThreshold",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesNoDifferential",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "minPropositionPower",
                    type: "uint56",
                    components: []
                  }
                ]
              }
            ]
          },
          {
            internalType: "uint256",
            name: "precisionDivider",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cooldownPeriod",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cancellationFee",
            type: "uint256",
            components: []
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "votingChainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IGovernanceCore.Proposal",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "enum IGovernanceCore.State",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "creationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingActivationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuingTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "address",
                name: "votingPortal",
                type: "address",
                components: []
              },
              {
                internalType: "bytes32",
                name: "snapshotBlockHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "bytes32",
                name: "ipfsHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "cancellationFee",
                type: "uint256",
                components: []
              },
              {
                internalType: "struct PayloadsControllerUtils.Payload[]",
                name: "payloads",
                type: "tuple[]",
                components: [
                  {
                    internalType: "uint256",
                    name: "chain",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "address",
                    name: "payloadsController",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "uint40",
                    name: "payloadId",
                    type: "uint40",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
        components: []
      },
      {
        internalType: "uint256[]",
        name: "chainIds",
        type: "uint256[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getRepresentationData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Representatives[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "representative",
            type: "address",
            components: []
          }
        ]
      },
      {
        internalType: "struct IGovernanceDataHelper.Represented[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address[]",
            name: "votersRepresented",
            type: "address[]",
            components: []
          }
        ]
      }
    ]
  }
];

// src/ts/abis/IMetaDelegateHelper.ts
var IMetaDelegateHelper_ABI = [
  {
    inputs: [
      {
        internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]",
        name: "delegateParams",
        type: "tuple[]",
        components: [
          {
            internalType: "contract IGovernancePowerDelegationToken",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "enum IMetaDelegateHelper.DelegationType",
            name: "delegationType",
            type: "uint8",
            components: []
          },
          {
            internalType: "address",
            name: "delegator",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "batchMetaDelegate",
    outputs: []
  }
];

// src/ts/abis/IVotingMachineDataHelper.ts
var IVotingMachineDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IVotingMachineWithProofs",
        name: "votingMachine",
        type: "address",
        components: []
      },
      {
        internalType: "struct IVotingMachineDataHelper.InitialProposal[]",
        name: "initialProposals",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "bytes32",
            name: "snapshotBlockHash",
            type: "bytes32",
            components: []
          }
        ]
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IVotingMachineDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
                components: []
              },
              {
                internalType: "bool",
                name: "sentToGovernance",
                type: "bool",
                components: []
              },
              {
                internalType: "uint40",
                name: "startTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "endTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingClosedAndSentTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "creationBlockNumber",
                type: "uint256",
                components: []
              },
              {
                internalType: "uint256",
                name: "votingClosedAndSentBlockNumber",
                type: "uint256",
                components: []
              }
            ]
          },
          {
            internalType: "struct IVotingMachineDataHelper.VotedInfo",
            name: "votedInfo",
            type: "tuple",
            components: [
              {
                internalType: "bool",
                name: "support",
                type: "bool",
                components: []
              },
              {
                internalType: "uint248",
                name: "votingPower",
                type: "uint248",
                components: []
              }
            ]
          },
          {
            internalType: "contract IVotingStrategy",
            name: "strategy",
            type: "address",
            components: []
          },
          {
            internalType: "contract IDataWarehouse",
            name: "dataWarehouse",
            type: "address",
            components: []
          },
          {
            internalType: "address[]",
            name: "votingAssets",
            type: "address[]",
            components: []
          },
          {
            internalType: "bool",
            name: "hasRequiredRoots",
            type: "bool",
            components: []
          },
          {
            internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
            name: "voteConfig",
            type: "tuple",
            components: [
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "bytes32",
                name: "l1ProposalBlockHash",
                type: "bytes32",
                components: []
              }
            ]
          },
          {
            internalType: "enum IVotingMachineWithProofs.ProposalState",
            name: "state",
            type: "uint8",
            components: []
          }
        ]
      }
    ]
  }
];

// src/ts/abis/IUiPoolDataProvider.ts
var IUiPoolDataProvider_ABI = [
  {
    inputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_networkBaseTokenPriceInUsdProxyAggregator",
        type: "address",
        components: []
      },
      {
        internalType: "contract IEACAggregatorProxy",
        name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "ETH_CURRENCY_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "MKR_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "pure",
    type: "function",
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getReservesData",
    outputs: [
      {
        internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
            components: []
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
            components: []
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseLTVasCollateral",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationThreshold",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationBonus",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "reserveFactor",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "stableBorrowRateEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isFrozen",
            type: "bool",
            components: []
          },
          {
            internalType: "uint128",
            name: "liquidityIndex",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "variableBorrowIndex",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "liquidityRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "variableBorrowRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "stableBorrowRate",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint40",
            name: "lastUpdateTimestamp",
            type: "uint40",
            components: []
          },
          {
            internalType: "address",
            name: "aTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "stableDebtTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "variableDebtTokenAddress",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "interestRateStrategyAddress",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalPrincipalStableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "averageStableRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableDebtLastUpdateTimestamp",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalScaledVariableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "priceInMarketReferenceCurrency",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "priceOracle",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "variableRateSlope1",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "variableRateSlope2",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableRateSlope1",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableRateSlope2",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseStableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "baseVariableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "optimalUsageRatio",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
            components: []
          },
          {
            internalType: "bool",
            name: "isSiloedBorrowing",
            type: "bool",
            components: []
          },
          {
            internalType: "uint128",
            name: "accruedToTreasury",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "unbacked",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint128",
            name: "isolationModeTotalDebt",
            type: "uint128",
            components: []
          },
          {
            internalType: "bool",
            name: "flashLoanEnabled",
            type: "bool",
            components: []
          },
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "debtCeilingDecimals",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "eModeCategoryId",
            type: "uint8",
            components: []
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLtv",
            type: "uint16",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationThreshold",
            type: "uint16",
            components: []
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationBonus",
            type: "uint16",
            components: []
          },
          {
            internalType: "address",
            name: "eModePriceSource",
            type: "address",
            components: []
          },
          {
            internalType: "string",
            name: "eModeLabel",
            type: "string",
            components: []
          },
          {
            internalType: "bool",
            name: "borrowableInIsolation",
            type: "bool",
            components: []
          }
        ]
      },
      {
        internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
        name: "",
        type: "tuple",
        components: [
          {
            internalType: "uint256",
            name: "marketReferenceCurrencyUnit",
            type: "uint256",
            components: []
          },
          {
            internalType: "int256",
            name: "marketReferenceCurrencyPriceInUsd",
            type: "int256",
            components: []
          },
          {
            internalType: "int256",
            name: "networkBaseTokenPriceInUsd",
            type: "int256",
            components: []
          },
          {
            internalType: "uint8",
            name: "networkBaseTokenPriceDecimals",
            type: "uint8",
            components: []
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getReservesList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUserReservesData",
    outputs: [
      {
        internalType: "struct IUiPoolDataProviderV3.UserReserveData[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "scaledATokenBalance",
            type: "uint256",
            components: []
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabledOnUser",
            type: "bool",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableBorrowRate",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "scaledVariableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "principalStableDebt",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "stableBorrowLastUpdateTimestamp",
            type: "uint256",
            components: []
          }
        ]
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "networkBaseTokenPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IEACAggregatorProxy",
        name: "",
        type: "address",
        components: []
      }
    ]
  }
];

// src/ts/abis/IStakeToken.ts
var IStakeToken_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "contract IERC20",
        name: "stakedToken",
        type: "address",
        components: []
      },
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "unstakeWindow",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "rewardsVault",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "emissionManager",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "AddressEmptyCode",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "AddressInsufficientBalance",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "ECDSAInvalidSignature",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ECDSAInvalidSignatureLength",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    type: "error",
    name: "ECDSAInvalidSignatureS",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InsufficientAllowance",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InsufficientBalance",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidApprover",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidReceiver",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidSender",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC20InvalidSpender",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "ERC2612ExpiredSignature",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "ERC2612InvalidSigner",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "FailedInnerCall",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "InvalidAccountNonce",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidInitialization",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidShortString",
    outputs: []
  },
  {
    inputs: [],
    type: "error",
    name: "NotInitializing",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      }
    ],
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "SafeERC20FailedOperation",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
        components: []
      }
    ],
    type: "error",
    name: "StringTooLong",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Approval",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "emission",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "AssetConfigUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "AssetIndexUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Cooldown",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "CooldownSecondsChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "DistributionEndChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    type: "event",
    name: "EIP712DomainChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint216",
        name: "exchangeRate",
        type: "uint216",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "ExchangeRateChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "FundsReturned",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "version",
        type: "uint64",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPercentage",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "MaxSlashablePercentageChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "PendingAdminChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Redeem",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RewardsAccrued",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RewardsClaimed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RoleClaimed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Slashed",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "windowSeconds",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "SlashingExitWindowDurationChanged",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    type: "event",
    name: "SlashingSettled",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Staked",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Transfer",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "UserIndexUpdated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "CLAIM_HELPER_ROLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "COOLDOWN_ADMIN_ROLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "EMISSION_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "EXCHANGE_RATE_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "INITIAL_EXCHANGE_RATE",
    outputs: [
      {
        internalType: "uint216",
        name: "",
        type: "uint216",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "LOWER_BOUND",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "REWARDS_VAULT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "REWARD_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "SLASH_ADMIN_ROLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "STAKED_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "UNSTAKE_WINDOW",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "assets",
    outputs: [
      {
        internalType: "uint128",
        name: "emissionPerSecond",
        type: "uint128",
        components: []
      },
      {
        internalType: "uint128",
        name: "lastUpdateTimestamp",
        type: "uint128",
        components: []
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewards",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsAndRedeem",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsAndRedeemOnBehalf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsOnBehalf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRoleAdmin",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]",
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128",
            components: []
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "configureAssets",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "cooldown",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "cooldownOnBehalfOf",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "distributionEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
        components: []
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
        components: []
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
        components: []
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
        components: []
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getCooldownSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint216",
        name: "",
        type: "uint216",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getMaxSlashablePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getTotalRewardsBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUserAssetData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "inPostSlashingPeriod",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
        components: []
      },
      {
        internalType: "address",
        name: "slashingAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "cooldownPauseAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "claimHelper",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "maxSlashablePercentage",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
        components: []
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
        components: []
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "permit",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeem",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeemOnBehalf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "returnFunds",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cooldownSeconds",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setCooldownSeconds",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDistributionEnd",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setDistributionEnd",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setMaxSlashablePercentage",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setPendingAdmin",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "settleSlashing",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "slash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "stake",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
        components: []
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
        components: []
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "stakeWithPermit",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "stakerRewardsToClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "stakersCooldowns",
    outputs: [
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
        components: []
      },
      {
        internalType: "uint216",
        name: "amount",
        type: "uint216",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  }
];

// src/ts/abis/IAaveToken.ts
var IAaveToken_ABI = [
  {
    type: "function",
    name: "DELEGATE_BY_TYPE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DELEGATE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PERMIT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POWER_SCALE_FACTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REVISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "_nonces",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "subtractedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegate",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegateByType",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        name: "fields",
        type: "bytes1",
        internalType: "bytes1"
      },
      {
        name: "name",
        type: "string",
        internalType: "string"
      },
      {
        name: "version",
        type: "string",
        internalType: "string"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "verifyingContract",
        type: "address",
        internalType: "address"
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "extensions",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegateeByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegates",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowerCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowersCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "addedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegate",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegateByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DelegateChanged",
    inputs: [
      {
        name: "delegator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        indexed: false,
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: []
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        name: "str",
        type: "string",
        internalType: "string"
      }
    ]
  }
];

// src/ts/abis/IStkAaveToken.ts
var IStkAaveToken_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "stakedToken",
        type: "address",
        internalType: "contract IERC20"
      },
      {
        name: "rewardToken",
        type: "address",
        internalType: "contract IERC20"
      },
      {
        name: "unstakeWindow",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "rewardsVault",
        type: "address",
        internalType: "address"
      },
      {
        name: "emissionManager",
        type: "address",
        internalType: "address"
      },
      {
        name: "distributionDuration",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "CLAIM_HELPER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COOLDOWN_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COOLDOWN_SECONDS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DELEGATE_BY_TYPE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DELEGATE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DISTRIBUTION_END",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EIP712_REVISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EMISSION_MANAGER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EXCHANGE_RATE_UNIT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "INITIAL_EXCHANGE_RATE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint216",
        internalType: "uint216"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "LOWER_BOUND",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PERMIT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POWER_SCALE_FACTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PRECISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REVISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "REWARDS_VAULT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REWARD_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "SLASH_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "STAKED_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "UNSTAKE_WINDOW",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "_nonces",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "assets",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "emissionPerSecond",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "lastUpdateTimestamp",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "claimRewards",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsAndRedeem",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "claimAmount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "redeemAmount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsAndRedeemOnBehalf",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "claimAmount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "redeemAmount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsAndStake",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsAndStakeOnBehalf",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewardsOnBehalf",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRoleAdmin",
    inputs: [
      {
        name: "role",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "configureAssets",
    inputs: [
      {
        name: "assetsConfigInput",
        type: "tuple[]",
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        components: [
          {
            name: "emissionPerSecond",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "totalStaked",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cooldown",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cooldownOnBehalfOf",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "subtractedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegate",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegateByType",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        name: "fields",
        type: "bytes1",
        internalType: "bytes1"
      },
      {
        name: "name",
        type: "string",
        internalType: "string"
      },
      {
        name: "version",
        type: "string",
        internalType: "string"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "verifyingContract",
        type: "address",
        internalType: "address"
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "extensions",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAdmin",
    inputs: [
      {
        name: "role",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCooldownSeconds",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegateeByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegates",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getExchangeRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint216",
        internalType: "uint216"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getMaxSlashablePercentage",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPendingAdmin",
    inputs: [
      {
        name: "role",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowerCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowersCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTotalRewardsBalance",
    inputs: [
      {
        name: "staker",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUserAssetData",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ghoDebtToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGhoVariableDebtTokenTransferHook"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "inPostSlashingPeriod",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "addedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegate",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegateByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "previewRedeem",
    inputs: [
      {
        name: "shares",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "previewStake",
    inputs: [
      {
        name: "assets",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "redeem",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "redeemOnBehalf",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "returnFunds",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setCooldownSeconds",
    inputs: [
      {
        name: "cooldownSeconds",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setMaxSlashablePercentage",
    inputs: [
      {
        name: "percentage",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPendingAdmin",
    inputs: [
      {
        name: "role",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "newPendingAdmin",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "settleSlashing",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "slash",
    inputs: [
      {
        name: "destination",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "stake",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "stakeWithPermit",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "stakerRewardsToClaim",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "stakersCooldowns",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "timestamp",
        type: "uint40",
        internalType: "uint40"
      },
      {
        name: "amount",
        type: "uint216",
        internalType: "uint216"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AssetConfigUpdated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "emission",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AssetIndexUpdated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Cooldown",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CooldownSecondsChanged",
    inputs: [
      {
        name: "cooldownSeconds",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DelegateChanged",
    inputs: [
      {
        name: "delegator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        indexed: false,
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "ExchangeRateChanged",
    inputs: [
      {
        name: "exchangeRate",
        type: "uint216",
        indexed: false,
        internalType: "uint216"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "FundsReturned",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "MaxSlashablePercentageChanged",
    inputs: [
      {
        name: "newPercentage",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PendingAdminChanged",
    inputs: [
      {
        name: "newPendingAdmin",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "role",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Redeem",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RewardsAccrued",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RewardsClaimed",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RoleClaimed",
    inputs: [
      {
        name: "newAdmin",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "role",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Slashed",
    inputs: [
      {
        name: "destination",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SlashingExitWindowDurationChanged",
    inputs: [
      {
        name: "windowSeconds",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "SlashingSettled",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "Staked",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "UserIndexUpdated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "ECDSAInvalidSignature",
    inputs: []
  },
  {
    type: "error",
    name: "ECDSAInvalidSignatureLength",
    inputs: [
      {
        name: "length",
        type: "uint256",
        internalType: "uint256"
      }
    ]
  },
  {
    type: "error",
    name: "ECDSAInvalidSignatureS",
    inputs: [
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ]
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: []
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        name: "str",
        type: "string",
        internalType: "string"
      }
    ]
  }
];

// src/ts/abis/IATokenWithDelegation.ts
var IATokenWithDelegation_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "contract IPool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "ATOKEN_REVISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DELEGATE_BY_TYPE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DELEGATE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EIP712_REVISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "PERMIT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POOL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POWER_SCALE_FACTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "RESERVE_TREASURY_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "UNDERLYING_ASSET_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "receiverOfUnderlying",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "subtractedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegate",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "delegateByType",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        name: "fields",
        type: "bytes1",
        internalType: "bytes1"
      },
      {
        name: "name",
        type: "string",
        internalType: "string"
      },
      {
        name: "version",
        type: "string",
        internalType: "string"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "verifyingContract",
        type: "address",
        internalType: "address"
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "extensions",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegateeByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDelegates",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getIncentivesController",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IAaveIncentivesController"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowerCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowersCurrent",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPreviousIndex",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getScaledUserBalanceAndSupply",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "handleRepayment",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "addedValue",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPool"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "contract IAaveIncentivesController"
      },
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "",
        type: "string",
        internalType: "string"
      },
      {
        name: "",
        type: "string",
        internalType: "string"
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegate",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "metaDelegateByType",
    inputs: [
      {
        name: "delegator",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "mintToTreasury",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rescueTokens",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "scaledBalanceOf",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "scaledTotalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setIncentivesController",
    inputs: [
      {
        name: "controller",
        type: "address",
        internalType: "contract IAaveIncentivesController"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address"
      },
      {
        name: "recipient",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferOnLiquidation",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferUnderlyingTo",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "BalanceTransfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "balanceIncrease",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "DelegateChanged",
    inputs: [
      {
        name: "delegator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegatee",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "delegationType",
        type: "uint8",
        indexed: false,
        internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "underlyingAsset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "treasury",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "incentivesController",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "aTokenDecimals",
        type: "uint8",
        indexed: false,
        internalType: "uint8"
      },
      {
        name: "aTokenName",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "aTokenSymbol",
        type: "string",
        indexed: false,
        internalType: "string"
      },
      {
        name: "params",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "balanceIncrease",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "index",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "ECDSAInvalidSignature",
    inputs: []
  },
  {
    type: "error",
    name: "ECDSAInvalidSignatureLength",
    inputs: [
      {
        name: "length",
        type: "uint256",
        internalType: "uint256"
      }
    ]
  },
  {
    type: "error",
    name: "ECDSAInvalidSignatureS",
    inputs: [
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ]
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: []
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        name: "str",
        type: "string",
        internalType: "string"
      }
    ]
  }
];

// src/ts/abis/IStaticATokenFactory.ts
var IStaticATokenFactory_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "proxyAdmin",
        type: "address",
        components: []
      },
      {
        internalType: "contract ITransparentProxyFactory",
        name: "transparentProxyFactory",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "staticATokenImpl",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version",
        type: "uint8",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staticAToken",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "underlying",
        type: "address",
        components: [],
        indexed: true
      }
    ],
    type: "event",
    name: "StaticTokenCreated",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "ADMIN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "STATIC_A_TOKEN_IMPL",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "TRANSPARENT_PROXY_FACTORY",
    outputs: [
      {
        internalType: "contract ITransparentProxyFactory",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "underlyings",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "createStaticATokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getStaticAToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getStaticATokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
  }
];

// src/ts/abis/IStaticATokenLM.ts
var IStaticATokenLM_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPool",
        name: "pool",
        type: "address",
        components: []
      },
      {
        internalType: "contract IRewardsController",
        name: "rewardsController",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
        components: []
      }
    ],
    type: "error",
    name: "SafeERC20FailedOperation",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Approval",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Deposit",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version",
        type: "uint8",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "aToken",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "string",
        name: "staticATokenName",
        type: "string",
        components: [],
        indexed: false
      },
      {
        internalType: "string",
        name: "staticATokenSymbol",
        type: "string",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Initialized",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "RewardTokenRegistered",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Transfer",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: [],
        indexed: true
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: [],
        indexed: false
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: [],
        indexed: false
      }
    ],
    type: "event",
    name: "Withdraw",
    outputs: [],
    anonymous: false
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "INCENTIVES_CONTROLLER",
    outputs: [
      {
        internalType: "contract IRewardsController",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "METADEPOSIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "METAWITHDRAWAL_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "STATIC__ATOKEN_LM_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "aToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewards",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsOnBehalf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewards",
        type: "address[]",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "claimRewardsToSelf",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "collectAndUpdateRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
        components: []
      },
      {
        internalType: "bool",
        name: "depositToAave",
        type: "bool",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getClaimableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getCurrentRewardsIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getTotalClaimableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAToken",
        type: "address",
        components: []
      },
      {
        internalType: "string",
        name: "staticATokenName",
        type: "string",
        components: []
      },
      {
        internalType: "string",
        name: "staticATokenSymbol",
        type: "string",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "initialize",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reward",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "isRegisteredRewardToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
        components: []
      },
      {
        internalType: "bool",
        name: "depositToAave",
        type: "bool",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "struct IStaticATokenLM.PermitParams",
        name: "permit",
        type: "tuple",
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
            components: []
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
            components: []
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      },
      {
        internalType: "struct IStaticATokenLM.SignatureParams",
        name: "sigParams",
        type: "tuple",
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "metaDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "bool",
        name: "withdrawFromAave",
        type: "bool",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "struct IStaticATokenLM.SignatureParams",
        name: "sigParams",
        type: "tuple",
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
            components: []
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
            components: []
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
            components: []
          }
        ]
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "metaWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
        components: []
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
        components: []
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "permit",
    outputs: []
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      },
      {
        internalType: "bool",
        name: "withdrawFromAave",
        type: "bool",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "refreshRewardTokens",
    outputs: []
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "rewardTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
        components: []
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
        components: []
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        components: []
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
        components: []
      }
    ]
  }
];

// tokenlist.json
var tokenlist_default = {
  name: "Aave token list",
  logoURI: "ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1",
  keywords: ["audited", "verified", "aave"],
  tags: {
    underlying: {
      name: "underlyingAsset",
      description: "Tokens that are used as underlying assets in the Aave protocol"
    },
    aaveV2: { name: "Aave V2", description: "Tokens related to aave v2" },
    aaveV3: { name: "Aave V3", description: "Tokens related to aave v3" },
    aTokenV2: {
      name: "aToken V2",
      description: "Tokens that earn interest on the Aave Protocol V2"
    },
    aTokenV3: {
      name: "aToken V3",
      description: "Tokens that earn interest on the Aave Protocol V3"
    },
    stataToken: {
      name: "static a token",
      description: "Tokens that are wrapped into a 4626 Vault"
    }
  },
  timestamp: "2024-05-13T03:22:39.614Z",
  version: { major: 3, minor: 0, patch: 14 },
  tokens: [
    {
      chainId: 4002,
      address: "0xdF0687BCcb6bb7D046d26a5Cf38D81758468ab10",
      name: "DAI",
      decimals: 18,
      symbol: "DAI",
      tags: ["underlying"],
      logoURI: "ipfs://QmP42hY9w4hkYyMtjwm86HmzMmUxx76pjyUNXT5VL6ndMa"
    },
    {
      chainId: 4002,
      address: "0x2D2771A626DAAd0F1D0b5A1C28db73950d624448",
      name: "Aave Feliz DAI",
      decimals: 18,
      symbol: "aFelizDAI",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmZFb7b8XfBoGUqPvpycN8RCxRNrcydbxZc7E7j8uq4yGW",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0xdF0687BCcb6bb7D046d26a5Cf38D81758468ab10"
      }
    },
    {
      chainId: 4002,
      address: "0x7567951F7A80505D0CAa843113834ed4dD0f7Fe5",
      name: "LINK",
      decimals: 18,
      symbol: "LINK",
      tags: ["underlying"],
      logoURI: "ipfs://QmRtU7R1eZcfFTgBLX57zPufc3HFhW2BG5WyikqUfNdJqV"
    },
    {
      chainId: 4002,
      address: "0xc028Ce7431ABa4d621453Fb30b2b2Dd67a79196b",
      name: "Aave Feliz LINK",
      decimals: 18,
      symbol: "aFelizLINK",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmaqAt4UdDdo1mX4JRbYp1bz6VL84acFeRS3B3DjCYver2",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x7567951F7A80505D0CAa843113834ed4dD0f7Fe5"
      }
    },
    {
      chainId: 4002,
      address: "0x07BAecfcCd919e54c186554Ab43574519F8d3cfE",
      name: "USDC",
      decimals: 6,
      symbol: "USDC",
      tags: ["underlying"],
      logoURI: "ipfs://QmbhThHCdcMQ5bmQLpQ5zQsXHjP6jXoe84CGFuxEVskiV9"
    },
    {
      chainId: 4002,
      address: "0xd69EBc885a338CD842eB1B9B3ba9BBf3De609b83",
      name: "Aave Feliz USDC",
      decimals: 6,
      symbol: "aFelizUSDC",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmcUgFhpDzaGxQXvacRJjnQeECQhVCGWNkRfouu8hCkESo",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x07BAecfcCd919e54c186554Ab43574519F8d3cfE"
      }
    },
    {
      chainId: 4002,
      address: "0x8e4Fde5647b31566C1bf8c7AE0f5558aA17b0Cd1",
      name: "WBTC",
      decimals: 8,
      symbol: "WBTC",
      tags: ["underlying"],
      logoURI: "ipfs://QmchSk4QRc4hatKBGvoPaF7QTXwuGJBhAnEJ5DcrSsiYJ5"
    },
    {
      chainId: 4002,
      address: "0xeEe16cE6F70b5f7D6c04bCf6E29FE027611AA745",
      name: "Aave Feliz WBTC",
      decimals: 8,
      symbol: "aFelizWBTC",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmWABHZfGJHBAQU27Bv77btjKGg822j89La9q7BuVEPXkr",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x8e4Fde5647b31566C1bf8c7AE0f5558aA17b0Cd1"
      }
    },
    {
      chainId: 4002,
      address: "0x7f0a70f9737EC6B3C3b6Ad93b536f332Eed8a0EF",
      name: "WETH",
      decimals: 18,
      symbol: "WETH",
      tags: ["underlying"],
      logoURI: "ipfs://QmQUcgNk4wBhEchxQjjoSkvUXTb9Lzw9SCZoygwktjSNqd"
    },
    {
      chainId: 4002,
      address: "0xEF9D79EbC57FE94CEA2157d1789841deD482965c",
      name: "Aave Feliz WETH",
      decimals: 18,
      symbol: "aFelizWETH",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://Qma7MhjhSCiMyjDs1Zu3csUH4gYnPsT2DWPH7E9VjJDX2a",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x7f0a70f9737EC6B3C3b6Ad93b536f332Eed8a0EF"
      }
    },
    {
      chainId: 4002,
      address: "0x5904aEF9215D681e2Fcd63040DBb955d24C778EA",
      name: "USDT",
      decimals: 6,
      symbol: "USDT",
      tags: ["underlying"],
      logoURI: "ipfs://QmRHsz7F8L6ThgiFpnoj9Q9Eum1Yj3H62VozZ7Yo2GmA41"
    },
    {
      chainId: 4002,
      address: "0x442447221D6cD2E9Ff8e0dB48907a03d1Be2E0B8",
      name: "Aave Feliz USDT",
      decimals: 6,
      symbol: "aFelizUSDT",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmdoQn7UG2qPbY83ud71i71k8dqGrtNbXpvsZTAnWmVQDc",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x5904aEF9215D681e2Fcd63040DBb955d24C778EA"
      }
    },
    {
      chainId: 4002,
      address: "0x8f28c17affc0Fce7C68bfFb130253E93b99Abcba",
      name: "AAVE",
      decimals: 18,
      symbol: "AAVE",
      tags: ["underlying"],
      logoURI: "ipfs://QmbvaU6evuhijKW7hPutLtoGuayT18NGfnXcRFf78PE2iC"
    },
    {
      chainId: 4002,
      address: "0x5fbBdEf9E8139dCdfcd7Cd661dC66245E7c051e1",
      name: "Aave Feliz AAVE",
      decimals: 18,
      symbol: "aFelizAAVE",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmPt4MTu1qM4JqPUndTUaVH2H8TaPpKQH1PcsPARsvykPv",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x8f28c17affc0Fce7C68bfFb130253E93b99Abcba"
      }
    },
    {
      chainId: 4002,
      address: "0x71E10f1BeD205C1212B4d1Ce4a32BdB7295BFbC0",
      name: "WFTM",
      decimals: 18,
      symbol: "WFTM",
      tags: ["underlying"],
      logoURI: "ipfs://QmaM1pamJXjvNmvQTzfiYJUR16m1zngCfeGFXzFw4TdZF9"
    },
    {
      chainId: 4002,
      address: "0x11f77005Da9a3432c7Fcb6622534Bf4E722f233B",
      name: "Aave Feliz WFTM",
      decimals: 18,
      symbol: "aFelizWFTM",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://Qmd9YLBHhDCHdhf6djQjRTLSVQCvQQWHcYcsSReGpmN8eS",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x71E10f1BeD205C1212B4d1Ce4a32BdB7295BFbC0"
      }
    },
    {
      chainId: 4002,
      address: "0x8763ce2AD58Cf589F18d868c43FEfA21BE6310DA",
      name: "CRV",
      decimals: 18,
      symbol: "CRV",
      tags: ["underlying"],
      logoURI: "ipfs://QmbZMDbLbDHHEU7rd7VBnUL9UaMiQeDRbCtZ51cfBSMm3c"
    },
    {
      chainId: 4002,
      address: "0x45c8618053Bb5399f705Bf14114AfAb676946895",
      name: "Aave Feliz CRV",
      decimals: 18,
      symbol: "aFelizCRV",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmdcjSrWusxA73cpKw7htf7XaLxgR3o9ScLobYs4KiP1kX",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0x8763ce2AD58Cf589F18d868c43FEfA21BE6310DA"
      }
    },
    {
      chainId: 4002,
      address: "0xe733F960BF9Eab5993Dccd61856579939bA2019f",
      name: "SUSHI",
      decimals: 18,
      symbol: "SUSHI",
      tags: ["underlying"],
      logoURI: "ipfs://QmSmt97RzEDb8KKj7KUXXohZAwVYamFAtKY2rZTdeD8j72"
    },
    {
      chainId: 4002,
      address: "0x664eD46f40749015279bdcbD7d8773bC7Ae1B866",
      name: "Aave Feliz SUSHI",
      decimals: 18,
      symbol: "aFelizSUSHI",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmTgPCnMmtKBiid5PFMFLNMttThFbvd5aXzFCaoX51Rtpu",
      extensions: {
        pool: "0x692E995C17200aaC2BE2E2f4E879b7762eC1d4bb",
        underlying: "0xe733F960BF9Eab5993Dccd61856579939bA2019f"
      }
    },
    {
      chainId: 250,
      address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      name: "Dai Stablecoin",
      decimals: 18,
      symbol: "DAI",
      tags: ["underlying"],
      logoURI: "ipfs://QmP42hY9w4hkYyMtjwm86HmzMmUxx76pjyUNXT5VL6ndMa"
    },
    {
      chainId: 250,
      address: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
      name: "Aave Fantom DAI",
      decimals: 18,
      symbol: "aFanDAI",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmZFb7b8XfBoGUqPvpycN8RCxRNrcydbxZc7E7j8uq4yGW",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E"
      }
    },
    {
      chainId: 250,
      address: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
      name: "ChainLink",
      decimals: 18,
      symbol: "LINK",
      tags: ["underlying"],
      logoURI: "ipfs://QmRtU7R1eZcfFTgBLX57zPufc3HFhW2BG5WyikqUfNdJqV"
    },
    {
      chainId: 250,
      address: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
      name: "Aave Fantom LINK",
      decimals: 18,
      symbol: "aFanLINK",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmaqAt4UdDdo1mX4JRbYp1bz6VL84acFeRS3B3DjCYver2",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8"
      }
    },
    {
      chainId: 250,
      address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
      name: "USD Coin",
      decimals: 6,
      symbol: "USDC",
      tags: ["underlying"],
      logoURI: "ipfs://QmbhThHCdcMQ5bmQLpQ5zQsXHjP6jXoe84CGFuxEVskiV9"
    },
    {
      chainId: 250,
      address: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
      name: "Aave Fantom USDC",
      decimals: 6,
      symbol: "aFanUSDC",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmcUgFhpDzaGxQXvacRJjnQeECQhVCGWNkRfouu8hCkESo",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"
      }
    },
    {
      chainId: 250,
      address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
      name: "Bitcoin",
      decimals: 8,
      symbol: "BTC",
      tags: ["underlying"],
      logoURI: "ipfs://QmZJtx3PgAporannzoXtgGzC6pbzUyffeCkkVinSm3wACd"
    },
    {
      chainId: 250,
      address: "0x078f358208685046a11C85e8ad32895DED33A249",
      name: "Aave Fantom WBTC",
      decimals: 8,
      symbol: "aFanWBTC",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmfJWCC1rubCBRyG1w6SjeTo9915JAGwCsFp4LPHhFiyZM",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x321162Cd933E2Be498Cd2267a90534A804051b11"
      }
    },
    {
      chainId: 250,
      address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
      name: "Ethereum",
      decimals: 18,
      symbol: "ETH",
      tags: ["underlying"],
      logoURI: "ipfs://Qma2czudF6pWRodzgmA7gSWDLozZxMNoseGHdc5Ap72wLM"
    },
    {
      chainId: 250,
      address: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
      name: "Aave Fantom WETH",
      decimals: 18,
      symbol: "aFanWETH",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmbTG48DGcZmUSBxvNnkMc7ZeLEAvWycBzznp9BFVgsPMb",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x74b23882a30290451A17c44f4F05243b6b58C76d"
      }
    },
    {
      chainId: 250,
      address: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
      name: "Frapped USDT",
      decimals: 6,
      symbol: "fUSDT",
      tags: ["underlying"],
      logoURI: "ipfs://QmRHsz7F8L6ThgiFpnoj9Q9Eum1Yj3H62VozZ7Yo2GmA41"
    },
    {
      chainId: 250,
      address: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
      name: "Aave Fantom USDT",
      decimals: 6,
      symbol: "aFanUSDT",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmdoQn7UG2qPbY83ud71i71k8dqGrtNbXpvsZTAnWmVQDc",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x049d68029688eAbF473097a2fC38ef61633A3C7A"
      }
    },
    {
      chainId: 250,
      address: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B",
      name: "Aave",
      decimals: 18,
      symbol: "AAVE",
      tags: ["underlying"],
      logoURI: "ipfs://QmbvaU6evuhijKW7hPutLtoGuayT18NGfnXcRFf78PE2iC"
    },
    {
      chainId: 250,
      address: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
      name: "Aave Fantom AAVE",
      decimals: 18,
      symbol: "aFanAAVE",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmPt4MTu1qM4JqPUndTUaVH2H8TaPpKQH1PcsPARsvykPv",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B"
      }
    },
    {
      chainId: 250,
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      name: "Wrapped Fantom",
      decimals: 18,
      symbol: "WFTM",
      tags: ["underlying"],
      logoURI: "ipfs://QmaM1pamJXjvNmvQTzfiYJUR16m1zngCfeGFXzFw4TdZF9"
    },
    {
      chainId: 250,
      address: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
      name: "Aave Fantom WFTM",
      decimals: 18,
      symbol: "aFanWFTM",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://Qmd9YLBHhDCHdhf6djQjRTLSVQCvQQWHcYcsSReGpmN8eS",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
      }
    },
    {
      chainId: 250,
      address: "0x1E4F97b9f9F913c46F1632781732927B9019C68b",
      name: "Curve DAO",
      decimals: 18,
      symbol: "CRV",
      tags: ["underlying"],
      logoURI: "ipfs://QmbZMDbLbDHHEU7rd7VBnUL9UaMiQeDRbCtZ51cfBSMm3c"
    },
    {
      chainId: 250,
      address: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
      name: "Aave Fantom CRV",
      decimals: 18,
      symbol: "aFanCRV",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmdcjSrWusxA73cpKw7htf7XaLxgR3o9ScLobYs4KiP1kX",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0x1E4F97b9f9F913c46F1632781732927B9019C68b"
      }
    },
    {
      chainId: 250,
      address: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC",
      name: "Sushi",
      decimals: 18,
      symbol: "SUSHI",
      tags: ["underlying"],
      logoURI: "ipfs://QmSmt97RzEDb8KKj7KUXXohZAwVYamFAtKY2rZTdeD8j72"
    },
    {
      chainId: 250,
      address: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
      name: "Aave Fantom SUSHI",
      decimals: 18,
      symbol: "aFanSUSHI",
      tags: ["aTokenV3", "aaveV3"],
      logoURI: "ipfs://QmTgPCnMmtKBiid5PFMFLNMttThFbvd5aXzFCaoX51Rtpu",
      extensions: {
        pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        underlying: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC"
      }
    }
  ]
};

// src/ts/AaveV3Harmony.ts
var AaveV3Harmony_exports = {};
__export(AaveV3Harmony_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER3,
  ACL_ADMIN: () => ACL_ADMIN3,
  ACL_MANAGER: () => ACL_MANAGER3,
  ASSETS: () => ASSETS3,
  CHAIN_ID: () => CHAIN_ID6,
  COLLECTOR: () => COLLECTOR3,
  DEFAULT_A_TOKEN_IMPL_REV_1: () => DEFAULT_A_TOKEN_IMPL_REV_13,
  DEFAULT_INCENTIVES_CONTROLLER: () => DEFAULT_INCENTIVES_CONTROLLER2,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_2: () => DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_22,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_13,
  EMISSION_MANAGER: () => EMISSION_MANAGER2,
  E_MODES: () => E_MODES3,
  ORACLE: () => ORACLE3,
  POOL: () => POOL3,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER3,
  POOL_ADDRESSES_PROVIDER_REGISTRY: () => POOL_ADDRESSES_PROVIDER_REGISTRY2,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR3,
  PRICE_ORACLE_SENTINEL: () => PRICE_ORACLE_SENTINEL,
  UI_INCENTIVE_DATA_PROVIDER: () => UI_INCENTIVE_DATA_PROVIDER3,
  UI_POOL_DATA_PROVIDER: () => UI_POOL_DATA_PROVIDER3,
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER3,
  WETH_GATEWAY: () => WETH_GATEWAY3
});
var POOL_ADDRESSES_PROVIDER3 = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
var POOL3 = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
var POOL_CONFIGURATOR3 = "0x8145eddDf43f50276641b55bd3AD95944510021E";
var ORACLE3 = "0x3C90887Ede8D65ccb2777A5d577beAb2548280AD";
var PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
var AAVE_PROTOCOL_DATA_PROVIDER3 = "0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654";
var ACL_MANAGER3 = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
var ACL_ADMIN3 = "0xb2f0C5f37f4beD2cB51C44653cD5D84866BDcd2D";
var COLLECTOR3 = "0x8A020d92D6B119978582BE4d3EdFdC9F7b28BF31";
var DEFAULT_INCENTIVES_CONTROLLER2 = "0x929EC64c34a17401F460460D4B9390518E5B473e";
var DEFAULT_A_TOKEN_IMPL_REV_13 = "0xa5ba6E5EC19a1Bf23C857991c857dB62b2Aa187B";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_13 = "0x81387c40EB75acB02757C1Ae55D5936E78c9dEd3";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_22 = "0xa88c6D90eAe942291325f9ae3c66f3563B93FE10";
var EMISSION_MANAGER2 = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
var POOL_ADDRESSES_PROVIDER_REGISTRY2 = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
var UI_INCENTIVE_DATA_PROVIDER3 = "0xf7a60467aBb8A3240A0382b22E1B03c7d4F59Da5";
var UI_POOL_DATA_PROVIDER3 = "0x1DcDA4de2Bf6c7AD9a34788D22aE6b7d55016e1f";
var WALLET_BALANCE_PROVIDER3 = "0xBc790382B3686abffE4be14A030A96aC6154023a";
var WETH_GATEWAY3 = "0xE387c6053CE8EC9f8C3fa5cE085Af73114a695d3";
var CHAIN_ID6 = 16666e5;
var ASSETS3 = {
  ONE_DAI: {
    decimals: 18,
    UNDERLYING: "0xEf977d2f931C1978Db5F6747666fa1eACB0d0339",
    A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
    S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B",
    V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x981AB570aC289938F296b975C524B66FBF1B8774"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0x218532a12a389a4a92fC0C5Fb22901D1c19198aA",
    A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
    S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4",
    V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x80f2c02224a2E548FC67c0bF705eBFA825dd5439"
  },
  ONE_USDC: {
    decimals: 6,
    UNDERLYING: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
    A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
    S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007",
    V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45"
  },
  ONE_WBTC: {
    decimals: 8,
    UNDERLYING: "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9",
    A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249",
    S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e",
    V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x945fD405773973d286De54E44649cc0d9e264F78"
  },
  ONE_ETH: {
    decimals: 18,
    UNDERLYING: "0x6983D1E6DEf3690C4d616b13597A09e6193EA013",
    A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
    S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6",
    V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x7fc3FCb14eF04A48Bb0c12f0c39CD74C249c37d8"
  },
  ONE_USDT: {
    decimals: 6,
    UNDERLYING: "0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f",
    A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
    S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802",
    V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x05225Cd708bCa9253789C1374e4337a019e99D56"
  },
  ONE_AAVE: {
    decimals: 18,
    UNDERLYING: "0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F",
    A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
    S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48",
    V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0xFD858c8bC5ac5e10f01018bC78471bb0DC392247"
  },
  WONE: {
    decimals: 18,
    UNDERLYING: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
    A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
    S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E",
    V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8",
    INTEREST_RATE_STRATEGY: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    ORACLE: "0x3105C276558Dd4cf7E7be71d73Be8D33bD18F211"
  }
};
var E_MODES3 = {
  NONE: 0,
  STABLECOINS: 1
};
export {
  AaveGovernanceV2_exports as AaveGovernanceV2,
  AaveSafetyModule_exports as AaveSafetyModule,
  AaveV3Fantom_exports as AaveV3Fantom,
  AaveV3FantomTestnet_exports as AaveV3FantomTestnet,
  AaveV3Harmony_exports as AaveV3Harmony,
  AggregatorInterface_ABI,
  IATokenWithDelegation_ABI,
  IAToken_ABI,
  IAaveOracle_ABI,
  IAaveToken_ABI,
  ICollector_ABI,
  ICrossChainController_ABI,
  IDataWarehouse_ABI,
  IDefaultInterestRateStrategy_ABI,
  IERC20Detailed_ABI,
  IERC20_ABI,
  IExecutorWithTimelock_ABI,
  IExecutor_ABI,
  IGovernanceCore_ABI,
  IGovernanceDataHelper_ABI,
  IGovernancePowerStrategy_ABI,
  IMetaDelegateHelper_ABI,
  IOwnable_ABI,
  IPayloadsControllerCore_ABI,
  IPayloadsControllerDataHelper_ABI,
  IRescuable_ABI,
  IStakeToken_ABI,
  IStaticATokenFactory_ABI,
  IStaticATokenLM_ABI,
  IStkAaveToken_ABI,
  IUiPoolDataProvider_ABI,
  IVotingMachineDataHelper_ABI,
  IVotingMachineWithProofs_ABI,
  IVotingPortal_ABI,
  IVotingStrategy_ABI,
  IWithGuardian_ABI,
  MiscFantom_exports as MiscFantom,
  tokenlist_default as tokenlist
};
//# sourceMappingURL=AaveAddressBook.mjs.map