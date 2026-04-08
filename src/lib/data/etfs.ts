import type { EtfHolding } from "#/lib/types"

export const usSpotEtfs: EtfHolding[] = [
  { name: "iShares Bitcoin Trust", ticker: "IBIT", issuer: "BlackRock", btcHeld: 765_000, region: "us" },
  { name: "Fidelity Wise Origin", ticker: "FBTC", issuer: "Fidelity", btcHeld: 191_000, region: "us" },
  { name: "Grayscale Bitcoin Trust", ticker: "GBTC", issuer: "Grayscale", btcHeld: 158_000, region: "us" },
  { name: "Grayscale Bitcoin Mini", ticker: "BTC", issuer: "Grayscale", btcHeld: 49_000, region: "us" },
  { name: "Bitwise Bitcoin ETF", ticker: "BITB", issuer: "Bitwise", btcHeld: 38_000, region: "us" },
  { name: "ARK 21Shares Bitcoin", ticker: "ARKB", issuer: "ARK/21Shares", btcHeld: 35_000, region: "us" },
  { name: "VanEck Bitcoin Trust", ticker: "HODL", issuer: "VanEck", btcHeld: 16_000, region: "us" },
  { name: "Invesco Galaxy Bitcoin", ticker: "BTCO", issuer: "Invesco", btcHeld: 6_100, region: "us" },
  { name: "Valkyrie Bitcoin Fund", ticker: "BRRR", issuer: "Valkyrie", btcHeld: 6_000, region: "us" },
  { name: "Franklin Bitcoin ETF", ticker: "EZBC", issuer: "Franklin Templeton", btcHeld: 5_800, region: "us" },
  { name: "WisdomTree Bitcoin", ticker: "BTCW", issuer: "WisdomTree", btcHeld: 1_700, region: "us" },
  { name: "Hashdex Bitcoin ETF", ticker: "DEFI", issuer: "Hashdex", btcHeld: 135, region: "us" },
]

export const internationalEtfs: EtfHolding[] = [
  // Canada
  { name: "Purpose Bitcoin ETF", ticker: "BTCC", issuer: "Purpose Investments", btcHeld: 24_000, region: "canada" },
  { name: "3iQ CoinShares Bitcoin", ticker: "BTCQ", issuer: "3iQ", btcHeld: 3_500, region: "canada" },
  { name: "CI Galaxy Bitcoin ETF", ticker: "BTCX", issuer: "CI Global", btcHeld: 2_800, region: "canada" },
  { name: "Fidelity Advantage BTC", ticker: "FBTC.TO", issuer: "Fidelity Canada", btcHeld: 2_200, region: "canada" },
  { name: "Evolve Bitcoin ETF", ticker: "EBIT", issuer: "Evolve Funds", btcHeld: 1_500, region: "canada" },

  // Europe
  { name: "CoinShares Physical BTC", ticker: "BITC", issuer: "CoinShares", aumUsd: 1_150, region: "europe" },
  { name: "Bitwise Physical BTC", ticker: "BITB.DE", issuer: "Bitwise", aumUsd: 651, region: "europe" },
  { name: "21Shares Bitcoin ETP", ticker: "ABTC.SW", issuer: "21Shares", aumUsd: 550, region: "europe" },
  { name: "VanEck Bitcoin ETN", ticker: "VBTC", issuer: "VanEck", aumUsd: 400, region: "europe" },
  { name: "WisdomTree Physical BTC", ticker: "BTCW.L", issuer: "WisdomTree", aumUsd: 320, region: "europe" },
  { name: "iShares Bitcoin ETP", ticker: "IB1T", issuer: "BlackRock", aumUsd: 280, region: "europe" },

  // Brazil
  { name: "Hashdex Nasdaq Crypto", ticker: "HASH11", issuer: "Hashdex", aumUsd: 500, region: "brazil" },
  { name: "Hashdex Bitcoin ETF", ticker: "BITH11", issuer: "Hashdex", aumUsd: 120, region: "brazil" },

  // APAC
  { name: "Bosera HashKey BTC", ticker: "3008.HK", issuer: "Bosera", aumUsd: 150, region: "apac" },
  { name: "China AMC Bitcoin ETF", ticker: "3042.HK", issuer: "China AMC", aumUsd: 90, region: "apac" },
  { name: "Global X 21Shares BTC", ticker: "EBTC.AU", issuer: "Global X", aumUsd: 80, region: "apac" },
  { name: "Monochrome Bitcoin ETF", ticker: "IBTC.AU", issuer: "Monochrome", aumUsd: 50, region: "apac" },
]

export const allEtfs: EtfHolding[] = [...usSpotEtfs, ...internationalEtfs]

export const totalUsEtfBtc = usSpotEtfs.reduce((sum, e) => sum + (e.btcHeld ?? 0), 0)
export const totalCanadaEtfBtc = internationalEtfs
  .filter((e) => e.region === "canada")
  .reduce((sum, e) => sum + (e.btcHeld ?? 0), 0)
export const totalEtfCount = allEtfs.length

// For region pie chart — approximate BTC equivalents using ~$100K/BTC for AUM-only funds
const BTC_PRICE_APPROX = 100_000
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
