import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  { id: 1, description: "Client Payment", amount: 1500, type: "Income" },
  { id: 2, description: "Office Supplies", amount: -250, type: "Expense" },
  { id: 3, description: "Software Subscription", amount: -99, type: "Expense" },
  { id: 4, description: "Consulting Fee", amount: 2000, type: "Income" },
  { id: 5, description: "Utility Bill", amount: -150, type: "Expense" },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
                <TableCell>{transaction.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}