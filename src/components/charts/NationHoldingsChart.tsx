import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { ExternalLink } from "lucide-react"
import { nationsWithHoldings } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

const data = nationsWithHoldings
  .filter((n) => n.btcHeld != null)
  .sort((a, b) => (b.btcHeld ?? 0) - (a.btcHeld ?? 0))
  .map((n) => ({ name: n.country, btcHeld: n.btcHeld!, flag: n.flag, sourceUrl: n.sourceUrl }))

export function NationHoldingsChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Government Bitcoin holdings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 0, right: 16, bottom: 0, left: 0 }}
            >
              <XAxis
                type="number"
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
                width={90}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof data)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.flag} {d.name}</p>
                      <p className="text-muted-foreground">
                        {d.btcHeld.toLocaleString()} BTC
                      </p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="btcHeld" radius={[0, 4, 4, 0]} animationDuration={1200} animationEasing="ease-out">
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 space-y-1.5 text-xs">
          {data.map((d) => (
            <li key={d.name} className="flex items-center justify-between gap-2 text-muted-foreground border-b border-border/40 pb-1.5 last:border-b-0 last:pb-0">
              <span>
                <span className="text-foreground font-medium">{d.flag} {d.name}</span> — {d.btcHeld.toLocaleString()} BTC
              </span>
              <a
                href={d.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline shrink-0"
              >
                <ExternalLink className="h-3 w-3" />
                Source
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
