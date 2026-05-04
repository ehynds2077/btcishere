import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts"
import { strcHistory } from "#/lib/data"

export function StrcPriceAndRate() {
  return (
    <figure className="space-y-3">
      <div className="h-[320px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={strcHistory} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="rateFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.18} />
                <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} opacity={0.4} />
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="price"
              domain={[85, 102]}
              ticks={[88, 92, 96, 100]}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickFormatter={(v: number) => `$${v}`}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <YAxis
              yAxisId="rate"
              orientation="right"
              domain={[6, 14]}
              ticks={[8, 10, 12]}
              tick={{ fill: "var(--chart-1)", fontSize: 11 }}
              tickFormatter={(v: number) => `${v}%`}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <ReferenceLine
              yAxisId="price"
              y={100}
              stroke="var(--muted-foreground)"
              strokeDasharray="2 4"
              opacity={0.5}
              label={{
                value: "$100 par",
                position: "insideTopRight",
                fill: "var(--muted-foreground)",
                fontSize: 10,
              }}
            />
            <Tooltip
              cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "2 4" }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null
                const d = payload[0].payload as (typeof strcHistory)[0]
                return (
                  <div className="rounded-lg bg-popover/95 backdrop-blur border border-border px-3 py-2 text-xs shadow-lg space-y-1">
                    <p className="font-medium text-foreground">{label}</p>
                    <p className="text-muted-foreground">
                      Close <span className="text-foreground tabular-nums">${d.strcClose.toFixed(2)}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Dividend <span className="text-[var(--chart-1)] tabular-nums">{d.rate.toFixed(1)}%</span>
                    </p>
                    {d.event && <p className="text-foreground/80 mt-1">{d.event}</p>}
                  </div>
                )
              }}
            />
            <Area
              yAxisId="rate"
              type="stepAfter"
              dataKey="rate"
              stroke="var(--chart-1)"
              strokeWidth={1.5}
              fill="url(#rateFill)"
              animationDuration={1400}
              animationEasing="ease-out"
            />
            <Line
              yAxisId="price"
              type="monotone"
              dataKey="strcClose"
              stroke="var(--foreground)"
              strokeWidth={2.5}
              dot={{ r: 2.5, fill: "var(--foreground)", strokeWidth: 0 }}
              activeDot={{ r: 4 }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-5 bg-foreground" /> STRC close (left)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-5 bg-[var(--chart-1)]" /> Dividend rate (right)
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
