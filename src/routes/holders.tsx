import { createFileRoute } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { HoldersTreemap } from "#/components/charts/HoldersTreemap"
import {
  controlledBtcTotal,
  economicExposureBtcTotal,
  holderRecords,
  holderTypeSummary,
  indirectExposureBtcTotal,
  ownershipMethodNotes,
  ownershipViewLastUpdated,
} from "#/lib/data"

export const Route = createFileRoute("/holders")({
  component: HoldersPage,
})

type MetricMode = "controlled" | "exposure"
type FilterMode = "ALL" | "ETF" | "Treasury" | "Nation" | "Institution" | "Bank"

function HoldersPage() {
  const [metric, setMetric] = useState<MetricMode>("controlled")
  const [filter, setFilter] = useState<FilterMode>("ALL")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return holderRecords
      .filter((row) => filter === "ALL" || row.holderType === filter)
      .filter((row) => {
        if (!query) return true
        const haystack = `${row.name} ${row.vehicle ?? ""}`.toLowerCase()
        return haystack.includes(query)
      })
      .map((row) => ({
        ...row,
        value: metric === "controlled"
          ? row.controlledBtc
          : row.controlledBtc + row.indirectExposureBtc,
      }))
      .filter((row) => row.value > 0)
      .sort((a, b) => b.value - a.value)
  }, [filter, metric, search])

  return (
    <div className="space-y-10">
      <AnimateIn>
        <section className="hero-panel rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="display-kicker">Who Holds It</p>
          <h1 className="display-title text-4xl sm:text-5xl md:text-6xl">
            Who holds <span className="text-gradient">Bitcoin</span>
          </h1>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Every entity with disclosed Bitcoin exposure -- nations, ETFs, corporate treasuries, pension funds,
            endowments, and banks -- ranked and categorized. Controlled BTC and look-through exposure are
            tracked separately so nothing gets double-counted.
          </p>
          <p className="text-xs text-muted-foreground">Last updated: {ownershipViewLastUpdated}</p>
        </section>
      </AnimateIn>

      <AnimateInGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnimateInGroupItem>
          <StatCard label="Controlled BTC" value={controlledBtcTotal} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Indirect Exposure BTC" value={indirectExposureBtcTotal} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Economic Exposure BTC" value={economicExposureBtcTotal} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Tracked Entities" value={holderRecords.length} />
        </AnimateInGroupItem>
      </AnimateInGroup>

      <AnimateIn>
        <section className="story-card rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMetric("controlled")}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${metric === "controlled" ? "bg-primary/16 border-primary/60 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              Controlled BTC
            </button>
            <button
              type="button"
              onClick={() => setMetric("exposure")}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${metric === "exposure" ? "bg-primary/16 border-primary/60 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              Economic Exposure BTC
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(["ALL", "ETF", "Treasury", "Nation", "Institution", "Bank"] as const).map((kind) => (
              <button
                key={kind}
                type="button"
                onClick={() => setFilter(kind)}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${filter === kind ? "bg-accent border-primary/45 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
              >
                {kind}
              </button>
            ))}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search holder or vehicle"
              className="ml-auto min-w-[220px] bg-background/60 border border-border rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <HoldersTreemap
          title={metric === "controlled" ? "Controlled BTC -- direct holdings only" : "Economic exposure -- controlled + indirect"}
          rows={filtered}
          mode={metric}
        />
      </AnimateIn>

      <AnimateIn>
        <section className="story-card rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-border/70">
            <h2 className="text-lg font-semibold tracking-tight">The ranked list</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Controlled BTC is what the entity directly controls. Indirect exposure is look-through or ETF/fund exposure.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/70">
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">#</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Holder</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Type</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Controlled BTC</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Indirect BTC</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Total Exposure BTC</th>
                  <th className="px-3 py-2 text-left text-xs text-muted-foreground">Vehicle / Note</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, idx) => (
                  <tr key={row.id} className="border-b border-border/40 hover:bg-accent/30 transition-colors">
                    <td className="px-3 py-2 text-xs text-muted-foreground">{idx + 1}</td>
                    <td className="px-3 py-2 font-medium">{row.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">{row.holderType}</td>
                    <td className="px-3 py-2 tabular-nums">{row.controlledBtc.toLocaleString()}</td>
                    <td className="px-3 py-2 tabular-nums">{row.indirectExposureBtc.toLocaleString()}</td>
                    <td className="px-3 py-2 tabular-nums font-semibold">{(row.controlledBtc + row.indirectExposureBtc).toLocaleString()}</td>
                    <td className="px-3 py-2 text-xs text-muted-foreground">{row.vehicle ?? "-"}{row.disclosure === "estimated" ? " (est.)" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="grid gap-4 lg:grid-cols-2">
          <article className="story-card rounded-2xl p-5 space-y-3">
            <p className="display-kicker">By category</p>
            <ul className="space-y-2 text-sm">
              {holderTypeSummary.map((row) => (
                <li key={row.holderType} className="flex items-center justify-between gap-4 border-b border-border/50 pb-2">
                  <span className="text-foreground">{row.holderType} ({row.entityCount})</span>
                  <span className="text-muted-foreground tabular-nums">
                    {metric === "controlled" ? row.controlledBtc.toLocaleString() : row.economicExposureBtc.toLocaleString()} BTC
                  </span>
                </li>
              ))}
            </ul>
          </article>
          <article className="story-card rounded-2xl p-5 space-y-3">
            <p className="display-kicker">How we count</p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {ownershipMethodNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </article>
        </section>
      </AnimateIn>
    </div>
  )
}
