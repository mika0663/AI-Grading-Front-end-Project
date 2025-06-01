"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUpRight, HelpCircle, TrendingUp } from "lucide-react"
import { useState } from "react"
import { LineChart, Line, ResponsiveContainer } from "recharts"

const sparklineData = [
  { value: 78 },
  { value: 81 },
  { value: 80 },
  { value: 83 },
  { value: 85 },
  { value: 82 },
  { value: 83 },
]

interface KPICardProps {
  title: string
  value: string
  description?: string
  trend?: number
  showSparkline?: boolean
  onClick?: () => void
  tooltipContent?: string
}

function KPICard({ title, value, description, trend, showSparkline = false, onClick, tooltipContent }: KPICardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 ${
        onClick ? "cursor-pointer hover:shadow-md" : ""
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{value}</p>
              {tooltipContent && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{tooltipContent}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
          </div>
          {trend !== undefined && (
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                trend >= 0
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                  : "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
              }`}
            >
              {trend >= 0 ? "+" : ""}
              {trend}%
              <TrendingUp className="h-3 w-3" />
            </div>
          )}
        </div>

        {showSparkline && isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-12 transition-opacity duration-300">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {onClick && (
          <ArrowUpRight className="absolute bottom-2 right-2 h-4 w-4 text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </CardContent>
    </Card>
  )
}

export function KPIStrip() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Performance at a Glance</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Average Grade" value="83%" showSparkline={true} />
        <KPICard title="Pass Rate" value="92%" trend={5} tooltipContent="5% increase compared to previous term" />
        <KPICard
          title="At-Risk Students"
          value="7 students"
          onClick={() => console.log("Navigate to at-risk students")}
        />
        <KPICard
          title="Grading Bias Score"
          value="0.08"
          tooltipContent="A measure of potential grading bias. Lower scores indicate more consistent and fair grading practices."
        />
      </div>
    </div>
  )
}
