import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/treasuries")({
  component: TreasuriesRedirect,
})

function TreasuriesRedirect() {
  return <Navigate to="/holders" />
}
