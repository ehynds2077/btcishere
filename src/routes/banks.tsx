import { createFileRoute } from "@tanstack/react-router"
import { Landmark } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { SectionHeader } from "#/components/SectionHeader"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { BankTimeline } from "#/components/charts/BankTimeline"
import { bankMilestones } from "#/lib/data"

export const Route = createFileRoute("/banks")({
  component: BanksPage,
})

const serviceCategories = [...new Set(bankMilestones.map((m) => m.category))].length

function BanksPage() {
  const { items, add, remove } = useNews("banks")

  return (
    <div className="space-y-8">
      <SectionHeader
        icon={Landmark}
        title="Bank Adoption"
        description="Banks integrating Bitcoin services and custody solutions."
        action={<AddNewsDialog onAdd={add} defaultCategory="banks" />}
      />

      <AnimateInGroup className="grid gap-4 sm:grid-cols-2">
        <AnimateInGroupItem>
          <StatCard
            label="Major Banks"
            value={bankMilestones.length}
            icon={Landmark}
          />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Service Categories" value={serviceCategories} />
        </AnimateInGroupItem>
      </AnimateInGroup>

      <AnimateIn>
        <BankTimeline />
      </AnimateIn>

      <AnimateIn>
        <h2 className="text-lg font-semibold mb-4">News</h2>
        <NewsList
          items={items}
          onDelete={remove}
          emptyMessage="No bank adoption news yet."
        />
      </AnimateIn>
    </div>
  )
}
