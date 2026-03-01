import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { Bitcoin } from "lucide-react"
import "../styles.css"

export const Route = createRootRoute({
  component: RootComponent,
})

const navLinks = [
  { to: "/", label: "Dashboard" },
  { to: "/banks", label: "Banks" },
  { to: "/institutional", label: "Institutional" },
  { to: "/treasuries", label: "Treasuries" },
  { to: "/nations", label: "Nations" },
] as const

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border border-t-2 border-t-primary bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Bitcoin className="h-6 w-6 text-primary" />
            <span className="font-bold text-foreground text-lg">
              BTC Tracker
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 text-sm font-medium rounded-md no-underline text-muted-foreground transition-colors hover:text-foreground hover:bg-accent [&.active]:text-foreground [&.active]:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
