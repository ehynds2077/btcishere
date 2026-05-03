import { createFileRoute } from "@tanstack/react-router"
import { AnimateIn } from "#/components/AnimateIn"
import { AdoptionTimeline } from "#/components/charts/AdoptionTimeline"
import { NewsList } from "#/components/NewsList"
import { getNewsByCategory } from "#/lib/news"
import { CATEGORY_LABELS } from "#/lib/constants"
import type { Category } from "#/types/news"

export const Route = createFileRoute("/evidence")({
  component: EvidencePage,
})

const categories: Category[] = ["banks", "institutional", "treasuries", "nations", "etfs", "money"]

function EvidencePage() {
  return (
    <div className="space-y-10">
      <AnimateIn>
        <section className="hero-panel rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="display-kicker">The Record</p>
          <h1 className="display-title text-4xl sm:text-5xl md:text-6xl">
            The full <span className="text-gradient">record</span>
          </h1>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            Major events in institutional Bitcoin adoption, in chronological order, with links to the original sources.
          </p>
        </section>
      </AnimateIn>

      <AnimateIn>
        <section className="space-y-4">
          <p className="display-kicker">Timeline</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How we got here</h2>
          <AdoptionTimeline />
        </section>
      </AnimateIn>

      {categories.map((category) => {
        const items = getNewsByCategory(category)
        if (items.length === 0) return null
        return (
          <AnimateIn key={category}>
            <section className="space-y-4">
              <p className="display-kicker">{category}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{CATEGORY_LABELS[category]}</h2>
              <NewsList items={items} />
            </section>
          </AnimateIn>
        )
      })}
    </div>
  )
}
