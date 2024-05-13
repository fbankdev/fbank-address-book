// src/ts/AaveV3Avalanche.ts
var POOL_ADDRESSES_PROVIDER = "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb";
var POOL = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
var POOL_IMPL = "0x1ed647b250e5b6d71DC7B25806F44c33F5658F71";
var POOL_CONFIGURATOR = "0x8145eddDf43f50276641b55bd3AD95944510021E";
var POOL_CONFIGURATOR_IMPL = "0x79b5e91037AE441dE0d9e6fd3Fd85b96B83d4E93";
var ORACLE = "0xEBd36016B3eD09D4693Ed4251c67Bd858c3c7C9C";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x50ddd0Cd4266299527d25De9CBb55fE0EB8dAc30";
var ACL_MANAGER = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";
var ACL_ADMIN = "0x3C06dce358add17aAf230f2234bCCC4afd50d090";
var COLLECTOR = "0x5ba7fd868c40c16f7aDfAe6CF87121E13FC2F7a0";
var DEFAULT_INCENTIVES_CONTROLLER = "0x929EC64c34a17401F460460D4B9390518E5B473e";
var DEFAULT_A_TOKEN_IMPL_REV_2 = "0x1E81af09001aD208BDa68FF022544dB2102A752d";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2 = "0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3 = "0xccf12894957E637Bd69693B12F3ba12b539C2D11";
var EMISSION_MANAGER = "0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73";
var CAPS_PLUS_RISK_STEWARD = "0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5";
var FREEZING_STEWARD = "0x6d4F341d8Bb3Dc5ABe822Aa940F1884508C13f99";
var DEBT_SWAP_ADAPTER = "0x8A9b2c132EA7676EE267F5b97b622083d6E3a2d4";
var CONFIG_ENGINE = "0x0587B66Bc824368cFA5849bc56216a59260Df2c5";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x770ef9f4fe897e59daCc474EF11238303F9552b6";
var PROOF_OF_RESERVE = "0xab22988D93d5F942fC6B6c6Ea285744809D1d9Cc";
var PROOF_OF_RESERVE_AGGREGATOR = "0x80f2c02224a2E548FC67c0bF705eBFA825dd5439";
var RATES_FACTORY = "0xDd81E6F85358292075B78fc8D5830BE8434aF8BA";
var REPAY_WITH_COLLATERAL_ADAPTER = "0x49F5B996814fEd1dd39285B92A59CFb2dfd8D4f9";
var STATIC_A_TOKEN_FACTORY = "0x691C316b2Eec7e64d17e7E3E01f3dB44c9CcEf19";
var SWAP_COLLATERAL_ADAPTER = "0x2Cf641F7C0eac2788A7924B82d6Ca8EB7bAa4E3A";
var UI_INCENTIVE_DATA_PROVIDER = "0x265d414f80b0fca9505710e6F16dB4b67555D365";
var UI_POOL_DATA_PROVIDER = "0xF71DBe0FAEF1473ffC607d4c555dfF0aEaDb878d";
var WALLET_BALANCE_PROVIDER = "0xBc790382B3686abffE4be14A030A96aC6154023a";
var WETH_GATEWAY = "0x2DeC8BCE3471eD65B1bB558Fa28439D45bF446d0";
var WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
var CHAIN_ID = 43114;
var ASSETS = {
  DAIe: {
    decimals: 18,
    UNDERLYING: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    A_TOKEN: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
    S_TOKEN: "0xd94112B5B62d53C9402e7A60289c6810dEF1dC9B",
    V_TOKEN: "0x8619d80FB0141ba7F184CbF22fd724116D9f7ffC",
    INTEREST_RATE_STRATEGY: "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
    ORACLE: "0xf82da795727633aFA9BB0f1B08A87c0F6A38723f",
    STATA_TOKEN: "0x02F3f6c8A432C1e49f3359d7d36887C25d8A5888"
  },
  LINKe: {
    decimals: 18,
    UNDERLYING: "0x5947BB275c521040051D82396192181b413227A3",
    A_TOKEN: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
    S_TOKEN: "0x89D976629b7055ff1ca02b927BA3e020F22A44e4",
    V_TOKEN: "0x953A573793604aF8d41F306FEb8274190dB4aE0e",
    INTEREST_RATE_STRATEGY: "0x79a906e8c998d2fb5C5D66d23c4c5416Fe0168D6",
    ORACLE: "0x49ccd9ca821EfEab2b98c60dC60F518E765EDe9a",
    STATA_TOKEN: "0x8B773Ab77Dff01985D438961dBCE58382a70cA52"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    A_TOKEN: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
    S_TOKEN: "0x307ffe186F84a3bc2613D1eA417A5737D69A7007",
    V_TOKEN: "0xFCCf3cAbbe80101232d343252614b6A3eE81C989",
    INTEREST_RATE_STRATEGY: "0x769EbC5106bF09D9A665CCb691e1907612b57F16",
    ORACLE: "0xD8277249e871BE9A402fa286C2C5ec16046dC512",
    STATA_TOKEN: "0xC509aB7bB4eDbF193b82264D499a7Fc526Cd01F4"
  },
  WBTCe: {
    decimals: 8,
    UNDERLYING: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    A_TOKEN: "0x078f358208685046a11C85e8ad32895DED33A249",
    S_TOKEN: "0x633b207Dd676331c413D4C013a6294B0FE47cD0e",
    V_TOKEN: "0x92b42c66840C7AD907b4BF74879FF3eF7c529473",
    INTEREST_RATE_STRATEGY: "0x354E84ec43aCD91e1C0135c3e691960E881DB4b7",
    ORACLE: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
    STATA_TOKEN: "0xE3C0f42EAF1a4BFe37CbA105e5463564BA7730aE"
  },
  WETHe: {
    decimals: 18,
    UNDERLYING: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    A_TOKEN: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
    S_TOKEN: "0xD8Ad37849950903571df17049516a5CD4cbE55F6",
    V_TOKEN: "0x0c84331e39d6658Cd6e6b9ba04736cC4c4734351",
    INTEREST_RATE_STRATEGY: "0x271f5f8325051f22caDa18FfedD4a805584a232A",
    ORACLE: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
    STATA_TOKEN: "0xf8E24175D01653fd6AA203C2C17B1e4Dd1CA2731"
  },
  USDt: {
    decimals: 6,
    UNDERLYING: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    A_TOKEN: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
    S_TOKEN: "0x70eFfc565DB6EEf7B927610155602d31b670e802",
    V_TOKEN: "0xfb00AC187a8Eb5AFAE4eACE434F493Eb62672df7",
    INTEREST_RATE_STRATEGY: "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
    ORACLE: "0x39185f2236A6022b682e8BB93C040d125DA093CF",
    STATA_TOKEN: "0x5525Ee69BC1e354B356864187De486fab5AD67d7"
  },
  AAVEe: {
    decimals: 18,
    UNDERLYING: "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    A_TOKEN: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
    S_TOKEN: "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48",
    V_TOKEN: "0xE80761Ea617F66F96274eA5e8c37f03960ecC679",
    INTEREST_RATE_STRATEGY: "0x79a906e8c998d2fb5C5D66d23c4c5416Fe0168D6",
    ORACLE: "0x3CA13391E9fb38a75330fb28f8cc2eB3D9ceceED",
    STATA_TOKEN: "0xac0746AfD13DEbe2a43a6c8745Fb83Fd2A2909cA"
  },
  WAVAX: {
    decimals: 18,
    UNDERLYING: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    A_TOKEN: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
    S_TOKEN: "0xF15F26710c827DDe8ACBA678682F3Ce24f2Fb56E",
    V_TOKEN: "0x4a1c3aD6Ed28a636ee1751C69071f6be75DEb8B8",
    INTEREST_RATE_STRATEGY: "0xc76EF342898f1AE7E6C4632627Df683FAD8563DD",
    ORACLE: "0x0A77230d17318075983913bC2145DB16C7366156",
    STATA_TOKEN: "0x6A02C7a974F1F13A67980C80F774eC1d2eD8f98d"
  },
  sAVAX: {
    decimals: 18,
    UNDERLYING: "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    A_TOKEN: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
    S_TOKEN: "0x08Cb71192985E936C7Cd166A8b268035e400c3c3",
    V_TOKEN: "0x77CA01483f379E58174739308945f044e1a764dc",
    INTEREST_RATE_STRATEGY: "0x79a906e8c998d2fb5C5D66d23c4c5416Fe0168D6",
    ORACLE: "0xB2B332f27e4B7305649a228C31Ed9858c5a6bAD9",
    STATA_TOKEN: "0x4F059cA8a2a5BF8895Ee731f2E901cCB769FB95f"
  },
  FRAX: {
    decimals: 18,
    UNDERLYING: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
    A_TOKEN: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
    S_TOKEN: "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841",
    V_TOKEN: "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907",
    INTEREST_RATE_STRATEGY: "0x5eE947d920643cCd3e2c54eAAd8F260FC8Add3b4",
    ORACLE: "0x6208576378D06ce69A27987b7A524A9B15d499a4",
    STATA_TOKEN: "0xA3c2ffE702F4cD265B2249AB5f84Fab81FFf6c73"
  },
  MAI: {
    decimals: 18,
    UNDERLYING: "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b",
    A_TOKEN: "0x8Eb270e296023E9D92081fdF967dDd7878724424",
    S_TOKEN: "0x3EF10DFf4928279c004308EbADc4Db8B7620d6fc",
    V_TOKEN: "0xCE186F6Cccb0c955445bb9d10C59caE488Fea559",
    INTEREST_RATE_STRATEGY: "0xB57Ff919A953424d6B143ABfD6740A225eab953e",
    ORACLE: "0xCcC55Db26B78a19Dba1beE0066F9c1665575439A",
    STATA_TOKEN: "0x08cC59E51BB0Bc322B4D251f7262dB864d6150ce"
  },
  BTCb: {
    decimals: 8,
    UNDERLYING: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
    A_TOKEN: "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692",
    S_TOKEN: "0xa5e408678469d23efDB7694b1B0A85BB0669e8bd",
    V_TOKEN: "0xA8669021776Bc142DfcA87c21b4A52595bCbB40a",
    INTEREST_RATE_STRATEGY: "0x79a906e8c998d2fb5C5D66d23c4c5416Fe0168D6",
    ORACLE: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
    STATA_TOKEN: "0x34d768cc830c32DcD743321c09A2A702651bF9a2"
  }
};
var E_MODES = {
  NONE: 0,
  STABLECOINS: 1,
  AVAX_CORRELATED: 2
};
export {
  AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN,
  ACL_MANAGER,
  ASSETS,
  CAPS_PLUS_RISK_STEWARD,
  CHAIN_ID,
  COLLECTOR,
  CONFIG_ENGINE,
  DEBT_SWAP_ADAPTER,
  DEFAULT_A_TOKEN_IMPL_REV_2,
  DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_3,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_2,
  EMISSION_MANAGER,
  E_MODES,
  FREEZING_STEWARD,
  ORACLE,
  POOL,
  POOL_ADDRESSES_PROVIDER,
  POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_CONFIGURATOR,
  POOL_CONFIGURATOR_IMPL,
  POOL_IMPL,
  PROOF_OF_RESERVE,
  PROOF_OF_RESERVE_AGGREGATOR,
  RATES_FACTORY,
  REPAY_WITH_COLLATERAL_ADAPTER,
  STATIC_A_TOKEN_FACTORY,
  SWAP_COLLATERAL_ADAPTER,
  UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY,
  WITHDRAW_SWAP_ADAPTER
};
//# sourceMappingURL=AaveV3Avalanche.mjs.map