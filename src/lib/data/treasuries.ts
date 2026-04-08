import type { TreasuryHolding } from "#/lib/types"

export const treasuryHoldings: TreasuryHolding[] = [
  // Mega (>10K BTC)
  { name: "Strategy", ticker: "MSTR", btcHeld: 687_000, sector: "treasury-pure", country: "US" },
  { name: "MARA Holdings", ticker: "MARA", btcHeld: 53_000, sector: "miner", country: "US" },
  { name: "Twenty One Capital", ticker: "XXI", btcHeld: 43_500, sector: "treasury-pure", country: "US" },
  { name: "MetaPlanet", ticker: "MTPL", btcHeld: 35_000, sector: "treasury-pure", country: "JP" },
  { name: "Riot Platforms", ticker: "RIOT", btcHeld: 18_000, sector: "miner", country: "US" },
  { name: "Galaxy Digital", ticker: "GLXY", btcHeld: 17_000, sector: "financial", country: "CA" },
  { name: "Coinbase", ticker: "COIN", btcHeld: 14_500, sector: "exchange", country: "US" },
  { name: "Hut 8 Mining", ticker: "HUT", btcHeld: 13_700, sector: "miner", country: "CA" },
  { name: "CleanSpark", ticker: "CLSK", btcHeld: 13_000, sector: "miner", country: "US" },
  { name: "Strive", ticker: "STRV", btcHeld: 12_800, sector: "financial", country: "US" },
  { name: "Tesla", ticker: "TSLA", btcHeld: 11_500, sector: "tech", country: "US" },
  { name: "Trump Media", ticker: "DJT", btcHeld: 11_500, sector: "other", country: "US" },
  { name: "Block Inc", ticker: "XYZ", btcHeld: 8_900, sector: "tech", country: "US" },
  { name: "Cango Inc", ticker: "CANG", btcHeld: 7_500, sector: "other", country: "CN" },

  // Large (1K–10K BTC)
  { name: "American Bitcoin", ticker: "ABTC", btcHeld: 5_800, sector: "miner", country: "US" },
  { name: "Boyaa Interactive", ticker: "0434", btcHeld: 4_000, sector: "tech", country: "HK" },
  { name: "HIVE Digital", ticker: "HIVE", btcHeld: 2_200, sector: "miner", country: "CA" },
  { name: "Core Scientific", ticker: "CORZ", btcHeld: 2_100, sector: "miner", country: "US" },
  { name: "Bitfarms", ticker: "BITF", btcHeld: 1_800, sector: "miner", country: "CA" },
  { name: "BitFuFu", ticker: "FUFU", btcHeld: 1_700, sector: "miner", country: "SG" },
  { name: "Nexon", ticker: "3659", btcHeld: 1_700, sector: "tech", country: "JP" },
  { name: "Remixpoint", ticker: "3825", btcHeld: 1_400, sector: "financial", country: "JP" },
  { name: "Cipher Mining", ticker: "CIFR", btcHeld: 1_000, sector: "miner", country: "US" },
  { name: "KULR Technology", ticker: "KULR", btcHeld: 1_000, sector: "tech", country: "US" },

  // Small (<1K BTC)
  { name: "Aker ASA", ticker: "AKER", btcHeld: 754, sector: "other", country: "NO" },
  { name: "SOS Limited", ticker: "SOS", btcHeld: 676, sector: "tech", country: "US" },
  { name: "Meliuz", ticker: "CASH3", btcHeld: 596, sector: "tech", country: "BR" },
  { name: "MercadoLibre", ticker: "MELI", btcHeld: 570, sector: "tech", country: "AR" },
  { name: "Samara Asset Group", ticker: "SMAG", btcHeld: 525, sector: "financial", country: "DE" },
  { name: "Jasmine Group", ticker: "JAS", btcHeld: 506, sector: "other", country: "TH" },
  { name: "Alliance Resource", ticker: "ARLP", btcHeld: 482, sector: "other", country: "US" },
  { name: "Genius Group", ticker: "GNS", btcHeld: 420, sector: "other", country: "SG" },
  { name: "Rumble", ticker: "RUM", btcHeld: 211, sector: "tech", country: "US" },
  { name: "DeFi Technologies", ticker: "DEFI", btcHeld: 209, sector: "financial", country: "CA" },
]

export const TOTAL_BTC_SUPPLY = 21_000_000
export const totalTreasuryBtc = treasuryHoldings.reduce((sum, h) => sum + h.btcHeld, 0)
export const treasurySupplyPct = +((totalTreasuryBtc / TOTAL_BTC_SUPPLY) * 100).toFixed(2)
export const treasuryCompanyCount = treasuryHoldings.length
