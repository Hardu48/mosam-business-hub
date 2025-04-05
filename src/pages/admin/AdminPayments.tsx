
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminPayments = () => {
  const [payments, setPayments] = useState([
    { id: 'PAY-001', date: '2023-05-15', client: 'Acme Corporation', amount: 25000, method: 'Bank Transfer', status: 'Completed', invoice: 'INV-2023-001' },
    { id: 'PAY-002', date: '2023-05-18', client: 'Tech Solutions Inc', amount: 18500, method: 'Credit Card', status: 'Completed', invoice: 'INV-2023-002' },
    { id: 'PAY-003', date: '2023-05-20', client: 'Global Enterprises', amount: 32000, method: 'Razorpay', status: 'Pending', invoice: 'INV-2023-003' },
    { id: 'PAY-004', date: '2023-05-22', client: 'Local Business', amount: 8500, method: 'Cash', status: 'Completed', invoice: 'INV-2023-004' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Payment Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Payment Management</h1>
          <div className="space-x-2">
            <button className="btn">Record Payment</button>
            <button className="btn">Generate Invoice</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Received</h5>
              <p className="text-2xl">₹84,000</p>
            </div>
          </div>
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Pending</h5>
              <p className="text-2xl">₹32,000</p>
            </div>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">This Month</h5>
              <p className="text-2xl">₹52,000</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Amount (₹)</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map(payment => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.id}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.client}</TableCell>
                    <TableCell>₹{payment.amount.toLocaleString()}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>
                      <span className={`badge ${payment.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                        {payment.status}
                      </span>
                    </TableCell>
                    <TableCell>{payment.invoice}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button className="btn-sm">View</button>
                        <button className="btn-sm">Receipt</button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminPayments;
