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
  sourceUrl: string
}

const BTC_PRICE_ASSUMED_USD = 80_000

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
  sourceUrl: etf.sourceUrl,
}))

const directTreasuryHolders: HolderRecord[] = treasuryHoldings.map((h) => ({
  id: `treasury-${h.ticker}`,
  name: h.name,
  holderType: "Treasury",
  controlledBtc: h.btcHeld,
  indirectExposureBtc: 0,
  vehicle: h.ticker,
  disclosure: "reported",
  sourceUrl: h.sourceUrl,
}))

const directNationHolders: HolderRecord[] = nationsWithHoldings.map((n) => ({
  id: `nation-${n.country}`,
  name: n.country,
  holderType: "Nation",
  controlledBtc: n.btcHeld ?? 0,
  indirectExposureBtc: 0,
  vehicle: n.status,
  disclosure: "reported",
  sourceUrl: n.sourceUrl,
}))

const institutionVehicleHints: Record<string, string> = {
  "Abu Dhabi (Mubadala)": "IBIT",
  "Norway (NBIM)": "MSTR & Metaplanet",
  "Harvard Management Co.": "IBIT",
  "Emory University": "Grayscale BTC + IBIT",
  "Trustees of Dartmouth College": "IBIT",
  "State of Michigan": "ARKB",
  "Brown University": "IBIT",
}

const indirectInstitutionHolders: HolderRecord[] = institutionalAllocations.map((inst) => ({
  id: `institution-${inst.name}`,
  name: inst.name,
  holderType: "Institution",
  controlledBtc: 0,
  indirectExposureBtc: usdMillionsToBtc(inst.amountUsd),
  vehicle: institutionVehicleHints[inst.name] ?? inst.vehicle,
  note: `Look-through exposure as of ${inst.asOf}`,
  disclosure: "estimated",
  sourceUrl: inst.sourceUrl,
}))

const indirectBankHolders: HolderRecord[] = [
  {
    id: "bank-goldman",
    name: "Goldman Sachs",
    holderType: "Bank",
    controlledBtc: 0,
    indirectExposureBtc: usdMillionsToBtc(1060),
    vehicle: "BTC spot ETFs (IBIT/FBTC)",
    note: "Q4 2025 13F: ~$1.06B across spot BTC ETFs",
    disclosure: "estimated",
    sourceUrl: "https://www.theblock.co/post/389332/goldman-sachs-trims-bitcoin-etf-exposure-q4",
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
  "Controlled BTC counts only directly held coins (treasury wallets, nation-state wallets, ETF custodians).",
  "Look-through institutional and bank exposures are presented separately so we never double-count ETF-held BTC.",
  `USD-denominated allocations are converted to BTC using an assumed price of $${BTC_PRICE_ASSUMED_USD.toLocaleString()} per BTC for comparability — the underlying disclosures are in dollars or share counts.`,
  "Rows flagged as estimated are inferred from 13F filings or other indirect disclosures rather than direct BTC reporting.",
  "Each row links out to the underlying filing, press release, or aggregator entry that supplies the figure.",
]

export const ownershipViewLastUpdated = "2026-05-02"
