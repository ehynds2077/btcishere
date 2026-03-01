import { createFileRoute } from "@tanstack/react-router"
import { Globe } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"

export const Route = createFileRoute("/nations")({
  component: NationsPage,
})

function NationsPage() {
  const { items, add, remove } = useNews("nations")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Nation Adoption
            </h1>
            <p className="text-muted-foreground text-sm">
              Countries embracing Bitcoin as legal tender or reserve assets.
            </p>
          </div>
        </div>
        <AddNewsDialog onAdd={add} defaultCategory="nations" />
      </div>
      <NewsList
        items={items}
        onDelete={remove}
        emptyMessage="No nation adoption news yet."
      />
    </div>
  )
}
