import type { InstitutionalAllocation } from "#/lib/types"

// Institutional Bitcoin allocations as disclosed in 13F filings or
// equivalent reporting. Each row is keyed to the disclosure date so the
// reader can tell when the figure was last confirmed — positions move
// every quarter. Notable omissions:
//   - Wisconsin SWIB sold its entire $300M+ IBIT position in Q1 2025.
//   - Florida is debating HB 183 (10% authority) but has not allocated.
//   - Yale invests in crypto venture funds; no direct ETF disclosure.
export const institutionalAllocations: InstitutionalAllocation[] = [
  {
    name: "Abu Dhabi (Mubadala)",
    amountUsd: 631,
    vehicle: "IBIT",
    type: "Sovereign Wealth",
    asOf: "2025-12-31",
    sourceUrl: "https://www.coindesk.com/markets/2026/02/17/abu-dhabi-funds-bought-the-bitcoin-dip-as-they-increased-exposure-to-blackrock-s-ibit",
  },
  {
    name: "Norway (NBIM)",
    amountUsd: 500,
    vehicle: "Indirect via MSTR & Metaplanet",
    type: "Sovereign Wealth",
    asOf: "2025-06-30",
    sourceUrl: "https://www.theblock.co/post/367169/norway-sovereign-wealth-fund-boosts-bitcoin-linked-holdings-standard-chartered",
  },
  {
    name: "Harvard Management Co.",
    amountUsd: 266,
    vehicle: "IBIT",
    type: "Endowment",
    asOf: "2025-12-31",
    sourceUrl: "https://www.theblock.co/post/389996/harvard-bitcoin-ether-etf-holdings",
  },
  {
    name: "Emory University",
    amountUsd: 52,
    vehicle: "Grayscale BTC Mini + IBIT",
    type: "Endowment",
    asOf: "2025-09-30",
    sourceUrl: "https://www.coindesk.com/markets/2025/11/13/emory-doubles-down-on-bitcoin-with-usd52m-grayscale-bet",
  },
  {
    name: "Trustees of Dartmouth College",
    amountUsd: 10,
    vehicle: "IBIT",
    type: "Endowment",
    asOf: "2025-12-31",
    sourceUrl: "https://www.pionline.com/asset-management/exchange-traded-funds/pi-dartmouth-college-grayscale-ethereum-blackrock-bitcoin-etfs-december-31-2025/",
  },
  {
    name: "State of Michigan",
    amountUsd: 11,
    vehicle: "ARKB",
    type: "Pension Fund",
    asOf: "2025-06-30",
    sourceUrl: "https://www.coindesk.com/markets/2025/08/06/michigan-s-pension-fund-increases-bitcoin-stake-signaling-confidence-in-crypto-s-future",
  },
  {
    name: "Brown University",
    amountUsd: 5,
    vehicle: "IBIT",
    type: "Endowment",
    asOf: "2025-03-31",
    sourceUrl: "https://www.nasdaq.com/articles/brown-university-bought-and-owns-49-million-blackrocks-bitcoin-etf",
  },
]

export const totalInstitutionalCapital = institutionalAllocations.reduce(
  (sum, a) => sum + a.amountUsd,
  0,
)

// Aggregate 13F tracker for endowment / pension / sovereign exposure.
export const INSTITUTIONAL_AGGREGATE_SOURCE = "https://bitcointreasuries.net/13f"
