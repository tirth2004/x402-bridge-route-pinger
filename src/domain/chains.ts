export type ChainInfo = {
  id: number;
  name: string;
  slug: "ethereum" | "arbitrum" | "optimism" | "base" | "polygon" | "avalanche";
  nativeCurrency: { symbol: string; decimals: number };
};

export const CHAINS: Record<ChainInfo["slug"], ChainInfo> = {
  ethereum: {
    id: 1,
    name: "Ethereum",
    slug: "ethereum",
    nativeCurrency: { symbol: "ETH", decimals: 18 },
  },
  arbitrum: {
    id: 42161,
    name: "Arbitrum One",
    slug: "arbitrum",
    nativeCurrency: { symbol: "ETH", decimals: 18 },
  },
  optimism: {
    id: 10,
    name: "Optimism",
    slug: "optimism",
    nativeCurrency: { symbol: "ETH", decimals: 18 },
  },
  base: {
    id: 8453,
    name: "Base",
    slug: "base",
    nativeCurrency: { symbol: "ETH", decimals: 18 },
  },
  polygon: {
    id: 137,
    name: "Polygon PoS",
    slug: "polygon",
    nativeCurrency: { symbol: "MATIC", decimals: 18 },
  },
  avalanche: {
    id: 43114,
    name: "Avalanche C-Chain",
    slug: "avalanche",
    nativeCurrency: { symbol: "AVAX", decimals: 18 },
  },
};

export type ChainSlug = keyof typeof CHAINS;


