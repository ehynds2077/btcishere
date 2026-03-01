import { bankMilestones } from "#/lib/data"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { Badge } from "#/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const categoryColorMap: Record<string, string> = {
  custody: "var(--chart-1)",
  trading: "var(--chart-2)",
  advisory: "var(--chart-3)",
  exposure: "var(--chart-4)",
}

export function BankTimeline() {
  const sorted = [...bankMilestones].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Bank Adoption Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimateInGroup className="relative ml-4" stagger={0.12}>
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
          {sorted.map((m, i) => (
            <AnimateInGroupItem key={i} className="relative pl-10 pb-6 last:pb-0">
              <div
                className="absolute left-1 top-1.5 h-5 w-5 rounded-full border-2 border-card"
                style={{ backgroundColor: categoryColorMap[m.category] ?? "var(--chart-1)" }}
              />
              <div className="text-xs text-muted-foreground font-medium">
                {formatDate(m.date)}
              </div>
              <h4 className="text-sm font-semibold mt-0.5">{m.bank}</h4>
              <p className="text-sm text-muted-foreground mt-0.5">{m.event}</p>
              <Badge variant="secondary" className="mt-1.5 text-xs capitalize">
                {m.category}
              </Badge>
            </AnimateInGroupItem>
          ))}
        </AnimateInGroup>
      </CardContent>
    </Card>
  )
}

function formatDate(ym: string) {
  const [y, m] = ym.split("-")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[parseInt(m, 10) - 1]} ${y}`
}
