import { ExternalLink } from "lucide-react"
import { adoptionTimeline } from "#/lib/data/index"
import { CATEGORY_COLORS, CATEGORY_LABELS, formatYearMonth } from "#/lib/constants"
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
            style={{ backgroundColor: CATEGORY_COLORS[event.category] }}
          />
          <div className="text-xs text-muted-foreground font-medium">
            {formatYearMonth(event.date)}
          </div>
          <h4 className="text-sm font-semibold mt-0.5">{event.title}</h4>
          <p className="text-sm text-muted-foreground mt-0.5">
            {event.description}
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {CATEGORY_LABELS[event.category]}
            </Badge>
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Source
            </a>
          </div>
        </AnimateInGroupItem>
      ))}
    </AnimateInGroup>
  )
}

