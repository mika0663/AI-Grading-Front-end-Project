"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lightbulb, RefreshCw, ThumbsUp } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

interface InsightCardProps {
  title: string
  confidence: "high" | "medium" | "low"
  children: React.ReactNode
}

function InsightCard({ title, confidence, children }: InsightCardProps) {
  const [expanded, setExpanded] = useState(false)

  const confidenceColor = {
    high: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    medium: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    low: "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-indigo-100 p-1.5 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{title}</p>
              <Badge variant="outline" className={confidenceColor[confidence]}>
                {confidence === "high"
                  ? "High confidence"
                  : confidence === "medium"
                    ? "Medium confidence"
                    : "Low confidence"}
              </Badge>
            </div>

            {expanded ? (
              <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {children}
                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline" className="h-8">
                    <ThumbsUp className="mr-1 h-3 w-3" /> Helpful
                  </Button>
                  <Button size="sm" variant="outline" className="h-8" onClick={() => setExpanded(false)}>
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                variant="link"
                className="h-auto p-0 text-indigo-600 dark:text-indigo-400"
                onClick={() => setExpanded(true)}
              >
                Explain
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function AIInsightsPanel() {
  const [loading, setLoading] = useState(false)

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-indigo-600" />
          AI Insights
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleRefresh} disabled={loading}>
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          <span className="sr-only">Refresh insights</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="insights">
              <AccordionTrigger>View AI Insights</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <InsightCard title="Assignment 4 had the largest negative deviation (-12%)" confidence="high">
                    <p>
                      Assignment 4 (Advanced Equations) showed a significant drop in average scores compared to other
                      assignments.
                    </p>
                    <p className="mt-2">
                      <strong>Possible causes:</strong>
                    </p>
                    <ul className="list-disc pl-5">
                      <li>Topic gap in curriculum</li>
                      <li>Insufficient practice problems</li>
                      <li>Assignment difficulty mismatch</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Recommended action:</strong> Review teaching materials for this topic and consider
                      providing additional resources.
                    </p>
                  </InsightCard>

                  <InsightCard title="Students who submitted late averaged 9% lower" confidence="medium">
                    <p>
                      Analysis shows a strong correlation between late submissions and lower grades across all
                      assignments.
                    </p>
                    <p className="mt-2">
                      <strong>Affected students:</strong> 12 students (17% of class)
                    </p>
                    <p className="mt-2">
                      <strong>Recommended action:</strong> Consider implementing early submission incentives or reaching
                      out to consistently late students to identify underlying issues.
                    </p>
                  </InsightCard>

                  <InsightCard title="5 students show consistent improvement trend" confidence="high">
                    <p>These students have shown steady grade improvements over the last 4 assignments.</p>
                    <p className="mt-2">
                      <strong>Average improvement:</strong> +3.5% per assignment
                    </p>
                    <p className="mt-2">
                      <strong>Recommended action:</strong> Provide positive feedback and consider more challenging
                      extension activities for these students.
                    </p>
                  </InsightCard>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="hidden space-y-4 lg:block">
          <InsightCard title="Assignment 4 had the largest negative deviation (-12%)" confidence="high">
            <p>
              Assignment 4 (Advanced Equations) showed a significant drop in average scores compared to other
              assignments.
            </p>
            <p className="mt-2">
              <strong>Possible causes:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>Topic gap in curriculum</li>
              <li>Insufficient practice problems</li>
              <li>Assignment difficulty mismatch</li>
            </ul>
            <p className="mt-2">
              <strong>Recommended action:</strong> Review teaching materials for this topic and consider providing
              additional resources.
            </p>
          </InsightCard>

          <InsightCard title="Students who submitted late averaged 9% lower" confidence="medium">
            <p>Analysis shows a strong correlation between late submissions and lower grades across all assignments.</p>
            <p className="mt-2">
              <strong>Affected students:</strong> 12 students (17% of class)
            </p>
            <p className="mt-2">
              <strong>Recommended action:</strong> Consider implementing early submission incentives or reaching out to
              consistently late students to identify underlying issues.
            </p>
          </InsightCard>

          <InsightCard title="5 students show consistent improvement trend" confidence="high">
            <p>These students have shown steady grade improvements over the last 4 assignments.</p>
            <p className="mt-2">
              <strong>Average improvement:</strong> +3.5% per assignment
            </p>
            <p className="mt-2">
              <strong>Recommended action:</strong> Provide positive feedback and consider more challenging extension
              activities for these students.
            </p>
          </InsightCard>
        </div>
      </CardContent>
    </Card>
  )
}
