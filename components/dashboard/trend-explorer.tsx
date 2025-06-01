"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Sample data for the trend explorer
const assignmentData = [
  { name: "Assignment 1", average: 82, min: 65, max: 95 },
  { name: "Assignment 2", average: 78, min: 60, max: 92 },
  { name: "Assignment 3", average: 85, min: 70, max: 98 },
  { name: "Assignment 4", average: 73, min: 55, max: 90 },
  { name: "Assignment 5", average: 80, min: 62, max: 94 },
  { name: "Assignment 6", average: 84, min: 68, max: 97 },
  { name: "Assignment 7", average: 86, min: 72, max: 99 },
  { name: "Assignment 8", average: 81, min: 64, max: 93 },
]

const studentData = [
  { name: "Week 1", topPerformers: 88, average: 78, atRisk: 62 },
  { name: "Week 2", topPerformers: 90, average: 76, atRisk: 58 },
  { name: "Week 3", topPerformers: 92, average: 80, atRisk: 65 },
  { name: "Week 4", topPerformers: 89, average: 75, atRisk: 60 },
  { name: "Week 5", topPerformers: 91, average: 79, atRisk: 63 },
  { name: "Week 6", topPerformers: 94, average: 82, atRisk: 67 },
  { name: "Week 7", topPerformers: 93, average: 83, atRisk: 70 },
  { name: "Week 8", topPerformers: 95, average: 84, atRisk: 72 },
]

const topicData = [
  { name: "Algebra", score: 85 },
  { name: "Geometry", score: 78 },
  { name: "Statistics", score: 92 },
  { name: "Calculus", score: 70 },
  { name: "Probability", score: 88 },
  { name: "Trigonometry", score: 75 },
]

export function TrendExplorer() {
  const [mounted, setMounted] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateChart(true);
    }, 100);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="assignment">
          <TabsList className="mb-4">
            <TabsTrigger value="assignment">By Assignment</TabsTrigger>
            <TabsTrigger value="student">By Student</TabsTrigger>
            <TabsTrigger value="topic">By Topic</TabsTrigger>
          </TabsList>
          
          <TabsContent value="assignment" className="mt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={assignmentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="average" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="min" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationDelay={300}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="max" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationDelay={600}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="student" className="mt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={studentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="topPerformers" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="average" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationDelay={300}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="atRisk" 
                    stroke="#EF4444" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                    animationDelay={600}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="topic" className="mt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={topicData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    isAnimationActive={animateChart}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
