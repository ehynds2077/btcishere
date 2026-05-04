import type { Category, NewsItem } from "#/types/news"

// Each item links to the specific article that reported the event.
// Items that previously linked to news-site homepages have been
// replaced with the actual reporting URL — or removed if no
// authoritative source could be found.
const newsData: NewsItem[] = [
  // Banks
  {
    id: "bank-1",
    title: "Citi targets 2026 launch for institutional Bitcoin custody",
    description:
      "Citigroup detailed plans for an institutional Bitcoin custody service that integrates BTC into the same custody, reporting and tax frameworks it uses for traditional assets. The platform is in development for a 2026 rollout.",
    sourceUrl: "https://www.coindesk.com/business/2026/02/27/citi-and-morgan-stanley-expand-bitcoin-and-crypto-custody-trading-and-tokenization-efforts",
    date: "2026-02-27",
    category: "banks",
  },
  {
    id: "bank-2",
    title: "JPMorgan exploring crypto trading for institutional clients",
    description:
      "JPMorgan's markets division is assessing direct crypto trading and derivatives products for institutional clients — a notable shift from CEO Jamie Dimon's long-standing skepticism. The bank already accepts Bitcoin ETFs as loan collateral.",
    sourceUrl: "https://fortune.com/2025/12/23/jpmorgan-to-allow-crypto-trading-for-institutional-clients/",
    date: "2025-12-22",
    category: "banks",
  },
  {
    id: "bank-3",
    title: "Morgan Stanley to enable Bitcoin trading on E*Trade in H1 2026",
    description:
      "Morgan Stanley is preparing to roll out crypto trading on E*Trade in the first half of 2026, partnering with Zerohash for liquidity, custody, and settlement. Initial coverage will include Bitcoin, Ethereum, and Solana.",
    sourceUrl: "https://bitcoinmagazine.com/news/morgan-stanley-to-enable-bitcoin-trading-for-etrade-clients-in-first-half-of-2026",
    date: "2026-02-10",
    category: "banks",
  },
  {
    id: "bank-4",
    title: "Goldman Sachs holds ~$1.06B in spot Bitcoin ETFs (Q4 2025 13F)",
    description:
      "Goldman Sachs's most recent 13F discloses 21.2M shares across spot Bitcoin ETFs valued at roughly $1.06B, down from $1.57B at the prior peak. The bank has also filed for its own Bitcoin Premium Income ETF.",
    sourceUrl: "https://www.theblock.co/post/389332/goldman-sachs-trims-bitcoin-etf-exposure-q4",
    date: "2026-02-14",
    category: "banks",
  },
  {
    id: "bank-5",
    title: "Bank of America greenlights 1–4% Bitcoin allocation for wealth clients",
    description:
      "Effective January 5, 2026, Bank of America's CIO authorized 15,000+ Merrill, Private Bank, and Merrill Edge advisors to proactively recommend a 1–4% portfolio allocation to Bitcoin via approved ETFs (IBIT, FBTC, BITB, BTC).",
    sourceUrl: "https://www.coindesk.com/business/2025/12/02/bank-of-america-greenlights-wealth-advisors-to-recommend-up-to-4-bitcoin-allocation",
    date: "2026-01-05",
    category: "banks",
  },

  // Institutional
  {
    id: "inst-1",
    title: "Harvard discloses $443M IBIT position, then trims to $266M",
    description:
      "Harvard Management Co. reported 6.81M shares of IBIT (~$443M) in its Q3 2025 13F — its largest reported equity position. The Q4 filing then trimmed the stake to 5.35M shares ($266M).",
    sourceUrl: "https://www.theblock.co/post/389996/harvard-bitcoin-ether-etf-holdings",
    date: "2025-11-15",
    category: "institutional",
  },
  {
    id: "inst-2",
    title: "Abu Dhabi funds top $1B in IBIT after Q4 13Fs",
    description:
      "Mubadala lifted its IBIT stake to 12.7M shares ($630.6M) in Q4 2025, a 46% increase from Q3. Combined with Al Warda Investments, Abu Dhabi sovereign exposure to IBIT crossed $1B.",
    sourceUrl: "https://www.coindesk.com/markets/2026/02/17/abu-dhabi-funds-bought-the-bitcoin-dip-as-they-increased-exposure-to-blackrock-s-ibit",
    date: "2026-02-17",
    category: "institutional",
  },
  {
    id: "inst-3",
    title: "Dartmouth takes new $10M IBIT position",
    description:
      "Trustees of Dartmouth College reported 201,531 shares of IBIT (~$10M) and a smaller Grayscale Ethereum Mini Trust position as of December 31, 2025 — both new positions.",
    sourceUrl: "https://www.pionline.com/asset-management/exchange-traded-funds/pi-dartmouth-college-grayscale-ethereum-blackrock-bitcoin-etfs-december-31-2025/",
    date: "2026-02-14",
    category: "institutional",
  },
  {
    id: "inst-4",
    title: "Brown becomes first Ivy League to disclose direct Bitcoin ETF holding",
    description:
      "Brown University's Q1 2025 13F disclosed 105,000 IBIT shares worth $4.9M — a new position acquired between January and March 2025.",
    sourceUrl: "https://www.nasdaq.com/articles/brown-university-bought-and-owns-49-million-blackrocks-bitcoin-etf",
    date: "2025-05-02",
    category: "institutional",
  },
  {
    id: "inst-5",
    title: "Emory University ups Grayscale Bitcoin Mini Trust stake to $52M",
    description:
      "Emory's Q3 2025 13F shows 1,023,417 shares of Grayscale's BTC Mini Trust (~$51.8M), a 91% increase, plus a small IBIT holding. BTC is now ~33% of its 13F-reportable book.",
    sourceUrl: "https://www.coindesk.com/markets/2025/11/13/emory-doubles-down-on-bitcoin-with-usd52m-grayscale-bet",
    date: "2025-11-13",
    category: "institutional",
  },
  {
    id: "inst-6",
    title: "Wisconsin pension liquidates entire $300M IBIT stake in Q1 2025",
    description:
      "After being the first state pension to disclose a spot BTC ETF position (peaked at $321M in Feb 2025), the State of Wisconsin Investment Board sold its entire IBIT holding during Q1 2025 amid tariff turbulence.",
    sourceUrl: "https://www.coindesk.com/markets/2025/05/16/wisconsin-sells-entire-350m-spot-bitcoin-etf-stake",
    date: "2025-05-16",
    category: "institutional",
  },

  // Treasuries
  {
    id: "treas-1",
    title: "Strategy crosses 818,000 BTC after $255M April buy",
    description:
      "Strategy disclosed a 3,273-BTC purchase for $255M during the week ending April 26, 2026, lifting its treasury to 818,334 BTC (acquired for ~$61.81B at an average of $75,537/BTC).",
    sourceUrl: "https://www.coindesk.com/markets/2026/04/27/michael-saylor-s-strategy-buys-3-273-bitcoin-as-it-inches-closer-to-its-1-million-target",
    date: "2026-04-27",
    category: "treasuries",
  },
  {
    id: "treas-2",
    title: "Twenty One Capital debuts via SPAC with ~43.5K BTC",
    description:
      "Twenty One Capital (XXI), backed by Tether, SoftBank, and Cantor Fitzgerald, debuted via SPAC in December 2025 with more than 40,000 BTC on its balance sheet. Holdings now stand at 43,514 BTC.",
    sourceUrl: "https://www.tether.io/news/tether-bitfinex-and-softbank-group-back-launch-of-twenty-one-a-new-bitcoin-native-public-company/",
    date: "2025-12-05",
    category: "treasuries",
  },
  {
    id: "treas-3",
    title: "Metaplanet adds 5,075 BTC in Q1 2026, jumps to 40,177 BTC total",
    description:
      "Tokyo-listed Metaplanet (3350.T) added 5,075 BTC in Q1 2026 and now holds 40,177 BTC, becoming the third-largest corporate BTC holder. Its '555 Million Plan' targets 100K BTC by year-end and 210K by end-2027.",
    sourceUrl: "https://www.theblock.co/post/357254/metaplanet-5-4-billion-usd-equity-raise-bitcoin-1-per-cent-club",
    date: "2026-04-02",
    category: "treasuries",
  },
  {
    id: "treas-4",
    title: "Tesla holds steady at 11,509 BTC; reports $173M Q1 fair-value loss",
    description:
      "Tesla made no changes to its 11,509-BTC stack in Q1 2026 and reported a $173M unrealized loss on digital assets as BTC fell from ~$90K to ~$68K over the quarter.",
    sourceUrl: "https://www.coindesk.com/markets/2026/04/22/elon-musk-s-tesla-reports-unchanged-bitcoin-holdings-books-usd173-million-digital-asset-loss",
    date: "2026-04-22",
    category: "treasuries",
  },

  // Money (STRC)
  {
    id: "money-1",
    title: "STRC dividend rate raised to 11.5% in March 2026",
    description:
      "Strategy raised the variable rate on its STRC perpetual preferred stock to 11.5% for the March 2026 distribution. The security launched in July 2025 at 8%, so the change shows how quickly its payout terms have been reset.",
    sourceUrl: "https://www.coindesk.com/markets/2026/03/01/strategy-lifts-strc-dividend-to-11-5-as-mstr-extends-monthly-losing-streak-to-8",
    date: "2026-03-01",
    category: "money",
  },
  {
    id: "money-2",
    title: "Strategy says STRC grew into one of the largest preferred-stock issues",
    description:
      "According to public comments from Michael Saylor in April 2026, STRC had grown rapidly in market value within its first year. The significance is less the superlative itself than the scale of investor demand for a Bitcoin-linked income security.",
    sourceUrl: "https://news.bitcoin.com/strategys-strc-becomes-worlds-largest-preferred-stock-in-under-one-year-saylor-says/",
    date: "2026-04-15",
    category: "money",
  },
  {
    id: "money-3",
    title: "Buck Labs launches BUCK token backed by Strategy shares",
    description:
      "Buck Labs introduced BUCK in early 2026 as a yield-bearing token backed by Strategy stock, with rewards funded indirectly by the Buck Foundation's STRC preferred holdings. It is not pegged to $1 and is not described as a stablecoin.",
    sourceUrl: "https://www.coindesk.com/business/2026/01/05/buck-launches-bitcoin-linked-savings-coin-tied-to-michael-saylor-s-strategy",
    date: "2026-01-05",
    category: "money",
  },
  {
    id: "money-4",
    title: "Strive lifts SATA dividend to 13% and adds 179 BTC",
    description:
      "Vivek Ramaswamy's Strive raised the dividend on its SATA Variable Rate Series A perpetual preferred to 13.00% effective April 15, 2026 — its third consecutive monthly hike — and disclosed an additional 179 BTC purchase.",
    sourceUrl: "https://www.globenewswire.com/news-release/2026/04/15/3274393/0/en/Strive-Announces-Increase-to-SATA-Perpetual-Preferred-Stock-Dividend-Rate-to-13-00-and-Bitcoin-Buy.html",
    date: "2026-04-15",
    category: "money",
  },
  {
    id: "money-5",
    title: "Strategy raises €620M with euro-denominated STRE preferred",
    description:
      "Strategy priced a 10% perpetual preferred 'Stream' on the Luxembourg Euro MTF in November 2025, raising €620M ($715M) — its first non-USD instrument and a template for further European Bitcoin-backed credit issuance.",
    sourceUrl: "https://www.coindesk.com/markets/2025/11/04/strategy-introduces-a-euro-denominated-preferred-stock-stream-following-q3-earnings",
    date: "2025-11-04",
    category: "money",
  },
  {
    id: "money-6",
    title: "Strive buys $50M of Strategy's STRC alongside SATA expansion",
    description:
      "Strive disclosed a $50M purchase of Strategy's STRC preferred and additional bitcoin acquisitions, building reserves it says cover roughly 19 years of SATA interest payments.",
    sourceUrl: "https://www.coindesk.com/markets/2026/03/11/strategy-s-strc-preferred-series-gets-usd50-million-investment-from-fellow-btc-treasury-company-strive",
    date: "2026-03-11",
    category: "money",
  },

  // ETFs
  {
    id: "etf-1",
    title: "BlackRock IBIT crosses 806K BTC; Strategy nudges back ahead",
    description:
      "IBIT added another 12,400 BTC to reach 806,700 BTC and roughly 49% of US spot Bitcoin ETF assets — but Strategy's 818K-BTC stack now leads the global single-entity holders.",
    sourceUrl: "https://finance.yahoo.com/markets/crypto/articles/blackrock-bitcoin-etf-holdings-hit-203000203.html",
    date: "2026-04-21",
    category: "etfs",
  },
  {
    id: "etf-2",
    title: "Morgan Stanley launches MSBT at 0.14% — the cheapest BTC ETF",
    description:
      "Morgan Stanley Investment Management launched the Morgan Stanley Bitcoin Trust (NYSE Arca: MSBT) in April 2026 with a 0.14% sponsor fee, the lowest among US spot Bitcoin ETFs.",
    sourceUrl: "https://fortune.com/2026/04/08/morgan-stanley-bitcoin-etf-msbt-launch-ethereum-solana/",
    date: "2026-04-08",
    category: "etfs",
  },
  {
    id: "etf-3",
    title: "Spot Bitcoin ETFs approved by the SEC",
    description:
      "On January 10, 2024, the SEC issued an approval order clearing 11 spot Bitcoin ETFs to begin trading — opening the largest channel for institutional Bitcoin access in history.",
    sourceUrl: "https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf",
    date: "2024-01-10",
    category: "etfs",
  },

  // Nations
  {
    id: "nation-1",
    title: "El Salvador rolls back Bitcoin legal tender under IMF deal",
    description:
      "Under a $1.4B IMF loan agreement, El Salvador's Congress amended the Bitcoin Law in January 2025 — removing mandatory merchant acceptance and the 'currency' designation. Public-sector use is confined; Bitcoin Office continues daily purchases.",
    sourceUrl: "https://www.reuters.com/world/americas/el-salvador-congress-approves-bitcoin-law-reform-meet-imf-conditions-2025-01-29/",
    date: "2025-01-29",
    category: "nations",
  },
  {
    id: "nation-2",
    title: "Bhutan has sold ~70% of its Bitcoin in 18 months",
    description:
      "Druk Holding & Investments has reduced Bhutan's sovereign BTC stack from ~13,000 BTC in October 2024 to roughly 3,954 BTC, with sales reportedly funding the Gelephu Mindfulness City project. Hydropower-backed mining inflows have also stopped.",
    sourceUrl: "https://www.coindesk.com/markets/2026/04/11/bhutan-has-sold-70-of-its-bitcoin-in-18-months-it-may-have-stopped-btc-mining-too",
    date: "2026-04-11",
    category: "nations",
  },
  {
    id: "nation-3",
    title: "Trump establishes US Strategic Bitcoin Reserve",
    description:
      "Executive Order 14233 (March 6, 2025) creates a Strategic Bitcoin Reserve and a separate Digital Asset Stockpile within Treasury. The order directs no further sales of BTC forfeited in criminal/civil proceedings.",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/",
    date: "2025-03-06",
    category: "nations",
  },
  {
    id: "nation-4",
    title: "Czech National Bank approves Bitcoin reserve study",
    description:
      "CNB Governor Aleš Michl announced in early 2025 that the bank board approved a study of allocating up to 5% of the central bank's ~€140B reserves to Bitcoin and other alternative assets. No purchase has been made.",
    sourceUrl: "https://www.reuters.com/markets/europe/czech-central-bank-explore-bitcoin-other-asset-classes-governor-says-2025-01-30/",
    date: "2025-01-30",
    category: "nations",
  },
]

export const allNews: NewsItem[] = [...newsData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function getNewsByCategory(category: Category): NewsItem[] {
  return allNews.filter((item) => item.category === category)
}

export function getCategoryCounts(): Record<Category, number> {
  const counts = { banks: 0, institutional: 0, treasuries: 0, nations: 0, money: 0, etfs: 0 }
  for (const item of newsData) {
    counts[item.category]++
  }
  return counts
}
