import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Bitcoin } from "lucide-react";
import { GradientBlobs } from "#/components/GradientBlobs";
import { ParticleNetwork } from "#/components/ParticleNetwork";
import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <GradientBlobs />
      <ParticleNetwork />
      <div className="site-shell min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
          <div className="max-w-[1180px] mx-auto px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="no-underline group shrink-0">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl story-card glow-orange flex items-center justify-center">
                    <Bitcoin className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h1 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      BTC is here
                    </h1>
                  </div>
                </div>
              </Link>
              <nav className="flex items-center gap-5 text-sm">
                <Link
                  to="/credit"
                  className="text-muted-foreground hover:text-foreground transition-colors no-underline [&.active]:text-foreground"
                >
                  Digital credit
                </Link>
              </nav>
            </div>
            {/* <nav className="mt-3 -mx-1 px-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex gap-2 min-w-full sm:min-w-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-3 py-1.5 text-sm rounded-full border border-border/70 bg-card/65 text-muted-foreground no-underline transition-colors hover:text-foreground hover:border-primary/45 hover:bg-card/90 [&.active]:text-foreground [&.active]:border-primary/65 [&.active]:bg-primary/12"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav> */}
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="max-w-[1180px] mx-auto px-4 py-8 sm:px-6 sm:py-12">
            <Outlet />
          </div>
        </main>

        <footer className="border-t border-border/70 py-6 text-center text-xs text-muted-foreground/75">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 space-y-1">
            <p>
              An independent record of institutional Bitcoin adoption. Nothing
              here is financial advice.{" "}
              <Link
                to="/holders"
                className="underline hover:text-foreground transition-colors"
              >
                Data notes
              </Link>
              {" · "}
              <Link
                to="/disclaimer"
                className="underline hover:text-foreground transition-colors"
              >
                Disclaimer
              </Link>
              {" · "}
              <Link
                to="/about"
                className="underline hover:text-foreground transition-colors"
              >
                About
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
