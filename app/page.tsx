import { LandingBanner } from "../components/landing/landing-banner"
import { RoleSignIn } from "../components/landing/role-sign-in"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
      <LandingBanner />
      <RoleSignIn />
    </main>
  )
}
