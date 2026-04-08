// Re-export constants
export { CHART_COLORS, CATEGORY_COLORS, CATEGORY_LABELS, SECTOR_COLORS } from "#/lib/constants"

// Re-export types for backwards compatibility
export type {
  TreasuryHolding,
  EtfHolding,
  NationStat,
  InstitutionalAllocation,
  BankMilestone,
  AdoptionEvent,
  SupplySegment,
  StrcMetrics,
  DividendRatePoint,
  MonthlyCapitalRaised,
  YieldComparisonItem,
  FlywheelStep,
  ProductLayer,
} from "#/lib/types"

// Re-export all data modules
export { treasuryHoldings, totalTreasuryBtc, treasurySupplyPct, treasuryCompanyCount, TOTAL_BTC_SUPPLY } from "./treasuries"
export { usSpotEtfs, internationalEtfs, allEtfs, totalUsEtfBtc, totalCanadaEtfBtc, totalEtfCount, etfByRegion, totalAllEtfBtc } from "./etfs"
export { nationStats, nationsWithHoldings, totalNationBtc } from "./nations"
export { institutionalAllocations, totalInstitutionalCapital } from "./institutional"
export { bankMilestones } from "./banks"
export { supplySegments, allSupplySegments, circulatingRemainder, CIRCULATING_SUPPLY, UNMINED, halvingSchedule, NEXT_HALVING_DATE } from "./supply"
export type { HalvingEvent } from "./supply"
export { adoptionTimeline } from "./timeline"
export {
  holderRecords,
  holderTypeSummary,
  controlledBtcTotal,
  indirectExposureBtcTotal,
  economicExposureBtcTotal,
  ownershipMethodNotes,
  ownershipViewLastUpdated,
} from "./ownership"
export type { HolderType, HolderRecord } from "./ownership"
export {
  strcMetrics,
  dividendRateHistory,
  monthlyCapitalRaised,
  yieldComparison,
  flywheelSteps,
  productStack,
} from "./money"

