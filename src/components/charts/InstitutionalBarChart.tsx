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
import { institutionalAllocations } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { CHART_COLORS } from "#/lib/constants"

export function InstitutionalBarChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Disclosed institutional allocations ($M)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={institutionalAllocations}
              margin={{ top: 8, right: 8, bottom: 48, left: 8 }}
            >
              <XAxis
                dataKey="name"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                angle={-35}
                textAnchor="end"
                interval={0}
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
                  const d = payload[0].payload as (typeof institutionalAllocations)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-muted-foreground">
                        ${d.amountUsd}M via {d.vehicle}
                      </p>
                      <p className="text-xs text-muted-foreground">{d.type}</p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="amountUsd" radius={[4, 4, 0, 0]} animationDuration={1200} animationEasing="ease-out">
                {institutionalAllocations.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          {institutionalAllocations.map((a) => (
            <li key={a.name} className="flex items-center justify-between gap-2 border-b border-border/40 pb-1.5 last:border-b-0 last:pb-0">
              <span className="truncate">
                <span className="text-foreground font-medium">{a.name}</span> · ${a.amountUsd}M {a.vehicle}{" "}
                <span className="text-muted-foreground/70">(as of {a.asOf})</span>
              </span>
              <a
                href={a.sourceUrl}
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
