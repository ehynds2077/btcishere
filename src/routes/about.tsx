import { createFileRoute, Link } from "@tanstack/react-router"
import { AnimateIn } from "#/components/AnimateIn"

export const Route = createFileRoute("/about")({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="space-y-8">
      <AnimateIn>
        <section className="hero-panel rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="display-kicker">About</p>
          <h1 className="display-title text-4xl sm:text-5xl md:text-6xl">
            Why this <span className="text-gradient">exists</span>
          </h1>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            The evidence of institutional Bitcoin adoption is everywhere -- SEC filings, bank announcements, sovereign
            wealth fund disclosures -- but it is scattered across hundreds of sources. This site puts it in one place
            and tells the story in order.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="story-card rounded-2xl p-5 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            This is not a trading tool. It is a curated record. Every data point is chosen to show structure: which
            banks opened the door, which institutions wrote the check, which nations are accumulating, and what new
            products are being built.
          </p>
          <p>
            The counting methodology is transparent and conservative. If an institution holds ETF shares, that exposure
            is tracked separately from the ETF's direct BTC holdings, so nothing gets counted twice.
          </p>
          <p>
            See <Link to="/holders" className="underline hover:text-foreground">Who Holds It</Link> for the full ownership
            map and counting notes, and <Link to="/evidence" className="underline hover:text-foreground">The Record</Link> for
            source-linked updates and the full timeline.
          </p>
        </section>
      </AnimateIn>
    </div>
  )
}
