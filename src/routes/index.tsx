import { lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  Globe,
  Hash,
  Landmark,
  Layers,
  Lock,
  Network,
  Search,
  TrendingUp,
} from "lucide-react";
import { AnimateIn } from "#/components/AnimateIn";
import { GlowDivider } from "#/components/GlowDivider";

const BitcoinScene = lazy(() =>
  import("#/components/BitcoinScene").then((m) => ({
    default: m.BitcoinScene,
  })),
);
import {
  AnimateInGroup,
  AnimateInGroupItem,
} from "#/components/AnimateInGroup";
import { StatCard } from "#/components/StatCard";
import { BankTimeline } from "#/components/charts/BankTimeline";
import { EtfBarChart } from "#/components/charts/EtfBarChart";
import { InstitutionalBarChart } from "#/components/charts/InstitutionalBarChart";
import { NationHoldingsChart } from "#/components/charts/NationHoldingsChart";
import { SupplyCurve } from "#/components/charts/SupplyCurve";
import { SupplyFlow } from "#/components/charts/SupplyFlow";
import { AdoptionTimeline } from "#/components/charts/AdoptionTimeline";
import { NewsList } from "#/components/NewsList";
import { useNews } from "#/hooks/useNews";
import {
  controlledBtcTotal,
  economicExposureBtcTotal,
  indirectExposureBtcTotal,
  strcMetrics,
  totalNationBtc,
  totalTreasuryBtc,
  totalUsEtfBtc,
  treasuryCompanyCount,
} from "#/lib/data";

export const Route = createFileRoute("/")({
  component: OverviewPage,
});

const v2Routes = [
  {
    to: "/holders",
    title: "Who Holds It",
    subtitle: "Ownership map",
    copy: "Nations, ETFs, corporates, banks, and institutions in one model -- no double counting.",
    icon: Compass,
  },
  {
    to: "/adoption",
    title: "How It Spreads",
    subtitle: "Adoption channels",
    copy: "Banks, ETFs, treasuries, institutions, and the product layer -- how Bitcoin enters the financial system.",
    icon: Network,
  },
  {
    to: "/evidence",
    title: "The Record",
    subtitle: "Timeline and sources",
    copy: "Every major event in institutional Bitcoin adoption, in order, with links to the original sources.",
    icon: Search,
  },
];

function OverviewPage() {
  const { items } = useNews();

  return (
    <div className="space-y-14 sm:space-y-18">
      {/* Hero */}
      <AnimateIn>
        <section className="hero-panel rounded-3xl p-6 sm:p-12 sm:pb-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <Suspense fallback={null}>
            <BitcoinScene />
          </Suspense>
          <div className="relative z-10 max-w-4xl space-y-6">
            <h1 className="display-title text-4xl sm:text-5xl md:text-6xl">
              Bitcoin is <span className="text-gradient glow-pulse">here.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
              Over the last few years, most major banks, asset managers, and
              several sovereign wealth funds have started buying and building
              on Bitcoin.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
              This is a curated look at that adoption — not a real-time news
              feed. Every non-obvious figure on the page links back to its
              original source. Numbers move; click through to the primary
              filing or report for the latest figure.
            </p>
          </div>
        </section>
      </AnimateIn>

      {/* The ETFs */}
      <AnimateIn>
        <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <TrendingUp className="inline h-7 w-7 text-primary/50 mr-1.5 -mt-0.5" />
              Bitcoin ETFs
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {totalUsEtfBtc.toLocaleString()} BTC in US spot ETFs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In{" "}
              <a href="https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                January 2024 the SEC approved 11 spot Bitcoin ETFs
              </a>{" "}
              in a single order, after years of denying the same applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ETFs sacrifice the sovereignty of self-custody, but they slot
              Bitcoin into accounts people already use. The opening means a
              401(k), a state pension, or a university endowment can buy BTC
              the same way it buys SPY. BlackRock's IBIT alone now holds{" "}
              <a href="https://finance.yahoo.com/markets/crypto/articles/blackrock-bitcoin-etf-holdings-hit-203000203.html" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                more than 800,000 BTC
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            <EtfBarChart />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={2} />

      {/* The Institutions */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Building2 className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The Institutions
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Pensions, endowments, and sovereign wealth
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Abu Dhabi's{" "}
              <a href="https://www.coindesk.com/markets/2026/02/17/abu-dhabi-funds-bought-the-bitcoin-dip-as-they-increased-exposure-to-blackrock-s-ibit" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                Mubadala lifted its IBIT stake to $630M in Q4 2025
              </a>
              . Harvard's endowment{" "}
              <a href="https://www.theblock.co/post/389996/harvard-bitcoin-ether-etf-holdings" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                disclosed a $443M IBIT position
              </a>
              {" "}before trimming back. Emory, Dartmouth, and Brown have all
              shown up in 13F filings. Wisconsin's pension was first to disclose
              a spot-ETF stake — and{" "}
              <a href="https://www.coindesk.com/markets/2025/05/16/wisconsin-sells-entire-350m-spot-bitcoin-etf-stake" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                fully sold it in Q1 2025
              </a>
              , a reminder that institutional flows go both ways.
            </p>
          </div>
          <div className="space-y-4">
            <InstitutionalBarChart />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={3} />

      {/* The Treasuries */}
      <AnimateIn>
        <section className="space-y-4">
          <p className="display-kicker">
            <Briefcase className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
            The Treasuries
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {treasuryCompanyCount} public companies.{" "}
            {totalTreasuryBtc.toLocaleString()} BTC on their balance sheets.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Strategy alone holds{" "}
            <a href="https://www.strategy.com/purchases" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
              818,000 BTC
            </a>
            {" "}— more than any spot ETF. MARA, Twenty One Capital, MetaPlanet,
            Riot, and Tesla are next.{" "}
            <a href="https://www.sec.gov/Archives/edgar/data/1050446/000119312520225208/d39160d8k.htm" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
              MicroStrategy started the trend in August 2020
            </a>
            {" "}with a $250M, 21,454-BTC purchase.
          </p>
          <AnimateInGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <AnimateInGroupItem>
              <StatCard
                label="Treasury companies"
                value={treasuryCompanyCount}
              />
            </AnimateInGroupItem>
            <AnimateInGroupItem>
              <StatCard label="Total treasury BTC" value={totalTreasuryBtc} />
            </AnimateInGroupItem>
            <AnimateInGroupItem>
              <StatCard label="Held in US spot ETFs" value={totalUsEtfBtc} />
            </AnimateInGroupItem>
          </AnimateInGroup>
        </section>
      </AnimateIn>

      <GlowDivider index={4} />
      {/* The Banks */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Landmark className="inline h-7 w-7 text-primary/50 mr-1.5 -mt-0.5" />
              The Banks
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              The banks are coming
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Morgan Stanley{" "}
              <a href="https://www.morganstanley.com/press-releases/msim-enters-with-launch-of-morgan-stanley-bitcoin-trust" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                launched its spot Bitcoin ETF, MSBT
              </a>
              {" "}in April 2026.{" "}
              <a href="https://www.coindesk.com/business/2026/02/27/citi-and-morgan-stanley-expand-bitcoin-and-crypto-custody-trading-and-tokenization-efforts" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                Citi has detailed an institutional BTC custody platform
              </a>
              {" "}targeted for a 2026 rollout. Bank of America{" "}
              <a href="https://www.coindesk.com/business/2025/12/02/bank-of-america-greenlights-wealth-advisors-to-recommend-up-to-4-bitcoin-allocation" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                authorized 15,000 Merrill advisors to recommend up to 4% BTC
              </a>
              {" "}as of January 2026.
            </p>
          </div>
          <div className="space-y-4">
            <BankTimeline />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={1} />

      {/* The Nations */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Globe className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The Nations
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Governments hold ~{totalNationBtc.toLocaleString()} BTC
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The US{" "}
              <a href="https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                established a Strategic Bitcoin Reserve
              </a>
              {" "}in March 2025 from on-chain-tracked DOJ seizures (~207K BTC).
              The UK holds{" "}
              <a href="https://www.reuters.com/world/uk/uk-woman-pleads-guilty-laundering-bitcoin-chinese-fraud-2025-09-29/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                ~61K BTC seized in the Jian Wen / Zhimin Qian fraud case
              </a>
              {" "}— legally pending restitution to victims, not a sovereign
              reserve. Bhutan mined hydropower BTC since ~2019 but{" "}
              <a href="https://www.coindesk.com/markets/2026/04/11/bhutan-has-sold-70-of-its-bitcoin-in-18-months-it-may-have-stopped-btc-mining-too" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                has sold ~70% of its stack in the last 18 months
              </a>
              . El Salvador's Bitcoin Office still adds to the reserve daily,
              even after{" "}
              <a href="https://www.reuters.com/world/americas/el-salvador-congress-approves-bitcoin-law-reform-meet-imf-conditions-2025-01-29/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                legal-tender status was rolled back in January 2025
              </a>
              {" "}under the IMF deal. (China's widely cited 194K BTC from the
              2019 PlusToken seizure has never been confirmed and is reportedly
              already sold — it is excluded here.)
            </p>
          </div>
          <div className="space-y-4">
            <NationHoldingsChart />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={5} />

      {/* The Money Layer */}
      <AnimateIn>
        <section className="story-card rounded-2xl p-5 sm:p-8 space-y-4">
          <p className="display-kicker">
            <Layers className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
            The Money Layer
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Bitcoin-backed yield at {strcMetrics.currentYield}%
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            <a href="https://www.strategy.com/strc/learn" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
              Strategy's STRC perpetual preferred stock
            </a>
            {" "}IPO'd at 8% in July 2025 and has{" "}
            <a href="https://www.coindesk.com/markets/2026/03/01/strategy-lifts-strc-dividend-to-11-5-as-mstr-extends-monthly-losing-streak-to-8" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
              ratcheted up to {strcMetrics.currentYield}%
            </a>
            . Proceeds go almost entirely to buying BTC. The follow-on layer is
            already live: Buck Labs launched a Strategy-backed{" "}
            <a href="https://www.coindesk.com/business/2026/01/05/buck-launches-bitcoin-linked-savings-coin-tied-to-michael-saylor-s-strategy" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
              "savings coin" (BUCK) targeting ~7% yield
            </a>
            {" "}in January 2026 (note: not a stablecoin, not pegged to $1).
          </p>
        </section>
      </AnimateIn>

      <GlowDivider index={6} />

      {/* Supply */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Lock className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The Supply
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              21 million. Fixed supply.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bitcoin's supply is hard-capped at 21 million by protocol.{" "}
              <a href="https://www.chainalysis.com/blog/lost-bitcoin/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-foreground">
                Chainalysis estimates ~3–4 million BTC are permanently lost
              </a>
              . The block reward halves every 210,000 blocks (~4 years), so
              new issuance shrinks geometrically. Against that backdrop, the
              treasuries above hold {totalTreasuryBtc.toLocaleString()} BTC,
              the US spot ETFs hold {totalUsEtfBtc.toLocaleString()}, and the
              governments tracked here hold {totalNationBtc.toLocaleString()}.
            </p>
          </div>
          <div className="space-y-5">
            <SupplyCurve />
            <SupplyFlow />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={7} />

      {/* The Numbers */}
      <AnimateIn>
        <section className="space-y-4">
          <p className="display-kicker">
            <Hash className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
            The Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            What the totals look like today
          </h2>
          <AnimateInGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <AnimateInGroupItem>
              <StatCard
                label="Controlled BTC (no double count)"
                value={controlledBtcTotal}
              />
            </AnimateInGroupItem>
            <AnimateInGroupItem>
              <StatCard
                label="Look-through exposure"
                value={indirectExposureBtcTotal}
              />
            </AnimateInGroupItem>
            <AnimateInGroupItem>
              <StatCard
                label="Total economic exposure"
                value={economicExposureBtcTotal}
              />
            </AnimateInGroupItem>
            <AnimateInGroupItem>
              <StatCard label="Held in US spot ETFs" value={totalUsEtfBtc} />
            </AnimateInGroupItem>
          </AnimateInGroup>
        </section>
      </AnimateIn>

      {/* Route Cards */}
      <AnimateIn>
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {v2Routes.map((card) => (
            <Link key={card.to} to={card.to} className="no-underline">
              <article className="story-card rounded-2xl p-5 h-full card-hover">
                <div className="h-10 w-10 rounded-xl border border-primary/40 bg-primary/12 glow-orange flex items-center justify-center mb-4">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="display-kicker">{card.subtitle}</p>
                <h3 className="text-xl font-semibold mt-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {card.copy}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  See the data <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Link>
          ))}
        </section>
      </AnimateIn>

      {/* Timeline */}
      <AnimateIn>
        <section className="space-y-4">
          <p className="display-kicker">Timeline</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            How we got here
          </h2>
          <AdoptionTimeline />
        </section>
      </AnimateIn>

      {/* News */}
      <AnimateIn>
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="display-kicker">Latest</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                What's happening now
              </h2>
            </div>
            <Link
              to="/evidence"
              className="text-sm text-primary no-underline inline-flex items-center gap-1"
            >
              See the full record <BookOpen className="h-4 w-4" />
            </Link>
          </div>
          <NewsList items={items.slice(0, 8)} showCategory />
        </section>
      </AnimateIn>
    </div>
  );
}
