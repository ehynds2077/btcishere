import { ResponsiveContainer, Tooltip, Treemap } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import type { HolderRecord, HolderType } from "#/lib/data"

const TYPE_COLORS: Record<HolderType, string> = {
  ETF: "var(--chart-1)",
  Treasury: "var(--chart-2)",
  Nation: "var(--chart-3)",
  Institution: "var(--chart-6)",
  Bank: "var(--chart-7)",
}

interface HoldersTreemapProps {
  title: string
  rows: HolderRecord[]
  mode: "controlled" | "exposure"
}

interface ContentProps {
  x: number
  y: number
  width: number
  height: number
  name: string
  fill: string
}

function TreemapNode({ x, y, width, height, name, fill }: ContentProps) {
  const showLabel = width > 72 && height > 30
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={8}
        ry={8}
        stroke="var(--background)"
        strokeWidth={2}
      />
      {showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={11}
          fontWeight={700}
        >
          {name}
        </text>
      )}
    </g>
  )
}

export function HoldersTreemap({ title, rows, mode }: HoldersTreemapProps) {
  const data = rows
    .map((row) => {
      const size = mode === "controlled"
        ? row.controlledBtc
        : row.controlledBtc + row.indirectExposureBtc
      return {
        name: row.name,
        size,
        holderType: row.holderType,
        fill: TYPE_COLORS[row.holderType],
      }
    })
    .filter((d) => d.size > 0)

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={data}
              dataKey="size"
              nameKey="name"
              content={<TreemapNode x={0} y={0} width={0} height={0} name="" fill="" />}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload as (typeof data)[0]
                  return (
                    <div className="rounded-lg bg-popover border border-border px-3 py-2 text-sm shadow-md">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-muted-foreground">{d.size.toLocaleString()} BTC</p>
                      <p className="text-xs text-muted-foreground">{d.holderType}</p>
                    </div>
                  )
                }}
              />
            </Treemap>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {Object.entries(TYPE_COLORS).map(([k, v]) => (
            <div key={k} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: v }} />
              {k}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
