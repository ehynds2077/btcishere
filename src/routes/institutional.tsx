import { createFileRoute } from "@tanstack/react-router"
import { GraduationCap } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"

export const Route = createFileRoute("/institutional")({
  component: InstitutionalPage,
})

function InstitutionalPage() {
  const { items, add, remove } = useNews("institutional")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Institutional Adoption
            </h1>
            <p className="text-muted-foreground text-sm">
              Endowments, sovereign wealth funds, and pension funds buying Bitcoin.
            </p>
          </div>
        </div>
        <AddNewsDialog onAdd={add} defaultCategory="institutional" />
      </div>
      <NewsList
        items={items}
        onDelete={remove}
        emptyMessage="No institutional adoption news yet."
      />
    </div>
  )
}
