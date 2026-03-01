import { adoptionTimeline, categoryColors, categoryLabels } from "#/lib/data"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { Badge } from "#/components/ui/badge"

export function AdoptionTimeline() {
  return (
    <AnimateInGroup className="relative ml-4" stagger={0.1}>
      <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
      {adoptionTimeline.map((event, i) => (
        <AnimateInGroupItem key={i} className="relative pl-10 pb-8 last:pb-0">
          <div
            className="absolute left-1 top-1.5 h-5 w-5 rounded-full border-2 border-background"
            style={{ backgroundColor: categoryColors[event.category] }}
          />
          <div className="text-xs text-muted-foreground font-medium">
            {formatDate(event.date)}
          </div>
          <h4 className="text-sm font-semibold mt-0.5">{event.title}</h4>
          <p className="text-sm text-muted-foreground mt-0.5">
            {event.description}
          </p>
          <Badge variant="secondary" className="mt-1.5 text-xs">
            {categoryLabels[event.category]}
          </Badge>
        </AnimateInGroupItem>
      ))}
    </AnimateInGroup>
  )
}

function formatDate(ym: string) {
  const [y, m] = ym.split("-")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[parseInt(m, 10) - 1]} ${y}`
}
