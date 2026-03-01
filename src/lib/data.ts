import type { Category } from "#/types/news"

export interface TreasuryHolding {
  name: string
  ticker: string
  btcHeld: number
  color: string
}

export const treasuryHoldings: TreasuryHolding[] = [
  { name: "Strategy", ticker: "MSTR", btcHeld: 718_000, color: "var(--chart-1)" },
  { name: "Twenty One Capital", ticker: "XXI", btcHeld: 43_500, color: "var(--chart-2)" },
  { name: "MetaPlanet", ticker: "MTPL", btcHeld: 35_000, color: "var(--chart-3)" },
  { name: "Strive", ticker: "STRV", btcHeld: 12_800, color: "var(--chart-4)" },
  { name: "American Bitcoin", ticker: "ABTC", btcHeld: 5_800, color: "var(--chart-5)" },
]

export const TOTAL_BTC_SUPPLY = 21_000_000
export const totalTreasuryBtc = treasuryHoldings.reduce((sum, h) => sum + h.btcHeld, 0)
export const treasurySupplyPct = +((totalTreasuryBtc / TOTAL_BTC_SUPPLY) * 100).toFixed(2)

export interface InstitutionalAllocation {
  name: string
  amountUsd: number
  vehicle: string
  type: string
}

export const institutionalAllocations: InstitutionalAllocation[] = [
  { name: "Abu Dhabi (Mubadala)", amountUsd: 1_000, vehicle: "BTC ETF", type: "Sovereign Wealth" },
  { name: "State of Wisconsin", amountUsd: 321, vehicle: "BTC ETF", type: "Pension Fund" },
  { name: "Harvard Endowment", amountUsd: 200, vehicle: "Direct BTC", type: "Endowment" },
  { name: "Dartmouth Endowment", amountUsd: 75, vehicle: "BTC ETF", type: "Endowment" },
  { name: "Brown Endowment", amountUsd: 50, vehicle: "BTC ETF", type: "Endowment" },
  { name: "Emory Endowment", amountUsd: 35, vehicle: "BTC ETF", type: "Endowment" },
]

export const totalInstitutionalCapital = institutionalAllocations.reduce(
  (sum, a) => sum + a.amountUsd,
  0,
)

export interface BankMilestone {
  bank: string
  event: string
  date: string
  category: string
}

export const bankMilestones: BankMilestone[] = [
  { bank: "Bank of America", event: "Opens BTC trading to wealth management clients", date: "2025-10", category: "trading" },
  { bank: "Morgan Stanley", event: "Offers BTC ETF access to brokerage clients", date: "2025-08", category: "advisory" },
  { bank: "Goldman Sachs", event: "Discloses $1.6B BTC ETF position", date: "2025-05", category: "exposure" },
  { bank: "Citigroup", event: "Launches institutional Bitcoin custody", date: "2025-06", category: "custody" },
  { bank: "JPMorgan", event: "Enables BTC futures & ETF clearing for institutions", date: "2025-03", category: "trading" },
]

export interface NationStat {
  country: string
  flag: string
  status: string
  highlight: string
}

export const nationStats: NationStat[] = [
  { country: "El Salvador", flag: "🇸🇻", status: "Legal Tender", highlight: "6,000+ BTC in national reserve" },
  { country: "Bhutan", flag: "🇧🇹", status: "Mining & Reserve", highlight: "State-run mining since 2019" },
  { country: "Argentina", flag: "🇦🇷", status: "Embracing Adoption", highlight: "Pro-Bitcoin regulatory framework" },
]

export interface AdoptionEvent {
  date: string
  title: string
  description: string
  category: Category
}

export const adoptionTimeline: AdoptionEvent[] = [
  { date: "2020-08", title: "MicroStrategy's First Purchase", description: "Buys $250M in BTC — the first major public company treasury move.", category: "treasuries" },
  { date: "2021-02", title: "Tesla Buys $1.5B in BTC", description: "Tesla adds Bitcoin to its balance sheet, making global headlines.", category: "treasuries" },
  { date: "2021-06", title: "El Salvador Makes BTC Legal Tender", description: "First nation to adopt Bitcoin as legal tender alongside the US dollar.", category: "nations" },
  { date: "2021-10", title: "First Bitcoin Futures ETF", description: "ProShares BITO launches — first US Bitcoin-linked ETF.", category: "institutional" },
  { date: "2023-06", title: "BlackRock Files for Spot ETF", description: "World's largest asset manager files for a spot Bitcoin ETF, sparking institutional FOMO.", category: "institutional" },
  { date: "2024-01", title: "Spot Bitcoin ETFs Approved", description: "SEC approves 11 spot Bitcoin ETFs — a watershed moment for institutional access.", category: "institutional" },
  { date: "2024-05", title: "Wisconsin Pension Buys ETF", description: "State of Wisconsin pension fund discloses $321M in BTC ETF holdings.", category: "institutional" },
  { date: "2024-12", title: "BTC Crosses $100K", description: "Bitcoin breaks the $100,000 milestone for the first time.", category: "treasuries" },
  { date: "2025-02", title: "Abu Dhabi's $1B Allocation", description: "Mubadala sovereign wealth fund reveals a $1B BTC ETF position.", category: "institutional" },
  { date: "2025-03", title: "JPMorgan Enables BTC Clearing", description: "JPMorgan opens BTC futures and ETF clearing for institutional clients.", category: "banks" },
  { date: "2025-05", title: "Goldman Discloses $1.6B Position", description: "Goldman Sachs reveals $1.6B in BTC ETF holdings in SEC filing.", category: "banks" },
  { date: "2025-06", title: "Citigroup Launches BTC Custody", description: "Citigroup rolls out institutional Bitcoin custody services.", category: "banks" },
  { date: "2025-07", title: "Twenty One Capital Launches", description: "New BTC-native treasury company launches with 43,500 BTC.", category: "treasuries" },
  { date: "2025-08", title: "Morgan Stanley Opens BTC Access", description: "Morgan Stanley offers BTC ETF access to all brokerage clients.", category: "banks" },
  { date: "2025-10", title: "Bank of America Opens BTC Trading", description: "BofA opens Bitcoin trading to wealth management clients.", category: "banks" },
]

export const categoryColors: Record<Category, string> = {
  banks: "var(--chart-1)",
  institutional: "var(--chart-2)",
  treasuries: "var(--chart-3)",
  nations: "var(--chart-4)",
}

export const categoryLabels: Record<Category, string> = {
  banks: "Banks",
  institutional: "Institutional",
  treasuries: "Treasuries",
  nations: "Nations",
}
