import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { etfByRegion, totalAllEtfBtc } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export function EtfRegionPie() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          ETF holdings by region
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={etfByRegion}
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="80%"
                dataKey="btc"
                nameKey="region"
                strokeWidth={0}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {etfByRegion.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof etfByRegion)[0]
                  const pct = ((d.btc / totalAllEtfBtc) * 100).toFixed(1)
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.region}</p>
                      <p className="text-muted-foreground">
                        {d.btc.toLocaleString()} BTC ({pct}%)
                      </p>
                    </div>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {etfByRegion.map((r, i) => (
            <div key={r.region} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: COLORS[i] }} />
              <span>{r.region}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
