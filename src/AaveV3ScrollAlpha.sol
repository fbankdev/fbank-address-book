// SPDX-License-Identifier: MIT
// AUTOGENERATED - DON'T MANUALLY CHANGE
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager} from './AaveV3.sol';
import {ICollector} from './common/ICollector.sol';

library AaveV3ScrollAlpha {
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0xCA35Ae4cc948Dae8a1d3C77ed1C5CBC2e73b290D);

  IPool internal constant POOL = IPool(0x556345b249008Bf2f52B7097ceB5bE798F32dAe9);

  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x88A4811E6009ad13EA879261806E5a6071F3F788);

  IAaveOracle internal constant ORACLE = IAaveOracle(0x269D5C1854fcA3bede6BFc8935118c99020b13f0);

  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0x36002d10bB238594c58aec104620555a545D517C);

  IACLManager internal constant ACL_MANAGER =
    IACLManager(0x550CC76fD6C4E4502cB4F79f26ee15f4E4681D57);

  address internal constant ACL_ADMIN = 0x8A52430a0a83d2bA00A88758340e4b640BDfC4FC;

  ICollector internal constant COLLECTOR = ICollector(0x500A5dc53fD22bdBBe37bE9cc00cB67F24e233d1);

  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0x318101F73b388C73b5A2Da39B4De54f335D77A0D;

  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0xf7798f65d3d1A1Af1a68d8B4322638559A47bC83;

  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0xF087700794eb98b193D8f95fFEc0E1a02e195e28;

  address internal constant DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 =
    0x2bb98A7F11a81AE07443f192Daae04f815F2c878;

  address internal constant EMISSION_MANAGER = 0x41A9A5615a912E47F99e16484880009c7c65707b;

  address internal constant WETH_GATEWAY = 0x410Fda971c841Aaf34be5F5539b40503c7F12AC2;

  address internal constant FAUCET = 0x55530C4E1ADFf14cB5760C6750FeBFbEB57E6753;

  address internal constant WALLET_BALANCE_PROVIDER = 0x2B45F4A959B5Fc8fc22b457424685f17eDae4592;

  address internal constant UI_POOL_DATA_PROVIDER = 0x45dFc7A61AD24918C9315733223fD1e55E9B2B59;

  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0x109e475c0Bf9E525dABB65A4Aec07c1e65100a99;

  address internal constant L2_ENCODER = 0x997a8208902e1259dDf676Eb37FeD31A2f77110B;
}

library AaveV3ScrollAlphaAssets {
  address internal constant DAI_UNDERLYING = 0x205edEEC21A0a1714303Db43B194472E9c333e02;

  address internal constant DAI_A_TOKEN = 0x6004C88A275f0061Bdd36A222973DD2827533dd4;

  address internal constant DAI_V_TOKEN = 0xc1A8534361736339D621bFFf46E68898Fa84AAb1;

  address internal constant DAI_S_TOKEN = 0x1d503b25FC152c0cDAcB317C9D5984275B7495c1;

  address internal constant DAI_ORACLE = 0xCdFA88eC7df0b778D58Aca386c7B84A436B35776;

  address internal constant DAI_INTEREST_RATE_STRATEGY = 0x2Ce936710914EFCEA27e4115bb146b936DC0f650;

  address internal constant LINK_UNDERLYING = 0x85bD64C4Aefb75301687709F534A2d5873871520;

  address internal constant LINK_A_TOKEN = 0x4a61D23C162353087d0f3F6Bc748266fBCbda3A8;

  address internal constant LINK_V_TOKEN = 0x99DAd76C321E80a377d5AA3dF4E3d7a89b3C771a;

  address internal constant LINK_S_TOKEN = 0xF9224B1D829f52614840988301C87E9007BACd85;

  address internal constant LINK_ORACLE = 0xE8aDE5dae896462F337f2Da191Bd2148804F0276;

  address internal constant LINK_INTEREST_RATE_STRATEGY =
    0x065738983f136949234563FEd48E39A997030D85;

  address internal constant USDC_UNDERLYING = 0x76C362E76e38dC252C97669dD325AEe9825cDA11;

  address internal constant USDC_A_TOKEN = 0xAA03E630B4a04E8E5C29C32ffA30CA010A71F247;

  address internal constant USDC_V_TOKEN = 0xafC5F34e343a843d226fea45593Ac47Ab485A84E;

  address internal constant USDC_S_TOKEN = 0x1F7Aae5c76E83F90064D2B263d0984F92b22F000;

  address internal constant USDC_ORACLE = 0x5B6251FaD5DDd68df9dE850748eDa70e7d968cdc;

  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0x28a82D2dED27924C7de412D21d738Aa728be39A3;

  address internal constant WBTC_UNDERLYING = 0x8990Bd37Dd5136Fde6bB4669AA19a81A20bb3Ce9;

  address internal constant WBTC_A_TOKEN = 0x74c58C52286852C3281f3D6677bc1F3500A8c8E7;

  address internal constant WBTC_V_TOKEN = 0xf8C39283C015C3c8DF2EA46E7E60D7ff7B0d8598;

  address internal constant WBTC_S_TOKEN = 0xc8AB69D05cDAA1d24588EAC0237af1096840d9A3;

  address internal constant WBTC_ORACLE = 0xD2a08f290D16d20A1FC06D8875f6a3A0154bC500;

  address internal constant WBTC_INTEREST_RATE_STRATEGY =
    0x065738983f136949234563FEd48E39A997030D85;

  address internal constant WETH_UNDERLYING = 0xd66f3780ad7E3B0a4eE6888C8daA413084cb918e;

  address internal constant WETH_A_TOKEN = 0x0C7d4e7f047f03024E256b1E40a2F7A909d357d4;

  address internal constant WETH_V_TOKEN = 0x2D05E81d9728580c6fD401bF6dA45bFf6dCb9cD4;

  address internal constant WETH_S_TOKEN = 0x5887d4DD49Fe62caF0DB8F48EC4345511E04d941;

  address internal constant WETH_ORACLE = 0x331BE1348a299C8F27B84B92bF295d7Ca2612681;

  address internal constant WETH_INTEREST_RATE_STRATEGY =
    0x065738983f136949234563FEd48E39A997030D85;

  address internal constant USDT_UNDERLYING = 0x42AAcEe34b513bAfE6aae8d01fbfef663A99358A;

  address internal constant USDT_A_TOKEN = 0x2e03E909F8E03db9A39b6e3C79371D2e3b231b6C;

  address internal constant USDT_V_TOKEN = 0x4DbF835003d098Aed2248D19129E577a50040EFB;

  address internal constant USDT_S_TOKEN = 0xD62D2fa983494ee14d834115D8a0Ff7981FEA1ea;

  address internal constant USDT_ORACLE = 0xbac572271E4835e6Ce24d946aE8eCAD0df0Cd72d;

  address internal constant USDT_INTEREST_RATE_STRATEGY =
    0x28a82D2dED27924C7de412D21d738Aa728be39A3;

  address internal constant AAVE_UNDERLYING = 0x88BBf180e9Ec1E6b2EaDC46Af08126B13aa4341D;

  address internal constant AAVE_A_TOKEN = 0x08Acd2a4dCc1A64818aEbE7fa8941959A9E0C888;

  address internal constant AAVE_V_TOKEN = 0x4AaE5D39e7C218BF19Afb724e54F09bbbe07533F;

  address internal constant AAVE_S_TOKEN = 0xd77baf9Ce960E82f6449383F8100EE6cecaB6528;

  address internal constant AAVE_ORACLE = 0x1E300579B7E7fcD55FF05D6ca2f4A5e6b54032f3;

  address internal constant AAVE_INTEREST_RATE_STRATEGY =
    0x065738983f136949234563FEd48E39A997030D85;

  address internal constant EURS_UNDERLYING = 0xfa0ad75290bB958057675b006048bcD510324fe7;

  address internal constant EURS_A_TOKEN = 0x1Ce817F871eC625d6AA9F1610B954e53c151752F;

  address internal constant EURS_V_TOKEN = 0x72917E3AB14DF5074213ab4A79Ee8D536924327E;

  address internal constant EURS_S_TOKEN = 0x8eDBBAA98636827CC05B958e2274aefc380A9081;

  address internal constant EURS_ORACLE = 0x194E61390a189fFA7F98c1c3233573152b83FcdA;

  address internal constant EURS_INTEREST_RATE_STRATEGY =
    0x28a82D2dED27924C7de412D21d738Aa728be39A3;
}
