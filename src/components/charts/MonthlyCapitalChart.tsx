import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { monthlyCapitalRaised } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

export function MonthlyCapitalChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          STRC monthly capital raised ($M)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyCapitalRaised}
              margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
            >
              <XAxis
                dataKey="month"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                tickFormatter={(v: number) => `$${v}M`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof monthlyCapitalRaised)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">${d.amountM}M</p>
                      <p className="text-muted-foreground">{d.month}</p>
                      {d.isRecord && (
                        <p className="text-xs text-primary mt-1">Record Month</p>
                      )}
                    </div>
                  )
                }}
              />
              <Bar dataKey="amountM" radius={[4, 4, 0, 0]} animationDuration={1200} animationEasing="ease-out">
                {monthlyCapitalRaised.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.isRecord ? "var(--chart-1)" : "var(--chart-3)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
