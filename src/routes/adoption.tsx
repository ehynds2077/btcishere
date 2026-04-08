import { createFileRoute } from "@tanstack/react-router"
import { AnimateIn } from "#/components/AnimateIn"
import { AnimateInGroup, AnimateInGroupItem } from "#/components/AnimateInGroup"
import { StatCard } from "#/components/StatCard"
import { BankTimeline } from "#/components/charts/BankTimeline"
import { EtfBarChart } from "#/components/charts/EtfBarChart"
import { InstitutionalBarChart } from "#/components/charts/InstitutionalBarChart"
import { MonthlyCapitalChart } from "#/components/charts/MonthlyCapitalChart"
import { DividendRateChart } from "#/components/charts/DividendRateChart"
import { YieldComparison } from "#/components/charts/YieldComparison"
import { ProductStack } from "#/components/charts/ProductStack"
import { NewsList } from "#/components/NewsList"
import { allNews, getNewsByCategory } from "#/lib/news"
import {
  bankMilestones,
  totalInstitutionalCapital,
  totalUsEtfBtc,
  treasuryCompanyCount,
  strcMetrics,
} from "#/lib/data"

export const Route = createFileRoute("/adoption")({
  component: AdoptionPage,
})

const adoptionCategories = ["banks", "institutional", "etfs", "money", "treasuries"] as const
const adoptionNews = adoptionCategories.flatMap((c) => getNewsByCategory(c))

function AdoptionPage() {
  return (
    <div className="space-y-12">
      <AnimateIn>
        <section className="hero-panel rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="display-kicker">How It Spreads</p>
          <h1 className="display-title text-4xl sm:text-5xl md:text-6xl">
            How Bitcoin <span className="text-gradient">spreads</span>
          </h1>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">

            Banks offering access. ETFs absorbing supply. Institutions making policy allocations. New financial products
            being built on BTC. Each section below covers one layer of that system.
          </p>
        </section>
      </AnimateIn>

      <AnimateInGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <AnimateInGroupItem>
          <StatCard label="Bank Milestones" value={bankMilestones.length} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="US Spot ETF BTC" value={totalUsEtfBtc} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Institutional Capital ($M)" value={totalInstitutionalCapital} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="Public Treasury Companies" value={treasuryCompanyCount} />
        </AnimateInGroupItem>
        <AnimateInGroupItem>
          <StatCard label="STRC Yield" value={strcMetrics.currentYield} suffix="%" decimals={1} />
        </AnimateInGroupItem>
      </AnimateInGroup>

      <AnimateIn>
        <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">Access</p>
            <h2 className="text-2xl font-semibold tracking-tight">Bank access went live in 2025</h2>
            <p className="text-muted-foreground leading-relaxed">
              Morgan Stanley, Goldman Sachs, JPMorgan, Bank of America, and Citigroup all launched Bitcoin access
              for clients within the same twelve-month window. The spot ETFs they route through now hold
              over {totalUsEtfBtc.toLocaleString()} BTC.
            </p>
          </div>
          <div className="space-y-4">
            <BankTimeline />
            <EtfBarChart />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">Capital</p>
            <h2 className="text-2xl font-semibold tracking-tight">Institutional capital is flowing in</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mubadala (Abu Dhabi) disclosed a $1B IBIT position. Wisconsin's pension system allocated $321M.
              Endowments at Harvard, Dartmouth, Brown, Emory, and Yale have taken positions. These are policy-driven,
              long-horizon allocators -- not short-term traders.
            </p>
          </div>
          <div className="space-y-4">
            <InstitutionalBarChart />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">Products</p>
            <h2 className="text-2xl font-semibold tracking-tight">Products built on Bitcoin</h2>
            <p className="text-muted-foreground leading-relaxed">
              STRC preferred stock pays a {strcMetrics.currentYield}% Bitcoin-backed dividend, ratcheted up from 8%
              at launch. Over ${strcMetrics.totalRaisedB}B raised. Next in the pipeline: the Buck stablecoin, followed
              by Bitcoin-backed bank accounts.
            </p>
          </div>
          <div className="space-y-4">
            <MonthlyCapitalChart />
            <DividendRateChart />
            <YieldComparison />
            <ProductStack />
          </div>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="space-y-4">
          <p className="display-kicker">Latest</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What's happening now</h2>
          <NewsList items={adoptionNews.slice(0, 10)} showCategory />
        </section>
      </AnimateIn>
    </div>
  )
}
