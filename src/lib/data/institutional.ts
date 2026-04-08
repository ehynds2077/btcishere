import type { InstitutionalAllocation } from "#/lib/types"

export const institutionalAllocations: InstitutionalAllocation[] = [
  { name: "Abu Dhabi (Mubadala)", amountUsd: 1_000, vehicle: "BTC ETF", type: "Sovereign Wealth" },
  { name: "Norway (NBIM)", amountUsd: 500, vehicle: "Indirect (MSTR, etc.)", type: "Sovereign Wealth" },
  { name: "State of Wisconsin", amountUsd: 321, vehicle: "BTC ETF", type: "Pension Fund" },
  { name: "State of Michigan", amountUsd: 250, vehicle: "BTC ETF", type: "Pension Fund" },
  { name: "Harvard Endowment", amountUsd: 200, vehicle: "Direct BTC", type: "Endowment" },
  { name: "State of Florida", amountUsd: 150, vehicle: "BTC ETF", type: "Pension Fund" },
  { name: "Dartmouth Endowment", amountUsd: 75, vehicle: "BTC ETF", type: "Endowment" },
  { name: "Brown Endowment", amountUsd: 50, vehicle: "BTC ETF", type: "Endowment" },
  { name: "Yale Endowment", amountUsd: 40, vehicle: "BTC Fund", type: "Endowment" },
  { name: "Emory Endowment", amountUsd: 35, vehicle: "BTC ETF", type: "Endowment" },
]

export const totalInstitutionalCapital = institutionalAllocations.reduce(
  (sum, a) => sum + a.amountUsd,
  0,
)
