declare const IStaticATokenFactory_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IPool";
        readonly name: "pool";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "proxyAdmin";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "contract ITransparentProxyFactory";
        readonly name: "transparentProxyFactory";
        readonly type: "address";
        readonly components: readonly [];
    }, {
        readonly internalType: "address";
        readonly name: "staticATokenImpl";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
    readonly outputs: readonly [];
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
        readonly name: "staticAToken";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }, {
        readonly internalType: "address";
        readonly name: "underlying";
        readonly type: "address";
        readonly components: readonly [];
        readonly indexed: true;
    }];
    readonly type: "event";
    readonly name: "StaticTokenCreated";
    readonly outputs: readonly [];
    readonly anonymous: false;
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "ADMIN";
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
    readonly name: "STATIC_A_TOKEN_IMPL";
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
    readonly name: "TRANSPARENT_PROXY_FACTORY";
    readonly outputs: readonly [{
        readonly internalType: "contract ITransparentProxyFactory";
        readonly name: "";
        readonly type: "address";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "underlyings";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "createStaticATokens";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "underlying";
        readonly type: "address";
        readonly components: readonly [];
    }];
    readonly stateMutability: "view";
    readonly type: "function";
    readonly name: "getStaticAToken";
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
    readonly name: "getStaticATokens";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
        readonly components: readonly [];
    }];
}, {
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly name: "initialize";
    readonly outputs: readonly [];
}];

export { IStaticATokenFactory_ABI };
