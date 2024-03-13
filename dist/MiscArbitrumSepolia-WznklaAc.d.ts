declare const TRANSPARENT_PROXY_FACTORY = "0x43A8B7eC945a12a3Acb127B77ede19bd73ad76f8";
declare const PROXY_ADMIN = "0xCB5B3ca20603231945dC5731C33E7f7F7679Ea89";
declare const GHO_TOKEN = "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810";
declare const CHAIN_ID = 421614;

declare const MiscArbitrumSepolia_CHAIN_ID: typeof CHAIN_ID;
declare const MiscArbitrumSepolia_GHO_TOKEN: typeof GHO_TOKEN;
declare const MiscArbitrumSepolia_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscArbitrumSepolia_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscArbitrumSepolia {
  export { MiscArbitrumSepolia_CHAIN_ID as CHAIN_ID, MiscArbitrumSepolia_GHO_TOKEN as GHO_TOKEN, MiscArbitrumSepolia_PROXY_ADMIN as PROXY_ADMIN, MiscArbitrumSepolia_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { CHAIN_ID as C, GHO_TOKEN as G, MiscArbitrumSepolia as M, PROXY_ADMIN as P, TRANSPARENT_PROXY_FACTORY as T };
