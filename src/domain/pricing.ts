export type PriceQuote = {
  symbol: string;
  usd: number;
  timestampMs: number;
};

export interface PricingProvider {
  getPrices(symbols: string[]): Promise<PriceQuote[]>;
}

export class NoopPricingProvider implements PricingProvider {
  async getPrices(symbols: string[]): Promise<PriceQuote[]> {
    const now = Date.now();
    return symbols.map((s) => ({ symbol: s.toUpperCase(), usd: 0, timestampMs: now }));
  }
}


