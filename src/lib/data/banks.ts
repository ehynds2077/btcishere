import type { BankMilestone } from "#/lib/types"

// Major US bank milestones in offering Bitcoin to clients. Dates are when
// the public announcement / launch was reported. Note that several banks
// are still in the buildout phase as of May 2026 — Citi's custody platform,
// for example, is targeting a launch later in 2026, not already live.
export const bankMilestones: BankMilestone[] = [
  {
    bank: "Goldman Sachs",
    event: "Discloses ~$1.06B BTC ETF position across IBIT/FBTC (Q4 2025 13F)",
    date: "2026-02",
    category: "exposure",
    sourceUrl: "https://www.theblock.co/post/389332/goldman-sachs-trims-bitcoin-etf-exposure-q4",
  },
  {
    bank: "JPMorgan",
    event: "Begins accepting Bitcoin ETFs as collateral; exploring direct crypto trading for institutions",
    date: "2025-12",
    category: "trading",
    sourceUrl: "https://fortune.com/2025/12/23/jpmorgan-to-allow-crypto-trading-for-institutional-clients/",
  },
  {
    bank: "Morgan Stanley",
    event: "Opens BTC ETF access to all wealth-management clients (Oct 2025); MSBT ETF launches Apr 2026",
    date: "2025-10",
    category: "advisory",
    sourceUrl: "https://www.morganstanley.com/press-releases/msim-enters-with-launch-of-morgan-stanley-bitcoin-trust",
  },
  {
    bank: "Bank of America",
    event: "Authorizes Merrill advisors to recommend a 1–4% BTC allocation to wealth clients",
    date: "2026-01",
    category: "advisory",
    sourceUrl: "https://www.coindesk.com/business/2025/12/02/bank-of-america-greenlights-wealth-advisors-to-recommend-up-to-4-bitcoin-allocation",
  },
  {
    bank: "Citigroup",
    event: "Announces institutional BTC custody platform — targeting 2026 rollout",
    date: "2026-02",
    category: "custody",
    sourceUrl: "https://www.coindesk.com/business/2026/02/27/citi-and-morgan-stanley-expand-bitcoin-and-crypto-custody-trading-and-tokenization-efforts",
  },
]
