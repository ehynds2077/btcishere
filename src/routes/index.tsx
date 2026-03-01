import { createFileRoute, Link } from "@tanstack/react-router"
import { Landmark, GraduationCap, Vault, Globe, Bitcoin } from "lucide-react"
import { Badge } from "#/components/ui/badge"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { seedIfNeeded } from "#/lib/seed"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { SupplyDonut } from "#/components/charts/SupplyDonut"
import { AdoptionTimeline } from "#/components/charts/AdoptionTimeline"
import { totalTreasuryBtc, totalInstitutionalCapital } from "#/lib/data"

export const Route = createFileRoute("/")({
  component: DashboardPage,
})

const categoryCards = [
  {
    key: "banks" as const,
    label: "Banks",
    icon: Landmark,
    to: "/banks",
  },
  {
    key: "institutional" as const,
    label: "Institutional",
    icon: GraduationCap,
    to: "/institutional",
  },
  {
    key: "treasuries" as const,
    label: "Treasuries",
    icon: Vault,
    to: "/treasuries",
  },
  {
    key: "nations" as const,
    label: "Nations",
    icon: Globe,
    to: "/nations",
  },
]

function DashboardPage() {
  seedIfNeeded()
  const { items, counts, add, remove } = useNews()

  return (
    <div className="space-y-12">
      {/* Hero */}
      <AnimateIn>
        <div className="text-center space-y-4 py-8">
          <Badge variant="secondary" className="text-xs">
            <Bitcoin className="h-3 w-3 mr-1" />
            Tracking the Shift
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Bitcoin Adoption{" "}
            <span className="text-primary">Accelerates</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Banks, institutions, corporations, and nations are converging on
            Bitcoin. Track every major move in one place.
          </p>
        </div>
      </AnimateIn>

      {/* Category stat cards */}
      <AnimateInGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryCards.map(({ key, label, icon: Icon, to }) => (
          <AnimateInGroupItem key={key}>
            <Link to={to} className="no-underline block">
              <StatCard label={label} value={counts[key]} icon={Icon} />
            </Link>
          </AnimateInGroupItem>
        ))}
      </AnimateInGroup>

      {/* Highlight row: donut + summary stats */}
      <AnimateIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SupplyDonut />
          <StatCard
            label="Total Treasury BTC"
            value={totalTreasuryBtc}
            icon={Vault}
          />
          <StatCard
            label="Institutional Capital"
            value={totalInstitutionalCapital}
            prefix="$"
            suffix="M"
            icon={GraduationCap}
          />
        </div>
      </AnimateIn>

      {/* Adoption Timeline */}
      <AnimateIn>
        <div>
          <h2 className="text-lg font-semibold mb-6">
            Adoption Timeline
          </h2>
          <AdoptionTimeline />
        </div>
      </AnimateIn>

      {/* Recent News */}
      <AnimateIn>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent News</h2>
          <AddNewsDialog onAdd={add} />
        </div>
        <NewsList items={items} onDelete={remove} showCategory />
      </AnimateIn>
    </div>
  )
}
