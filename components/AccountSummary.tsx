'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AccountSummary() {
  const [balance, setBalance] = useState(10000)
  const [amount, setAmount] = useState('')

  const handleTransaction = (type: 'deposit' | 'withdraw') => {
    const value = parseFloat(amount)
    if (isNaN(value) || value <= 0) return

    if (type === 'deposit') {
      setBalance(balance + value)
    } else if (type === 'withdraw' && value <= balance) {
      setBalance(balance - value)
    }
    setAmount('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Balance</CardTitle>
        <CardDescription>Your current business account balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">${balance.toFixed(2)}</div>
        <div className="space-y-2">
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex space-x-2">
            <Button onClick={() => handleTransaction('deposit')} className="flex-1">Deposit</Button>
            <Button onClick={() => handleTransaction('withdraw')} className="flex-1" variant="outline">Withdraw</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}