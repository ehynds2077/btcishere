import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts"
import { dividendRateHistory } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

export function DividendRateChart() {
  const annotated = dividendRateHistory.filter((d) => d.event)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          STRC yield rate since launch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dividendRateHistory}
              margin={{ top: 16, right: 16, bottom: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="rateGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[6, 14]}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                tickFormatter={(v: number) => `${v}%`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof dividendRateHistory)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.rate}%</p>
                      <p className="text-muted-foreground">{d.date}</p>
                      {d.event && (
                        <p className="text-xs text-primary mt-1">{d.event}</p>
                      )}
                    </div>
                  )
                }}
              />
              <Area
                type="stepAfter"
                dataKey="rate"
                stroke="var(--chart-1)"
                strokeWidth={2}
                fill="url(#rateGrad)"
                animationDuration={1200}
                animationEasing="ease-out"
              />
              {annotated.map((d) => (
                <ReferenceDot
                  key={d.date}
                  x={d.date}
                  y={d.rate}
                  r={4}
                  fill="var(--chart-1)"
                  stroke="var(--background)"
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
