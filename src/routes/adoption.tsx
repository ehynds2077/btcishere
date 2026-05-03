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
import { getNewsByCategory } from "#/lib/news"
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
            <h2 className="text-2xl font-semibold tracking-tight">Bank access opened up across 2025–2026</h2>
            <p className="text-muted-foreground leading-relaxed">
              Morgan Stanley{" "}
              <a href="https://bitcoinmagazine.com/business/morgan-stanley-opens-bitcoin-access" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                opened spot-ETF access to all wealth clients in October 2025
              </a>
              . Bank of America{" "}
              <a href="https://www.coindesk.com/business/2025/12/02/bank-of-america-greenlights-wealth-advisors-to-recommend-up-to-4-bitcoin-allocation" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                authorized advisors to recommend a 1–4% allocation in January 2026
              </a>
              . JPMorgan{" "}
              <a href="https://fortune.com/2025/12/23/jpmorgan-to-allow-crypto-trading-for-institutional-clients/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                started exploring direct crypto trading for institutional clients
              </a>
              {" "}— and{" "}
              <a href="https://www.coindesk.com/business/2026/02/27/citi-and-morgan-stanley-expand-bitcoin-and-crypto-custody-trading-and-tokenization-efforts" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                Citi's institutional custody platform is in development for a 2026 launch
              </a>
              . The spot ETFs all of them route through now hold over{" "}
              {totalUsEtfBtc.toLocaleString()} BTC.
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
            <h2 className="text-2xl font-semibold tracking-tight">Institutional capital is flowing in (and sometimes out)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mubadala{" "}
              <a href="https://www.coindesk.com/markets/2026/02/17/abu-dhabi-funds-bought-the-bitcoin-dip-as-they-increased-exposure-to-blackrock-s-ibit" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                lifted its IBIT position to $630M in Q4 2025
              </a>
              . Harvard's endowment{" "}
              <a href="https://www.theblock.co/post/389996/harvard-bitcoin-ether-etf-holdings" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                disclosed $443M in IBIT in Q3 2025 before trimming
              </a>
              . Emory, Dartmouth, and Brown have all shown up in 13F filings.
              Conversely, Wisconsin's pension —{" "}
              <a href="https://www.coindesk.com/markets/2025/05/16/wisconsin-sells-entire-350m-spot-bitcoin-etf-stake" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                the first state pension to disclose a position
              </a>
              {" "}— sold its entire stake in Q1 2025.
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
              <a href="https://www.strategy.com/strc/learn" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                STRC preferred stock
              </a>
              {" "}pays a {strcMetrics.currentYield}% Bitcoin-backed dividend
              after{" "}
              <a href="https://www.coindesk.com/markets/2026/03/01/strategy-lifts-strc-dividend-to-11-5-as-mstr-extends-monthly-losing-streak-to-8" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                seven consecutive monthly hikes from its 8% July-2025 launch
              </a>
              . Buck Labs's{" "}
              <a href="https://www.coindesk.com/business/2026/01/05/buck-launches-bitcoin-linked-savings-coin-tied-to-michael-saylor-s-strategy" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                BUCK savings coin
              </a>
              {" "}is the next layer up — backed by Strategy shares with rewards
              funded by STRC, targeting ~7% APY (it is not a stablecoin and is
              not pegged to $1).
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
