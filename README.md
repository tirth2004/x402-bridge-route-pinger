Bridge Route Pinger — Phase 1 (Scope and Data Model)

V1 Supported Chains
- ethereum (1)
- arbitrum (42161)
- optimism (10)
- base (8453)
- polygon (137)
- avalanche (43114)

Inputs
- token: symbol or address string
- amount: decimal string (e.g., "1.5")
- from_chain: one of [ethereum, arbitrum, optimism, base, polygon, avalanche]
- to_chain: one of [ethereum, arbitrum, optimism, base, polygon, avalanche]

Outputs
- routes[]: { bridge, path { from_chain, to_chain, token_in, token_out }, fee_usd, eta_minutes, requirements, warnings?, is_best? }
- pricing_timestamp_ms: number

Normalization
- Chains are normalized by slug and chainId (see src/domain/chains.ts)
- Tokens are represented by symbol, decimals, and optional address for ERC-20s (see src/domain/tokens.ts)
- USD pricing is abstracted via a provider interface (see src/domain/pricing.ts)

Notes
- Phase 1 includes ETH/native assets across v1 chains. ERC-20 token registries (e.g., USDC) will be populated from official sources in the next phase and validated against bridge support lists.

# Chains covered in V1:
V1 chains (high coverage, reliable quotes)
Ethereum Mainnet (1)
Arbitrum One (42161)
Optimism (10)
Base (8453)
Polygon PoS (137)
Avalanche C-Chain (43114)