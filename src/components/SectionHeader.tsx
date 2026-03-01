import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
}

export function SectionHeader({
  icon: Icon,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      {action}
    </div>
  )
}
