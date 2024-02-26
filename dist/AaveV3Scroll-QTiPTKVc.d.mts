declare const POOL_ADDRESSES_PROVIDER = "0x69850D0B276776781C063771b161bd8894BCdD04";
declare const POOL = "0x11fCfe756c05AD438e312a7fd934381537D3cFfe";
declare const POOL_CONFIGURATOR = "0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f";
declare const ORACLE = "0x04421D8C506E2fA2371a08EfAaBf791F624054F3";
declare const PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0xa99F4E69acF23C6838DE90dD1B5c02EA928A53ee";
declare const ACL_MANAGER = "0x7633F981D87dC6307227de9383D2ce7243158081";
declare const ACL_ADMIN = "0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24";
declare const COLLECTOR = "0x90eB541e1a431D8a30ED85A77675D1F001128cb5";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xa3f3100C4f1D0624DB9DB97b40C13885Ce297799";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x92EDe4ABd9df4Bfb49b4d723e4c932e35c47C54C";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0x49bA16C08130FF8cFADE263B49387A8555bc057B";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x8Ff5f08EDB2E5e1A51bd14d0494320bdB436a149";
declare const EMISSION_MANAGER = "0x6091546836DAe0487A50E300da3F237727441D90";
declare const L2_ENCODER = "0x8714E5ED2d8edD4E88eFf66637C3FE8eCf2B8C40";
declare const CAPS_PLUS_RISK_STEWARD = "0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e";
declare const FREEZING_STEWARD = "0xc68D0C511076283075bD5cc9aA61E43673135f37";
declare const CONFIG_ENGINE = "0x9CBC05104c3ff7EC0885770911a0828C40fd0a32";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0xFBedc64AeE24921cb43004312B9eF367a4162b57";
declare const RATES_FACTORY = "0xe48fb34452FaE3Cd5d906F748490FBE16c3Ce31b";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x37A2f0b0b5FC33999e3E7fdECcFAe1e894fF9b07";
declare const UI_POOL_DATA_PROVIDER = "0x639c4ae31A02D54d66A9c696c63404BCa8B2734C";
declare const WALLET_BALANCE_PROVIDER = "0xE51642875Af07Fea1B03d821E41a9DB24bC4447E";
declare const WETH_GATEWAY = "0xFF75A4B698E3Ec95E608ac0f22A03B8368E05F5D";
declare const STATIC_A_TOKEN_FACTORY = "0x970b77b96D94966939a8F867c2BfC2aC0310C0e7";
declare const CHAIN_ID = 534352;
declare const ASSETS: {
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x5300000000000000000000000000000000000004";
        readonly A_TOKEN: "0xf301805bE1Df81102C957f6d4Ce29d2B8c056B2a";
        readonly S_TOKEN: "0x117d9cF336287F46DBE509a43925cFF115Aa563c";
        readonly V_TOKEN: "0xfD7344CeB1Df9Cf238EcD667f4A6F99c6Ef44a56";
        readonly INTEREST_RATE_STRATEGY: "0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05";
        readonly ORACLE: "0x6bF14CB0A831078629D993FDeBcB182b21A8774C";
        readonly STATA_TOKEN: "0x6b9DfaC194fa78a1882680E2cE19194D006AeEfd";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4";
        readonly A_TOKEN: "0x1D738a3436A8C49CefFbaB7fbF04B660fb528CbD";
        readonly S_TOKEN: "0x59F359aA263f7Ac09876E869AF1F75b558904ed4";
        readonly V_TOKEN: "0x3d2E209af5BFa79297C88D6b57F89d792F6E28EE";
        readonly INTEREST_RATE_STRATEGY: "0x9205B37978aC983A297dFB53b3f3D2cCC7DDDADa";
        readonly ORACLE: "0x43d12Fb3AfCAd5347fA764EeAB105478337b7200";
        readonly STATA_TOKEN: "0x9fA123bC7E6b61cC8a9D893673a4C6E5392FF4A7";
    };
    readonly wstETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32";
        readonly A_TOKEN: "0x5B1322eeb46240b02e20062b8F0F9908d525B09c";
        readonly S_TOKEN: "0x18e3f125ce85e8D65AD2bb4f6b5fff110772A078";
        readonly V_TOKEN: "0x8a035644322129800C3f747f54Db0F4d3c0A2877";
        readonly INTEREST_RATE_STRATEGY: "0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8";
        readonly ORACLE: "0xdb93e2712a8B36835078f8D28c70fCC95FD6d37c";
        readonly STATA_TOKEN: "0x6e368c4dBf083e18a29aE63FC06AF9deDb3242F0";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly ETH_CORRELATED: 1;
};

declare const AaveV3Scroll_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Scroll_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Scroll_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Scroll_ASSETS: typeof ASSETS;
declare const AaveV3Scroll_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const AaveV3Scroll_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Scroll_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Scroll_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV3Scroll_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3Scroll_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Scroll_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Scroll_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Scroll_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Scroll_E_MODES: typeof E_MODES;
declare const AaveV3Scroll_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const AaveV3Scroll_L2_ENCODER: typeof L2_ENCODER;
declare const AaveV3Scroll_ORACLE: typeof ORACLE;
declare const AaveV3Scroll_POOL: typeof POOL;
declare const AaveV3Scroll_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Scroll_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV3Scroll_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Scroll_PRICE_ORACLE_SENTINEL: typeof PRICE_ORACLE_SENTINEL;
declare const AaveV3Scroll_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV3Scroll_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const AaveV3Scroll_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Scroll_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Scroll_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Scroll_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV3Scroll {
  export { AaveV3Scroll_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Scroll_ACL_ADMIN as ACL_ADMIN, AaveV3Scroll_ACL_MANAGER as ACL_MANAGER, AaveV3Scroll_ASSETS as ASSETS, AaveV3Scroll_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, AaveV3Scroll_CHAIN_ID as CHAIN_ID, AaveV3Scroll_COLLECTOR as COLLECTOR, AaveV3Scroll_CONFIG_ENGINE as CONFIG_ENGINE, AaveV3Scroll_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3Scroll_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Scroll_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Scroll_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Scroll_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Scroll_E_MODES as E_MODES, AaveV3Scroll_FREEZING_STEWARD as FREEZING_STEWARD, AaveV3Scroll_L2_ENCODER as L2_ENCODER, AaveV3Scroll_ORACLE as ORACLE, AaveV3Scroll_POOL as POOL, AaveV3Scroll_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Scroll_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV3Scroll_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Scroll_PRICE_ORACLE_SENTINEL as PRICE_ORACLE_SENTINEL, AaveV3Scroll_RATES_FACTORY as RATES_FACTORY, AaveV3Scroll_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, AaveV3Scroll_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Scroll_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Scroll_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Scroll_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV3Scroll as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, L2_ENCODER as L, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, STATIC_A_TOKEN_FACTORY as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, PRICE_ORACLE_SENTINEL as c, AAVE_PROTOCOL_DATA_PROVIDER as d, ACL_MANAGER as e, ACL_ADMIN as f, DEFAULT_A_TOKEN_IMPL_REV_1 as g, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as h, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as i, CAPS_PLUS_RISK_STEWARD as j, CONFIG_ENGINE as k, POOL_ADDRESSES_PROVIDER_REGISTRY as l, UI_POOL_DATA_PROVIDER as m, WETH_GATEWAY as n, CHAIN_ID as o, ASSETS as p, E_MODES as q };
