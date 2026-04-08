import { Badge } from "#/components/ui/badge"
import { AnimateIn } from "#/components/AnimateIn"

interface ChapterHeaderProps {
  kicker: string
  title: string
  subtitle: string
}

export function ChapterHeader({ kicker, title, subtitle }: ChapterHeaderProps) {
  return (
    <AnimateIn>
      <div className="space-y-4">
        <Badge
          variant="secondary"
          className="text-xs border border-primary/35 bg-primary/12 text-primary"
        >
          {kicker}
        </Badge>
        <h1 className="display-title text-5xl sm:text-6xl text-gradient">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-3xl text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
        <hr className="story-divider max-w-3xl" />
      </div>
    </AnimateIn>
  )
}
