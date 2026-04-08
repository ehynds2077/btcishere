import type { SupplySegment } from "#/lib/types"

export const TOTAL_BTC_SUPPLY = 21_000_000
export const CIRCULATING_SUPPLY = 19_850_000
export const UNMINED = TOTAL_BTC_SUPPLY - CIRCULATING_SUPPLY

export const supplySegments: SupplySegment[] = [
  { name: "US Spot ETFs", btc: 1_272_000, color: "var(--chart-1)" },
  { name: "Corporate Treasuries", btc: 965_000, color: "var(--chart-2)" },
  { name: "Government Holdings", btc: 481_000, color: "var(--chart-3)" },
  { name: "Satoshi's Coins", btc: 1_100_000, color: "var(--chart-4)" },
  { name: "Lost / Inaccessible", btc: 3_700_000, color: "var(--chart-5)" },
  { name: "Unmined", btc: UNMINED, color: "var(--chart-6)" },
]

const accountedFor = supplySegments.reduce((s, seg) => s + seg.btc, 0)
export const circulatingRemainder: SupplySegment = {
  name: "Circulating Remainder",
  btc: TOTAL_BTC_SUPPLY - accountedFor,
  color: "var(--muted)",
}

export const allSupplySegments: SupplySegment[] = [...supplySegments, circulatingRemainder]

// Bitcoin halving schedule — deterministic from protocol rules
export interface HalvingEvent {
  year: number
  blockReward: number
  cumulativeBtc: number
}

export const halvingSchedule: HalvingEvent[] = [
  { year: 2009, blockReward: 50, cumulativeBtc: 0 },
  { year: 2012, blockReward: 25, cumulativeBtc: 10_500_000 },
  { year: 2016, blockReward: 12.5, cumulativeBtc: 15_750_000 },
  { year: 2020, blockReward: 6.25, cumulativeBtc: 18_375_000 },
  { year: 2024, blockReward: 3.125, cumulativeBtc: 19_687_500 },
  { year: 2028, blockReward: 1.5625, cumulativeBtc: 20_343_750 },
  { year: 2032, blockReward: 0.78125, cumulativeBtc: 20_671_875 },
  { year: 2036, blockReward: 0.390625, cumulativeBtc: 20_835_938 },
  { year: 2040, blockReward: 0.195313, cumulativeBtc: 20_917_969 },
]

// Next halving: block 1,050,000, estimated April 2028
export const NEXT_HALVING_DATE = new Date("2028-04-17T00:00:00Z")
