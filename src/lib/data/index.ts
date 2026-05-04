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
  DigitalCreditProduct,
} from "#/lib/types"

// Re-export all data modules
export { treasuryHoldings, totalTreasuryBtc, treasurySupplyPct, treasuryCompanyCount, TOTAL_BTC_SUPPLY, TREASURY_AGGREGATE_SOURCE } from "./treasuries"
export { usSpotEtfs, internationalEtfs, allEtfs, totalUsEtfBtc, totalCanadaEtfBtc, totalEtfCount, etfByRegion, totalAllEtfBtc, ETF_AGGREGATE_SOURCE } from "./etfs"
export { nationStats, nationsWithHoldings, totalNationBtc, NATION_AGGREGATE_SOURCE } from "./nations"
export { institutionalAllocations, totalInstitutionalCapital, INSTITUTIONAL_AGGREGATE_SOURCE } from "./institutional"
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
  STRC_INFO_SOURCE,
  STRC_DIVIDEND_SOURCE,
} from "./money"
export {
  digitalCreditProducts,
  strcHistory,
  STRC_PRICE_SOURCE,
  BTC_PRICE_SOURCE,
  STRC_INFO_SOURCE as STRC_LEARN_SOURCE,
  SATA_INFO_SOURCE,
  TRUE_NORTH_DASHBOARD,
} from "./credit"
export type { StrcMonthly } from "./credit"

