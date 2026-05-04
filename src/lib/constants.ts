import type { Category } from "#/types/news"

export const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
  "var(--chart-7)",
  "var(--chart-8)",
] as const

export const CATEGORY_COLORS: Record<Category, string> = {
  banks: "var(--chart-1)",
  institutional: "var(--chart-2)",
  treasuries: "var(--chart-3)",
  nations: "var(--chart-4)",
  money: "var(--chart-5)",
  etfs: "var(--chart-6)",
}

export const CATEGORY_LABELS: Record<Category, string> = {
  banks: "Banks",
  institutional: "Institutional",
  treasuries: "Treasuries",
  nations: "Nations",
  money: "Credit",
  etfs: "ETFs",
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function formatYearMonth(ym: string) {
  const [y, m] = ym.split("-")
  return `${MONTH_NAMES[parseInt(m, 10) - 1]} ${y}`
}

export const SECTOR_COLORS: Record<string, string> = {
  "treasury-pure": "var(--sector-treasury)",
  miner: "var(--sector-miner)",
  exchange: "var(--sector-exchange)",
  tech: "var(--sector-tech)",
  financial: "var(--sector-financial)",
  other: "var(--sector-other)",
}
