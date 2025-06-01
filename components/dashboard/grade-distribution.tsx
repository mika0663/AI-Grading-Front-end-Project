"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, BarChart2 } from "lucide-react"
import { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BoxPlot,
  ComposedChart,
} from "recharts"

// Sample data for the grade distribution
const gradeDistributionData = [
  { range: "0-10", count: 0, fill: "#EF4444" },
  { range: "11-20", count: 1, fill: "#EF4444" },
  { range: "21-30", count: 2, fill: "#F59E0B" },
  { range: "31-40", count: 3, fill: "#F59E0B" },
  { range: "41-50", count: 5, fill: "#F59E0B" },
  { range: "51-60", count: 8, fill: "#10B981" },
  { range: "61-70", count: 12, fill: "#10B981" },
  { range: "71-80", count: 18, fill: "#10B981" },
  { range: "81-90", count: 15, fill: "#10B981" },
  { range: "91-100", count: 10, fill: "#10B981" },
]

// Sample data for the box plot
const boxPlotData = [
  {
    name: "Grade Distribution",
    min: 15,
    q1: 55,
    median: 75,
    q3: 85,
    max: 98,
    fill: "#4F46E5",
  },
]

export function GradeDistribution() {
  const [mounted, setMounted] = useState(false)
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateChart(true)
    }, 100)
  }, [])

  if (!mounted) return null

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Grade Distribution</CardTitle>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="histogram">
            <TabsList>
              <TabsTrigger value="histogram">
                <BarChart2 className="mr-2 h-4 w-4" />
                Histogram
              </TabsTrigger>
              <TabsTrigger value="boxplot">Box Plot</TabsTrigger>
            </TabsList>
            <TabsContent value="histogram" className="mt-0">
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download PNG</span>
              </Button>
            </TabsContent>
            <TabsContent value="boxplot" className="mt-0">
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download PNG</span>
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="histogram">
          <TabsContent value="histogram" className="mt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gradeDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="range"
                    label={{
                      value: "Grade Range (%)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Number of Students",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value} students`, "Count"]}
                    labelFormatter={(label) => `Grade Range: ${label}%`}
                  />
                  <Bar
                    dataKey="count"
                    fill="#4F46E5"
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              Click on any bar to see students within that grade range
            </div>
          </TabsContent>
          <TabsContent value="boxplot" className="mt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  layout="vertical"
                  data={boxPlotData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    label={{
                      value: "Grade (%)",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis type="category" dataKey="name" tick={false} />
                  <Tooltip formatter={(value) => [`${value}%`, "Value"]} labelFormatter={() => "Grade Statistics"} />
                  <Legend
                    payload={[
                      { value: "Min", type: "line", color: "#4F46E5" },
                      { value: "Q1", type: "line", color: "#4F46E5" },
                      { value: "Median", type: "line", color: "#4F46E5" },
                      { value: "Q3", type: "line", color: "#4F46E5" },
                      { value: "Max", type: "line", color: "#4F46E5" },
                    ]}
                  />
                  <BoxPlot
                    dataKey="median"
                    fill="#4F46E5"
                    stroke="#4F46E5"
                    minValue="min"
                    q1Value="q1"
                    medianValue="median"
                    q3Value="q3"
                    maxValue="max"
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              Box plot shows the distribution of grades across all students
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
