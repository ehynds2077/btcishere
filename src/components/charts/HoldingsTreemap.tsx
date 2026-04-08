import { Treemap, ResponsiveContainer, Tooltip } from "recharts"
import { treasuryHoldings } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const SECTOR_COLORS: Record<string, string> = {
  "treasury-pure": "var(--sector-treasury)",
  miner: "var(--sector-miner)",
  exchange: "var(--sector-exchange)",
  tech: "var(--sector-tech)",
  financial: "var(--sector-financial)",
  other: "var(--sector-other)",
}

const data = treasuryHoldings.map((h) => ({
  name: h.ticker,
  fullName: h.name,
  size: h.btcHeld,
  sector: h.sector,
  fill: SECTOR_COLORS[h.sector] ?? "var(--muted)",
}))

interface ContentProps {
  x: number
  y: number
  width: number
  height: number
  name: string
  fill: string
}

function CustomContent({ x, y, width, height, name, fill }: ContentProps) {
  const showLabel = width > 40 && height > 24
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="var(--background)"
        strokeWidth={2}
        rx={4}
        style={{ opacity: 0.9 }}
      />
      {showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={width > 80 ? 13 : 10}
          fontWeight={600}
        >
          {name}
        </text>
      )}
    </g>
  )
}

export function HoldingsTreemap() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Corporate BTC Holdings — Treemap by Size
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={data}
              dataKey="size"
              nameKey="name"
              content={<CustomContent x={0} y={0} width={0} height={0} name="" fill="" />}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof data)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.fullName}</p>
                      <p className="text-muted-foreground">
                        {d.size.toLocaleString()} BTC
                      </p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {d.sector.replace("-", " ")}
                      </p>
                    </div>
                  )
                }}
              />
            </Treemap>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {Object.entries(SECTOR_COLORS).map(([sector, color]) => (
            <div key={sector} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
              <span className="capitalize">{sector.replace("-", " ")}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
