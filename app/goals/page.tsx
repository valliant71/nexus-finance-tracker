'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/nextjs";

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', target: 10000, current: 5000 },
    { id: 2, name: 'Business Expansion', target: 50000, current: 15000 },
    { id: 3, name: 'New Equipment', target: 25000, current: 10000 },
  ])

  const [newGoal, setNewGoal] = useState({ name: '', target: '' })

  const addGoal = () => {
    if (newGoal.name && newGoal.target) {
      setGoals([...goals, { id: goals.length + 1, name: newGoal.name, target: Number(newGoal.target), current: 0 }])
      setNewGoal({ name: '', target: '' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Financial Goals</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <Card key={goal.id}>
              <CardHeader>
                <CardTitle>{goal.name}</CardTitle>
                <CardDescription>Target: ${goal.target.toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={(goal.current / goal.target) * 100} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Add New Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="Goal Name"
                value={newGoal.name}
                onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Target Amount"
                value={newGoal.target}
                onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              />
              <Button onClick={addGoal}>Add Goal</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}