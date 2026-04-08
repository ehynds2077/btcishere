import { Navigate, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/method")({
  component: MethodRedirect,
})

function MethodRedirect() {
  return <Navigate to="/holders" />
}
