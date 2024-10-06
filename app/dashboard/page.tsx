import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from '@/components/Overview'
import { RecentTransactions } from '@/components/RecentTransactions'
import { AccountSummary } from '@/components/AccountSummary'
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Business Finance Tracker</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/goals">
              <Button variant="ghost">Goals</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AccountSummary />
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,560.00</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,310.00</div>
              <p className="text-xs text-muted-foreground">+4.5% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Overview />
        </div>
        <div className="mt-6">
          <RecentTransactions />
        </div>
      </main>
    </div>
  )
}