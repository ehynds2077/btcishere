import { ExternalLink } from "lucide-react"
import type { NewsItem } from "#/types/news"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card"
import { Badge } from "#/components/ui/badge"
import { CATEGORY_LABELS } from "#/lib/constants"

interface NewsCardProps {
  item: NewsItem
  showCategory?: boolean
}

export function NewsCard({ item, showCategory = false }: NewsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="space-y-1">
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
                {CATEGORY_LABELS[item.category]}
              </Badge>
            )}
          </CardDescription>
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
