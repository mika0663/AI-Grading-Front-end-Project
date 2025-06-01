import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LandingBanner() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-indigo-600 dark:text-indigo-400">GradeInsight</span>
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">Turn grades into growth stories</p>
      <Button size="lg" className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
        <Link href="/dashboard">Try the Demo</Link>
      </Button>
    </div>
  )
}
