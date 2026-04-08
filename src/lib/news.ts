import type { Category, NewsItem } from "#/types/news"

const newsData: NewsItem[] = [
  // Banks
  {
    id: "bank-1",
    title: "Citigroup building Bitcoin custody for 2026 launch",
    description:
      "Citigroup is developing a Bitcoin custody service for institutional clients, targeting a 2026 launch as Wall Street races to meet demand for digital asset infrastructure.",
    sourceUrl: "https://www.coindesk.com",
    date: "2025-10-14",
    category: "banks",
  },
  {
    id: "bank-2",
    title: "JPMorgan exploring crypto trading for institutional clients",
    description:
      "JPMorgan Chase is actively exploring offering direct cryptocurrency trading to its institutional clients, a significant reversal from CEO Jamie Dimon's long-standing skepticism of digital assets.",
    sourceUrl: "https://fortune.com",
    date: "2025-12-08",
    category: "banks",
  },
  {
    id: "bank-3",
    title: "Morgan Stanley E-Trade to offer crypto trading + national crypto trust",
    description:
      "Morgan Stanley's E-Trade platform is preparing to launch cryptocurrency trading for retail investors, while the firm establishes a national crypto trust to serve institutional custody needs.",
    sourceUrl: "https://www.pymnts.com",
    date: "2026-02-10",
    category: "banks",
  },
  {
    id: "bank-4",
    title: "Goldman Sachs discloses $2.36B crypto ETF exposure",
    description:
      "Goldman Sachs revealed $2.36 billion in cryptocurrency ETF holdings in its Q4 2025 13F filing, including major positions in Bitcoin and Ethereum spot ETFs, signaling deep institutional conviction.",
    sourceUrl: "https://finance.yahoo.com",
    date: "2026-02-14",
    category: "banks",
  },
  {
    id: "bank-5",
    title: "Bank of America greenlights 1–4% Bitcoin allocation for wealth clients",
    description:
      "Bank of America's wealth management division has approved financial advisors to recommend a 1–4% portfolio allocation to Bitcoin for eligible clients, a landmark move from one of America's largest banks.",
    sourceUrl: "https://www.coindesk.com",
    date: "2026-01-22",
    category: "banks",
  },

  // Institutional
  {
    id: "inst-1",
    title: "Harvard endowment holds $443M IBIT position",
    description:
      "Harvard Management Company disclosed a $443 million position in BlackRock's iShares Bitcoin Trust (IBIT), making it the largest publicly known Bitcoin ETF holding by any university endowment.",
    sourceUrl: "https://www.coindesk.com",
    date: "2025-11-15",
    category: "institutional",
  },
  {
    id: "inst-2",
    title: "Abu Dhabi sovereign funds hold $1B+ in IBIT",
    description:
      "Abu Dhabi's Mubadala Investment Company and Abu Dhabi Investment Council (ADIC) hold a combined $1 billion+ position in BlackRock's IBIT, representing one of the largest sovereign wealth fund allocations to Bitcoin.",
    sourceUrl: "https://zycrypto.com",
    date: "2025-12-20",
    category: "institutional",
  },
  {
    id: "inst-3",
    title: "Dartmouth endowment takes $10M IBIT position",
    description:
      "Dartmouth College's investment office disclosed a $10 million position in BlackRock's IBIT, joining a growing wave of Ivy League endowments gaining Bitcoin exposure through spot ETFs.",
    sourceUrl: "https://bitcoinist.com",
    date: "2026-01-18",
    category: "institutional",
  },
  {
    id: "inst-4",
    title: "Brown University doubles IBIT holdings to $13M",
    description:
      "Brown University's endowment doubled its iShares Bitcoin Trust position to $13 million in Q2 2025, reflecting growing confidence in Bitcoin as a long-term portfolio diversifier among elite university endowments.",
    sourceUrl: "https://www.nasdaq.com",
    date: "2025-06-30",
    category: "institutional",
  },
  {
    id: "inst-5",
    title: "Emory University holds $52M in Grayscale Bitcoin Mini Trust",
    description:
      "Emory University disclosed a $52 million position in the Grayscale Bitcoin Mini Trust (BTC), one of the largest direct Bitcoin fund allocations by any U.S. university endowment.",
    sourceUrl: "https://www.coindesk.com",
    date: "2025-09-15",
    category: "institutional",
  },

  // Treasuries
  {
    id: "treas-1",
    title: "Strategy holds ~718K BTC — 3.4% of all Bitcoin",
    description:
      "Strategy (formerly MicroStrategy) now holds approximately 718,000 BTC worth over $70 billion, representing roughly 3.4% of all Bitcoin that will ever exist. The company continues its aggressive accumulation under executive chairman Michael Saylor.",
    sourceUrl: "https://www.strategy.com",
    date: "2026-02-24",
    category: "treasuries",
  },
  {
    id: "treas-2",
    title: "Twenty One Capital launches with ~43.5K BTC",
    description:
      "Twenty One Capital (XXI) launched as a publicly traded Bitcoin treasury company backed by Tether and SoftBank, debuting with approximately 43,500 BTC on its balance sheet and a mandate to accumulate more.",
    sourceUrl: "https://finance.yahoo.com",
    date: "2025-12-05",
    category: "treasuries",
  },
  {
    id: "treas-3",
    title: "MetaPlanet holds ~35K BTC, targets 210K by 2027",
    description:
      "Japanese investment firm MetaPlanet has accumulated approximately 35,000 BTC and announced an ambitious target of 210,000 BTC by 2027, positioning itself as Asia's largest corporate Bitcoin holder.",
    sourceUrl: "https://www.coindesk.com",
    date: "2025-12-18",
    category: "treasuries",
  },
  {
    id: "treas-4",
    title: "Strive acquires Semler Scientific, combined ~12.8K BTC",
    description:
      "Vivek Ramaswamy's Strive Asset Management completed its acquisition of Semler Scientific, combining their Bitcoin treasuries to hold approximately 12,800 BTC as a core reserve asset.",
    sourceUrl: "https://www.theblock.co",
    date: "2026-01-30",
    category: "treasuries",
  },
  {
    id: "treas-5",
    title: "American Bitcoin (ABTC) holds ~5.8K BTC on Nasdaq",
    description:
      "American Bitcoin (ABTC), a Nasdaq-listed Bitcoin mining and treasury company, holds approximately 5,800 BTC on its balance sheet with a strategy of holding all mined Bitcoin rather than selling.",
    sourceUrl: "https://fortune.com",
    date: "2025-09-22",
    category: "treasuries",
  },

  // Money (STRC)
  {
    id: "money-1",
    title: "STRC dividend ratchets to 11.5% — highest since launch",
    description:
      "Strategy's perpetual preferred stock STRC has increased its annualized dividend rate to 11.5%, up from the initial 8% at launch. The ratchet mechanism automatically adjusts the yield as Bitcoin holdings grow, creating a self-reinforcing demand loop.",
    sourceUrl: "https://www.strategy.com",
    date: "2026-02-28",
    category: "money",
  },
  {
    id: "money-2",
    title: "STRC raises record $300M in January issuance",
    description:
      "Strategy's STRC preferred stock set a monthly issuance record of approximately $300 million in January 2026, as yield-seeking investors pour capital into the Bitcoin-backed instrument that now offers 11.5% annualized returns.",
    sourceUrl: "https://www.coindesk.com",
    date: "2026-01-31",
    category: "money",
  },
  {
    id: "money-3",
    title: "Strategy announces 'Buck' stablecoin backed by STRC yield",
    description:
      "Strategy has announced plans for Buck, a dollar-pegged stablecoin that passes through yield from STRC preferred shares to holders. The product aims to bring Bitcoin-backed yield to everyday transactions.",
    sourceUrl: "https://fortune.com",
    date: "2026-02-15",
    category: "money",
  },
  {
    id: "money-4",
    title: "STRC surpasses $2B total capital raised",
    description:
      "Total capital raised through Strategy's STRC preferred stock issuance has surpassed $2 billion since its October 2025 launch, with proceeds used to purchase over 21,000 BTC for the company's treasury.",
    sourceUrl: "https://finance.yahoo.com",
    date: "2026-02-20",
    category: "money",
  },

  // ETFs
  {
    id: "etf-1",
    title: "BlackRock's IBIT crosses 765K BTC — largest Bitcoin fund ever",
    description:
      "BlackRock's iShares Bitcoin Trust (IBIT) now holds over 765,000 BTC worth approximately $76 billion, making it the largest Bitcoin investment vehicle in history and surpassing all gold ETFs in net inflows.",
    sourceUrl: "https://www.coindesk.com",
    date: "2026-02-18",
    category: "etfs",
  },
  {
    id: "etf-2",
    title: "US spot Bitcoin ETFs collectively hold 1.27M BTC",
    description:
      "The 12 US spot Bitcoin ETFs now collectively hold approximately 1.27 million BTC, representing over 6% of the total 21 million supply cap, with record inflows continuing into 2026.",
    sourceUrl: "https://finance.yahoo.com",
    date: "2026-02-05",
    category: "etfs",
  },
  {
    id: "etf-3",
    title: "Spot Bitcoin ETFs mark first anniversary with $100B+ AUM",
    description:
      "One year after SEC approval, spot Bitcoin ETFs have amassed over $100 billion in assets under management, making them the most successful ETF launch category in history.",
    sourceUrl: "https://www.bloomberg.com",
    date: "2025-01-10",
    category: "etfs",
  },
  {
    id: "etf-4",
    title: "BlackRock launches European Bitcoin ETP (IB1T)",
    description:
      "BlackRock expands its Bitcoin product lineup to Europe with the iShares Bitcoin ETP (IB1T), targeting institutional investors seeking regulated BTC exposure outside the US market.",
    sourceUrl: "https://www.ft.com",
    date: "2025-09-15",
    category: "etfs",
  },
  {
    id: "etf-5",
    title: "European Bitcoin ETPs see record inflows in Q4 2025",
    description:
      "European-listed Bitcoin exchange-traded products attracted record quarterly inflows exceeding $2 billion in Q4 2025, led by CoinShares, 21Shares, and BlackRock's newly launched IB1T.",
    sourceUrl: "https://www.coindesk.com",
    date: "2025-12-28",
    category: "etfs",
  },

  // Nations
  {
    id: "nation-1",
    title: "El Salvador's Bitcoin profit exceeds $300M",
    description:
      "El Salvador's national Bitcoin portfolio has generated over $300 million in unrealized profits since the country adopted BTC as legal tender in 2021, vindicating President Bukele's controversial strategy.",
    sourceUrl: "https://www.presidencia.gob.sv",
    date: "2025-12-01",
    category: "nations",
  },
  {
    id: "nation-2",
    title: "Bhutan's Druk Holding mines and holds Bitcoin",
    description:
      "Bhutan's sovereign wealth fund, Druk Holding & Investments, has built significant Bitcoin mining operations powered by the country's abundant hydroelectric energy, quietly accumulating BTC as a national reserve asset.",
    sourceUrl: "https://www.dhi.bt",
    date: "2025-05-22",
    category: "nations",
  },
  {
    id: "nation-3",
    title: "Argentina considers Bitcoin legal tender legislation",
    description:
      "Argentina's congress introduced a bill to recognize Bitcoin as legal tender, following El Salvador's lead as the country seeks alternatives amid persistent inflation and currency devaluation.",
    sourceUrl: "https://www.argentina.gob.ar",
    date: "2025-11-28",
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
