import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/money")({
  component: MoneyRedirect,
})

function MoneyRedirect() {
  return <Navigate to="/adoption" />
}
