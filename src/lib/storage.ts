import type { Category, NewsItem } from "#/types/news"

const STORAGE_KEY = "btc-tracker-news"

function readAll(): NewsItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as NewsItem[]) : []
  } catch {
    return []
  }
}

function writeAll(items: NewsItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function loadAllNews(): NewsItem[] {
  return readAll().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function addNewsItem(
  item: Omit<NewsItem, "id">,
): NewsItem {
  const newItem: NewsItem = { ...item, id: crypto.randomUUID() }
  const items = readAll()
  items.push(newItem)
  writeAll(items)
  return newItem
}

export function deleteNewsItem(id: string): void {
  const items = readAll().filter((item) => item.id !== id)
  writeAll(items)
}

export function getNewsByCategory(category: Category): NewsItem[] {
  return loadAllNews().filter((item) => item.category === category)
}

export function getCategoryCounts(): Record<Category, number> {
  const items = readAll()
  return {
    banks: items.filter((i) => i.category === "banks").length,
    institutional: items.filter((i) => i.category === "institutional").length,
    treasuries: items.filter((i) => i.category === "treasuries").length,
    nations: items.filter((i) => i.category === "nations").length,
  }
}
