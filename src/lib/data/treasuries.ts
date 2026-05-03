import type { TreasuryHolding } from "#/lib/types"

// Holdings figures and tickers verified against company filings or
// bitcointreasuries.net / bitbo.io trackers in May 2026. Numbers move week-to-week
// as companies disclose new purchases — see linked sources for the latest figure.
export const treasuryHoldings: TreasuryHolding[] = [
  // Mega (>10K BTC)
  { name: "Strategy", ticker: "MSTR", btcHeld: 818_334, sector: "treasury-pure", country: "US", sourceUrl: "https://www.strategy.com/purchases" },
  { name: "MARA Holdings", ticker: "MARA", btcHeld: 53_000, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/mara" },
  { name: "Twenty One Capital", ticker: "XXI", btcHeld: 43_514, sector: "treasury-pure", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/xxi" },
  { name: "MetaPlanet", ticker: "3350.T", btcHeld: 40_177, sector: "treasury-pure", country: "JP", sourceUrl: "https://bitcointreasuries.net/public-companies/metaplanet" },
  { name: "Riot Platforms", ticker: "RIOT", btcHeld: 18_000, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/riot" },
  { name: "Galaxy Digital", ticker: "GLXY", btcHeld: 17_000, sector: "financial", country: "CA", sourceUrl: "https://bitcointreasuries.net/public-companies/galaxy-digital" },
  { name: "Coinbase", ticker: "COIN", btcHeld: 14_500, sector: "exchange", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/coinbase" },
  { name: "Hut 8 Mining", ticker: "HUT", btcHeld: 13_700, sector: "miner", country: "CA", sourceUrl: "https://bitcointreasuries.net/public-companies/hut8-mining" },
  { name: "CleanSpark", ticker: "CLSK", btcHeld: 13_000, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/cleanspark" },
  { name: "Strive", ticker: "STRV", btcHeld: 12_800, sector: "financial", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/strive" },
  { name: "Tesla", ticker: "TSLA", btcHeld: 11_509, sector: "tech", country: "US", sourceUrl: "https://www.coindesk.com/markets/2026/04/22/elon-musk-s-tesla-reports-unchanged-bitcoin-holdings-books-usd173-million-digital-asset-loss" },
  { name: "Trump Media", ticker: "DJT", btcHeld: 11_500, sector: "other", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/trump-media" },
  { name: "Block Inc", ticker: "XYZ", btcHeld: 8_900, sector: "tech", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/block" },
  { name: "Cango Inc", ticker: "CANG", btcHeld: 7_500, sector: "other", country: "CN", sourceUrl: "https://bitcointreasuries.net/public-companies/cango" },

  // Large (1K–10K BTC)
  { name: "American Bitcoin", ticker: "ABTC", btcHeld: 5_800, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/american-bitcoin" },
  { name: "Boyaa Interactive", ticker: "0434.HK", btcHeld: 4_000, sector: "tech", country: "HK", sourceUrl: "https://bitcointreasuries.net/public-companies/boyaa-interactive" },
  { name: "HIVE Digital", ticker: "HIVE", btcHeld: 2_200, sector: "miner", country: "CA", sourceUrl: "https://bitcointreasuries.net/public-companies/hive-digital" },
  { name: "Core Scientific", ticker: "CORZ", btcHeld: 2_100, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/core-scientific" },
  { name: "Bitfarms", ticker: "BITF", btcHeld: 1_800, sector: "miner", country: "CA", sourceUrl: "https://bitcointreasuries.net/public-companies/bitfarms" },
  { name: "BitFuFu", ticker: "FUFU", btcHeld: 1_700, sector: "miner", country: "SG", sourceUrl: "https://bitcointreasuries.net/public-companies/bitfufu" },
  { name: "Nexon", ticker: "3659.T", btcHeld: 1_700, sector: "tech", country: "JP", sourceUrl: "https://bitcointreasuries.net/public-companies/nexon" },
  { name: "Remixpoint", ticker: "3825.T", btcHeld: 1_400, sector: "financial", country: "JP", sourceUrl: "https://bitcointreasuries.net/public-companies/remixpoint" },
  { name: "Cipher Mining", ticker: "CIFR", btcHeld: 1_000, sector: "miner", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/cipher-mining" },
  { name: "KULR Technology", ticker: "KULR", btcHeld: 1_000, sector: "tech", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/kulr-technology" },

  // Small (<1K BTC) — figures from bitcointreasuries.net
  { name: "Aker ASA", ticker: "AKER", btcHeld: 754, sector: "other", country: "NO", sourceUrl: "https://bitcointreasuries.net/public-companies/aker-asa" },
  { name: "SOS Limited", ticker: "SOS", btcHeld: 676, sector: "tech", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/sos-limited" },
  { name: "Meliuz", ticker: "CASH3.SA", btcHeld: 596, sector: "tech", country: "BR", sourceUrl: "https://bitcointreasuries.net/public-companies/meliuz" },
  { name: "MercadoLibre", ticker: "MELI", btcHeld: 570, sector: "tech", country: "AR", sourceUrl: "https://bitcointreasuries.net/public-companies/mercadolibre" },
  { name: "Samara Asset Group", ticker: "SMAG", btcHeld: 525, sector: "financial", country: "DE", sourceUrl: "https://bitcointreasuries.net/public-companies/samara-asset-group" },
  { name: "Jasmine Group", ticker: "JAS", btcHeld: 506, sector: "other", country: "TH", sourceUrl: "https://bitcointreasuries.net/public-companies/jasmine-group" },
  { name: "Alliance Resource", ticker: "ARLP", btcHeld: 482, sector: "other", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/alliance-resource-partners" },
  { name: "Genius Group", ticker: "GNS", btcHeld: 420, sector: "other", country: "SG", sourceUrl: "https://bitcointreasuries.net/public-companies/genius-group" },
  { name: "Rumble", ticker: "RUM", btcHeld: 211, sector: "tech", country: "US", sourceUrl: "https://bitcointreasuries.net/public-companies/rumble" },
  { name: "DeFi Technologies", ticker: "DEFI", btcHeld: 209, sector: "financial", country: "CA", sourceUrl: "https://bitcointreasuries.net/public-companies/defi-technologies" },
]

export const TOTAL_BTC_SUPPLY = 21_000_000
export const totalTreasuryBtc = treasuryHoldings.reduce((sum, h) => sum + h.btcHeld, 0)
export const treasurySupplyPct = +((totalTreasuryBtc / TOTAL_BTC_SUPPLY) * 100).toFixed(2)
export const treasuryCompanyCount = treasuryHoldings.length

// Canonical aggregate tracker for corporate treasury holdings.
export const TREASURY_AGGREGATE_SOURCE = "https://bitcointreasuries.net/"
