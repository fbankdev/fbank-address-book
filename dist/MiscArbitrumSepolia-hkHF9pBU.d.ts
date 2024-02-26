declare const GHO_TOKEN = "0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810";
declare const CHAIN_ID = 421614;

declare const MiscArbitrumSepolia_CHAIN_ID: typeof CHAIN_ID;
declare const MiscArbitrumSepolia_GHO_TOKEN: typeof GHO_TOKEN;
declare namespace MiscArbitrumSepolia {
  export { MiscArbitrumSepolia_CHAIN_ID as CHAIN_ID, MiscArbitrumSepolia_GHO_TOKEN as GHO_TOKEN };
}

export { CHAIN_ID as C, GHO_TOKEN as G, MiscArbitrumSepolia as M };
