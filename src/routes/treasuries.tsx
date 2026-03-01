import { createFileRoute } from "@tanstack/react-router"
import { Vault } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"

export const Route = createFileRoute("/treasuries")({
  component: TreasuriesPage,
})

function TreasuriesPage() {
  const { items, add, remove } = useNews("treasuries")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Vault className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Corporate Treasuries
            </h1>
            <p className="text-muted-foreground text-sm">
              Public companies making Bitcoin a core treasury reserve. Only 21M BTC will ever exist.
            </p>
          </div>
        </div>
        <AddNewsDialog onAdd={add} defaultCategory="treasuries" />
      </div>
      <NewsList
        items={items}
        onDelete={remove}
        emptyMessage="No corporate treasury news yet."
      />
    </div>
  )
}
