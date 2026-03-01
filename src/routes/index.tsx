import { createFileRoute, Link } from "@tanstack/react-router"
import { Landmark, GraduationCap, Vault, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { NewsList } from "#/components/NewsList"
import { AddNewsDialog } from "#/components/AddNewsDialog"
import { useNews } from "#/hooks/useNews"
import { seedIfNeeded } from "#/lib/seed"

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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Tracking Bitcoin adoption across banks, institutions, treasuries, and nations.
          </p>
        </div>
        <AddNewsDialog onAdd={add} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryCards.map(({ key, label, icon: Icon, to }) => (
          <Link key={key} to={to} className="no-underline">
            <Card className="hover:border-primary/30 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{counts[key]}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  news items tracked
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Recent News</h2>
        <NewsList items={items} onDelete={remove} showCategory />
      </div>
    </div>
  )
}
