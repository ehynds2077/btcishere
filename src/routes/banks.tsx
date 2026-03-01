import { createFileRoute } from "@tanstack/react-router"
import { Landmark } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"

export const Route = createFileRoute("/banks")({
  component: BanksPage,
})

function BanksPage() {
  const { items, add, remove } = useNews("banks")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Landmark className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Bank Adoption
            </h1>
            <p className="text-muted-foreground text-sm">
              Banks integrating Bitcoin services and custody solutions.
            </p>
          </div>
        </div>
        <AddNewsDialog onAdd={add} defaultCategory="banks" />
      </div>
      <NewsList
        items={items}
        onDelete={remove}
        emptyMessage="No bank adoption news yet."
      />
    </div>
  )
}
