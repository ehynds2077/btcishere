import type { NationStat } from "#/lib/types"

export const nationStats: NationStat[] = [
  { country: "United States", flag: "\u{1F1FA}\u{1F1F8}", status: "Strategic Reserve", btcHeld: 207_000, highlight: "207K BTC seized holdings, proposed Strategic Bitcoin Reserve" },
  { country: "China", flag: "\u{1F1E8}\u{1F1F3}", status: "Seized Holdings", btcHeld: 194_000, highlight: "194K BTC from enforcement seizures" },
  { country: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", status: "Seized Holdings", btcHeld: 61_000, highlight: "61K BTC from law enforcement operations" },
  { country: "Bhutan", flag: "\u{1F1E7}\u{1F1F9}", status: "Mining & Reserve", btcHeld: 13_000, highlight: "State-run hydroelectric mining since 2019" },
  { country: "El Salvador", flag: "\u{1F1F8}\u{1F1FB}", status: "Legal Tender", btcHeld: 6_100, highlight: "First nation to adopt BTC as legal tender" },
  { country: "Czech Republic", flag: "\u{1F1E8}\u{1F1FF}", status: "Central Bank Study", highlight: "Central bank exploring BTC reserve allocation" },
  { country: "Switzerland", flag: "\u{1F1E8}\u{1F1ED}", status: "Canton Adoption", highlight: "Canton of Zug accepts BTC for taxes" },
  { country: "Argentina", flag: "\u{1F1E6}\u{1F1F7}", status: "Embracing Adoption", highlight: "Pro-Bitcoin regulatory framework" },
]

export const nationsWithHoldings = nationStats.filter((n) => n.btcHeld != null)
export const totalNationBtc = nationStats.reduce((sum, n) => sum + (n.btcHeld ?? 0), 0)
