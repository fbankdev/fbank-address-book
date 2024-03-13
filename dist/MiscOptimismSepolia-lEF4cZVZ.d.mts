declare const TRANSPARENT_PROXY_FACTORY = "0xb172a90A7C238969CE9B27cc19D13b60A91e7F00";
declare const PROXY_ADMIN = "0xe892E40C92c2E4D281Be59b2E6300F271d824E75";
declare const CHAIN_ID = 11155420;

declare const MiscOptimismSepolia_CHAIN_ID: typeof CHAIN_ID;
declare const MiscOptimismSepolia_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscOptimismSepolia_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscOptimismSepolia {
  export { MiscOptimismSepolia_CHAIN_ID as CHAIN_ID, MiscOptimismSepolia_PROXY_ADMIN as PROXY_ADMIN, MiscOptimismSepolia_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { CHAIN_ID as C, MiscOptimismSepolia as M, PROXY_ADMIN as P, TRANSPARENT_PROXY_FACTORY as T };
