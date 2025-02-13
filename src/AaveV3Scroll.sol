// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager} from './AaveV3.sol';
import {ICollector} from './common/ICollector.sol';

library AaveV3Scroll {
  // https://scrollscan.com/address/0x69850D0B276776781C063771b161bd8894BCdD04
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0x69850D0B276776781C063771b161bd8894BCdD04);

  // https://scrollscan.com/address/0x11fCfe756c05AD438e312a7fd934381537D3cFfe
  IPool internal constant POOL = IPool(0x11fCfe756c05AD438e312a7fd934381537D3cFfe);

  // https://scrollscan.com/address/0x0c448B78A77d901f79F6afFD476aa7e761421cC1
  address internal constant POOL_IMPL = 0x0c448B78A77d901f79F6afFD476aa7e761421cC1;

  // https://scrollscan.com/address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f
  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f);

  // https://scrollscan.com/address/0xBFDDF25621d9d5543bDfa9e8a89bD546c5eE8cff
  address internal constant POOL_CONFIGURATOR_IMPL = 0xBFDDF25621d9d5543bDfa9e8a89bD546c5eE8cff;

  // https://scrollscan.com/address/0x04421D8C506E2fA2371a08EfAaBf791F624054F3
  IAaveOracle internal constant ORACLE = IAaveOracle(0x04421D8C506E2fA2371a08EfAaBf791F624054F3);

  // https://scrollscan.com/address/0xa99F4E69acF23C6838DE90dD1B5c02EA928A53ee
  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0xa99F4E69acF23C6838DE90dD1B5c02EA928A53ee);

  // https://scrollscan.com/address/0x7633F981D87dC6307227de9383D2ce7243158081
  IACLManager internal constant ACL_MANAGER =
    IACLManager(0x7633F981D87dC6307227de9383D2ce7243158081);

  // https://scrollscan.com/address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24
  address internal constant ACL_ADMIN = 0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24;

  // https://scrollscan.com/address/0x90eB541e1a431D8a30ED85A77675D1F001128cb5
  ICollector internal constant COLLECTOR = ICollector(0x90eB541e1a431D8a30ED85A77675D1F001128cb5);

  // https://scrollscan.com/address/0xa3f3100C4f1D0624DB9DB97b40C13885Ce297799
  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0xa3f3100C4f1D0624DB9DB97b40C13885Ce297799;

  // https://scrollscan.com/address/0x92EDe4ABd9df4Bfb49b4d723e4c932e35c47C54C
  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0x92EDe4ABd9df4Bfb49b4d723e4c932e35c47C54C;

  // https://scrollscan.com/address/0x49bA16C08130FF8cFADE263B49387A8555bc057B
  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0x49bA16C08130FF8cFADE263B49387A8555bc057B;

  // https://scrollscan.com/address/0x8Ff5f08EDB2E5e1A51bd14d0494320bdB436a149
  address internal constant DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 =
    0x8Ff5f08EDB2E5e1A51bd14d0494320bdB436a149;

  // https://scrollscan.com/address/0x6091546836DAe0487A50E300da3F237727441D90
  address internal constant EMISSION_MANAGER = 0x6091546836DAe0487A50E300da3F237727441D90;

  // https://scrollscan.com/address/0x8714E5ED2d8edD4E88eFf66637C3FE8eCf2B8C40
  address internal constant L2_ENCODER = 0x8714E5ED2d8edD4E88eFf66637C3FE8eCf2B8C40;

  // https://scrollscan.com/address/0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e
  address internal constant CAPS_PLUS_RISK_STEWARD = 0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e;

  // https://scrollscan.com/address/0xc68D0C511076283075bD5cc9aA61E43673135f37
  address internal constant FREEZING_STEWARD = 0xc68D0C511076283075bD5cc9aA61E43673135f37;

  // https://scrollscan.com/address/0x9CBC05104c3ff7EC0885770911a0828C40fd0a32
  address internal constant CONFIG_ENGINE = 0x9CBC05104c3ff7EC0885770911a0828C40fd0a32;

  // https://scrollscan.com/address/0xFBedc64AeE24921cb43004312B9eF367a4162b57
  address internal constant POOL_ADDRESSES_PROVIDER_REGISTRY =
    0xFBedc64AeE24921cb43004312B9eF367a4162b57;

  // https://scrollscan.com/address/0xe48fb34452FaE3Cd5d906F748490FBE16c3Ce31b
  address internal constant RATES_FACTORY = 0xe48fb34452FaE3Cd5d906F748490FBE16c3Ce31b;

  // https://scrollscan.com/address/0x37A2f0b0b5FC33999e3E7fdECcFAe1e894fF9b07
  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0x37A2f0b0b5FC33999e3E7fdECcFAe1e894fF9b07;

  // https://scrollscan.com/address/0x639c4ae31A02D54d66A9c696c63404BCa8B2734C
  address internal constant UI_POOL_DATA_PROVIDER = 0x639c4ae31A02D54d66A9c696c63404BCa8B2734C;

  // https://scrollscan.com/address/0xE51642875Af07Fea1B03d821E41a9DB24bC4447E
  address internal constant WALLET_BALANCE_PROVIDER = 0xE51642875Af07Fea1B03d821E41a9DB24bC4447E;

  // https://scrollscan.com/address/0xFF75A4B698E3Ec95E608ac0f22A03B8368E05F5D
  address internal constant WETH_GATEWAY = 0xFF75A4B698E3Ec95E608ac0f22A03B8368E05F5D;

  // https://scrollscan.com/address/0x970b77b96D94966939a8F867c2BfC2aC0310C0e7
  address internal constant STATIC_A_TOKEN_FACTORY = 0x970b77b96D94966939a8F867c2BfC2aC0310C0e7;
}

library AaveV3ScrollAssets {
  // https://scrollscan.com/address/0x5300000000000000000000000000000000000004
  address internal constant WETH_UNDERLYING = 0x5300000000000000000000000000000000000004;

  uint8 internal constant WETH_DECIMALS = 18;

  // https://scrollscan.com/address/0xf301805bE1Df81102C957f6d4Ce29d2B8c056B2a
  address internal constant WETH_A_TOKEN = 0xf301805bE1Df81102C957f6d4Ce29d2B8c056B2a;

  // https://scrollscan.com/address/0xfD7344CeB1Df9Cf238EcD667f4A6F99c6Ef44a56
  address internal constant WETH_V_TOKEN = 0xfD7344CeB1Df9Cf238EcD667f4A6F99c6Ef44a56;

  // https://scrollscan.com/address/0x117d9cF336287F46DBE509a43925cFF115Aa563c
  address internal constant WETH_S_TOKEN = 0x117d9cF336287F46DBE509a43925cFF115Aa563c;

  // https://scrollscan.com/address/0x6bF14CB0A831078629D993FDeBcB182b21A8774C
  address internal constant WETH_ORACLE = 0x6bF14CB0A831078629D993FDeBcB182b21A8774C;

  // https://scrollscan.com/address/0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05
  address internal constant WETH_INTEREST_RATE_STRATEGY =
    0xD828F2f9Da85b190721797bEaD5Eb0acC4150f05;

  // https://scrollscan.com/address/0x6b9DfaC194fa78a1882680E2cE19194D006AeEfd
  address internal constant WETH_STATA_TOKEN = 0x6b9DfaC194fa78a1882680E2cE19194D006AeEfd;

  // https://scrollscan.com/address/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4
  address internal constant USDC_UNDERLYING = 0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4;

  uint8 internal constant USDC_DECIMALS = 6;

  // https://scrollscan.com/address/0x1D738a3436A8C49CefFbaB7fbF04B660fb528CbD
  address internal constant USDC_A_TOKEN = 0x1D738a3436A8C49CefFbaB7fbF04B660fb528CbD;

  // https://scrollscan.com/address/0x3d2E209af5BFa79297C88D6b57F89d792F6E28EE
  address internal constant USDC_V_TOKEN = 0x3d2E209af5BFa79297C88D6b57F89d792F6E28EE;

  // https://scrollscan.com/address/0x59F359aA263f7Ac09876E869AF1F75b558904ed4
  address internal constant USDC_S_TOKEN = 0x59F359aA263f7Ac09876E869AF1F75b558904ed4;

  // https://scrollscan.com/address/0x43d12Fb3AfCAd5347fA764EeAB105478337b7200
  address internal constant USDC_ORACLE = 0x43d12Fb3AfCAd5347fA764EeAB105478337b7200;

  // https://scrollscan.com/address/0x9205B37978aC983A297dFB53b3f3D2cCC7DDDADa
  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0x9205B37978aC983A297dFB53b3f3D2cCC7DDDADa;

  // https://scrollscan.com/address/0x9fA123bC7E6b61cC8a9D893673a4C6E5392FF4A7
  address internal constant USDC_STATA_TOKEN = 0x9fA123bC7E6b61cC8a9D893673a4C6E5392FF4A7;

  // https://scrollscan.com/address/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32
  address internal constant wstETH_UNDERLYING = 0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32;

  uint8 internal constant wstETH_DECIMALS = 18;

  // https://scrollscan.com/address/0x5B1322eeb46240b02e20062b8F0F9908d525B09c
  address internal constant wstETH_A_TOKEN = 0x5B1322eeb46240b02e20062b8F0F9908d525B09c;

  // https://scrollscan.com/address/0x8a035644322129800C3f747f54Db0F4d3c0A2877
  address internal constant wstETH_V_TOKEN = 0x8a035644322129800C3f747f54Db0F4d3c0A2877;

  // https://scrollscan.com/address/0x18e3f125ce85e8D65AD2bb4f6b5fff110772A078
  address internal constant wstETH_S_TOKEN = 0x18e3f125ce85e8D65AD2bb4f6b5fff110772A078;

  // https://scrollscan.com/address/0xdb93e2712a8B36835078f8D28c70fCC95FD6d37c
  address internal constant wstETH_ORACLE = 0xdb93e2712a8B36835078f8D28c70fCC95FD6d37c;

  // https://scrollscan.com/address/0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8
  address internal constant wstETH_INTEREST_RATE_STRATEGY =
    0xCB032D7e38a10503c0b2F9f7bE8c1A81bBBEe2A8;

  // https://scrollscan.com/address/0x6e368c4dBf083e18a29aE63FC06AF9deDb3242F0
  address internal constant wstETH_STATA_TOKEN = 0x6e368c4dBf083e18a29aE63FC06AF9deDb3242F0;
}

library AaveV3ScrollEModes {
  uint8 internal constant NONE = 0;

  uint8 internal constant ETH_CORRELATED = 1;
}
