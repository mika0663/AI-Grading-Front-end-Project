"use client"

import type React from "react"

import { AppBar } from "@/components/layout/app-bar"
import { SideNav } from "@/components/layout/side-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { FirstTimeTour } from "@/components/onboarding/first-time-tour"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showTour, setShowTour] = useState(false)

  useEffect(() => {
    // Check if this is the user's first time
    const isFirstTime = localStorage.getItem("firstTime") !== "false"
    if (isFirstTime) {
      setShowTour(true)
      localStorage.setItem("firstTime", "false")
    }
  }, [])

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col">
        <AppBar />
        <div className="flex flex-1 overflow-hidden">
          <SideNav />
          <main className="flex-1 overflow-auto bg-background p-4">{children}</main>
        </div>
        {showTour && <FirstTimeTour onClose={() => setShowTour(false)} />}
      </div>
    </SidebarProvider>
  )
}
