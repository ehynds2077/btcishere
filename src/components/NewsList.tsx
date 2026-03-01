import type { NewsItem } from "#/types/news"
import { NewsCard } from "./NewsCard"

interface NewsListProps {
  items: NewsItem[]
  onDelete: (id: string) => void
  showCategory?: boolean
  emptyMessage?: string
}

export function NewsList({
  items,
  onDelete,
  showCategory = false,
  emptyMessage = "No news items yet. Add one to get started!",
}: NewsListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <NewsCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          showCategory={showCategory}
        />
      ))}
    </div>
  )
}
