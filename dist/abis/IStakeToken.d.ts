declare const IStakeToken_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "stakedToken";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "rewardToken";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "unstakeWindow";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "rewardsVault";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "emissionManager";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "AddressEmptyCode";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "AddressInsufficientBalance";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly type: "error";
    readonly name: "ECDSAInvalidSignature";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "length";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ECDSAInvalidSignatureLength";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ECDSAInvalidSignatureS";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InsufficientAllowance";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InsufficientBalance";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InvalidApprover";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InvalidReceiver";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InvalidSender";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC20InvalidSpender";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC2612ExpiredSignature";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "signer";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "ERC2612InvalidSigner";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly type: "error";
    readonly name: "FailedInnerCall";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "currentNonce";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "InvalidAccountNonce";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly type: "error";
    readonly name: "InvalidInitialization";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly type: "error";
    readonly name: "InvalidShortString";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly type: "error";
    readonly name: "NotInitializing";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "SafeERC20FailedOperation";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "str";
        readonly type: "string";
        readonly components: readonly [];
    }];
    readonly type: "error";
    readonly name: "StringTooLong";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Approval";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "asset";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "emission";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "AssetConfigUpdated";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "asset";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "AssetIndexUpdated";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Cooldown";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cooldownSeconds";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "CooldownSecondsChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "endTimestamp";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "DistributionEndChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [];
    readonly type: "event";
    readonly name: "EIP712DomainChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint216";
        readonly name: "exchangeRate";
        readonly type: "uint216";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "ExchangeRateChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "FundsReturned";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Initialized";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newPercentage";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "MaxSlashablePercentageChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newPendingAdmin";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "PendingAdminChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }, {
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Redeem";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: false;
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "RewardsAccrued";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "RewardsClaimed";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newAdmin";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "RoleClaimed";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "destination";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Slashed";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "windowSeconds";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "SlashingExitWindowDurationChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [];
    readonly type: "event";
    readonly name: "SlashingSettled";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }, {
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Staked";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Transfer";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "asset";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "UserIndexUpdated";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "CLAIM_HELPER_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "COOLDOWN_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "EMISSION_MANAGER";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "EXCHANGE_RATE_UNIT";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "INITIAL_EXCHANGE_RATE";
    readonly outputs: readonly [{
        readonly internalType: "uint216";
        readonly name: "";
        readonly type: "uint216";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "LOWER_BOUND";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "PRECISION";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "REWARDS_VAULT";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "REWARD_TOKEN";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "SLASH_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "STAKED_TOKEN";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "UNSTAKE_WINDOW";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "assets";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "emissionPerSecond";
        readonly type: "uint128";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint128";
        readonly name: "lastUpdateTimestamp";
        readonly type: "uint128";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewards";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "claimAmount";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "redeemAmount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewardsAndRedeem";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "claimAmount";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "redeemAmount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewardsAndRedeemOnBehalf";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewardsOnBehalf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRoleAdmin";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "struct DistributionTypes.AssetConfigInput[]";
        readonly name: "assetsConfigInput";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly internalType: "uint128";
            readonly name: "emissionPerSecond";
            readonly type: "uint128";
            readonly components: readonly [];
        }, {
            readonly internalType: "uint256";
            readonly name: "totalStaked";
            readonly type: "uint256";
            readonly components: readonly [];
        }, {
            readonly internalType: "address";
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly components: readonly [];
        }];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "configureAssets";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "cooldown";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "cooldownOnBehalfOf";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "distributionEnd";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
        readonly components: readonly [];
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getAdmin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getCooldownSeconds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getExchangeRate";
    readonly outputs: readonly [{
        readonly internalType: "uint216";
        readonly name: "";
        readonly type: "uint216";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getMaxSlashablePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getPendingAdmin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "staker";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getTotalRewardsBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "asset";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getUserAssetData";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "inPostSlashingPeriod";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "slashingAdmin";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "cooldownPauseAdmin";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "claimHelper";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "maxSlashablePercentage";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "cooldownSeconds";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "initialize";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "permit";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "previewRedeem";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "previewStake";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "redeem";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "redeemOnBehalf";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "returnFunds";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cooldownSeconds";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "setCooldownSeconds";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newDistributionEnd";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "setDistributionEnd";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "percentage";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "setMaxSlashablePercentage";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "role";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "newPendingAdmin";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "setPendingAdmin";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "settleSlashing";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "destination";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "slash";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "stake";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "stakeWithPermit";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "stakerRewardsToClaim";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "stakersCooldowns";
    readonly outputs: readonly [{
        readonly internalType: "uint40";
        readonly name: "timestamp";
        readonly type: "uint40";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint216";
        readonly name: "amount";
        readonly type: "uint216";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
        readonly components: readonly [];
    }];
}];

export { IStakeToken_ABI };
