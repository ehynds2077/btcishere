import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/etfs")({
  component: EtfsRedirect,
})

function EtfsRedirect() {
  return <Navigate to="/adoption" />
}
