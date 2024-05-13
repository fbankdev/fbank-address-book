export { A as AaveV3FantomTestnet } from './AaveV3FantomTestnet-wxpo6xYd.mjs';
export { A as AaveV3Fantom } from './AaveV3Fantom-0EgVfzWk.mjs';
export { M as MiscFantom } from './MiscFantom-4y0wKGfV.mjs';
export { A as AaveGovernanceV2 } from './AaveGovernanceV2-WaqoK4ZA.mjs';
export { A as AaveSafetyModule } from './AaveSafetyModule-cbe4f_Qs.mjs';
export { ICollector_ABI } from './abis/ICollector.mjs';
export { AggregatorInterface_ABI } from './abis/AggregatorInterface.mjs';
export { IPayloadsControllerCore_ABI } from './abis/IPayloadsControllerCore.mjs';
export { IVotingMachineWithProofs_ABI } from './abis/IVotingMachineWithProofs.mjs';
export { IGovernanceCore_ABI } from './abis/IGovernanceCore.mjs';
export { IVotingStrategy_ABI } from './abis/IVotingStrategy.mjs';
export { IVotingPortal_ABI } from './abis/IVotingPortal.mjs';
export { IGovernancePowerStrategy_ABI } from './abis/IGovernancePowerStrategy.mjs';
export { IDataWarehouse_ABI } from './abis/IDataWarehouse.mjs';
export { IExecutorWithTimelock_ABI } from './abis/IExecutorWithTimelock.mjs';
export { IERC20_ABI } from './abis/IERC20.mjs';
export { IERC20Detailed_ABI } from './abis/IERC20Detailed.mjs';
export { IAToken_ABI } from './abis/IAToken.mjs';
export { IDefaultInterestRateStrategy_ABI } from './abis/IDefaultInterestRateStrategy.mjs';
export { IAaveOracle_ABI } from './abis/IAaveOracle.mjs';
export { IExecutor_ABI } from './abis/IExecutor.mjs';
export { ICrossChainController_ABI } from './abis/ICrossChainController.mjs';
export { IWithGuardian_ABI } from './abis/IWithGuardian.mjs';
export { IRescuable_ABI } from './abis/IRescuable.mjs';
export { IOwnable_ABI } from './abis/IOwnable.mjs';
export { IPayloadsControllerDataHelper_ABI } from './abis/IPayloadsControllerDataHelper.mjs';
export { IGovernanceDataHelper_ABI } from './abis/IGovernanceDataHelper.mjs';
export { IMetaDelegateHelper_ABI } from './abis/IMetaDelegateHelper.mjs';
export { IVotingMachineDataHelper_ABI } from './abis/IVotingMachineDataHelper.mjs';
export { IUiPoolDataProvider_ABI } from './abis/IUiPoolDataProvider.mjs';
export { IStakeToken_ABI } from './abis/IStakeToken.mjs';
export { IAaveToken_ABI } from './abis/IAaveToken.mjs';
export { IStkAaveToken_ABI } from './abis/IStkAaveToken.mjs';
export { IATokenWithDelegation_ABI } from './abis/IATokenWithDelegation.mjs';
export { IStaticATokenFactory_ABI } from './abis/IStaticATokenFactory.mjs';
export { IStaticATokenLM_ABI } from './abis/IStaticATokenLM.mjs';
export { A as AaveV3Harmony } from './AaveV3Harmony-d2gUhp8G.mjs';

var name = "Aave token list";
var logoURI = "ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1";
var keywords = [
	"audited",
	"verified",
	"aave"
];
var tags = {
	underlying: {
		name: "underlyingAsset",
		description: "Tokens that are used as underlying assets in the Aave protocol"
	},
	aaveV2: {
		name: "Aave V2",
		description: "Tokens related to aave v2"
	},
	aaveV3: {
		name: "Aave V3",
		description: "Tokens related to aave v3"
	},
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
};
var timestamp = "2024-05-13T03:22:39.614Z";
var version = {
	major: 3,
	minor: 0,
	patch: 14
};
var tokens = [
	{
		chainId: 4002,
		address: "0xdF0687BCcb6bb7D046d26a5Cf38D81758468ab10",
		name: "DAI",
		decimals: 18,
		symbol: "DAI",
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmP42hY9w4hkYyMtjwm86HmzMmUxx76pjyUNXT5VL6ndMa"
	},
	{
		chainId: 4002,
		address: "0x2D2771A626DAAd0F1D0b5A1C28db73950d624448",
		name: "Aave Feliz DAI",
		decimals: 18,
		symbol: "aFelizDAI",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmRtU7R1eZcfFTgBLX57zPufc3HFhW2BG5WyikqUfNdJqV"
	},
	{
		chainId: 4002,
		address: "0xc028Ce7431ABa4d621453Fb30b2b2Dd67a79196b",
		name: "Aave Feliz LINK",
		decimals: 18,
		symbol: "aFelizLINK",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbhThHCdcMQ5bmQLpQ5zQsXHjP6jXoe84CGFuxEVskiV9"
	},
	{
		chainId: 4002,
		address: "0xd69EBc885a338CD842eB1B9B3ba9BBf3De609b83",
		name: "Aave Feliz USDC",
		decimals: 6,
		symbol: "aFelizUSDC",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmchSk4QRc4hatKBGvoPaF7QTXwuGJBhAnEJ5DcrSsiYJ5"
	},
	{
		chainId: 4002,
		address: "0xeEe16cE6F70b5f7D6c04bCf6E29FE027611AA745",
		name: "Aave Feliz WBTC",
		decimals: 8,
		symbol: "aFelizWBTC",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmQUcgNk4wBhEchxQjjoSkvUXTb9Lzw9SCZoygwktjSNqd"
	},
	{
		chainId: 4002,
		address: "0xEF9D79EbC57FE94CEA2157d1789841deD482965c",
		name: "Aave Feliz WETH",
		decimals: 18,
		symbol: "aFelizWETH",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmRHsz7F8L6ThgiFpnoj9Q9Eum1Yj3H62VozZ7Yo2GmA41"
	},
	{
		chainId: 4002,
		address: "0x442447221D6cD2E9Ff8e0dB48907a03d1Be2E0B8",
		name: "Aave Feliz USDT",
		decimals: 6,
		symbol: "aFelizUSDT",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbvaU6evuhijKW7hPutLtoGuayT18NGfnXcRFf78PE2iC"
	},
	{
		chainId: 4002,
		address: "0x5fbBdEf9E8139dCdfcd7Cd661dC66245E7c051e1",
		name: "Aave Feliz AAVE",
		decimals: 18,
		symbol: "aFelizAAVE",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmaM1pamJXjvNmvQTzfiYJUR16m1zngCfeGFXzFw4TdZF9"
	},
	{
		chainId: 4002,
		address: "0x11f77005Da9a3432c7Fcb6622534Bf4E722f233B",
		name: "Aave Feliz WFTM",
		decimals: 18,
		symbol: "aFelizWFTM",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbZMDbLbDHHEU7rd7VBnUL9UaMiQeDRbCtZ51cfBSMm3c"
	},
	{
		chainId: 4002,
		address: "0x45c8618053Bb5399f705Bf14114AfAb676946895",
		name: "Aave Feliz CRV",
		decimals: 18,
		symbol: "aFelizCRV",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmSmt97RzEDb8KKj7KUXXohZAwVYamFAtKY2rZTdeD8j72"
	},
	{
		chainId: 4002,
		address: "0x664eD46f40749015279bdcbD7d8773bC7Ae1B866",
		name: "Aave Feliz SUSHI",
		decimals: 18,
		symbol: "aFelizSUSHI",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmP42hY9w4hkYyMtjwm86HmzMmUxx76pjyUNXT5VL6ndMa"
	},
	{
		chainId: 250,
		address: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
		name: "Aave Fantom DAI",
		decimals: 18,
		symbol: "aFanDAI",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmRtU7R1eZcfFTgBLX57zPufc3HFhW2BG5WyikqUfNdJqV"
	},
	{
		chainId: 250,
		address: "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530",
		name: "Aave Fantom LINK",
		decimals: 18,
		symbol: "aFanLINK",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbhThHCdcMQ5bmQLpQ5zQsXHjP6jXoe84CGFuxEVskiV9"
	},
	{
		chainId: 250,
		address: "0x625E7708f30cA75bfd92586e17077590C60eb4cD",
		name: "Aave Fantom USDC",
		decimals: 6,
		symbol: "aFanUSDC",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmZJtx3PgAporannzoXtgGzC6pbzUyffeCkkVinSm3wACd"
	},
	{
		chainId: 250,
		address: "0x078f358208685046a11C85e8ad32895DED33A249",
		name: "Aave Fantom WBTC",
		decimals: 8,
		symbol: "aFanWBTC",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://Qma2czudF6pWRodzgmA7gSWDLozZxMNoseGHdc5Ap72wLM"
	},
	{
		chainId: 250,
		address: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",
		name: "Aave Fantom WETH",
		decimals: 18,
		symbol: "aFanWETH",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmRHsz7F8L6ThgiFpnoj9Q9Eum1Yj3H62VozZ7Yo2GmA41"
	},
	{
		chainId: 250,
		address: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
		name: "Aave Fantom USDT",
		decimals: 6,
		symbol: "aFanUSDT",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbvaU6evuhijKW7hPutLtoGuayT18NGfnXcRFf78PE2iC"
	},
	{
		chainId: 250,
		address: "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375",
		name: "Aave Fantom AAVE",
		decimals: 18,
		symbol: "aFanAAVE",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmaM1pamJXjvNmvQTzfiYJUR16m1zngCfeGFXzFw4TdZF9"
	},
	{
		chainId: 250,
		address: "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97",
		name: "Aave Fantom WFTM",
		decimals: 18,
		symbol: "aFanWFTM",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmbZMDbLbDHHEU7rd7VBnUL9UaMiQeDRbCtZ51cfBSMm3c"
	},
	{
		chainId: 250,
		address: "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf",
		name: "Aave Fantom CRV",
		decimals: 18,
		symbol: "aFanCRV",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
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
		tags: [
			"underlying"
		],
		logoURI: "ipfs://QmSmt97RzEDb8KKj7KUXXohZAwVYamFAtKY2rZTdeD8j72"
	},
	{
		chainId: 250,
		address: "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA",
		name: "Aave Fantom SUSHI",
		decimals: 18,
		symbol: "aFanSUSHI",
		tags: [
			"aTokenV3",
			"aaveV3"
		],
		logoURI: "ipfs://QmTgPCnMmtKBiid5PFMFLNMttThFbvd5aXzFCaoX51Rtpu",
		extensions: {
			pool: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
			underlying: "0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC"
		}
	}
];
var tokenlist = {
	name: name,
	logoURI: logoURI,
	keywords: keywords,
	tags: tags,
	timestamp: timestamp,
	version: version,
	tokens: tokens
};

export { tokenlist };
