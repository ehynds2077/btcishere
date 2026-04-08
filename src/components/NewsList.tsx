import type { NewsItem } from "#/types/news"
import { NewsCard } from "./NewsCard"
import { AnimateInGroup, AnimateInGroupItem } from "./AnimateInGroup"

interface NewsListProps {
  items: NewsItem[]
  showCategory?: boolean
  emptyMessage?: string
}

export function NewsList({
  items,
  showCategory = false,
  emptyMessage = "No news items yet.",
}: NewsListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <AnimateInGroup className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
      {items.map((item) => (
        <AnimateInGroupItem key={item.id}>
          <NewsCard
            item={item}
            showCategory={showCategory}
          />
        </AnimateInGroupItem>
      ))}
    </AnimateInGroup>
  )
}
