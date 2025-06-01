import { KPIStrip } from "@/components/dashboard/kpi-strip"
import { GradeDistribution } from "@/components/dashboard/grade-distribution"
import { AIInsightsPanel } from "@/components/dashboard/ai-insights-panel"
import { TrendExplorer } from "@/components/dashboard/trend-explorer"


export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <KPIStrip />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <GradeDistribution />
          <TrendExplorer />
        </div>
        <div className="lg:col-span-1">
          <AIInsightsPanel />
        </div>
      </div>
    </div>
  )
}
