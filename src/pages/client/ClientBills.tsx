
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const ClientBills: React.FC = () => {
  // Sample bills data
  const bills = [
    { id: 'B4501', date: '2025-03-15', description: 'Materials for Building A', amount: '$850', dueDate: '2025-04-15', status: 'Pending' },
    { id: 'B4489', date: '2025-03-01', description: 'Office Renovations', amount: '$600', dueDate: '2025-04-01', status: 'Overdue' },
    { id: 'B4472', date: '2025-02-15', description: 'Electrical Services', amount: '$420', dueDate: '2025-03-15', status: 'Paid', paidDate: '2025-03-10' },
    { id: 'B4465', date: '2025-02-01', description: 'Plumbing Work', amount: '$350', dueDate: '2025-03-01', status: 'Paid', paidDate: '2025-02-28' },
    { id: 'B4451', date: '2025-01-15', description: 'Construction Services', amount: '$1,200', dueDate: '2025-02-15', status: 'Paid', paidDate: '2025-02-12' },
  ];

  const paymentHistory = [
    { id: 'P1001', date: '2025-03-10', amount: '$420', method: 'Credit Card', billId: 'B4472' },
    { id: 'P1002', date: '2025-02-28', amount: '$350', method: 'Bank Transfer', billId: 'B4465' },
    { id: 'P1003', date: '2025-02-12', amount: '$1,200', method: 'Credit Card', billId: 'B4451' },
  ];

  return (
    <DashboardLayout allowedRoles={['client']} pageTitle="Billing Management">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Billing Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Outstanding Bills</p>
                <p className="text-3xl font-bold text-red-500">$1,450</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Paid This Month</p>
                <p className="text-3xl font-bold text-green-500">$420</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Upcoming Due</p>
                <p className="text-3xl font-bold text-yellow-500">$850</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Outstanding Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bill #</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bills.filter(bill => bill.status !== 'Paid').map((bill) => (
                  <TableRow key={bill.id}>
                    <TableCell>{bill.id}</TableCell>
                    <TableCell>{bill.date}</TableCell>
                    <TableCell>{bill.description}</TableCell>
                    <TableCell>{bill.amount}</TableCell>
                    <TableCell>{bill.dueDate}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        bill.status === 'Overdue' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {bill.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm">Pay Now</Button>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Bill Reference</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.id}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>{payment.billId}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Receipt</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Credit Card •••• 4567</p>
                    <p className="text-sm text-gray-500">Expires 06/2028</p>
                  </div>
                  <div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Default</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Bank Account •••• 7890</p>
                    <p className="text-sm text-gray-500">Checking Account</p>
                  </div>
                  <div>
                    <Button size="sm" variant="outline">Make Default</Button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <Button className="w-full">Add New Payment Method</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClientBills;
