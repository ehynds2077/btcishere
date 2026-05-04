export type Category = "banks" | "institutional" | "treasuries" | "nations" | "money" | "etfs"

export interface NewsItem {
  id: string
  title: string
  description: string
  sourceUrl: string
  date: string
  category: Category
}

export interface TreasuryHolding {
  name: string
  ticker: string
  btcHeld: number
  sector: "treasury-pure" | "miner" | "exchange" | "tech" | "financial" | "other"
  country: string
  sourceUrl: string
}

export interface EtfHolding {
  name: string
  ticker: string
  issuer: string
  btcHeld?: number
  aumUsd?: number
  region: "us" | "canada" | "europe" | "brazil" | "apac"
  sourceUrl: string
}

export interface NationStat {
  country: string
  flag: string
  status: string
  btcHeld?: number
  highlight: string
  sourceUrl: string
}

export interface InstitutionalAllocation {
  name: string
  amountUsd: number
  vehicle: string
  type: string
  asOf: string
  sourceUrl: string
}

export interface BankMilestone {
  bank: string
  event: string
  date: string
  category: string
  sourceUrl: string
}

export interface AdoptionEvent {
  date: string
  title: string
  description: string
  category: Category
  sourceUrl: string
}

export interface SupplySegment {
  name: string
  btc: number
  color: string
}

export interface StrcMetrics {
  currentYield: number
  priceTarget: number
  totalRaisedB: number
  btcPurchased: number
}

export interface DividendRatePoint {
  date: string
  rate: number
  event?: string
}

export interface MonthlyCapitalRaised {
  month: string
  amountM: number
  isRecord?: boolean
}

export interface YieldComparisonItem {
  name: string
  yield: number
  color: string
}

export interface FlywheelStep {
  step: number
  title: string
  description: string
}

export interface ProductLayer {
  name: string
  description: string
  status: "live" | "coming"
}

export interface DigitalCreditProduct {
  ticker: string
  name: string
  issuer: string
  issuerTicker: string
  yieldPct: number
  parValue: number
  currency: "USD" | "EUR"
  frequency: "Monthly" | "Quarterly" | "Semi-Monthly"
  rateType: "Variable" | "Fixed"
  seniority: number
  seniorityLabel: string
  cumulative: boolean
  convertible: boolean
  launched: string
  highlight: string
  sourceUrl: string
}
