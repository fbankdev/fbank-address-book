// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager} from './AaveV3.sol';
import {ICollector} from './common/ICollector.sol';

library AaveV3FantomTestnet {
  // https://testnet.ftmscan.com/address/0x783fCD4A9525D1a1339Bd2695010C0d75917e361
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0x783fCD4A9525D1a1339Bd2695010C0d75917e361);

  // https://testnet.ftmscan.com/address/0x06a5fEe1B05363D16CC44562d4980DD87BF9c9B7
  IPool internal constant POOL = IPool(0x06a5fEe1B05363D16CC44562d4980DD87BF9c9B7);

  // https://testnet.ftmscan.com/address/0xb2169507636e01c490042168450792d8e0d62A3B
  address internal constant POOL_IMPL = 0xb2169507636e01c490042168450792d8e0d62A3B;

  // https://testnet.ftmscan.com/address/0x444451946b7800f0143374EC56C5454d9f3325c6
  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x444451946b7800f0143374EC56C5454d9f3325c6);

  // https://testnet.ftmscan.com/address/0xD88aCc44343FaC3D2CD32366ea086ED57d3c55a0
  address internal constant POOL_CONFIGURATOR_IMPL = 0xD88aCc44343FaC3D2CD32366ea086ED57d3c55a0;

  // https://testnet.ftmscan.com/address/0x4598c08997BFc7EaeEaf1e35c28B19ae55aadcF4
  IAaveOracle internal constant ORACLE = IAaveOracle(0x4598c08997BFc7EaeEaf1e35c28B19ae55aadcF4);

  // https://testnet.ftmscan.com/address/0x3Bf562a2Ef5d8a31C85D8DF95CF5132147840E2A
  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0x3Bf562a2Ef5d8a31C85D8DF95CF5132147840E2A);

  // https://testnet.ftmscan.com/address/0x1Ea755183F08C1db0806CD09eC964d35E11744e7
  IACLManager internal constant ACL_MANAGER =
    IACLManager(0x1Ea755183F08C1db0806CD09eC964d35E11744e7);

  // https://testnet.ftmscan.com/address/0x9dd64152E20372B2C4D8982e2b174D0C84f07D29
  address internal constant ACL_ADMIN = 0x9dd64152E20372B2C4D8982e2b174D0C84f07D29;

  // https://testnet.ftmscan.com/address/0x00d0866D5cB4d6Fd75499891aA06304C7e4f7002
  ICollector internal constant COLLECTOR = ICollector(0x00d0866D5cB4d6Fd75499891aA06304C7e4f7002);

  // https://testnet.ftmscan.com/address/0xffB183D46A337d7fC8194ef7fb2b6bEFa4b279ab
  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0xffB183D46A337d7fC8194ef7fb2b6bEFa4b279ab;

  // https://testnet.ftmscan.com/address/0xBd956FB0d1E9D1789fFeFc867bf0Be6576B4ab6b
  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0xBd956FB0d1E9D1789fFeFc867bf0Be6576B4ab6b;

  // https://testnet.ftmscan.com/address/0xD5e460E5B1a97De2246694216DF84a72A8D4CdE7
  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0xD5e460E5B1a97De2246694216DF84a72A8D4CdE7;

  // https://testnet.ftmscan.com/address/0x23e9AE3c648372ca782FC0EEeaB09126262b4839
  address internal constant DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 =
    0x23e9AE3c648372ca782FC0EEeaB09126262b4839;

  // https://testnet.ftmscan.com/address/0x713d869b61663dfD1111A76358945D2367d19cd3
  address internal constant EMISSION_MANAGER = 0x713d869b61663dfD1111A76358945D2367d19cd3;

  // https://testnet.ftmscan.com/address/0xf33A4f06448412c1a62B32852C3270DE84225BBE
  address internal constant FAUCET = 0xf33A4f06448412c1a62B32852C3270DE84225BBE;

  // https://testnet.ftmscan.com/address/0xA190Ea3716188cb0101e033A391e3131Bc123363
  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0xA190Ea3716188cb0101e033A391e3131Bc123363;

  // https://testnet.ftmscan.com/address/0xB434c4e5d69613419ebA0136461FcDDcFDE77d15
  address internal constant UI_POOL_DATA_PROVIDER = 0xB434c4e5d69613419ebA0136461FcDDcFDE77d15;

  // https://testnet.ftmscan.com/address/0x5C1304bB8d767Dcd32EeEc56E000e397FD21a40d
  address internal constant WALLET_BALANCE_PROVIDER = 0x5C1304bB8d767Dcd32EeEc56E000e397FD21a40d;

  // https://testnet.ftmscan.com/address/0xb8e950a7903Ae1aCEde6De4062D394E79A09c822
  address internal constant WETH_GATEWAY = 0xb8e950a7903Ae1aCEde6De4062D394E79A09c822;
}

library AaveV3FantomTestnetAssets {
  // https://testnet.ftmscan.com/address/0x6861f2FC3d4C3eAD19DBC8aCe1D57e0b9D3CE3Fc
  address internal constant DAI_UNDERLYING = 0x6861f2FC3d4C3eAD19DBC8aCe1D57e0b9D3CE3Fc;

  uint8 internal constant DAI_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0xC1b4FE615953d45D39d5Bcc89d6bED210326418d
  address internal constant DAI_A_TOKEN = 0xC1b4FE615953d45D39d5Bcc89d6bED210326418d;

  // https://testnet.ftmscan.com/address/0xf5FcB58A5d7d6371701D90aa77b073B41c65A743
  address internal constant DAI_V_TOKEN = 0xf5FcB58A5d7d6371701D90aa77b073B41c65A743;

  // https://testnet.ftmscan.com/address/0xf21C5A6A45e7850283f28570E050cc763D890a09
  address internal constant DAI_S_TOKEN = 0xf21C5A6A45e7850283f28570E050cc763D890a09;

  // https://testnet.ftmscan.com/address/0xE0963d02c323f3b253c124ac1e123e7c5C6486B5
  address internal constant DAI_ORACLE = 0xE0963d02c323f3b253c124ac1e123e7c5C6486B5;

  // https://testnet.ftmscan.com/address/0x8dD8A97143a6F0aeFFdA18052FA8652f65D1CC88
  address internal constant DAI_INTEREST_RATE_STRATEGY = 0x8dD8A97143a6F0aeFFdA18052FA8652f65D1CC88;

  // https://testnet.ftmscan.com/address/0xa0Efac8263bB72a02fFE9696C69c24675b920D9B
  address internal constant LINK_UNDERLYING = 0xa0Efac8263bB72a02fFE9696C69c24675b920D9B;

  uint8 internal constant LINK_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0x8194FC6Ce5f1885ac84Fd92E4d7Aa1C85Ad5BF4F
  address internal constant LINK_A_TOKEN = 0x8194FC6Ce5f1885ac84Fd92E4d7Aa1C85Ad5BF4F;

  // https://testnet.ftmscan.com/address/0x6258e8FF2E9aFef4daF7a767573BB3D1e506a716
  address internal constant LINK_V_TOKEN = 0x6258e8FF2E9aFef4daF7a767573BB3D1e506a716;

  // https://testnet.ftmscan.com/address/0x225e31DcD8aB3Ec60eEa325D39490B059EE5fF61
  address internal constant LINK_S_TOKEN = 0x225e31DcD8aB3Ec60eEa325D39490B059EE5fF61;

  // https://testnet.ftmscan.com/address/0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5
  address internal constant LINK_ORACLE = 0x6d5689Ad4C1806D1BA0c70Ab95ebe0Da6B204fC5;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant LINK_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0xa37fFa2FC472855E16b7fE95237684C24BC05954
  address internal constant USDC_UNDERLYING = 0xa37fFa2FC472855E16b7fE95237684C24BC05954;

  uint8 internal constant USDC_DECIMALS = 6;

  // https://testnet.ftmscan.com/address/0x001E9436C5215550CfBbD520f5EEe8c9C85f1980
  address internal constant USDC_A_TOKEN = 0x001E9436C5215550CfBbD520f5EEe8c9C85f1980;

  // https://testnet.ftmscan.com/address/0xd7C74d412F5c027c69ACc5B6828B1aB3795148cf
  address internal constant USDC_V_TOKEN = 0xd7C74d412F5c027c69ACc5B6828B1aB3795148cf;

  // https://testnet.ftmscan.com/address/0xD31FDf3653826c7f02779218A02Aa67D1753d775
  address internal constant USDC_S_TOKEN = 0xD31FDf3653826c7f02779218A02Aa67D1753d775;

  // https://testnet.ftmscan.com/address/0xAce63CF9fdf96E9d45d1aCd849be79d27aEDDe00
  address internal constant USDC_ORACLE = 0xAce63CF9fdf96E9d45d1aCd849be79d27aEDDe00;

  // https://testnet.ftmscan.com/address/0xD2D34D0f2c3B659eB0f5bE22BDCd0db73d11e914
  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0xD2D34D0f2c3B659eB0f5bE22BDCd0db73d11e914;

  // https://testnet.ftmscan.com/address/0x142943f1294e3b2D2feBb1515ED415C229D62235
  address internal constant WBTC_UNDERLYING = 0x142943f1294e3b2D2feBb1515ED415C229D62235;

  uint8 internal constant WBTC_DECIMALS = 8;

  // https://testnet.ftmscan.com/address/0xeDAEAD24fC8D91D71454f933E609Ca806EF15113
  address internal constant WBTC_A_TOKEN = 0xeDAEAD24fC8D91D71454f933E609Ca806EF15113;

  // https://testnet.ftmscan.com/address/0xf7674C98aC415bce5606b42a5862eB49aF11F44D
  address internal constant WBTC_V_TOKEN = 0xf7674C98aC415bce5606b42a5862eB49aF11F44D;

  // https://testnet.ftmscan.com/address/0xB6FE930b96fAD408F48c3997959505c95C267bBa
  address internal constant WBTC_S_TOKEN = 0xB6FE930b96fAD408F48c3997959505c95C267bBa;

  // https://testnet.ftmscan.com/address/0x65E8d79f3e8e36fE48eC31A2ae935e92F5bBF529
  address internal constant WBTC_ORACLE = 0x65E8d79f3e8e36fE48eC31A2ae935e92F5bBF529;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant WBTC_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0xa2E42c48Fd8C5f1297A4c9E022B84a0323b3A8c1
  address internal constant WETH_UNDERLYING = 0xa2E42c48Fd8C5f1297A4c9E022B84a0323b3A8c1;

  uint8 internal constant WETH_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0x7510A9fa0823e9A0c918d65F166C764660E29332
  address internal constant WETH_A_TOKEN = 0x7510A9fa0823e9A0c918d65F166C764660E29332;

  // https://testnet.ftmscan.com/address/0x01f929c291C23Eee1ACeFa45Bb01373d62CB4dB7
  address internal constant WETH_V_TOKEN = 0x01f929c291C23Eee1ACeFa45Bb01373d62CB4dB7;

  // https://testnet.ftmscan.com/address/0xc44C742d489803Dc312f07C0A6C2ea3C9C9ad674
  address internal constant WETH_S_TOKEN = 0xc44C742d489803Dc312f07C0A6C2ea3C9C9ad674;

  // https://testnet.ftmscan.com/address/0xB8C458C957a6e6ca7Cc53eD95bEA548c52AFaA24
  address internal constant WETH_ORACLE = 0xB8C458C957a6e6ca7Cc53eD95bEA548c52AFaA24;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant WETH_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0x81ab38C23007E209d6849516cca4666C3C73F57C
  address internal constant USDT_UNDERLYING = 0x81ab38C23007E209d6849516cca4666C3C73F57C;

  uint8 internal constant USDT_DECIMALS = 6;

  // https://testnet.ftmscan.com/address/0xbE3465382CFceF9E755A581D3242606A8594A11f
  address internal constant USDT_A_TOKEN = 0xbE3465382CFceF9E755A581D3242606A8594A11f;

  // https://testnet.ftmscan.com/address/0x8a36DBb538Baf2D75954d4da4Ea3c4A62df1299a
  address internal constant USDT_V_TOKEN = 0x8a36DBb538Baf2D75954d4da4Ea3c4A62df1299a;

  // https://testnet.ftmscan.com/address/0x902735686C2Df3a4C73d5C195D9bfc9f47c5bFf0
  address internal constant USDT_S_TOKEN = 0x902735686C2Df3a4C73d5C195D9bfc9f47c5bFf0;

  // https://testnet.ftmscan.com/address/0x9BB8A6dcD83E36726Cc230a97F1AF8a84ae5F128
  address internal constant USDT_ORACLE = 0x9BB8A6dcD83E36726Cc230a97F1AF8a84ae5F128;

  // https://testnet.ftmscan.com/address/0xD2D34D0f2c3B659eB0f5bE22BDCd0db73d11e914
  address internal constant USDT_INTEREST_RATE_STRATEGY =
    0xD2D34D0f2c3B659eB0f5bE22BDCd0db73d11e914;

  // https://testnet.ftmscan.com/address/0xC13667568994e2e4Ff2292e284abb87F372FA683
  address internal constant AAVE_UNDERLYING = 0xC13667568994e2e4Ff2292e284abb87F372FA683;

  uint8 internal constant AAVE_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0xE0E8eC1679DfdBD5bEd541085a9b534F9c0E9706
  address internal constant AAVE_A_TOKEN = 0xE0E8eC1679DfdBD5bEd541085a9b534F9c0E9706;

  // https://testnet.ftmscan.com/address/0x6D3c9fAcD5D3d3290B01f451f6B2663442736e1A
  address internal constant AAVE_V_TOKEN = 0x6D3c9fAcD5D3d3290B01f451f6B2663442736e1A;

  // https://testnet.ftmscan.com/address/0x0Fe892D01b59d5D2B58d042fc3dC5cC0c23a8a33
  address internal constant AAVE_S_TOKEN = 0x0Fe892D01b59d5D2B58d042fc3dC5cC0c23a8a33;

  // https://testnet.ftmscan.com/address/0x32F17e6dDfB0a5b8BE8375b2C0585EEd8569c817
  address internal constant AAVE_ORACLE = 0x32F17e6dDfB0a5b8BE8375b2C0585EEd8569c817;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant AAVE_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0xedBFeF5fD7b000bE55637606423642830a61c8Ed
  address internal constant WFTM_UNDERLYING = 0xedBFeF5fD7b000bE55637606423642830a61c8Ed;

  uint8 internal constant WFTM_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0xb2Fd1A598A6d02fbbFA0da80fA9233F4a0c561f9
  address internal constant WFTM_A_TOKEN = 0xb2Fd1A598A6d02fbbFA0da80fA9233F4a0c561f9;

  // https://testnet.ftmscan.com/address/0x41F8120Ea3159315c936e2A0e1A6b800c4A85077
  address internal constant WFTM_V_TOKEN = 0x41F8120Ea3159315c936e2A0e1A6b800c4A85077;

  // https://testnet.ftmscan.com/address/0x8a1F47BCBA26dF2A021e09271849a1fa4B3216ae
  address internal constant WFTM_S_TOKEN = 0x8a1F47BCBA26dF2A021e09271849a1fa4B3216ae;

  // https://testnet.ftmscan.com/address/0xe04676B9A9A2973BCb0D1478b5E1E9098BBB7f3D
  address internal constant WFTM_ORACLE = 0xe04676B9A9A2973BCb0D1478b5E1E9098BBB7f3D;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant WFTM_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0x6393e126E751fCBd25AFbC9b070b85936897Bec8
  address internal constant CRV_UNDERLYING = 0x6393e126E751fCBd25AFbC9b070b85936897Bec8;

  uint8 internal constant CRV_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0x3661c61689A26186bf213597d38Dd98291b10Bd1
  address internal constant CRV_A_TOKEN = 0x3661c61689A26186bf213597d38Dd98291b10Bd1;

  // https://testnet.ftmscan.com/address/0x2e0c750519d464d3a77261E6EE7e274bB4B4C44b
  address internal constant CRV_V_TOKEN = 0x2e0c750519d464d3a77261E6EE7e274bB4B4C44b;

  // https://testnet.ftmscan.com/address/0x4CE2cb5Af0a0f3A6b6855761274350d629c37a80
  address internal constant CRV_S_TOKEN = 0x4CE2cb5Af0a0f3A6b6855761274350d629c37a80;

  // https://testnet.ftmscan.com/address/0x4BdBbDd78e4a2a1a484fBd7E97652ba8069944DB
  address internal constant CRV_ORACLE = 0x4BdBbDd78e4a2a1a484fBd7E97652ba8069944DB;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant CRV_INTEREST_RATE_STRATEGY = 0x068dbC464BaeB7005FEbef698aD934715FF0234b;

  // https://testnet.ftmscan.com/address/0xeA11DB46501aD66c16aB86B9A53d6fcD83B44f05
  address internal constant SUSHI_UNDERLYING = 0xeA11DB46501aD66c16aB86B9A53d6fcD83B44f05;

  uint8 internal constant SUSHI_DECIMALS = 18;

  // https://testnet.ftmscan.com/address/0xd5230f4ff837Cd5DB465587d7370DeF79Da17e05
  address internal constant SUSHI_A_TOKEN = 0xd5230f4ff837Cd5DB465587d7370DeF79Da17e05;

  // https://testnet.ftmscan.com/address/0x6a72646D3C5ED178671CF9BAAF533F3b2DFA2E12
  address internal constant SUSHI_V_TOKEN = 0x6a72646D3C5ED178671CF9BAAF533F3b2DFA2E12;

  // https://testnet.ftmscan.com/address/0xEbb0ad36ce8076788f12E6835c1E2DCacC74ED81
  address internal constant SUSHI_S_TOKEN = 0xEbb0ad36ce8076788f12E6835c1E2DCacC74ED81;

  // https://testnet.ftmscan.com/address/0xbBF5EA54B78da8095462b98d057A2b56FbE18893
  address internal constant SUSHI_ORACLE = 0xbBF5EA54B78da8095462b98d057A2b56FbE18893;

  // https://testnet.ftmscan.com/address/0x068dbC464BaeB7005FEbef698aD934715FF0234b
  address internal constant SUSHI_INTEREST_RATE_STRATEGY =
    0x068dbC464BaeB7005FEbef698aD934715FF0234b;
}

library AaveV3FantomTestnetEModes {
  uint8 internal constant NONE = 0;

  uint8 internal constant STABLECOINS = 1;
}
