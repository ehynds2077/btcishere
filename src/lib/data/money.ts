import type {
  StrcMetrics,
  DividendRatePoint,
  MonthlyCapitalRaised,
  YieldComparisonItem,
  FlywheelStep,
  ProductLayer,
} from "#/lib/types"

export const strcMetrics: StrcMetrics = {
  currentYield: 11.5,
  priceTarget: 100,
  totalRaisedB: 2.1,
  btcPurchased: 21_400,
}

export const dividendRateHistory: DividendRatePoint[] = [
  { date: "2025-10", rate: 8.0, event: "STRC Launch" },
  { date: "2025-11", rate: 8.0 },
  { date: "2025-12", rate: 9.0, event: "First Ratchet" },
  { date: "2026-01", rate: 10.0, event: "Record Issuance" },
  { date: "2026-02", rate: 11.0 },
  { date: "2026-03", rate: 11.5, event: "Current Rate" },
]

export const monthlyCapitalRaised: MonthlyCapitalRaised[] = [
  { month: "Oct '25", amountM: 80 },
  { month: "Nov '25", amountM: 120 },
  { month: "Dec '25", amountM: 180 },
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
  { step: 1, title: "Issue STRC at ~$100", description: "Strategy sells preferred shares at par value to yield-hungry investors." },
  { step: 2, title: "Raise Capital", description: "Billions in fresh capital flows in from institutional and retail buyers." },
  { step: 3, title: "Buy Bitcoin", description: "Proceeds are used to purchase BTC on the open market." },
  { step: 4, title: "BTC Price Rises", description: "Sustained buying pressure pushes Bitcoin price higher." },
  { step: 5, title: "NAV Grows", description: "Strategy's Bitcoin holdings appreciate, growing net asset value." },
  { step: 6, title: "Ratchet Dividend Up", description: "Higher NAV supports a higher dividend, attracting more capital." },
]

export const productStack: ProductLayer[] = [
  { name: "Bitcoin", description: "Base layer — scarce, decentralized reserve asset", status: "live" },
  { name: "STRC", description: "Preferred stock — $100 par, floating dividend backed by BTC", status: "live" },
  { name: "Buck Token", description: "Stablecoin pegged to $1, yield pass-through from STRC", status: "coming" },
  { name: "Bank Accounts", description: "Dollar-denominated accounts earning Bitcoin-backed yield", status: "coming" },
]
