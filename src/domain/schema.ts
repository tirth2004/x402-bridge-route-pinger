
export type SupportedChain =
  | "ethereum"
  | "arbitrum"
  | "optimism"
  | "base"
  | "polygon"
  | "avalanche";


export type BridgeRouteInput = {
  token: string; 
  amount: string; 
  from_chain: SupportedChain;
  to_chain: SupportedChain;
};


export type RouteRequirements = {
  needs_source_gas_token: boolean;
  needs_destination_gas_token: boolean;
  requires_token_approval: boolean;
  min_amount?: string;
  max_amount?: string;
  notes?: string[];
};


export type BridgeRoute = {
  bridge: string;
  path: {
    from_chain: SupportedChain;
    to_chain: SupportedChain;
    token_in: string;
    token_out: string;
  };
  fee_usd: number;
  eta_minutes: number;
  requirements: RouteRequirements;
  warnings?: string[];
  is_best?: boolean;
};


export type BridgeRouteOutput = {
  routes: BridgeRoute[];
  pricing_timestamp_ms: number;
};


