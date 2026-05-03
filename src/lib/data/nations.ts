import type { NationStat } from "#/lib/types"

// Nation-state Bitcoin holdings are mostly inferred from on-chain wallet
// clustering (Arkham, bitcointreasuries.net) rather than official disclosures.
// We deliberately exclude China — the widely cited 194K-BTC figure comes from
// the 2019 PlusToken seizure and there is credible reporting that those coins
// were sold via OTC desks; no Chinese government has confirmed any holdings.
export const nationStats: NationStat[] = [
  {
    country: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    status: "Strategic Reserve",
    btcHeld: 207_000,
    highlight: "~207K BTC tracked across DOJ/Marshals wallets; Trump established a Strategic Bitcoin Reserve in March 2025 directing no further sales",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/",
  },
  {
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    status: "Seized (pending restitution)",
    btcHeld: 61_000,
    highlight: "61K BTC seized in the Jian Wen / Zhimin Qian Chinese fraud case; High Court process underway to return funds to victims, not a sovereign reserve",
    sourceUrl: "https://www.reuters.com/world/uk/uk-woman-pleads-guilty-laundering-bitcoin-chinese-fraud-2025-09-29/",
  },
  {
    country: "El Salvador",
    flag: "\u{1F1F8}\u{1F1FB}",
    status: "Sovereign Reserve",
    btcHeld: 6_100,
    highlight: "Legal-tender status was rolled back in Jan 2025 under the IMF deal; Bitcoin Office still adds to the reserve via daily purchases",
    sourceUrl: "https://www.reuters.com/world/americas/el-salvador-congress-approves-bitcoin-law-reform-meet-imf-conditions-2025-01-29/",
  },
  {
    country: "Bhutan",
    flag: "\u{1F1E7}\u{1F1F9}",
    status: "Mining & Reserve",
    btcHeld: 3_954,
    highlight: "Druk Holding mined hydropower BTC since ~2019; ~70% of the peak stack was sold in 2025–2026 to fund the Gelephu Mindfulness City project",
    sourceUrl: "https://www.coindesk.com/markets/2026/04/11/bhutan-has-sold-70-of-its-bitcoin-in-18-months-it-may-have-stopped-btc-mining-too",
  },
  {
    country: "Czech Republic",
    flag: "\u{1F1E8}\u{1F1FF}",
    status: "Central Bank Study",
    highlight: "Czech National Bank approved a study in early 2025 of allocating up to 5% of reserves to Bitcoin — no purchase has been made",
    sourceUrl: "https://www.reuters.com/markets/europe/czech-central-bank-explore-bitcoin-other-asset-classes-governor-says-2025-01-30/",
  },
  {
    country: "Switzerland",
    flag: "\u{1F1E8}\u{1F1ED}",
    status: "Canton Adoption",
    highlight: "Canton of Zug has accepted BTC and ETH for tax payments up to CHF 1.5M since February 2021",
    sourceUrl: "https://www.reuters.com/article/swiss-crypto-tax-idUSKBN2AH1J6/",
  },
  {
    country: "Argentina",
    flag: "\u{1F1E6}\u{1F1F7}",
    status: "Permitted in Contracts",
    highlight: "Milei's December 2023 decree permits BTC in private contracts; CNV runs a VASP registry. Bitcoin is not legal tender",
    sourceUrl: "https://www.reuters.com/world/americas/argentina-says-bitcoin-can-be-used-contracts-milei-pushes-deregulation-2023-12-21/",
  },
]

export const nationsWithHoldings = nationStats.filter((n) => n.btcHeld != null)
export const totalNationBtc = nationStats.reduce((sum, n) => sum + (n.btcHeld ?? 0), 0)

// Aggregate tracker for sovereign holdings.
export const NATION_AGGREGATE_SOURCE = "https://bitcointreasuries.net/governments"
