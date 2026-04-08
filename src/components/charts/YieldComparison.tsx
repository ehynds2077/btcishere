import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { yieldComparison } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

export function YieldComparison() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          How STRC yield compares
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={yieldComparison}
              layout="vertical"
              margin={{ top: 0, right: 16, bottom: 0, left: 0 }}
            >
              <XAxis
                type="number"
                domain={[0, 14]}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                tickFormatter={(v: number) => `${v}%`}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
                width={90}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof yieldComparison)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-muted-foreground">{d.yield}% annual</p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="yield" radius={[0, 4, 4, 0]} animationDuration={1200} animationEasing="ease-out">
                {yieldComparison.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
