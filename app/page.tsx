import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function Home() {
  const { userId } = await auth()
  
  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Business Finance Tracker</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Business Finance Tracker</CardTitle>
            <CardDescription>Manage your business finances with ease</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Sign in to access your personalized dashboard and start tracking your finances.</p>
            <Link href="/sign-in">
              <Button className="mt-4">Get Started</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}