// src/routes/signup.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: Signup,
});

function Signup() {
  return <h3>Signup Page</h3>;
}
