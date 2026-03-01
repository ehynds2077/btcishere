import { useCallback, useSyncExternalStore } from "react"
import type { Category, NewsItem } from "#/types/news"
import {
  addNewsItem,
  deleteNewsItem,
  getNewsByCategory,
  getCategoryCounts,
  loadAllNews,
} from "#/lib/storage"

let version = 0
const listeners = new Set<() => void>()

function notify() {
  version++
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useNews(category?: Category) {
  const snapshot = useSyncExternalStore(
    subscribe,
    () => version,
  )

  // snapshot is used implicitly to trigger re-renders
  void snapshot

  const items: NewsItem[] = category
    ? getNewsByCategory(category)
    : loadAllNews()

  const counts = getCategoryCounts()

  const add = useCallback(
    (item: Omit<NewsItem, "id">) => {
      addNewsItem(item)
      notify()
    },
    [],
  )

  const remove = useCallback((id: string) => {
    deleteNewsItem(id)
    notify()
  }, [])

  return { items, counts, add, remove }
}
