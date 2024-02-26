declare const POOL_ADDRESSES_PROVIDER = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5";
declare const POOL = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";
declare const POOL_CONFIGURATOR = "0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756";
declare const ORACLE = "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9";
declare const LENDING_RATE_ORACLE = "0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d";
declare const POOL_ADMIN = "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A";
declare const EMERGENCY_ADMIN = "0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633";
declare const COLLECTOR = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5";
declare const EMISSION_MANAGER = "0xEE56e2B3D491590B5b31738cC34d5232F378a8D5";
declare const LENDING_POOL_COLLATERAL_MANAGER = "0x368e6441bB27159c6e8e6d3bbd9147BEcBA915E3";
declare const DEBT_SWAP_ADAPTER = "0x6A6FA664D4Fa49a6a780a1D6143f079f8dd7C33d";
declare const CONFIG_ENGINE = "0x9eCed0293e7B73CFf4a2b4F9C82aAc8346158bd9";
declare const MIGRATION_HELPER = "0xB748952c7BC638F31775245964707Bcc5DDFabFC";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413";
declare const RATES_FACTORY = "0xbD37610BBB1ddc2a22797F7e3f531B59902b7bA7";
declare const REPAY_WITH_COLLATERAL_ADAPTER = "0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6";
declare const SWAP_COLLATERAL_ADAPTER = "0x135896DE8421be2ec868E0b811006171D9df802A";
declare const UI_INCENTIVE_DATA_PROVIDER = "0xD01ab9a6577E1D84F142e44D49380e23A340387d";
declare const UI_POOL_DATA_PROVIDER = "0x00e50FAB64eBB37b87df06Aa46b8B35d5f1A4e1A";
declare const WALLET_BALANCE_PROVIDER = "0x8E8dAd5409E0263a51C0aB5055dA66Be28cFF922";
declare const WETH_GATEWAY = "0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24";
declare const CHAIN_ID = 1;
declare const ASSETS: {
    readonly USDT: {
        readonly UNDERLYING: "0xdAC17F958D2ee523a2206206994597C13D831ec7";
        readonly decimals: 6;
        readonly A_TOKEN: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811";
        readonly S_TOKEN: "0xe91D55AB2240594855aBd11b3faAE801Fd4c4687";
        readonly V_TOKEN: "0x531842cEbbdD378f8ee36D171d6cC9C4fcf475Ec";
        readonly INTEREST_RATE_STRATEGY: "0xF02EC9CA513ca505f0F5347E7D784Fa6165F8a99";
        readonly ORACLE: "0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46";
    };
    readonly WBTC: {
        readonly UNDERLYING: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
        readonly decimals: 8;
        readonly A_TOKEN: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656";
        readonly S_TOKEN: "0x51B039b9AFE64B78758f8Ef091211b5387eA717c";
        readonly V_TOKEN: "0x9c39809Dec7F95F5e0713634a4D0701329B3b4d2";
        readonly INTEREST_RATE_STRATEGY: "0x32f3A6134590fc2d9440663d35a2F0a6265F04c4";
        readonly ORACLE: "0xFD858c8bC5ac5e10f01018bC78471bb0DC392247";
    };
    readonly WETH: {
        readonly UNDERLYING: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        readonly decimals: 18;
        readonly A_TOKEN: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e";
        readonly S_TOKEN: "0x4e977830ba4bd783C0BB7F15d3e243f73FF57121";
        readonly V_TOKEN: "0xF63B34710400CAd3e044cFfDcAb00a0f32E33eCf";
        readonly INTEREST_RATE_STRATEGY: "0xb8975328Aa52c00B9Ec1e11e518C4900f2e6C62a";
        readonly ORACLE: "0x0000000000000000000000000000000000000000";
    };
    readonly YFI: {
        readonly UNDERLYING: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";
        readonly decimals: 18;
        readonly A_TOKEN: "0x5165d24277cD063F5ac44Efd447B27025e888f37";
        readonly S_TOKEN: "0xca823F78C2Dd38993284bb42Ba9b14152082F7BD";
        readonly V_TOKEN: "0x7EbD09022Be45AD993BAA1CEc61166Fcc8644d97";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x7c5d4F8345e66f68099581Db340cd65B078C41f4";
    };
    readonly ZRX: {
        readonly UNDERLYING: "0xE41d2489571d322189246DaFA5ebDe1F4699F498";
        readonly decimals: 18;
        readonly A_TOKEN: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e";
        readonly S_TOKEN: "0x071B4323a24E73A5afeEbe34118Cd21B8FAAF7C3";
        readonly V_TOKEN: "0x85791D117A392097590bDeD3bD5abB8d5A20491A";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x2Da4983a622a8498bb1a21FaE9D8F6C664939962";
    };
    readonly UNI: {
        readonly UNDERLYING: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
        readonly decimals: 18;
        readonly A_TOKEN: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1";
        readonly S_TOKEN: "0xD939F7430dC8D5a427f156dE1012A56C18AcB6Aa";
        readonly V_TOKEN: "0x5BdB050A92CADcCfCDcCCBFC17204a1C9cC0Ab73";
        readonly INTEREST_RATE_STRATEGY: "0x87cCa171a2125efca9868F9Bc1FfD7B7c80dC5a3";
        readonly ORACLE: "0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e";
    };
    readonly AAVE: {
        readonly UNDERLYING: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
        readonly decimals: 18;
        readonly A_TOKEN: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B";
        readonly S_TOKEN: "0x079D6a3E844BcECf5720478A718Edb6575362C5f";
        readonly V_TOKEN: "0xF7DBA49d571745D9d7fcb56225B05BEA803EBf3C";
        readonly INTEREST_RATE_STRATEGY: "0xd4cA26F2496195C4F886D464D8578368236bB747";
        readonly ORACLE: "0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012";
    };
    readonly BAT: {
        readonly UNDERLYING: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF";
        readonly decimals: 18;
        readonly A_TOKEN: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1";
        readonly S_TOKEN: "0x277f8676FAcf4dAA5a6EA38ba511B7F65AA02f9F";
        readonly V_TOKEN: "0xfc218A6Dfe6901CB34B1a5281FC6f1b8e7E56877";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x0d16d4528239e9ee52fa531af613AcdB23D88c94";
    };
    readonly BUSD: {
        readonly UNDERLYING: "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
        readonly decimals: 18;
        readonly A_TOKEN: "0xA361718326c15715591c299427c62086F69923D9";
        readonly S_TOKEN: "0x4A7A63909A72D268b1D8a93a9395d098688e0e5C";
        readonly V_TOKEN: "0xbA429f7011c9fa04cDd46a2Da24dc0FF0aC6099c";
        readonly INTEREST_RATE_STRATEGY: "0xF1AafF9a4Da6Bf4Fb8fc18d39C8ffdafbAACce69";
        readonly ORACLE: "0x614715d2Af89E6EC99A233818275142cE88d1Cfd";
    };
    readonly DAI: {
        readonly UNDERLYING: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        readonly decimals: 18;
        readonly A_TOKEN: "0x028171bCA77440897B824Ca71D1c56caC55b68A3";
        readonly S_TOKEN: "0x778A13D3eeb110A4f7bb6529F99c000119a08E92";
        readonly V_TOKEN: "0x6C3c78838c761c6Ac7bE9F59fe808ea2A6E4379d";
        readonly INTEREST_RATE_STRATEGY: "0xab7f8ca781C736EB624A9E321cd043F8E6292C96";
        readonly ORACLE: "0x773616E4d11A78F511299002da57A0a94577F1f4";
    };
    readonly ENJ: {
        readonly UNDERLYING: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c";
        readonly decimals: 18;
        readonly A_TOKEN: "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef";
        readonly S_TOKEN: "0x943DcCA156b5312Aa24c1a08769D67FEce4ac14C";
        readonly V_TOKEN: "0x38995F292a6E31b78203254fE1cdd5Ca1010A446";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x24D9aB51950F3d62E9144fdC2f3135DAA6Ce8D1B";
    };
    readonly KNC: {
        readonly UNDERLYING: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200";
        readonly decimals: 18;
        readonly A_TOKEN: "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA";
        readonly S_TOKEN: "0x9915dfb872778B2890a117DA1F35F335eb06B54f";
        readonly V_TOKEN: "0x6B05D1c608015Ccb8e205A690cB86773A96F39f1";
        readonly INTEREST_RATE_STRATEGY: "0xeB65a3163Fd8900F4fE9a044e18966706b69A74D";
        readonly ORACLE: "0x656c0544eF4C98A6a98491833A89204Abb045d6b";
    };
    readonly LINK: {
        readonly UNDERLYING: "0x514910771AF9Ca656af840dff83E8264EcF986CA";
        readonly decimals: 18;
        readonly A_TOKEN: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0";
        readonly S_TOKEN: "0xFB4AEc4Cc858F2539EBd3D37f2a43eAe5b15b98a";
        readonly V_TOKEN: "0x0b8f12b1788BFdE65Aa1ca52E3e9F3Ba401be16D";
        readonly INTEREST_RATE_STRATEGY: "0xED6547b83276B076B771B88FcCbD68BDeDb3927f";
        readonly ORACLE: "0xDC530D9457755926550b59e8ECcdaE7624181557";
    };
    readonly MANA: {
        readonly UNDERLYING: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942";
        readonly decimals: 18;
        readonly A_TOKEN: "0xa685a61171bb30d4072B338c80Cb7b2c865c873E";
        readonly S_TOKEN: "0xD86C74eA2224f4B8591560652b50035E4e5c0a3b";
        readonly V_TOKEN: "0x0A68976301e46Ca6Ce7410DB28883E309EA0D352";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x82A44D92D6c329826dc557c5E1Be6ebeC5D5FeB9";
    };
    readonly MKR: {
        readonly UNDERLYING: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
        readonly decimals: 18;
        readonly A_TOKEN: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88";
        readonly S_TOKEN: "0xC01C8E4b12a89456a9fD4e4e75B72546Bf53f0B5";
        readonly V_TOKEN: "0xba728eAd5e496BE00DCF66F650b6d7758eCB50f8";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2";
    };
    readonly REN: {
        readonly UNDERLYING: "0x408e41876cCCDC0F92210600ef50372656052a38";
        readonly decimals: 18;
        readonly A_TOKEN: "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a";
        readonly S_TOKEN: "0x3356Ec1eFA75d9D150Da1EC7d944D9EDf73703B7";
        readonly V_TOKEN: "0xcd9D82d33bd737De215cDac57FE2F7f04DF77FE0";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0x3147D7203354Dc06D9fd350c7a2437bcA92387a4";
    };
    readonly SNX: {
        readonly UNDERLYING: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F";
        readonly decimals: 18;
        readonly A_TOKEN: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2";
        readonly S_TOKEN: "0x8575c8ae70bDB71606A53AeA1c6789cB0fBF3166";
        readonly V_TOKEN: "0x267EB8Cf715455517F9BD5834AeAE3CeA1EBdbD8";
        readonly INTEREST_RATE_STRATEGY: "0xB2D822cAdb9040F3164829BC34e41a93cA3E01e5";
        readonly ORACLE: "0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c";
    };
    readonly sUSD: {
        readonly UNDERLYING: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51";
        readonly decimals: 18;
        readonly A_TOKEN: "0x6C5024Cd4F8A59110119C56f8933403A539555EB";
        readonly S_TOKEN: "0x30B0f7324feDF89d8eff397275F8983397eFe4af";
        readonly V_TOKEN: "0xdC6a3Ab17299D9C2A412B0e0a4C1f55446AE0817";
        readonly INTEREST_RATE_STRATEGY: "0x28fc7a5F0e7652B6f5E398F5E656A3eB36a1F3DE";
        readonly ORACLE: "0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757";
    };
    readonly TUSD: {
        readonly UNDERLYING: "0x0000000000085d4780B73119b644AE5ecd22b376";
        readonly decimals: 18;
        readonly A_TOKEN: "0x101cc05f4A51C0319f570d5E146a8C625198e636";
        readonly S_TOKEN: "0x7f38d60D94652072b2C44a18c0e14A481EC3C0dd";
        readonly V_TOKEN: "0x01C0eb1f8c6F1C1bF74ae028697ce7AA2a8b0E92";
        readonly INTEREST_RATE_STRATEGY: "0xb70e28437Aec70a8cfE5240F54c463cF849bE17C";
        readonly ORACLE: "0x3886BA987236181D98F2401c507Fb8BeA7871dF2";
    };
    readonly USDC: {
        readonly UNDERLYING: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        readonly decimals: 6;
        readonly A_TOKEN: "0xBcca60bB61934080951369a648Fb03DF4F96263C";
        readonly S_TOKEN: "0xE4922afAB0BbaDd8ab2a88E0C79d884Ad337fcA6";
        readonly V_TOKEN: "0x619beb58998eD2278e08620f97007e1116D5D25b";
        readonly INTEREST_RATE_STRATEGY: "0xb72F23adE9b9980c2E731Ca504105fC860643619";
        readonly ORACLE: "0x986b5E1e1755e3C2440e960477f25201B0a8bbD4";
    };
    readonly CRV: {
        readonly UNDERLYING: "0xD533a949740bb3306d119CC777fa900bA034cd52";
        readonly decimals: 18;
        readonly A_TOKEN: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1";
        readonly S_TOKEN: "0x9288059a74f589C919c7Cf1Db433251CdFEB874B";
        readonly V_TOKEN: "0x00ad8eBF64F141f1C81e9f8f792d3d1631c6c684";
        readonly INTEREST_RATE_STRATEGY: "0x35FE8C9924718f286463e659be35b4122eEe907F";
        readonly ORACLE: "0x8a12Be339B0cD1829b91Adc01977caa5E9ac121e";
    };
    readonly GUSD: {
        readonly UNDERLYING: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd";
        readonly decimals: 2;
        readonly A_TOKEN: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583";
        readonly S_TOKEN: "0xf8aC64ec6Ff8E0028b37EB89772d21865321bCe0";
        readonly V_TOKEN: "0x279AF5b99540c1A3A7E3CDd326e19659401eF99e";
        readonly INTEREST_RATE_STRATEGY: "0x999F449fEAfaAd78CE5702A9ebc460633478D4a4";
        readonly ORACLE: "0xEc6f4Cd64d28Ef32507e2dc399948aAe9Bbedd7e";
    };
    readonly BAL: {
        readonly UNDERLYING: "0xba100000625a3754423978a60c9317c58a424e3D";
        readonly decimals: 18;
        readonly A_TOKEN: "0x272F97b7a56a387aE942350bBC7Df5700f8a4576";
        readonly S_TOKEN: "0xe569d31590307d05DA3812964F1eDd551D665a0b";
        readonly V_TOKEN: "0x13210D4Fe0d5402bd7Ecbc4B5bC5cFcA3b71adB0";
        readonly INTEREST_RATE_STRATEGY: "0xb873ec463CAC50112B0e14d060fbc4192406279f";
        readonly ORACLE: "0xC1438AA3823A6Ba0C159CfA8D98dF5A994bA120b";
    };
    readonly xSUSHI: {
        readonly UNDERLYING: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272";
        readonly decimals: 18;
        readonly A_TOKEN: "0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a";
        readonly S_TOKEN: "0x73Bfb81D7dbA75C904f430eA8BAe82DB0D41187B";
        readonly V_TOKEN: "0xfAFEDF95E21184E3d880bd56D4806c4b8d31c69A";
        readonly INTEREST_RATE_STRATEGY: "0x6855E5544Cd803BF24c9612b3F12C009116B0ee1";
        readonly ORACLE: "0xF05D9B6C08757EAcb1fbec18e36A1B7566a13DEB";
    };
    readonly renFIL: {
        readonly UNDERLYING: "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5";
        readonly decimals: 18;
        readonly A_TOKEN: "0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa";
        readonly S_TOKEN: "0xcAad05C49E14075077915cB5C820EB3245aFb950";
        readonly V_TOKEN: "0x348e2eBD5E962854871874E444F4122399c02755";
        readonly INTEREST_RATE_STRATEGY: "0x311C866D55456e465e314A3E9830276B438A73f0";
        readonly ORACLE: "0x0606Be69451B1C9861Ac6b3626b99093b713E801";
    };
    readonly RAI: {
        readonly UNDERLYING: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919";
        readonly decimals: 18;
        readonly A_TOKEN: "0xc9BC48c72154ef3e5425641a3c747242112a46AF";
        readonly S_TOKEN: "0x9C72B8476C33AE214ee3e8C20F0bc28496a62032";
        readonly V_TOKEN: "0xB5385132EE8321977FfF44b60cDE9fE9AB0B4e6b";
        readonly INTEREST_RATE_STRATEGY: "0xc83cDb49F234EC6666D7857B3EAa1302b109394C";
        readonly ORACLE: "0x4ad7B025127e89263242aB68F0f9c4E5C033B489";
    };
    readonly AMPL: {
        readonly UNDERLYING: "0xD46bA6D942050d489DBd938a2C909A5d5039A161";
        readonly decimals: 9;
        readonly A_TOKEN: "0x1E6bb68Acec8fefBD87D192bE09bb274170a0548";
        readonly S_TOKEN: "0x18152C9f77DAdc737006e9430dB913159645fa87";
        readonly V_TOKEN: "0xf013D90E4e4E3Baf420dFea60735e75dbd42f1e1";
        readonly INTEREST_RATE_STRATEGY: "0xa324C768Bdd002b3387CE1c691A549268f63250b";
        readonly ORACLE: "0x492575FDD11a0fCf2C6C719867890a7648d526eB";
    };
    readonly USDP: {
        readonly UNDERLYING: "0x8E870D67F660D95d5be530380D0eC0bd388289E1";
        readonly decimals: 18;
        readonly A_TOKEN: "0x2e8F4bdbE3d47d7d7DE490437AeA9915D930F1A3";
        readonly S_TOKEN: "0x2387119bc85A74e0BBcbe190d80676CB16F10D4F";
        readonly V_TOKEN: "0xFDb93B3b10936cf81FA59A02A7523B6e2149b2B7";
        readonly INTEREST_RATE_STRATEGY: "0x40a76E018dd4aFe1391F51f0C8c8E4eA70476e15";
        readonly ORACLE: "0x3a08ebBaB125224b7b6474384Ee39fBb247D2200";
    };
    readonly DPI: {
        readonly UNDERLYING: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b";
        readonly decimals: 18;
        readonly A_TOKEN: "0x6F634c6135D2EBD550000ac92F494F9CB8183dAe";
        readonly S_TOKEN: "0xa3953F07f389d719F99FC378ebDb9276177d8A6e";
        readonly V_TOKEN: "0x4dDff5885a67E4EffeC55875a3977D7E60F82ae0";
        readonly INTEREST_RATE_STRATEGY: "0xA12D7bB07379ad6de4497B80088e28D4C00932D1";
        readonly ORACLE: "0x029849bbc0b1d93b85a8b6190e979fd38F5760E2";
    };
    readonly FRAX: {
        readonly UNDERLYING: "0x853d955aCEf822Db058eb8505911ED77F175b99e";
        readonly decimals: 18;
        readonly A_TOKEN: "0xd4937682df3C8aEF4FE912A96A74121C0829E664";
        readonly S_TOKEN: "0x3916e3B6c84b161df1b2733dFfc9569a1dA710c2";
        readonly V_TOKEN: "0xfE8F19B17fFeF0fDbfe2671F248903055AFAA8Ca";
        readonly INTEREST_RATE_STRATEGY: "0x28fc7a5F0e7652B6f5E398F5E656A3eB36a1F3DE";
        readonly ORACLE: "0x14d04Fff8D21bd62987a5cE9ce543d2F1edF5D3E";
    };
    readonly FEI: {
        readonly UNDERLYING: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA";
        readonly decimals: 18;
        readonly A_TOKEN: "0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3";
        readonly S_TOKEN: "0xd89cF9E8A858F8B4b31Faf793505e112d6c17449";
        readonly V_TOKEN: "0xC2e10006AccAb7B45D9184FcF5b7EC7763f5BaAe";
        readonly INTEREST_RATE_STRATEGY: "0x795dC59EA6472Dfa4298A454C6E8Dcb005643A13";
        readonly ORACLE: "0xac3AF0f4A52C577Cc2C241dF51a01FDe3D06D93B";
    };
    readonly stETH: {
        readonly UNDERLYING: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
        readonly decimals: 18;
        readonly A_TOKEN: "0x1982b2F5814301d4e9a8b0201555376e62F82428";
        readonly S_TOKEN: "0x66457616Dd8489dF5D0AFD8678F4A260088aAF55";
        readonly V_TOKEN: "0xA9DEAc9f00Dc4310c35603FCD9D34d1A750f81Db";
        readonly INTEREST_RATE_STRATEGY: "0xff04ed5f7a6C3a0F1e5Ea20617F8C6f513D5A77c";
        readonly ORACLE: "0xADE6CBA6c45aa8E9d0337cAc3D2619eabc39D901";
    };
    readonly ENS: {
        readonly UNDERLYING: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
        readonly decimals: 18;
        readonly A_TOKEN: "0x9a14e23A58edf4EFDcB360f68cd1b95ce2081a2F";
        readonly S_TOKEN: "0x34441FFD1948E49dC7a607882D0c38Efd0083815";
        readonly V_TOKEN: "0x176808047cc9b7A2C9AE202c593ED42dDD7C0D13";
        readonly INTEREST_RATE_STRATEGY: "0x6855E5544Cd803BF24c9612b3F12C009116B0ee1";
        readonly ORACLE: "0xd4641b75015E6536E8102D98479568D05D7123Db";
    };
    readonly UST: {
        readonly UNDERLYING: "0xa693B19d2931d498c5B318dF961919BB4aee87a5";
        readonly decimals: 6;
        readonly A_TOKEN: "0xc2e2152647F4C26028482Efaf64b2Aa28779EFC4";
        readonly S_TOKEN: "0x7FDbfB0412700D94403c42cA3CAEeeA183F07B26";
        readonly V_TOKEN: "0xaf32001cf2E66C4C3af4205F6EA77112AA4160FE";
        readonly INTEREST_RATE_STRATEGY: "0xc83cDb49F234EC6666D7857B3EAa1302b109394C";
        readonly ORACLE: "0xa20623070413d42a5C01Db2c8111640DD7A5A03a";
    };
    readonly CVX: {
        readonly UNDERLYING: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B";
        readonly decimals: 18;
        readonly A_TOKEN: "0x952749E07d7157bb9644A894dFAF3Bad5eF6D918";
        readonly S_TOKEN: "0xB01Eb1cE1Da06179136D561766fc2d609C5F55Eb";
        readonly V_TOKEN: "0x4Ae5E4409C6Dbc84A00f9f89e4ba096603fb7d50";
        readonly INTEREST_RATE_STRATEGY: "0x2c206fa2127aB7f1CE3dc987daf683Ed5B9CF069";
        readonly ORACLE: "0xC9CbF687f43176B302F03f5e58470b77D07c61c6";
    };
    readonly ONE_INCH: {
        readonly UNDERLYING: "0x111111111117dC0aa78b770fA6A738034120C302";
        readonly decimals: 18;
        readonly A_TOKEN: "0xB29130CBcC3F791f077eAdE0266168E808E5151e";
        readonly S_TOKEN: "0x1278d6ED804d59d2d18a5Aa5638DfD591A79aF0a";
        readonly V_TOKEN: "0xD7896C1B9b4455aFf31473908eB15796ad2295DA";
        readonly INTEREST_RATE_STRATEGY: "0x6855E5544Cd803BF24c9612b3F12C009116B0ee1";
        readonly ORACLE: "0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8";
    };
    readonly LUSD: {
        readonly UNDERLYING: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0";
        readonly decimals: 18;
        readonly A_TOKEN: "0xce1871f791548600cb59efbefFC9c38719142079";
        readonly S_TOKEN: "0x39f010127274b2dBdB770B45e1de54d974974526";
        readonly V_TOKEN: "0x411066489AB40442d6Fc215aD7c64224120D33F2";
        readonly INTEREST_RATE_STRATEGY: "0xab7f8ca781C736EB624A9E321cd043F8E6292C96";
        readonly ORACLE: "0x60c0b047133f696334a2b7f68af0b49d2F3D4F72";
    };
};

declare const AaveV2Ethereum_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const AaveV2Ethereum_ASSETS: typeof ASSETS;
declare const AaveV2Ethereum_CHAIN_ID: typeof CHAIN_ID;
declare const AaveV2Ethereum_COLLECTOR: typeof COLLECTOR;
declare const AaveV2Ethereum_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const AaveV2Ethereum_DEBT_SWAP_ADAPTER: typeof DEBT_SWAP_ADAPTER;
declare const AaveV2Ethereum_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const AaveV2Ethereum_EMERGENCY_ADMIN: typeof EMERGENCY_ADMIN;
declare const AaveV2Ethereum_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const AaveV2Ethereum_LENDING_POOL_COLLATERAL_MANAGER: typeof LENDING_POOL_COLLATERAL_MANAGER;
declare const AaveV2Ethereum_LENDING_RATE_ORACLE: typeof LENDING_RATE_ORACLE;
declare const AaveV2Ethereum_MIGRATION_HELPER: typeof MIGRATION_HELPER;
declare const AaveV2Ethereum_ORACLE: typeof ORACLE;
declare const AaveV2Ethereum_POOL: typeof POOL;
declare const AaveV2Ethereum_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const AaveV2Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const AaveV2Ethereum_POOL_ADMIN: typeof POOL_ADMIN;
declare const AaveV2Ethereum_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const AaveV2Ethereum_RATES_FACTORY: typeof RATES_FACTORY;
declare const AaveV2Ethereum_REPAY_WITH_COLLATERAL_ADAPTER: typeof REPAY_WITH_COLLATERAL_ADAPTER;
declare const AaveV2Ethereum_SWAP_COLLATERAL_ADAPTER: typeof SWAP_COLLATERAL_ADAPTER;
declare const AaveV2Ethereum_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const AaveV2Ethereum_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const AaveV2Ethereum_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const AaveV2Ethereum_WETH_GATEWAY: typeof WETH_GATEWAY;
declare namespace AaveV2Ethereum {
  export { AaveV2Ethereum_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, AaveV2Ethereum_ASSETS as ASSETS, AaveV2Ethereum_CHAIN_ID as CHAIN_ID, AaveV2Ethereum_COLLECTOR as COLLECTOR, AaveV2Ethereum_CONFIG_ENGINE as CONFIG_ENGINE, AaveV2Ethereum_DEBT_SWAP_ADAPTER as DEBT_SWAP_ADAPTER, AaveV2Ethereum_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, AaveV2Ethereum_EMERGENCY_ADMIN as EMERGENCY_ADMIN, AaveV2Ethereum_EMISSION_MANAGER as EMISSION_MANAGER, AaveV2Ethereum_LENDING_POOL_COLLATERAL_MANAGER as LENDING_POOL_COLLATERAL_MANAGER, AaveV2Ethereum_LENDING_RATE_ORACLE as LENDING_RATE_ORACLE, AaveV2Ethereum_MIGRATION_HELPER as MIGRATION_HELPER, AaveV2Ethereum_ORACLE as ORACLE, AaveV2Ethereum_POOL as POOL, AaveV2Ethereum_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, AaveV2Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, AaveV2Ethereum_POOL_ADMIN as POOL_ADMIN, AaveV2Ethereum_POOL_CONFIGURATOR as POOL_CONFIGURATOR, AaveV2Ethereum_RATES_FACTORY as RATES_FACTORY, AaveV2Ethereum_REPAY_WITH_COLLATERAL_ADAPTER as REPAY_WITH_COLLATERAL_ADAPTER, AaveV2Ethereum_SWAP_COLLATERAL_ADAPTER as SWAP_COLLATERAL_ADAPTER, AaveV2Ethereum_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, AaveV2Ethereum_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, AaveV2Ethereum_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, AaveV2Ethereum_WETH_GATEWAY as WETH_GATEWAY };
}

export { AaveV2Ethereum as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMERGENCY_ADMIN as E, LENDING_RATE_ORACLE as L, MIGRATION_HELPER as M, ORACLE as O, POOL_ADDRESSES_PROVIDER as P, RATES_FACTORY as R, SWAP_COLLATERAL_ADAPTER as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL as a, POOL_CONFIGURATOR as b, AAVE_PROTOCOL_DATA_PROVIDER as c, POOL_ADMIN as d, EMISSION_MANAGER as e, LENDING_POOL_COLLATERAL_MANAGER as f, DEBT_SWAP_ADAPTER as g, CONFIG_ENGINE as h, POOL_ADDRESSES_PROVIDER_REGISTRY as i, REPAY_WITH_COLLATERAL_ADAPTER as j, UI_POOL_DATA_PROVIDER as k, WETH_GATEWAY as l, CHAIN_ID as m, ASSETS as n };
