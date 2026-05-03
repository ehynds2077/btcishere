import { useState, useMemo } from "react"
import { ExternalLink } from "lucide-react"
import { treasuryHoldings } from "#/lib/data/index"
import type { TreasuryHolding } from "#/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { Badge } from "#/components/ui/badge"
import { SECTOR_COLORS } from "#/lib/constants"

type SortKey = "btcHeld" | "name" | "ticker" | "sector" | "country"
type SortDir = "asc" | "desc"

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className={`ml-1 text-xs ${active ? "text-primary" : "text-muted-foreground/40"}`}>
      {active ? (dir === "desc" ? "\u25BC" : "\u25B2") : "\u25BC"}
    </span>
  )
}

export function HoldingsTable() {
  const [sortKey, setSortKey] = useState<SortKey>("btcHeld")
  const [sortDir, setSortDir] = useState<SortDir>("desc")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    let items = treasuryHoldings.filter(
      (h) => h.name.toLowerCase().includes(q) || h.ticker.toLowerCase().includes(q),
    )
    items = [...items].sort((a, b) => {
      const va = a[sortKey]
      const vb = b[sortKey]
      if (typeof va === "number" && typeof vb === "number") {
        return sortDir === "desc" ? vb - va : va - vb
      }
      return sortDir === "desc"
        ? String(vb).localeCompare(String(va))
        : String(va).localeCompare(String(vb))
    })
    return items
  }, [sortKey, sortDir, search])

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"))
    } else {
      setSortKey(key)
      setSortDir("desc")
    }
  }

  const thClass = "px-3 py-2 text-left text-xs font-medium text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors"

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            All Corporate Holdings
          </CardTitle>
          <input
            type="text"
            placeholder="Search company or ticker..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-secondary border border-border rounded-md px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-56"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground w-10">#</th>
                <th className={thClass} onClick={() => toggleSort("name")}>
                  Company <SortIcon active={sortKey === "name"} dir={sortDir} />
                </th>
                <th className={thClass} onClick={() => toggleSort("ticker")}>
                  Ticker <SortIcon active={sortKey === "ticker"} dir={sortDir} />
                </th>
                <th className={thClass} onClick={() => toggleSort("btcHeld")}>
                  BTC Held <SortIcon active={sortKey === "btcHeld"} dir={sortDir} />
                </th>
                <th className={thClass} onClick={() => toggleSort("sector")}>
                  Sector <SortIcon active={sortKey === "sector"} dir={sortDir} />
                </th>
                <th className={thClass} onClick={() => toggleSort("country")}>
                  Country <SortIcon active={sortKey === "country"} dir={sortDir} />
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">Source</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((h: TreasuryHolding, i: number) => (
                <tr
                  key={h.ticker}
                  className="border-b border-border/50 hover:bg-accent/30 transition-colors"
                >
                  <td className="px-3 py-2 text-muted-foreground text-xs">{i + 1}</td>
                  <td className="px-3 py-2 font-medium">{h.name}</td>
                  <td className="px-3 py-2 text-muted-foreground">{h.ticker}</td>
                  <td className="px-3 py-2 font-medium tabular-nums">
                    {h.btcHeld.toLocaleString()}
                  </td>
                  <td className="px-3 py-2">
                    <Badge
                      variant="secondary"
                      className="text-xs capitalize"
                      style={{ borderLeft: `3px solid ${SECTOR_COLORS[h.sector] ?? "var(--muted)"}` }}
                    >
                      {h.sector.replace("-", " ")}
                    </Badge>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{h.country}</td>
                  <td className="px-3 py-2">
                    <a
                      href={h.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      aria-label={`Source for ${h.name} holdings`}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
