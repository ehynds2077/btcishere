import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/banks")({
  component: BanksRedirect,
})

function BanksRedirect() {
  return <Navigate to="/adoption" />
}
