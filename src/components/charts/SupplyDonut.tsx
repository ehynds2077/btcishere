import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import {
  TOTAL_BTC_SUPPLY,
  totalTreasuryBtc,
  treasurySupplyPct,
} from "#/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const data = [
  { name: "Corporate Treasuries", value: totalTreasuryBtc },
  { name: "Remaining Supply", value: TOTAL_BTC_SUPPLY - totalTreasuryBtc },
]

export function SupplyDonut() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Treasury BTC vs Total Supply
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                dataKey="value"
                strokeWidth={0}
              >
                <Cell fill="var(--chart-1)" />
                <Cell fill="var(--muted)" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{treasurySupplyPct}%</span>
            <span className="text-xs text-muted-foreground">of 21M supply</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
