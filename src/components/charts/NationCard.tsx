import type { NationStat } from "#/lib/data"
import { Card, CardContent } from "#/components/ui/card"
import { Badge } from "#/components/ui/badge"

interface NationCardProps {
  nation: NationStat
}

export function NationCard({ nation }: NationCardProps) {
  return (
    <Card className="glow-orange">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <span className="text-4xl leading-none">{nation.flag}</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-sm">{nation.country}</h3>
              <Badge variant="secondary" className="text-xs">
                {nation.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {nation.highlight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
