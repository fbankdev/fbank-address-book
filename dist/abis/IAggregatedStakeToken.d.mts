declare const IAggregatedStakeToken_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_logic";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "admin_";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
        readonly components: readonly [];
    }];
    readonly stateMutability: "payable";
    readonly type: "constructor";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "previousAdmin";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: false;
    }, {
        readonly internalType: "address";
        readonly name: "newAdmin";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: false;
    }];
    readonly type: "event";
    readonly name: "AdminChanged";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }];
    readonly type: "event";
    readonly name: "Upgraded";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "fallback";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "admin_";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newAdmin";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "changeAdmin";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "implementation";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation_";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newImplementation";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "upgradeTo";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newImplementation";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
        readonly components: readonly [];
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "receive";
    readonly outputs: readonly [];
}];

export { IAggregatedStakeToken_ABI };
