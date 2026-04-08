import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/institutional")({
  component: InstitutionalRedirect,
})

function InstitutionalRedirect() {
  return <Navigate to="/adoption" />
}
