import type { AdoptionEvent } from "#/lib/types"

// Major events in institutional Bitcoin adoption, ordered by date.
// Each entry links to a primary source (press release, SEC filing, or
// authoritative reporting from the time the event occurred).
export const adoptionTimeline: AdoptionEvent[] = [
  {
    date: "2020-08",
    title: "MicroStrategy's First Purchase",
    description: "Buys 21,454 BTC for $250M — the first major public-company treasury allocation to Bitcoin.",
    category: "treasuries",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1050446/000119312520225208/d39160d8k.htm",
  },
  {
    date: "2021-02",
    title: "Tesla Buys $1.5B in BTC",
    description: "Tesla discloses a $1.5B Bitcoin purchase in its 10-K, the largest non-financial corporate position at the time.",
    category: "treasuries",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm",
  },
  {
    date: "2021-09",
    title: "El Salvador Makes BTC Legal Tender",
    description: "First nation to adopt Bitcoin as legal tender alongside the US dollar (effective September 7, 2021).",
    category: "nations",
    sourceUrl: "https://www.reuters.com/world/americas/el-salvador-becomes-first-country-adopt-bitcoin-legal-tender-2021-09-07/",
  },
  {
    date: "2021-10",
    title: "First US Bitcoin-Linked ETF",
    description: "ProShares BITO launches — the first US ETF tracking Bitcoin futures.",
    category: "etfs",
    sourceUrl: "https://www.proshares.com/news/proshares-launches-the-first-us-bitcoin-linked-etf",
  },
  {
    date: "2023-06",
    title: "BlackRock Files for Spot ETF",
    description: "World's largest asset manager files for a spot Bitcoin ETF, sparking the wave of institutional interest.",
    category: "institutional",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/1100663/000119312523173574/d503473ds1.htm",
  },
  {
    date: "2024-01",
    title: "Spot Bitcoin ETFs Approved",
    description: "SEC approves 11 spot Bitcoin ETFs in a single order on January 10, 2024 — institutional access opens.",
    category: "etfs",
    sourceUrl: "https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf",
  },
  {
    date: "2024-05",
    title: "Wisconsin Pension Buys Spot ETFs",
    description: "Wisconsin Investment Board becomes the first state pension to disclose direct spot BTC ETF holdings (since fully sold in Q1 2025).",
    category: "institutional",
    sourceUrl: "https://www.nasdaq.com/articles/wisconsin-investment-board-becomes-first-state-pension-to-buy-spot-bitcoin-etfs-holds-over",
  },
  {
    date: "2024-12",
    title: "BTC Crosses $100K",
    description: "Bitcoin breaks $100,000 for the first time on December 4–5, 2024.",
    category: "treasuries",
    sourceUrl: "https://www.reuters.com/markets/currencies/bitcoin-crosses-100000-first-time-2024-12-05/",
  },
  {
    date: "2025-03",
    title: "US Strategic Bitcoin Reserve Established",
    description: "Trump signs Executive Order 14233 creating the Strategic Bitcoin Reserve and U.S. Digital Asset Stockpile.",
    category: "nations",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/",
  },
  {
    date: "2025-07",
    title: "Strategy Launches STRC Preferred",
    description: "Strategy IPOs the STRC perpetual preferred stock at 8% — opens a new BTC-funded yield product.",
    category: "money",
    sourceUrl: "https://www.strategy.com/strc/learn",
  },
  {
    date: "2025-10",
    title: "Morgan Stanley Opens BTC Access",
    description: "Morgan Stanley opens spot Bitcoin ETF access to all wealth-management clients — not just qualified high-net-worth investors.",
    category: "banks",
    sourceUrl: "https://bitcoinmagazine.com/business/morgan-stanley-opens-bitcoin-access",
  },
  {
    date: "2025-11",
    title: "Harvard Discloses $443M IBIT Stake",
    description: "Harvard Management Co. reveals 6.81M IBIT shares — IBIT becomes its largest reported equity position.",
    category: "institutional",
    sourceUrl: "https://www.coindesk.com/markets/2025/11/15/harvard-endowment-takes-rare-leap-into-bitcoin-with-usd443m-bet-on-blackrock-s-ibit",
  },
  {
    date: "2026-01",
    title: "Bank of America Endorses 1–4% BTC Allocation",
    description: "BofA authorizes 15,000+ Merrill advisors to proactively recommend a 1–4% Bitcoin allocation to wealth clients.",
    category: "banks",
    sourceUrl: "https://www.coindesk.com/business/2025/12/02/bank-of-america-greenlights-wealth-advisors-to-recommend-up-to-4-bitcoin-allocation",
  },
  {
    date: "2026-02",
    title: "Citi Announces 2026 BTC Custody Launch",
    description: "Citigroup details an institutional Bitcoin custody platform planned for rollout later in 2026.",
    category: "banks",
    sourceUrl: "https://www.coindesk.com/business/2026/02/27/citi-and-morgan-stanley-expand-bitcoin-and-crypto-custody-trading-and-tokenization-efforts",
  },
  {
    date: "2026-04",
    title: "Strategy Tops 800K BTC",
    description: "Strategy's holdings exceed 800,000 BTC; Bitcoin's largest corporate holder pulls ahead of BlackRock's IBIT.",
    category: "treasuries",
    sourceUrl: "https://www.coindesk.com/markets/2026/04/27/michael-saylor-s-strategy-buys-3-273-bitcoin-as-it-inches-closer-to-its-1-million-target",
  },
  {
    date: "2026-04",
    title: "Morgan Stanley Bitcoin ETF (MSBT) Launches",
    description: "Morgan Stanley Investment Management launches the MSBT spot Bitcoin ETP at 0.14% — the lowest sponsor fee on the market.",
    category: "etfs",
    sourceUrl: "https://www.morganstanley.com/press-releases/msim-enters-with-launch-of-morgan-stanley-bitcoin-trust",
  },
]
