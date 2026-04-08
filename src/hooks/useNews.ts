import type { Category } from "#/types/news"
import { allNews, getNewsByCategory, getCategoryCounts } from "#/lib/news"

export function useNews(category?: Category) {
  const items = category ? getNewsByCategory(category) : allNews
  const counts = getCategoryCounts()

  return { items, counts }
}
