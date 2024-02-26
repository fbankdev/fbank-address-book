declare const IStaticATokenLM_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IPool";
        readonly name: "pool";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "contract IRewardsController";
        readonly name: "rewardsController";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
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
        readonly name: "amount";
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
        readonly name: "sender";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "owner";
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
    readonly name: "Deposit";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Initialized";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "aToken";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "string";
        readonly name: "staticATokenName";
        readonly type: "string";
        readonly components: readonly [];
        readonly indexed: false;
    }, {
        readonly internalType: "string";
        readonly name: "staticATokenSymbol";
        readonly type: "string";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "Initialized";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "uint256";
        readonly name: "startIndex";
        readonly type: "uint256";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "RewardTokenRegistered";
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
    readonly name: "Transfer";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "owner";
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
    readonly name: "Withdraw";
    readonly outputs: readonly [];
    readonly anonymous: false;
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
    readonly name: "INCENTIVES_CONTROLLER";
    readonly outputs: readonly [{
        readonly internalType: "contract IRewardsController";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "METADEPOSIT_TYPEHASH";
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
    readonly name: "METAWITHDRAWAL_TYPEHASH";
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
    readonly name: "POOL";
    readonly outputs: readonly [{
        readonly internalType: "contract IPool";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "STATIC__ATOKEN_LM_REVISION";
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
    readonly name: "aToken";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "";
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
        readonly name: "amount";
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
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "asset";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
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
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address[]";
        readonly name: "rewards";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewards";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "onBehalfOf";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address[]";
        readonly name: "rewards";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewardsOnBehalf";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "rewards";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "claimRewardsToSelf";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "collectAndUpdateRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "convertToAssets";
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
    readonly name: "convertToShares";
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint16";
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly components: readonly [];
    }, {
        readonly internalType: "bool";
        readonly name: "depositToAave";
        readonly type: "bool";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "deposit";
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
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "deposit";
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
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getClaimableRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getCurrentRewardsIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getTotalClaimableRewards";
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
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getUnclaimedRewards";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newAToken";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "string";
        readonly name: "staticATokenName";
        readonly type: "string";
        readonly components: readonly [];
    }, {
        readonly internalType: "string";
        readonly name: "staticATokenSymbol";
        readonly type: "string";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "initialize";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "reward";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "isRegisteredRewardToken";
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
    readonly name: "maxDeposit";
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
    readonly name: "maxMint";
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
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "maxRedeem";
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
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "maxWithdraw";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "depositor";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint16";
        readonly name: "referralCode";
        readonly type: "uint16";
        readonly components: readonly [];
    }, {
        readonly internalType: "bool";
        readonly name: "depositToAave";
        readonly type: "bool";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "struct IStaticATokenLM.PermitParams";
        readonly name: "permit";
        readonly type: "tuple";
        readonly components: readonly [{
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
    }, {
        readonly internalType: "struct IStaticATokenLM.SignatureParams";
        readonly name: "sigParams";
        readonly type: "tuple";
        readonly components: readonly [{
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
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "metaDeposit";
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
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "bool";
        readonly name: "withdrawFromAave";
        readonly type: "bool";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "struct IStaticATokenLM.SignatureParams";
        readonly name: "sigParams";
        readonly type: "tuple";
        readonly components: readonly [{
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
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "metaWithdraw";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "mint";
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
        readonly name: "";
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
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "previewDeposit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "previewMint";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
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
    readonly name: "previewWithdraw";
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
    readonly name: "rate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "redeem";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "bool";
        readonly name: "withdrawFromAave";
        readonly type: "bool";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "redeem";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "refreshRewardTokens";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "rewardTokens";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
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
    readonly name: "totalAssets";
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
        readonly name: "amount";
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
        readonly name: "amount";
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
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "assets";
        readonly type: "uint256";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "withdraw";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
        readonly components: readonly [];
    }];
}];

export { IStaticATokenLM_ABI };
