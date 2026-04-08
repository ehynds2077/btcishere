import { useState, useCallback } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from "recharts"
import { allSupplySegments, TOTAL_BTC_SUPPLY } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

function ActiveShape(props: any) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g>
      <defs>
        <filter id="active-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 2}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter="url(#active-glow)"
      />
    </g>
  )
}

export function SupplyBreakdown() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const onMouseEnter = useCallback((_: unknown, index: number) => {
    setActiveIndex(index)
  }, [])

  const onMouseLeave = useCallback(() => {
    setActiveIndex(undefined)
  }, [])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Bitcoin Supply Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allSupplySegments}
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="80%"
                dataKey="btc"
                nameKey="name"
                strokeWidth={0}
                animationDuration={1200}
                animationEasing="ease-out"
                {...{
                  activeIndex,
                  activeShape: ActiveShape,
                  onMouseEnter,
                  onMouseLeave,
                } as any}
              >
                {allSupplySegments.map((seg, i) => (
                  <Cell key={i} fill={seg.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof allSupplySegments)[0]
                  const pct = ((d.btc / TOTAL_BTC_SUPPLY) * 100).toFixed(1)
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-muted-foreground">
                        {d.btc.toLocaleString()} BTC ({pct}%)
                      </p>
                    </div>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold">21M</span>
            <span className="text-xs text-muted-foreground">BTC</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-4">
          {allSupplySegments.map((seg) => {
            const pct = ((seg.btc / TOTAL_BTC_SUPPLY) * 100).toFixed(1)
            return (
              <div key={seg.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="truncate">{seg.name}</span>
                <span className="ml-auto font-medium text-foreground">{pct}%</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
