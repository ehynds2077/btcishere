import { digitalCreditProducts } from "#/lib/data"

export function DigitalCreditTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-sm border-collapse">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wide text-muted-foreground/70 border-b border-border/40">
            <th className="py-2 pr-4 font-medium">Ticker</th>
            <th className="py-2 pr-4 font-medium">Issuer</th>
            <th className="py-2 pr-4 font-medium">Rate</th>
            <th className="py-2 pr-4 font-medium text-right">Coupon</th>
            <th className="py-2 pr-4 font-medium">Pays</th>
            <th className="py-2 font-medium">Launched</th>
          </tr>
        </thead>
        <tbody>
          {digitalCreditProducts.map((p) => (
            <tr
              key={p.ticker}
              className="border-b border-border/20 last:border-b-0"
            >
              <td className="py-3 pr-4">
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {p.ticker}
                </a>
                <div className="text-[11px] text-muted-foreground/80 mt-0.5">
                  {p.name}
                </div>
              </td>
              <td className="py-3 pr-4 text-muted-foreground">
                {p.issuer}
                <span className="text-muted-foreground/50 ml-1">
                  ({p.issuerTicker})
                </span>
              </td>
              <td className="py-3 pr-4 text-muted-foreground">{p.rateType}</td>
              <td className="py-3 pr-4 text-right tabular-nums text-foreground">
                {p.yieldPct.toFixed(2)}%
              </td>
              <td className="py-3 pr-4 text-muted-foreground">
                {p.frequency}
              </td>
              <td className="py-3 text-muted-foreground whitespace-nowrap">
                {p.launched}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
