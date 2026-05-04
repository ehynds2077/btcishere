import type {
  StrcMetrics,
  DividendRatePoint,
  MonthlyCapitalRaised,
  YieldComparisonItem,
  FlywheelStep,
  ProductLayer,
} from "#/lib/types"

// Strategy's STRC perpetual preferred stock — IPO'd in July 2025 at an
// 8% dividend, since ratcheted up. Figures verified May 2026 against
// Strategy's STRC information page and Cointelegraph/CoinDesk reporting.
export const strcMetrics: StrcMetrics = {
  currentYield: 11.5,
  priceTarget: 100,
  totalRaisedB: 2.1,
  btcPurchased: 21_400,
}

export const STRC_INFO_SOURCE = "https://www.strategy.com/strc/learn"
export const STRC_DIVIDEND_SOURCE = "https://www.coindesk.com/markets/2026/03/01/strategy-lifts-strc-dividend-to-11-5-as-mstr-extends-monthly-losing-streak-to-8"

export const dividendRateHistory: DividendRatePoint[] = [
  { date: "2025-07", rate: 8.0, event: "STRC IPO" },
  { date: "2025-08", rate: 8.0 },
  { date: "2025-12", rate: 9.0, event: "First Ratchet" },
  { date: "2026-01", rate: 10.0 },
  { date: "2026-02", rate: 11.0 },
  { date: "2026-03", rate: 11.5, event: "Current Rate" },
]

export const monthlyCapitalRaised: MonthlyCapitalRaised[] = [
  { month: "Aug '25", amountM: 80 },
  { month: "Sep '25", amountM: 120 },
  { month: "Oct '25", amountM: 180 },
  { month: "Nov '25", amountM: 250 },
  { month: "Jan '26", amountM: 300, isRecord: true },
  { month: "Feb '26", amountM: 260 },
]

export const yieldComparison: YieldComparisonItem[] = [
  { name: "STRC", yield: 11.5, color: "var(--chart-1)" },
  { name: "Corp Bonds", yield: 5.5, color: "var(--chart-3)" },
  { name: "10Y Treasury", yield: 4.3, color: "var(--chart-4)" },
  { name: "Savings Acct", yield: 4.0, color: "var(--chart-5)" },
  { name: "S&P Dividend", yield: 1.3, color: "var(--chart-2)" },
]

export const flywheelSteps: FlywheelStep[] = [
  { step: 1, title: "Issue STRC at ~$100", description: "Strategy sells preferred shares at par to yield-seeking investors." },
  { step: 2, title: "Raise Capital", description: "Capital flows in from institutional and retail buyers via the ATM program." },
  { step: 3, title: "Buy Bitcoin", description: "Proceeds are used to purchase BTC on the open market." },
  { step: 4, title: "BTC Price Rises", description: "Sustained accumulation pressure supports a higher Bitcoin price." },
  { step: 5, title: "NAV Grows", description: "Strategy's BTC NAV grows, improving the dividend-coverage ratio." },
  { step: 6, title: "Ratchet Dividend Up", description: "Higher coverage allows the variable dividend to ratchet up, attracting more capital." },
]

// Buck launched in January 2026. It is NOT a stablecoin and does not
// hold a $1 peg — Buck Labs explicitly markets it as a "savings coin"
// backed by Strategy shares with rewards funded indirectly via STRC.
export const productStack: ProductLayer[] = [
  { name: "Bitcoin", description: "Base asset: a fixed-supply digital bearer asset with no issuer and no dividend.", status: "live" },
  { name: "STRC", description: "Perpetual preferred stock issued by Strategy at $100 par; variable dividend rate was 11.5% as of March 2026.", status: "live" },
  { name: "Buck", description: "Yield-oriented token backed by Strategy shares, with rewards linked indirectly to STRC holdings; not pegged to $1.", status: "live" },
  { name: "Bitcoin-backed credit", description: "Loans secured by BTC or Bitcoin ETF collateral; lenders can require more collateral or liquidate if values fall.", status: "live" },
]
