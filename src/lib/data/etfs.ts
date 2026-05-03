import type { EtfHolding } from "#/lib/types"

// US spot ETF holdings figures verified May 2026 against the issuers'
// daily-published holdings pages and aggregate trackers (Farside, CoinGlass,
// SoSoValue). Holdings update daily — link to the issuer page on each row.
export const usSpotEtfs: EtfHolding[] = [
  { name: "iShares Bitcoin Trust", ticker: "IBIT", issuer: "BlackRock", btcHeld: 806_700, region: "us", sourceUrl: "https://www.ishares.com/us/products/333011/ishares-bitcoin-trust-etf" },
  { name: "Fidelity Wise Origin", ticker: "FBTC", issuer: "Fidelity", btcHeld: 191_000, region: "us", sourceUrl: "https://institutional.fidelity.com/app/funds-and-products/etf/summary/FBTC.html" },
  { name: "Grayscale Bitcoin Trust", ticker: "GBTC", issuer: "Grayscale", btcHeld: 158_000, region: "us", sourceUrl: "https://www.grayscale.com/funds/grayscale-bitcoin-trust" },
  { name: "Grayscale Bitcoin Mini", ticker: "BTC", issuer: "Grayscale", btcHeld: 49_000, region: "us", sourceUrl: "https://www.grayscale.com/funds/grayscale-bitcoin-mini-trust" },
  { name: "Bitwise Bitcoin ETF", ticker: "BITB", issuer: "Bitwise", btcHeld: 38_000, region: "us", sourceUrl: "https://bitbetf.com/" },
  { name: "ARK 21Shares Bitcoin", ticker: "ARKB", issuer: "ARK/21Shares", btcHeld: 35_000, region: "us", sourceUrl: "https://ark-funds.com/funds/arkb/" },
  { name: "VanEck Bitcoin Trust", ticker: "HODL", issuer: "VanEck", btcHeld: 16_000, region: "us", sourceUrl: "https://www.vaneck.com/us/en/investments/bitcoin-etf-hodl/" },
  { name: "Invesco Galaxy Bitcoin", ticker: "BTCO", issuer: "Invesco", btcHeld: 6_100, region: "us", sourceUrl: "https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=BTCO" },
  { name: "Valkyrie Bitcoin Fund", ticker: "BRRR", issuer: "Valkyrie", btcHeld: 6_000, region: "us", sourceUrl: "https://coinshares.com/us/products/brrr" },
  { name: "Franklin Bitcoin ETF", ticker: "EZBC", issuer: "Franklin Templeton", btcHeld: 5_800, region: "us", sourceUrl: "https://www.franklintempleton.com/investments/options/exchange-traded-funds/products/40911/SINGLCLASS/franklin-bitcoin-etf/EZBC" },
  { name: "WisdomTree Bitcoin", ticker: "BTCW", issuer: "WisdomTree", btcHeld: 1_700, region: "us", sourceUrl: "https://www.wisdomtree.com/investments/etfs/crypto/btcw" },
  { name: "Hashdex Bitcoin ETF", ticker: "DEFI", issuer: "Hashdex", btcHeld: 135, region: "us", sourceUrl: "https://www.hashdex.com/en-KY/products/defi" },
]

export const internationalEtfs: EtfHolding[] = [
  // Canada — uses btcHeld where the fund publishes BTC, otherwise AUM in $M
  { name: "Purpose Bitcoin ETF", ticker: "BTCC", issuer: "Purpose Investments", btcHeld: 24_000, region: "canada", sourceUrl: "https://www.purposeinvest.com/funds/purpose-bitcoin-etf" },
  { name: "3iQ CoinShares Bitcoin", ticker: "BTCQ", issuer: "3iQ", btcHeld: 3_500, region: "canada", sourceUrl: "https://www.3iq.io/funds/btcq" },
  { name: "CI Galaxy Bitcoin ETF", ticker: "BTCX", issuer: "CI Global", btcHeld: 2_800, region: "canada", sourceUrl: "https://www.ci.com/en/individual-investors/etfs/ci-galaxy-bitcoin-etf" },
  { name: "Fidelity Advantage BTC", ticker: "FBTC.TO", issuer: "Fidelity Canada", btcHeld: 2_200, region: "canada", sourceUrl: "https://www.fidelity.ca/en/products/etfs/fidelity-advantage-bitcoin-etf/" },
  { name: "Evolve Bitcoin ETF", ticker: "EBIT", issuer: "Evolve Funds", btcHeld: 1_500, region: "canada", sourceUrl: "https://evolveetfs.com/product/ebit/" },

  // Europe — AUM in $M
  { name: "CoinShares Physical BTC", ticker: "BITC", issuer: "CoinShares", aumUsd: 1_150, region: "europe", sourceUrl: "https://coinshares.com/etps/bitc" },
  { name: "Bitwise Physical BTC", ticker: "BITB.DE", issuer: "Bitwise", aumUsd: 651, region: "europe", sourceUrl: "https://bitwiseinvestments.eu/en/products/bitwise-physical-bitcoin-etp" },
  { name: "21Shares Bitcoin ETP", ticker: "ABTC.SW", issuer: "21Shares", aumUsd: 550, region: "europe", sourceUrl: "https://www.21shares.com/en-eu/product/abtc" },
  { name: "VanEck Bitcoin ETN", ticker: "VBTC", issuer: "VanEck", aumUsd: 400, region: "europe", sourceUrl: "https://www.vaneck.com/de/en/etn/digital-assets/vaneck-bitcoin-etn-vbtc/" },
  { name: "WisdomTree Physical BTC", ticker: "BTCW.L", issuer: "WisdomTree", aumUsd: 320, region: "europe", sourceUrl: "https://www.wisdomtree.eu/en-gb/products/etps/wisdomtree-physical-bitcoin" },
  { name: "iShares Bitcoin ETP", ticker: "IB1T", issuer: "BlackRock", aumUsd: 280, region: "europe", sourceUrl: "https://www.ishares.com/uk/individual/en/products/337572/ishares-bitcoin-etp" },

  // Brazil
  { name: "Hashdex Nasdaq Crypto", ticker: "HASH11", issuer: "Hashdex", aumUsd: 500, region: "brazil", sourceUrl: "https://www.hashdex.com/en-BR/products/hash11" },
  { name: "Hashdex Bitcoin ETF", ticker: "BITH11", issuer: "Hashdex", aumUsd: 120, region: "brazil", sourceUrl: "https://www.hashdex.com/en-BR/products/bith11" },

  // APAC
  { name: "Bosera HashKey BTC", ticker: "3008.HK", issuer: "Bosera", aumUsd: 150, region: "apac", sourceUrl: "https://www.bosera.com.hk/en/products/etf-listed-funds/3008.html" },
  { name: "China AMC Bitcoin ETF", ticker: "3042.HK", issuer: "China AMC", aumUsd: 90, region: "apac", sourceUrl: "https://www.chinaamc.com.hk/en/Products/ETF/Bitcoin-Ether-ETF" },
  { name: "Global X 21Shares BTC", ticker: "EBTC.AU", issuer: "Global X", aumUsd: 80, region: "apac", sourceUrl: "https://www.globalxetfs.com.au/funds/ebtc/" },
  { name: "Monochrome Bitcoin ETF", ticker: "IBTC.AU", issuer: "Monochrome", aumUsd: 50, region: "apac", sourceUrl: "https://monochrome.au/ibtc/" },
]

export const allEtfs: EtfHolding[] = [...usSpotEtfs, ...internationalEtfs]

export const totalUsEtfBtc = usSpotEtfs.reduce((sum, e) => sum + (e.btcHeld ?? 0), 0)
export const totalCanadaEtfBtc = internationalEtfs
  .filter((e) => e.region === "canada")
  .reduce((sum, e) => sum + (e.btcHeld ?? 0), 0)
export const totalEtfCount = allEtfs.length

// For region pie chart — approximate BTC equivalents using ~$80K/BTC for AUM-only funds
const BTC_PRICE_APPROX = 80_000
function aumToBtc(e: EtfHolding): number {
  return e.btcHeld ?? Math.round((e.aumUsd ?? 0) * 1_000_000 / BTC_PRICE_APPROX)
}

export const etfByRegion = [
  { region: "US", btc: usSpotEtfs.reduce((s, e) => s + aumToBtc(e), 0) },
  { region: "Canada", btc: internationalEtfs.filter((e) => e.region === "canada").reduce((s, e) => s + aumToBtc(e), 0) },
  { region: "Europe", btc: internationalEtfs.filter((e) => e.region === "europe").reduce((s, e) => s + aumToBtc(e), 0) },
  { region: "Brazil", btc: internationalEtfs.filter((e) => e.region === "brazil").reduce((s, e) => s + aumToBtc(e), 0) },
  { region: "APAC", btc: internationalEtfs.filter((e) => e.region === "apac").reduce((s, e) => s + aumToBtc(e), 0) },
]

export const totalAllEtfBtc = etfByRegion.reduce((s, r) => s + r.btc, 0)

// Aggregate ETF flow / holdings tracker.
export const ETF_AGGREGATE_SOURCE = "https://farside.co.uk/btc-etf-flows/"
