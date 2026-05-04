import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts"
import { strcHistory } from "#/lib/data"

export function StrcVsBtc() {
  const base = strcHistory[0]
  const data = strcHistory.map((row) => ({
    month: row.month,
    strcIndex: (row.strcClose / base.strcClose) * 100,
    btcIndex: (row.btcClose / base.btcClose) * 100,
    strcClose: row.strcClose,
    btcClose: row.btcClose,
    estimated: row.estimated,
  }))

  return (
    <figure className="space-y-3">
      <div className="h-[320px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} opacity={0.4} />
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[50, 130]}
              ticks={[60, 80, 100, 120]}
              tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
              tickFormatter={(v: number) => `${v}`}
              axisLine={false}
              tickLine={false}
              width={32}
            />
            <ReferenceLine
              y={100}
              stroke="var(--muted-foreground)"
              strokeDasharray="2 4"
              opacity={0.5}
            />
            <Tooltip
              cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "2 4" }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null
                const d = payload[0].payload as (typeof data)[0]
                return (
                  <div className="rounded-lg bg-popover/95 backdrop-blur border border-border px-3 py-2 text-xs shadow-lg space-y-1">
                    <p className="font-medium text-foreground">{label}</p>
                    <p className="text-muted-foreground">
                      STRC <span className="text-foreground tabular-nums">${d.strcClose.toFixed(2)}</span>
                    </p>
                    <p className="text-muted-foreground">
                      BTC <span className="text-foreground tabular-nums">${d.btcClose.toLocaleString()}</span>
                    </p>
                  </div>
                )
              }}
            />
            <Line
              type="monotone"
              dataKey="btcIndex"
              stroke="var(--primary)"
              strokeWidth={1.5}
              strokeOpacity={0.8}
              dot={false}
              activeDot={{ r: 4 }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
            <Line
              type="monotone"
              dataKey="strcIndex"
              stroke="var(--foreground)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4 }}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-5 bg-foreground" /> STRC
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-5 bg-[var(--primary)] opacity-80" /> BTC
          </span>
        </div>
        <span className="text-muted-foreground/70">Indexed to 100 at Jul 2025</span>
      </figcaption>
    </figure>
  )
}
