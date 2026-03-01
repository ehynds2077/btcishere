export type Category = "banks" | "institutional" | "treasuries" | "nations"

export interface NewsItem {
  id: string
  title: string
  description: string
  sourceUrl: string
  date: string
  category: Category
}
