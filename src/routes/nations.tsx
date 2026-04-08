import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/nations")({
  component: NationsRedirect,
})

function NationsRedirect() {
  return <Navigate to="/holders" />
}
