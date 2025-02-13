declare const TRANSPARENT_PROXY_FACTORY = "0x49A726CC7B438dBc4fB89a9548B5E8691e1C35A6";
declare const PROXY_ADMIN = "0xaebfFE29D8E823e8E43695648F418fa8c30AF879";
declare const CHAIN_ID = 80001;

declare const MiscMumbai_CHAIN_ID: typeof CHAIN_ID;
declare const MiscMumbai_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscMumbai_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscMumbai {
  export { MiscMumbai_CHAIN_ID as CHAIN_ID, MiscMumbai_PROXY_ADMIN as PROXY_ADMIN, MiscMumbai_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { CHAIN_ID as C, MiscMumbai as M, PROXY_ADMIN as P, TRANSPARENT_PROXY_FACTORY as T };
