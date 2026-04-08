import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { productStack } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"
import { Badge } from "#/components/ui/badge"

const widths = ["w-full", "w-[92%]", "w-[84%]", "w-[76%]"]

export function ProductStack() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          The product stack
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-2 py-4">
          {productStack.map((layer, i) => (
            <div key={layer.name} className="flex flex-col items-center w-full">
              {i > 0 && (
                <ArrowDown className="h-4 w-4 text-muted-foreground my-1" />
              )}
              <motion.div
                className={`${widths[i]} rounded-lg border border-border bg-card p-4 text-center`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{layer.name}</span>
                  <Badge
                    variant={layer.status === "live" ? "default" : "secondary"}
                    className="text-[10px] px-1.5 py-0"
                  >
                    {layer.status === "live" ? "Live" : "Coming Soon"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {layer.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
