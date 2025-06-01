"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function AppBar() {
  const [mounted, setMounted] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  // Handle keyboard shortcut for search
  useEffect(() => {
    setMounted(true)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !showSearch) {
        e.preventDefault()
        setShowSearch(true)
      } else if (e.key === "Escape" && showSearch) {
        setShowSearch(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showSearch])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">GradeInsight</span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        {showSearch ? (
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search..." className="w-full pl-9" autoFocus onBlur={() => setShowSearch(false)} />
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-2"
            onClick={() => setShowSearch(true)}
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
            <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
              /
            </kbd>
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <span>Math 101</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Switch Course</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Math 101</DropdownMenuItem>
            <DropdownMenuItem>Physics 202</DropdownMenuItem>
            <DropdownMenuItem>Computer Science 301</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
            3
          </Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
