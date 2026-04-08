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
  bankMilestones,
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
              Over the last 24 months, every major US bank, the largest asset
              managers, sovereign wealth funds, public pension systems, and
              multiple national governments have taken Bitcoin positions. All of
              it is on the public record. This site tracks that record.
            </p>
          </div>
        </section>
      </AnimateIn>

      {/* The Banks */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Landmark className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The Banks
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              The banks are coming
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Morgan Stanley, JPMorgan, Bank of America, Citi, have all entered
              the bitcoin space. From custody to investing, bitcoin is being
              integrated as a key part of our financial system
            </p>
          </div>
          <div className="space-y-4">
            <BankTimeline />
          </div>
        </section>
      </AnimateIn>

      <GlowDivider index={1} />

      {/* The ETFs */}
      <AnimateIn>
        <section className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <TrendingUp className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The ETFs
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {totalUsEtfBtc.toLocaleString()} BTC in US spot ETFs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Spot Bitcoin ETFs launched in January 2024 and became the most
              successful ETF category debut on record. BlackRock's IBIT alone
              holds over 765,000 BTC. Combined, the US spot ETFs hold roughly 6%
              of all Bitcoin that will ever exist.
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
              Abu Dhabi's Mubadala disclosed a $1B IBIT position. Wisconsin's
              pension system allocated $321M. Endowments at Harvard, Dartmouth,
              Brown, Emory, and Yale have positions. Michigan and Florida
              pension funds as well. These are long-horizon, policy-driven
              allocators.
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
            Strategy holds 687,000 BTC. MARA, Twenty One Capital, MetaPlanet,
            Riot, and Tesla are among the rest. MicroStrategy started the trend
            in August 2020. Five years later, {treasuryCompanyCount} public
            companies hold BTC on their balance sheets.
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

      {/* The Nations */}
      <AnimateIn>
        <section className="section-glow grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="display-kicker">
              <Globe className="inline h-3.5 w-3.5 text-primary/50 mr-1.5 -mt-0.5" />
              The Nations
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Governments hold {totalNationBtc.toLocaleString()} BTC
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The United States holds 207,000 BTC and has proposed a strategic
              reserve. China holds 194,000 from seizures. The UK holds 61,000.
              Bhutan mined 13,000 with hydroelectric power. El Salvador made it
              legal tender and holds 6,100.
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
            STRC preferred stock pays a Bitcoin-backed dividend that ratcheted
            from 8% at launch to {strcMetrics.currentYield}%. Over $
            {strcMetrics.totalRaisedB}B raised so far. Next in the pipeline: the
            Buck stablecoin, followed by Bitcoin-backed bank accounts. Financial
            products are being layered directly on top of BTC.
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
              Bitcoin's total supply is hard-capped at 21 million by protocol.
              An estimated 3.7 million are permanently lost. The block reward
              halves every four years, cutting new issuance each cycle. Against
              that backdrop, treasuries hold {totalTreasuryBtc.toLocaleString()}{" "}
              BTC, ETFs hold {totalUsEtfBtc.toLocaleString()}, and governments
              hold {totalNationBtc.toLocaleString()}.
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
