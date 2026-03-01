import { ExternalLink, Trash2 } from "lucide-react"
import type { NewsItem } from "#/types/news"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"

const categoryLabels: Record<string, string> = {
  banks: "Banks",
  institutional: "Institutional",
  treasuries: "Treasuries",
  nations: "Nations",
}

interface NewsCardProps {
  item: NewsItem
  onDelete: (id: string) => void
  showCategory?: boolean
}

export function NewsCard({ item, onDelete, showCategory = false }: NewsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 min-w-0">
            <CardTitle className="text-base leading-snug">
              {item.title}
            </CardTitle>
            <CardDescription className="text-xs">
              {new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {showCategory && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {categoryLabels[item.category]}
                </Badge>
              )}
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
        {item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Source
          </a>
        )}
      </CardContent>
    </Card>
  )
}
