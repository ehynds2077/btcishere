import { createFileRoute } from "@tanstack/react-router"
import { Vault } from "lucide-react"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { SectionHeader } from "#/components/SectionHeader"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { TreasuryBarChart } from "#/components/charts/TreasuryBarChart"
import { SupplyDonut } from "#/components/charts/SupplyDonut"
import {
  totalTreasuryBtc,
  treasuryHoldings,
  treasurySupplyPct,
} from "#/lib/data"

export const Route = createFileRoute("/treasuries")({
  component: TreasuriesPage,
})

function TreasuriesPage() {
  const { items, add, remove } = useNews("treasuries")

  return (
    <div className="space-y-8">
      <SectionHeader
        icon={Vault}
        title="Corporate Treasuries"
        description="Public companies making Bitcoin a core treasury reserve. Only 21M BTC will ever exist."
        action={<AddNewsDialog onAdd={add} defaultCategory="treasuries" />}
      />

      <AnimateInGroup className="grid gap-4 sm:grid-cols-3">
        <AnimateInGroupItem>
          <StatCard label="Total BTC Held" value={totalTreasuryBtc} icon={Vault} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Companies Tracked" value={treasuryHoldings.length} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard
            label="% of Total Supply"
            value={treasurySupplyPct}
            suffix="%"
            decimals={2}
          />
        </AnimateInGroupItem>
      </AnimateInGroup>

      <AnimateIn>
        <div className="grid gap-4 lg:grid-cols-2">
          <TreasuryBarChart />
          <SupplyDonut />
        </div>
      </AnimateIn>

      <AnimateIn>
        <h2 className="text-lg font-semibold mb-4">News</h2>
        <NewsList
          items={items}
          onDelete={remove}
          emptyMessage="No corporate treasury news yet."
        />
      </AnimateIn>
    </div>
  )
}
