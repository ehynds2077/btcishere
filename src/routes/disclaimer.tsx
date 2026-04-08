import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
})

function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-4">
      <h1 className="text-2xl font-bold">Disclaimer</h1>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          No Financial Advice
        </h2>
        <p>
          The information provided on this website is for general informational
          and educational purposes only. Nothing on this site constitutes
          financial advice, investment advice, trading advice, or any other
          sort of professional advice. You should not make any financial
          decision based on the information presented here without conducting
          your own research and consulting with a qualified financial advisor.
        </p>
      </section>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          Accuracy of Information
        </h2>
        <p>
          While we make reasonable efforts to provide accurate and up-to-date
          information, we make no warranties or representations of any kind,
          express or implied, about the completeness, accuracy, reliability,
          or suitability of the data displayed on this site. The data shown
          may be outdated, incomplete, or contain errors. Bitcoin holdings,
          ETF figures, institutional allocations, and other statistics change
          frequently and the figures presented here may not reflect current
          values.
        </p>
      </section>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          No Liability
        </h2>
        <p>
          Under no circumstances shall the operators of this website be held
          liable for any loss or damage, including without limitation indirect
          or consequential loss or damage, arising from the use of or reliance
          on information provided on this site. Your use of any information on
          this site is entirely at your own risk.
        </p>
      </section>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          Third-Party Links & Sources
        </h2>
        <p>
          This site may contain links to external websites and references to
          third-party sources. We do not control and are not responsible for
          the content, accuracy, or availability of any linked third-party
          sites. Inclusion of any link does not imply endorsement.
        </p>
      </section>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          No Affiliation
        </h2>
        <p>
          This website is not affiliated with, endorsed by, or officially
          connected to any of the companies, funds, institutions, or
          governments mentioned. All trademarks, logos, and brand names are
          the property of their respective owners.
        </p>
      </section>

      <section className="space-y-3 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">Privacy</h2>
        <p>
          This site does not collect personal information, use cookies for
          tracking, or require user accounts. Standard web server logs may be
          retained by our hosting provider (Cloudflare) in accordance with
          their privacy policy.
        </p>
      </section>

      <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
        Last updated: March 2026
      </p>
    </div>
  )
}
