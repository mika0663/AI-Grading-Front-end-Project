"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { School, GraduationCap, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export function RoleSignIn() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would authenticate the user
    router.push("/dashboard")
  }

  const handleSSOSignIn = () => {
    // In a real app, we would authenticate with SSO
    router.push("/dashboard")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Tabs defaultValue="teacher" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="teacher" className="text-lg py-3">
            <School className="mr-2 h-5 w-5" />
            I&apos;m a Teacher
          </TabsTrigger>
          <TabsTrigger value="student" className="text-lg py-3">
            <GraduationCap className="mr-2 h-5 w-5" />
            I&apos;m a Student
          </TabsTrigger>
        </TabsList>

        <TabsContent value="teacher">
          <Card className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <CardHeader>
              <CardTitle>Teacher Sign In</CardTitle>
              <CardDescription>Access your classroom analytics and student insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start text-lg" onClick={handleSSOSignIn}>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign in with Google
                </Button>
                <Button variant="outline" className="w-full justify-start text-lg" onClick={handleSSOSignIn}>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M11.9999 1.99951C6.47988 1.99951 1.99988 6.47951 1.99988 11.9995C1.99988 17.5195 6.47988 21.9995 11.9999 21.9995C17.5199 21.9995 21.9999 17.5195 21.9999 11.9995C21.9999 6.47951 17.5199 1.99951 11.9999 1.99951ZM16.9999 16.4195C16.8599 16.7195 16.5699 16.8995 16.2599 16.8995C16.1499 16.8995 16.0399 16.8795 15.9399 16.8195C15.0299 16.3495 13.9999 16.0995 12.9999 16.0995C11.9999 16.0995 10.9699 16.3495 10.0599 16.8195C9.65988 17.0195 9.17988 16.8795 8.97988 16.4795C8.77988 16.0795 8.91988 15.5995 9.31988 15.3995C10.4599 14.8095 11.7299 14.4995 12.9999 14.4995C14.2699 14.4995 15.5399 14.8095 16.6799 15.3995C17.0799 15.5995 17.2199 16.0795 16.9999 16.4195ZM8.99988 10.9995C8.99988 10.4495 9.44988 9.99951 9.99988 9.99951C10.5499 9.99951 10.9999 10.4495 10.9999 10.9995C10.9999 11.5495 10.5499 11.9995 9.99988 11.9995C9.44988 11.9995 8.99988 11.5495 8.99988 10.9995ZM14.9999 9.99951C14.4499 9.99951 13.9999 10.4495 13.9999 10.9995C13.9999 11.5495 14.4499 11.9995 14.9999 11.9995C15.5499 11.9995 15.9999 11.5495 15.9999 10.9995C15.9999 10.4495 15.5499 9.99951 14.9999 9.99951Z"
                      fill="#0078D4"
                    />
                  </svg>
                  Sign in with Microsoft 365
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      placeholder="name@school.edu"
                      type="email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="h-auto p-0 text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="link" className="text-sm">
                Don&apos;t have an account? Sign up
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="student">
          <Card className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <CardHeader>
              <CardTitle>Student Sign In</CardTitle>
              <CardDescription>Access your personalized learning insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start text-lg" onClick={handleSSOSignIn}>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign in with Google
                </Button>
                <Button variant="outline" className="w-full justify-start text-lg" onClick={handleSSOSignIn}>
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M11.9999 1.99951C6.47988 1.99951 1.99988 6.47951 1.99988 11.9995C1.99988 17.5195 6.47988 21.9995 11.9999 21.9995C17.5199 21.9995 21.9999 17.5195 21.9999 11.9995C21.9999 6.47951 17.5199 1.99951 11.9999 1.99951ZM16.9999 16.4195C16.8599 16.7195 16.5699 16.8995 16.2599 16.8995C16.1499 16.8995 16.0399 16.8795 15.9399 16.8195C15.0299 16.3495 13.9999 16.0995 12.9999 16.0995C11.9999 16.0995 10.9699 16.3495 10.0599 16.8195C9.65988 17.0195 9.17988 16.8795 8.97988 16.4795C8.77988 16.0795 8.91988 15.5995 9.31988 15.3995C10.4599 14.8095 11.7299 14.4995 12.9999 14.4995C14.2699 14.4995 15.5399 14.8095 16.6799 15.3995C17.0799 15.5995 17.2199 16.0795 16.9999 16.4195ZM8.99988 10.9995C8.99988 10.4495 9.44988 9.99951 9.99988 9.99951C10.5499 9.99951 10.9999 10.4495 10.9999 10.9995C10.9999 11.5495 10.5499 11.9995 9.99988 11.9995C9.44988 11.9995 8.99988 11.5495 8.99988 10.9995ZM14.9999 9.99951C14.4499 9.99951 13.9999 10.4495 13.9999 10.9995C13.9999 11.5495 14.4499 11.9995 14.9999 11.9995C15.5499 11.9995 15.9999 11.5495 15.9999 10.9995C15.9999 10.4495 15.5499 9.99951 14.9999 9.99951Z"
                      fill="#0078D4"
                    />
                  </svg>
                  Sign in with Microsoft 365
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="student-email"
                      placeholder="name@school.edu"
                      type="email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="student-password">Password</Label>
                    <Button variant="link" className="h-auto p-0 text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="student-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="link" className="text-sm">
                Don&apos;t have an account? Sign up
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
