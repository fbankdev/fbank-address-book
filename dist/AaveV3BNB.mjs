// src/ts/AaveV3BNB.ts
var POOL_ADDRESSES_PROVIDER = "0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D";
var POOL = "0x6807dc923806fE8Fd134338EABCA509979a7e0cB";
var POOL_IMPL = "0xE23AE099E2EF2a75183d06Af93c8EE0B5f1B546D";
var POOL_CONFIGURATOR = "0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584";
var POOL_CONFIGURATOR_IMPL = "0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9";
var ORACLE = "0x39bc1bfDa2130d6Bb6DBEfd366939b4c7aa7C697";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x41585C50524fb8c3899B43D7D797d9486AAc94DB";
var ACL_MANAGER = "0x2D97F8FA96886Fd923c065F5457F9DDd494e3877";
var ACL_ADMIN = "0x9390B1735def18560c509E2d0bc090E9d6BA257a";
var COLLECTOR = "0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C";
var DEFAULT_INCENTIVES_CONTROLLER = "0xC206C2764A9dBF27d599613b8F9A63ACd1160ab4";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x6c23bAF050ec192afc0B967a93b83e6c5405df43";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x777fBA024bA1228fDa76149A4ff8B23475ed057D";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0xb172a90A7C238969CE9B27cc19D13b60A91e7F00";
var EMISSION_MANAGER = "0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85";
var CAPS_PLUS_RISK_STEWARD = "0x971F1C94b139AdEdedA729DA636e2B0C433Ff595";
var FREEZING_STEWARD = "0x83f15Bc50d1A212576B202f80489502a7cc10412";
var DEBT_SWAP_ADAPTER = "0xAe13e4DA0952f0B8fE04E21df53716fCF799a923";
var CONFIG_ENGINE = "0xcb0670258e5961CCA85D8F71D29C1167Ef20De99";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0x117684358D990E42Eb1649E7e8C4691951dc1E71";
var RATES_FACTORY = "0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6";
var REPAY_WITH_COLLATERAL_ADAPTER = "0x0727a6494095511078d63143A8a1E90b9f310880";
var SWAP_COLLATERAL_ADAPTER = "0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5";
var UI_INCENTIVE_DATA_PROVIDER = "0x1236010CECea55998384e795B59815D871f5f94d";
var UI_POOL_DATA_PROVIDER = "0x952F938949F965C70c83853e7ff28aa7af91005b";
var WALLET_BALANCE_PROVIDER = "0x36616cf17557639614c1cdDb356b1B83fc0B2132";
var WETH_GATEWAY = "0xd91d1331db4F436DaF47Ec9Dd86deCb8EEF946B4";
var WITHDRAW_SWAP_ADAPTER = "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D";
var STATIC_A_TOKEN_FACTORY = "0x326aB0868bD279382Be2DF5E228Cb8AF38649AB4";
var CHAIN_ID = 56;
var ASSETS = {
  Cake: {
    decimals: 18,
    UNDERLYING: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    A_TOKEN: "0x4199CC1F5ed0d796563d7CcB2e036253E2C18281",
    S_TOKEN: "0x57e95511de39890D3e782df4b19F0D97A05DF64A",
    V_TOKEN: "0xE20dBC7119c635B1B51462f844861258770e0699",
    INTEREST_RATE_STRATEGY: "0x9A945631004d0452642bC61cEd2871f428F2543f",
    ORACLE: "0xB6064eD41d4f67e353768aA239cA86f4F73665a1",
    STATA_TOKEN: "0x3854354CE3681da1D7F550073061E92a4a7d1B27"
  },
  WBNB: {
    decimals: 18,
    UNDERLYING: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    A_TOKEN: "0x9B00a09492a626678E5A3009982191586C444Df9",
    S_TOKEN: "0x5cc46d2b1103aB23CFD63eF8631480bbf4eB40FE",
    V_TOKEN: "0x0E76414d433ddfe8004d2A7505d218874875a996",
    INTEREST_RATE_STRATEGY: "0x9A945631004d0452642bC61cEd2871f428F2543f",
    ORACLE: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
    STATA_TOKEN: "0x436baCb4C66583de4Cb16e13a1A0D9A3075DE425"
  },
  BTCB: {
    decimals: 18,
    UNDERLYING: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    A_TOKEN: "0x56a7ddc4e848EbF43845854205ad71D5D5F72d3D",
    S_TOKEN: "0x9Ef6D76740713C674A6e4f38B863E62D10965053",
    V_TOKEN: "0x7b1E82F4f542fbB25D64c5523Fe3e44aBe4F2702",
    INTEREST_RATE_STRATEGY: "0x9A945631004d0452642bC61cEd2871f428F2543f",
    ORACLE: "0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf",
    STATA_TOKEN: "0x1F66b530084079d35478A069d9c4424F9c9C320c"
  },
  ETH: {
    decimals: 18,
    UNDERLYING: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    A_TOKEN: "0x2E94171493fAbE316b6205f1585779C887771E2F",
    S_TOKEN: "0xa8327EE1858E06983af6690d24e77774807109d4",
    V_TOKEN: "0x8FDea7891b4D6dbdc746309245B316aF691A636C",
    INTEREST_RATE_STRATEGY: "0x6EB97Ba43A1576989bc203178BD64C1182f24DDc",
    ORACLE: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e",
    STATA_TOKEN: "0x52077433fB7053D747E2846aD0C18ff5015C368E"
  },
  USDC: {
    decimals: 18,
    UNDERLYING: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    A_TOKEN: "0x00901a076785e0906d1028c7d6372d247bec7d61",
    S_TOKEN: "0xCcC260D9778F900eAd566Fa2E1D622E667677653",
    V_TOKEN: "0xcDBBEd5606d9c5C98eEedd67933991dC17F0c68d",
    INTEREST_RATE_STRATEGY: "0x4e4B860383B9C35615f2dc0C3b78F83009A46720",
    ORACLE: "0xaFcFF74AE956f4c23c27Db49659D4a7F350415C1",
    STATA_TOKEN: "0x3906cDdfb781f02B21f21BD81ed7Fd8DC37075E1"
  },
  USDT: {
    decimals: 18,
    UNDERLYING: "0x55d398326f99059fF775485246999027B3197955",
    A_TOKEN: "0xa9251ca9DE909CB71783723713B21E4233fbf1B1",
    S_TOKEN: "0xB735D922a36d4337f561CE433594727e1bc8bD01",
    V_TOKEN: "0xF8bb2Be50647447Fb355e3a77b81be4db64107cd",
    INTEREST_RATE_STRATEGY: "0xD161Cd855089c33c00F7D30C56452e5B4B8a8599",
    ORACLE: "0x0F682319Ed4A240b7a2599A48C965049515D9bC3",
    STATA_TOKEN: "0x0471D185cc7Be61E154277cAB2396cD397663da6"
  },
  FDUSD: {
    decimals: 18,
    UNDERLYING: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
    A_TOKEN: "0x75bd1A659bdC62e4C313950d44A2416faB43E785",
    S_TOKEN: "0x5543d347bfae77A5FF913e589aB6D6ad520f1C73",
    V_TOKEN: "0xE628B8a123e6037f1542e662B9F55141a16945C8",
    INTEREST_RATE_STRATEGY: "0x6415754564745A50adB508D3B94d10870FE220eb",
    ORACLE: "0x60a117Fa5bAbee4d645884fB11E413Da4F893b6D",
    STATA_TOKEN: "0x4d074aAa0821073dA827f7bf6a02cF905b394ed0"
  }
};
var E_MODES = {
  NONE: 0
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
  DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
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
//# sourceMappingURL=AaveV3BNB.mjs.map