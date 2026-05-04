import type { DigitalCreditProduct } from "#/lib/types"

// Bitcoin-backed digital credit instruments. Each is a perpetual preferred
// stock issued by a public company whose proceeds buy BTC. Yields verified
// May 2026 against issuer pages, True North Research, and recent press
// releases.
export const digitalCreditProducts: DigitalCreditProduct[] = [
  {
    ticker: "STRF",
    name: "Strife",
    issuer: "Strategy",
    issuerTicker: "MSTR",
    yieldPct: 10.0,
    parValue: 100,
    currency: "USD",
    frequency: "Quarterly",
    rateType: "Fixed",
    seniority: 1,
    seniorityLabel: "Senior-most preferred",
    cumulative: true,
    convertible: false,
    launched: "Mar 2025",
    highlight: "Fixed 10% coupon. Top of Strategy's preferred stack.",
    sourceUrl: "https://www.strategy.com/strf/learn",
  },
  {
    ticker: "STRC",
    name: "Stretch",
    issuer: "Strategy",
    issuerTicker: "MSTR",
    yieldPct: 11.5,
    parValue: 100,
    currency: "USD",
    frequency: "Monthly",
    rateType: "Variable",
    seniority: 2,
    seniorityLabel: "Senior preferred",
    cumulative: true,
    convertible: false,
    launched: "Jul 2025",
    highlight:
      "Variable monthly dividend. Designed to trade near $100 par.",
    sourceUrl: "https://www.strategy.com/strc/learn",
  },
  {
    ticker: "STRE",
    name: "Stream",
    issuer: "Strategy",
    issuerTicker: "MSTR",
    yieldPct: 10.0,
    parValue: 100,
    currency: "EUR",
    frequency: "Quarterly",
    rateType: "Fixed",
    seniority: 2,
    seniorityLabel: "Senior preferred",
    cumulative: true,
    convertible: false,
    launched: "Nov 2025",
    highlight: "Euro-denominated. Listed on the Luxembourg Euro MTF.",
    sourceUrl:
      "https://www.coindesk.com/markets/2025/11/04/strategy-introduces-a-euro-denominated-preferred-stock-stream-following-q3-earnings",
  },
  {
    ticker: "STRK",
    name: "Strike",
    issuer: "Strategy",
    issuerTicker: "MSTR",
    yieldPct: 8.0,
    parValue: 100,
    currency: "USD",
    frequency: "Quarterly",
    rateType: "Fixed",
    seniority: 3,
    seniorityLabel: "Convertible preferred",
    cumulative: true,
    convertible: true,
    launched: "Jan 2025",
    highlight: "8% coupon. Convertible to 0.1 MSTR shares.",
    sourceUrl: "https://www.strategy.com/strk/learn",
  },
  {
    ticker: "STRD",
    name: "Stride",
    issuer: "Strategy",
    issuerTicker: "MSTR",
    yieldPct: 10.0,
    parValue: 100,
    currency: "USD",
    frequency: "Quarterly",
    rateType: "Fixed",
    seniority: 4,
    seniorityLabel: "Junior-most preferred",
    cumulative: false,
    convertible: false,
    launched: "Jun 2025",
    highlight: "Junior, non-cumulative. Below the rest of Strategy's stack.",
    sourceUrl: "https://www.strategy.com/strd/learn",
  },
  {
    ticker: "SATA",
    name: "Strive Variable Rate Series A",
    issuer: "Strive",
    issuerTicker: "ASST",
    yieldPct: 13.0,
    parValue: 100,
    currency: "USD",
    frequency: "Monthly",
    rateType: "Variable",
    seniority: 2,
    seniorityLabel: "Single preferred line",
    cumulative: true,
    convertible: false,
    launched: "Jan 2026",
    highlight:
      "Same variable-rate template as STRC, issued by a smaller treasury.",
    sourceUrl:
      "https://www.globenewswire.com/news-release/2026/04/15/3274393/0/en/Strive-Announces-Increase-to-SATA-Perpetual-Preferred-Stock-Dividend-Rate-to-13-00-and-Bitcoin-Buy.html",
  },
]

// STRC monthly closing prices since IPO. Feb–May 2026 closes are taken
// from stockanalysis.com / Yahoo Finance directly. Jul 2025–Jan 2026
// closes are reconstructed from documented bookends — the IPO priced at
// $90, the all-time low of $88 was set on Jul 25 2025, and the all-time
// high of $100.42 was set on Jan 13 2026 — interpolated to track the
// dividend ratchet that ran 8% → 11.5% over the same window.
export interface StrcMonthly {
  month: string
  date: string
  strcClose: number
  rate: number
  btcClose: number
  estimated?: boolean
  event?: string
}

export const strcHistory: StrcMonthly[] = [
  { month: "Jul '25", date: "2025-07", strcClose: 89, rate: 8.0, btcClose: 115_758, estimated: true, event: "IPO" },
  { month: "Aug '25", date: "2025-08", strcClose: 90, rate: 8.0, btcClose: 108_237, estimated: true },
  { month: "Sep '25", date: "2025-09", strcClose: 91, rate: 8.0, btcClose: 114_056, estimated: true },
  { month: "Oct '25", date: "2025-10", strcClose: 93, rate: 8.0, btcClose: 109_556, estimated: true },
  { month: "Nov '25", date: "2025-11", strcClose: 94, rate: 8.0, btcClose: 90_394, estimated: true },
  { month: "Dec '25", date: "2025-12", strcClose: 96, rate: 9.0, btcClose: 87_509, estimated: true, event: "First ratchet" },
  { month: "Jan '26", date: "2026-01", strcClose: 100, rate: 10.0, btcClose: 78_700, estimated: true },
  { month: "Feb '26", date: "2026-02", strcClose: 100.0, rate: 11.0, btcClose: 67_000 },
  { month: "Mar '26", date: "2026-03", strcClose: 99.82, rate: 11.5, btcClose: 67_100 },
  { month: "Apr '26", date: "2026-04", strcClose: 99.75, rate: 11.5, btcClose: 76_350 },
  { month: "May '26", date: "2026-05", strcClose: 99.86, rate: 11.5, btcClose: 78_655 },
]

export const STRC_PRICE_SOURCE = "https://stockanalysis.com/stocks/strc/history/"
export const BTC_PRICE_SOURCE = "https://www.coingecko.com/en/coins/bitcoin/historical_data"
export const STRC_INFO_SOURCE = "https://www.strategy.com/strc/learn"
export const SATA_INFO_SOURCE =
  "https://www.globenewswire.com/news-release/2026/04/15/3274393/0/en/Strive-Announces-Increase-to-SATA-Perpetual-Preferred-Stock-Dividend-Rate-to-13-00-and-Bitcoin-Buy.html"
export const TRUE_NORTH_DASHBOARD = "https://tnorth.com/digital-credit/markets/"
