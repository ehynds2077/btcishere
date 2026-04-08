import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { usSpotEtfs } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { CHART_COLORS } from "#/lib/constants"

export function EtfBarChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          US spot Bitcoin ETFs — BTC held
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={usSpotEtfs}
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
                dataKey="ticker"
                tick={{ fill: "var(--foreground)", fontSize: 11 }}
                width={52}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof usSpotEtfs)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.issuer}</p>
                      <p className="text-muted-foreground">
                        {(d.btcHeld ?? 0).toLocaleString()} BTC
                      </p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="btcHeld" radius={[0, 4, 4, 0]} animationDuration={1200} animationEasing="ease-out">
                {usSpotEtfs.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
