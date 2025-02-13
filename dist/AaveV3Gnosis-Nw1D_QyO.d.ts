declare const POOL_ADDRESSES_PROVIDER = "0x36616cf17557639614c1cdDb356b1B83fc0B2132";
declare const POOL = "0xb50201558B00496A145fE76f7424749556E326D8";
declare const POOL_IMPL = "0x5b522140fabeB6b6232336295581e63902e9b4ad";
declare const POOL_CONFIGURATOR = "0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16";
declare const POOL_CONFIGURATOR_IMPL = "0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C";
declare const ORACLE = "0xeb0a051be10228213BAEb449db63719d6742F7c4";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741";
declare const ACL_MANAGER = "0xEc710f59005f48703908bC519D552Df5B8472614";
declare const ACL_ADMIN = "0x1dF462e2712496373A347f8ad10802a5E95f053D";
declare const COLLECTOR = "0x3e652E97ff339B73421f824F5b03d75b62F1Fb51";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0x589750BA8aF186cE5B55391B0b7148cAD43a1619";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xBeC519531F0E78BcDdB295242fA4EC5251B38574";
declare const DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x06C35Cfd3FC61eC2aC437f0d08840d5776b945af";
declare const EMISSION_MANAGER = "0x41585C50524fb8c3899B43D7D797d9486AAc94DB";
declare const CONFIG_ENGINE = "0x3238FC1d642b60F41a35f62570237656C85F4744";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0x1236010CECea55998384e795B59815D871f5f94d";
declare const RATES_FACTORY = "0x73dDE2A75c06a108912bf7Ff600eDdCE9d96Ed25";
declare const UI_INCENTIVE_DATA_PROVIDER = "0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9";
declare const UI_POOL_DATA_PROVIDER = "0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809";
declare const WALLET_BALANCE_PROVIDER = "0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D";
declare const WETH_GATEWAY = "0xfE76366A986B72c3f2923e05E6ba07b7de5401e4";
declare const CAPS_PLUS_RISK_STEWARD = "0x33AE1f41546a2e05368Bf789b3d868813c0Ae658";
declare const FREEZING_STEWARD = "0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5";
declare const STATIC_A_TOKEN_FACTORY = "0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6";
declare const CHAIN_ID = 100;
declare const ASSETS: {
    readonly WETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1";
        readonly A_TOKEN: "0xa818F1B57c201E092C4A2017A91815034326Efd1";
        readonly S_TOKEN: "0x436D82d905b014926a2375C576500B6fea0D2496";
        readonly V_TOKEN: "0x0c0fce05F2314540EcB095bF4D069e5E0ED90fF8";
        readonly INTEREST_RATE_STRATEGY: "0xD84d86083010FB683f1e8fA3809ee8DC90A4C4DB";
        readonly ORACLE: "0xa767f745331D267c7751297D982b050c93985627";
        readonly STATA_TOKEN: "0xD843FB478c5aA9759FeA3f3c98D467e2F136190a";
    };
    readonly wstETH: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6";
        readonly A_TOKEN: "0x23e4E76D01B2002BE436CE8d6044b0aA2f68B68a";
        readonly S_TOKEN: "0x5CBc43c339F5202D2dcB59583D33cA8498b75031";
        readonly V_TOKEN: "0x9D881f67F20B49243c98f53d2B9E91E39d02Ae09";
        readonly INTEREST_RATE_STRATEGY: "0x9E57695Dab0DCdb42BC220ff1E9eb2e22a31209b";
        readonly ORACLE: "0xcb0670258e5961CCA85D8F71D29C1167Ef20De99";
        readonly STATA_TOKEN: "0xECfD0638175e291BA3F784A58FB9D38a25418904";
    };
    readonly GNO: {
        readonly decimals: 18;
        readonly UNDERLYING: "0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb";
        readonly A_TOKEN: "0xA1Fa064A85266E2Ca82DEe5C5CcEC84DF445760e";
        readonly S_TOKEN: "0x1A126F613D7705E59ADb39909b25E1223aDF05dd";
        readonly V_TOKEN: "0xBc59E99198DbA71985A66E1713cC89FFEC53f7FC";
        readonly INTEREST_RATE_STRATEGY: "0x777fDAB3C03aA63d7d7CbCbaB22724cEe50F1731";
        readonly ORACLE: "0x22441d81416430A54336aB28765abd31a792Ad37";
        readonly STATA_TOKEN: "0x2D737e2B0e175f05D0904C208d6C4e40da570f65";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly UNDERLYING: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83";
        readonly A_TOKEN: "0xc6B7AcA6DE8a6044E0e32d0c841a89244A10D284";
        readonly S_TOKEN: "0x8220133C3a631de3C7A5B679A2417BD61431FEcf";
        readonly V_TOKEN: "0x5F6f7B0a87CA3CF3d0b431Ae03EF3305180BFf4d";
        readonly INTEREST_RATE_STRATEGY: "0xE74CD4ADF9103370144c327457bd294753E2E856";
        readonly ORACLE: "0x26C31ac71010aF62E6B486D1132E266D6298857D";
        readonly STATA_TOKEN: "0x270bA1f35D8b87510D24F693fcCc0da02e6E4EeB";
    };
    readonly WXDAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d";
        readonly A_TOKEN: "0xd0Dd6cEF72143E22cCED4867eb0d5F2328715533";
        readonly S_TOKEN: "0xaC8b1cE0548C69318920C3e0b21Db296d5770D57";
        readonly V_TOKEN: "0x281963D7471eCdC3A2Bd4503e24e89691cfe420D";
        readonly INTEREST_RATE_STRATEGY: "0xE74CD4ADF9103370144c327457bd294753E2E856";
        readonly ORACLE: "0x678df3415fc31947dA4324eC63212874be5a82f8";
        readonly STATA_TOKEN: "0x7f0EAE87Df30C468E0680c83549D0b3DE7664D4B";
    };
    readonly EURe: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xcB444e90D8198415266c6a2724b7900fb12FC56E";
        readonly A_TOKEN: "0xEdBC7449a9b594CA4E053D9737EC5Dc4CbCcBfb2";
        readonly S_TOKEN: "0x916E13857FeeD0d982Df148DBe8d8542519aB96e";
        readonly V_TOKEN: "0xb96404e475f337A7E98e4a541C9b71309BB66c5A";
        readonly INTEREST_RATE_STRATEGY: "0x6c3b7e7B8b9609D57C70C3F630228F979EAbb450";
        readonly ORACLE: "0xab70BCB260073d036d1660201e9d5405F5829b7a";
        readonly STATA_TOKEN: "0x8418D17640a74F1614AC3E1826F29e78714488a1";
    };
    readonly sDAI: {
        readonly decimals: 18;
        readonly UNDERLYING: "0xaf204776c7245bF4147c2612BF6e5972Ee483701";
        readonly A_TOKEN: "0x7a5c3860a77a8DC1b225BD46d0fb2ac1C6D191BC";
        readonly S_TOKEN: "0xa2E0335175Da40b081717FfD394C0E1de738cb9B";
        readonly V_TOKEN: "0x8Fe06E1D8Aff42Bf6812CacF7854A2249a00bED7";
        readonly INTEREST_RATE_STRATEGY: "0x6c3b7e7B8b9609D57C70C3F630228F979EAbb450";
        readonly ORACLE: "0x1D0f881Ce1a646E2f27Dec3c57Fa056cB838BCC2";
        readonly STATA_TOKEN: "0xf3f45960f8dE00D8ED614D445a5a268c6F6Dec4f";
    };
};
declare const E_MODES: {
    readonly NONE: 0;
    readonly ETH_CORRELATED: 1;
};

declare const AaveV3Gnosis_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV3Gnosis_ACL_ADMIN: typeof ACL_ADMIN;
declare const AaveV3Gnosis_ACL_MANAGER: typeof ACL_MANAGER;
declare const AaveV3Gnosis_ASSETS: typeof ASSETS;
declare const AaveV3Gnosis_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const AaveV3Gnosis_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV3Gnosis_COLLECTOR: typeof COLLECTOR;
declare const AaveV3Gnosis_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV3Gnosis_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const AaveV3Gnosis_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV3Gnosis_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Gnosis_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const AaveV3Gnosis_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV3Gnosis_E_MODES: typeof E_MODES;
declare const AaveV3Gnosis_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const AaveV3Gnosis_ORACLE: typeof ORACLE;
declare const AaveV3Gnosis_POOL: typeof POOL;
declare const AaveV3Gnosis_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV3Gnosis_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV3Gnosis_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV3Gnosis_POOL_CONFIGURATOR_IMPL: typeof POOL_CONFIGURATOR_IMPL;
declare const AaveV3Gnosis_POOL_IMPL: typeof POOL_IMPL;
declare const AaveV3Gnosis_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV3Gnosis_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const AaveV3Gnosis_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV3Gnosis_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV3Gnosis_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV3Gnosis_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV3Gnosis {
  export { AaveV3Gnosis_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV3Gnosis_ACL_ADMIN as ACL_ADMIN, AaveV3Gnosis_ACL_MANAGER as ACL_MANAGER, AaveV3Gnosis_ASSETS as ASSETS, AaveV3Gnosis_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, AaveV3Gnosis_CHAIN_ID as CHAIN_ID, AaveV3Gnosis_COLLECTOR as COLLECTOR, AaveV3Gnosis_CONFIG_ENGINE as CONFIG_ENGINE, AaveV3Gnosis_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, AaveV3Gnosis_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV3Gnosis_DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Gnosis_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, AaveV3Gnosis_EMISSION_MANAGER as EMISSION_MANAGER, AaveV3Gnosis_E_MODES as E_MODES, AaveV3Gnosis_FREEZING_STEWARD as FREEZING_STEWARD, AaveV3Gnosis_ORACLE as ORACLE, AaveV3Gnosis_POOL as POOL, AaveV3Gnosis_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV3Gnosis_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV3Gnosis_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV3Gnosis_POOL_CONFIGURATOR_IMPL as POOL_CONFIGURATOR_IMPL, AaveV3Gnosis_POOL_IMPL as POOL_IMPL, AaveV3Gnosis_RATES_FACTORY as RATES_FACTORY, AaveV3Gnosis_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, AaveV3Gnosis_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV3Gnosis_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV3Gnosis_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV3Gnosis_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV3Gnosis as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, STATIC_A_TOKEN_FACTORY as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_IMPL as b, POOL_CONFIGURATOR as c, POOL_CONFIGURATOR_IMPL as d, AAVE_PROTOCOL_DATA_PROVIDER as e, ACL_MANAGER as f, ACL_ADMIN as g, DEFAULT_A_TOKEN_IMPL_REV_1 as h, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as i, DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 as j, CONFIG_ENGINE as k, POOL_ADDRESSES_PROVIDER_REGISTRY as l, UI_POOL_DATA_PROVIDER as m, WETH_GATEWAY as n, CAPS_PLUS_RISK_STEWARD as o, CHAIN_ID as p, ASSETS as q, E_MODES as r };
