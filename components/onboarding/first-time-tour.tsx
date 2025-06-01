"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, BarChart2, Lightbulb } from "lucide-react"

interface FirstTimeTourProps {
  onClose: () => void
}

export function FirstTimeTour({ onClose }: FirstTimeTourProps) {
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: "Upload Data",
      description: "Start by uploading your grade data. We support CSV, Excel, and Google Sheets.",
      icon: <Upload className="h-12 w-12 text-indigo-600" />,
    },
    {
      title: "Explore Dashboard",
      description: "Visualize grade distributions, track student progress, and identify trends.",
      icon: <BarChart2 className="h-12 w-12 text-indigo-600" />,
    },
    {
      title: "Get AI Insights",
      description: "Our AI analyzes your data to provide actionable insights and recommendations.",
      icon: <Lightbulb className="h-12 w-12 text-indigo-600" />,
    },
  ]

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      onClose()
    }
  }

  const handleSkip = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to GradeInsight</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center p-6">
          {steps[step].icon}
          <h3 className="mt-4 text-xl font-semibold">{steps[step].title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{steps[step].description}</p>

          <div className="flex justify-center mt-6 space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === step ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={handleSkip}>
            Skip
          </Button>
          <Button onClick={handleNext}>{step < steps.length - 1 ? "Next" : "Get Started"}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
