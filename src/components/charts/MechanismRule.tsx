import { ArrowDown, ArrowUp, Minus } from "lucide-react"

interface RuleRow {
  condition: string
  conditionDetail: string
  action: string
  result: string
  arrow: "up" | "down"
  tone: "warm" | "cool"
}

const rows: RuleRow[] = [
  {
    condition: "STRC trades below $100",
    conditionDetail: "Holders aren't getting paid enough to clear at par",
    action: "Issuer raises the monthly dividend",
    result: "Higher coupon attracts buyers; price drifts back up toward par",
    arrow: "up",
    tone: "cool",
  },
  {
    condition: "STRC trades above $100",
    conditionDetail: "Holders are getting paid more than the market needs",
    action: "Issuer lowers the monthly dividend",
    result: "Lower coupon eases demand; price drifts back down toward par",
    arrow: "down",
    tone: "warm",
  },
]

export function MechanismRule() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.condition}
          className="rounded-xl border border-border/60 bg-card/40 p-5 space-y-4"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            {row.arrow === "up" ? (
              <ArrowUp className="h-4 w-4 text-[var(--chart-3)]" />
            ) : (
              <ArrowDown className="h-4 w-4 text-[var(--chart-4)]" />
            )}
            <span>{row.condition}</span>
          </div>
          <p className="text-xs text-muted-foreground/85 leading-relaxed -mt-2">
            {row.conditionDetail}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Minus className="h-3 w-3" />
            <span className="text-foreground">{row.action}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {row.result}
          </p>
        </div>
      ))}
    </div>
  )
}
