declare const TRANSPARENT_PROXY_FACTORY = "0xD90f09Ea5eE893b8c0564719E855f1CF0455D894";
declare const PROXY_ADMIN = "0xF9e48edc704BDF494309cA457BCea4c0696f591d";
declare const CHAIN_ID = 84532;

declare const MiscBaseSepolia_CHAIN_ID: typeof CHAIN_ID;
declare const MiscBaseSepolia_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscBaseSepolia_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscBaseSepolia {
  export { MiscBaseSepolia_CHAIN_ID as CHAIN_ID, MiscBaseSepolia_PROXY_ADMIN as PROXY_ADMIN, MiscBaseSepolia_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { CHAIN_ID as C, MiscBaseSepolia as M, PROXY_ADMIN as P, TRANSPARENT_PROXY_FACTORY as T };
