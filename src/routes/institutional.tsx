import { createFileRoute } from "@tanstack/react-router"
import { GraduationCap } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { SectionHeader } from "#/components/SectionHeader"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { InstitutionalBarChart } from "#/components/charts/InstitutionalBarChart"
import { institutionalAllocations, totalInstitutionalCapital } from "#/lib/data"

export const Route = createFileRoute("/institutional")({
  component: InstitutionalPage,
})

const endowmentCount = institutionalAllocations.filter(
  (a) => a.type === "Endowment",
).length

function InstitutionalPage() {
  const { items, add, remove } = useNews("institutional")

  return (
    <div className="space-y-8">
      <SectionHeader
        icon={GraduationCap}
        title="Institutional Adoption"
        description="Endowments, sovereign wealth funds, and pension funds buying Bitcoin."
        action={<AddNewsDialog onAdd={add} defaultCategory="institutional" />}
      />

      <AnimateInGroup className="grid gap-4 sm:grid-cols-3">
        <AnimateInGroupItem>
          <StatCard
            label="Total Capital Deployed"
            value={totalInstitutionalCapital}
            prefix="$"
            suffix="M"
            icon={GraduationCap}
          />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard
            label="Institutions Tracked"
            value={institutionalAllocations.length}
          />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Endowments" value={endowmentCount} />
        </AnimateInGroupItem>
      </AnimateInGroup>

      <AnimateIn>
        <InstitutionalBarChart />
      </AnimateIn>

      <AnimateIn>
        <h2 className="text-lg font-semibold mb-4">News</h2>
        <NewsList
          items={items}
          onDelete={remove}
          emptyMessage="No institutional adoption news yet."
        />
      </AnimateIn>
    </div>
  )
}
