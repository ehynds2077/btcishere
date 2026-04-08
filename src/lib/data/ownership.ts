import { allEtfs } from "./etfs"
import { institutionalAllocations } from "./institutional"
import { nationsWithHoldings } from "./nations"
import { treasuryHoldings } from "./treasuries"

export type HolderType = "ETF" | "Treasury" | "Nation" | "Institution" | "Bank"

export interface HolderRecord {
  id: string
  name: string
  holderType: HolderType
  controlledBtc: number
  indirectExposureBtc: number
  vehicle?: string
  note?: string
  disclosure: "reported" | "estimated"
}

const BTC_PRICE_ASSUMED_USD = 100_000

function usdMillionsToBtc(amountUsdM: number): number {
  return Math.round((amountUsdM * 1_000_000) / BTC_PRICE_ASSUMED_USD)
}

function etfBtcApprox(btcHeld?: number, aumUsdM?: number): number {
  if (btcHeld != null) return btcHeld
  if (aumUsdM != null) return usdMillionsToBtc(aumUsdM)
  return 0
}

const directEtfHolders: HolderRecord[] = allEtfs.map((etf) => ({
  id: `etf-${etf.ticker}`,
  name: `${etf.ticker} (${etf.issuer})`,
  holderType: "ETF",
  controlledBtc: etfBtcApprox(etf.btcHeld, etf.aumUsd),
  indirectExposureBtc: 0,
  vehicle: etf.name,
  disclosure: etf.btcHeld != null ? "reported" : "estimated",
}))

const directTreasuryHolders: HolderRecord[] = treasuryHoldings.map((h) => ({
  id: `treasury-${h.ticker}`,
  name: h.name,
  holderType: "Treasury",
  controlledBtc: h.btcHeld,
  indirectExposureBtc: 0,
  vehicle: h.ticker,
  disclosure: "reported",
}))

const directNationHolders: HolderRecord[] = nationsWithHoldings.map((n) => ({
  id: `nation-${n.country}`,
  name: n.country,
  holderType: "Nation",
  controlledBtc: n.btcHeld ?? 0,
  indirectExposureBtc: 0,
  vehicle: n.status,
  disclosure: "reported",
}))

const institutionVehicleHints: Record<string, string> = {
  "Abu Dhabi (Mubadala)": "IBIT",
  "Norway (NBIM)": "MSTR & ETF basket",
  "State of Wisconsin": "IBIT",
  "State of Michigan": "IBIT",
  "Harvard Endowment": "IBIT",
  "State of Florida": "FBTC / IBIT basket",
  "Dartmouth Endowment": "IBIT",
  "Brown Endowment": "IBIT",
  "Yale Endowment": "BTC fund basket",
  "Emory Endowment": "Grayscale BTC",
}

const indirectInstitutionHolders: HolderRecord[] = institutionalAllocations.map((inst) => ({
  id: `institution-${inst.name}`,
  name: inst.name,
  holderType: "Institution",
  controlledBtc: 0,
  indirectExposureBtc: usdMillionsToBtc(inst.amountUsd),
  vehicle: institutionVehicleHints[inst.name] ?? inst.vehicle,
  note: "Look-through exposure via funds or equity vehicles",
  disclosure: "estimated",
}))

const indirectBankHolders: HolderRecord[] = [
  {
    id: "bank-goldman",
    name: "Goldman Sachs",
    holderType: "Bank",
    controlledBtc: 0,
    indirectExposureBtc: usdMillionsToBtc(2360),
    vehicle: "BTC ETF positions",
    note: "13F ETF exposure translated to BTC equivalent",
    disclosure: "estimated",
  },
  {
    id: "bank-jpm",
    name: "JPMorgan",
    holderType: "Bank",
    controlledBtc: 0,
    indirectExposureBtc: usdMillionsToBtc(350),
    vehicle: "Client-facing BTC products",
    note: "Conservative exposure estimate for disclosed product footprint",
    disclosure: "estimated",
  },
]

export const holderRecords: HolderRecord[] = [
  ...directEtfHolders,
  ...directTreasuryHolders,
  ...directNationHolders,
  ...indirectInstitutionHolders,
  ...indirectBankHolders,
]

export const controlledBtcTotal = holderRecords.reduce((sum, h) => sum + h.controlledBtc, 0)
export const indirectExposureBtcTotal = holderRecords.reduce((sum, h) => sum + h.indirectExposureBtc, 0)
export const economicExposureBtcTotal = controlledBtcTotal + indirectExposureBtcTotal

export const holderTypeSummary = (["ETF", "Treasury", "Nation", "Institution", "Bank"] as const).map((holderType) => {
  const members = holderRecords.filter((h) => h.holderType === holderType)
  return {
    holderType,
    entityCount: members.length,
    controlledBtc: members.reduce((sum, h) => sum + h.controlledBtc, 0),
    indirectExposureBtc: members.reduce((sum, h) => sum + h.indirectExposureBtc, 0),
    economicExposureBtc: members.reduce((sum, h) => sum + h.controlledBtc + h.indirectExposureBtc, 0),
  }
})

export const ownershipMethodNotes = [
  "Network controlled totals count direct BTC holdings only (treasuries, nations, ETF vehicles).",
  "Look-through institutional and bank exposures are presented separately to avoid double counting ETF-held BTC.",
  `USD allocations are converted to BTC using an assumed price of $${BTC_PRICE_ASSUMED_USD.toLocaleString()} per BTC for comparability.`,
  "When exposures are inferred from filings or product footprints, rows are flagged as estimated.",
]

export const ownershipViewLastUpdated = "2026-03-03"
