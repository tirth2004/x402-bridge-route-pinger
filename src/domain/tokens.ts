import { CHAINS, type ChainSlug } from "./chains";

export type TokenInfo = {
  chain: ChainSlug;
  symbol: string;
  decimals: number;
  address?: string;
  isNative: boolean;
};


// Additional tokens (e.g., USDC) will be populated in Phase 2 from authoritative sources.
export const TOKENS: TokenInfo[] = [
  { chain: "ethereum", symbol: "ETH", decimals: 18, isNative: true },
  { chain: "arbitrum", symbol: "ETH", decimals: 18, isNative: true },
  { chain: "optimism", symbol: "ETH", decimals: 18, isNative: true },
  { chain: "base", symbol: "ETH", decimals: 18, isNative: true },
  { chain: "polygon", symbol: "MATIC", decimals: 18, isNative: true },
  { chain: "avalanche", symbol: "AVAX", decimals: 18, isNative: true },
];

export function findToken(chain: ChainSlug, symbol: string): TokenInfo | undefined {
  const norm = symbol.trim().toUpperCase();
  return TOKENS.find((t) => t.chain === chain && t.symbol.toUpperCase() === norm);
}

export function getChainId(chain: ChainSlug): number {
  return CHAINS[chain].id;
}


