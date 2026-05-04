import { createFileRoute } from "@tanstack/react-router"
import { StrcVsBtc } from "#/components/charts/StrcVsBtc"
import { StrcPriceAndRate } from "#/components/charts/StrcPriceAndRate"
import { MechanismRule } from "#/components/charts/MechanismRule"
import { DigitalCreditTable } from "#/components/charts/DigitalCreditTable"
import {
  STRC_LEARN_SOURCE,
  STRC_PRICE_SOURCE,
  BTC_PRICE_SOURCE,
  TRUE_NORTH_DASHBOARD,
} from "#/lib/data"

export const Route = createFileRoute("/credit")({
  component: CreditPage,
})

function CreditPage() {
  return (
    <article className="max-w-[760px] lg:max-w-[920px] xl:max-w-[1040px] mx-auto space-y-16 sm:space-y-20">
      <header className="space-y-4 pt-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
          Digital credit
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          How STRC works
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          STRC is preferred stock issued by Strategy at $100 per share. It pays
          a monthly cash dividend, and the dividend rate floats — the issuer
          adjusts it each month with the explicit goal of keeping the share
          price near $100. The result is an instrument whose price barely
          moves while the rate does the work of clearing the market.
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          The rule
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          A traditional bond fixes the coupon and lets the price float. STRC
          inverts that. The coupon is what changes; the price is what's
          defended. Each month the issuer looks at where STRC is trading and
          adjusts the dividend in one of two directions.
        </p>
        <MechanismRule />
        <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-[60ch]">
          The size of each adjustment is bounded per period, and the issuer is
          not contractually obligated to defend par — it is the stated
          intention written into{" "}
          <a
            href={STRC_LEARN_SOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            Strategy's STRC information page
          </a>
          .
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          What it looks like in practice
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          Since its July 2025 IPO, STRC has traded in a tight band — settling
          near par after an early discount. Bitcoin moved through a much wider
          range over the same window. Both lines are indexed to 100 at the
          start so you can read them on the same axis.
        </p>
        <div className="rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-6">
          <StrcVsBtc />
        </div>
        <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-[60ch]">
          STRC closes from{" "}
          <a
            href={STRC_PRICE_SOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            stockanalysis.com
          </a>
          ; BTC monthly closes from{" "}
          <a
            href={BTC_PRICE_SOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            CoinGecko
          </a>
          . Pre-Feb 2026 STRC closes are reconstructed from the documented
          IPO price ($90), all-time low ($88, Jul 25 2025), and all-time high
          ($100.42, Jan 13 2026).
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          The rate is what moved
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          The same window from the issuer's side: STRC's price hugged par,
          while the dividend rate climbed from 8% at IPO to 11.5% in March
          2026 and held. The price didn't have to move — the rate did the
          work.
        </p>
        <div className="rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-6">
          <StrcPriceAndRate />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Where the dividend comes from
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          STRC dividends are paid in cash from Strategy's operating cash flow,
          ATM equity issuance, and — at the margin — its bitcoin treasury.
          STRC sits in the corporate capital stack: senior to common stock
          and junior to debt. Holders don't have a direct claim on bitcoin;
          they have a preferred-equity claim on the company that owns it.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          Cumulative means missed dividends accrue. If Strategy ever skipped a
          monthly distribution, STRC holders would still be owed it before
          common shareholders saw a dollar.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          The same mechanism elsewhere
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
          STRC is one of six instruments now in the bitcoin-backed preferred
          family. Strategy has issued five — covering fixed-rate, variable,
          convertible, junior, and euro-denominated tranches at different
          rungs of the capital stack. Strive's SATA, launched in January 2026,
          uses the same variable-rate template as STRC from a smaller bitcoin
          treasury, which is why it pays a higher rate.
        </p>
        <DigitalCreditTable />
        <p className="text-xs text-muted-foreground/80 leading-relaxed">
          Coupons are stated rates at par; effective yields differ when shares
          trade above or below their stated amount. Live effective yields are
          tracked at{" "}
          <a
            href={TRUE_NORTH_DASHBOARD}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            tnorth.com
          </a>
          .
        </p>
      </section>
    </article>
  )
}
