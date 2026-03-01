import { createFileRoute } from "@tanstack/react-router"
import { Globe } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { SectionHeader } from "#/components/SectionHeader"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { NationCard } from "#/components/charts/NationCard"
import { nationStats } from "#/lib/data"

export const Route = createFileRoute("/nations")({
  component: NationsPage,
})

function NationsPage() {
  const { items, add, remove } = useNews("nations")

  return (
    <div className="space-y-8">
      <SectionHeader
        icon={Globe}
        title="Nation Adoption"
        description="Countries embracing Bitcoin as legal tender or reserve assets."
        action={<AddNewsDialog onAdd={add} defaultCategory="nations" />}
      />

      <AnimateIn>
        <StatCard
          label="Nations Tracked"
          value={nationStats.length}
          icon={Globe}
        />
      </AnimateIn>

      <AnimateInGroup className="grid gap-4 sm:grid-cols-3">
        {nationStats.map((nation) => (
          <AnimateInGroupItem key={nation.country}>
            <NationCard nation={nation} />
          </AnimateInGroupItem>
        ))}
      </AnimateInGroup>

      <AnimateIn>
        <h2 className="text-lg font-semibold mb-4">News</h2>
        <NewsList
          items={items}
          onDelete={remove}
          emptyMessage="No nation adoption news yet."
        />
      </AnimateIn>
    </div>
  )
}
