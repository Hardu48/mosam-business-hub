
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminExpenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 'EXP-001', date: '2023-05-10', category: 'Materials', description: 'Cement Purchase', amount: 12000, approvedBy: 'John Manager', status: 'Approved' },
    { id: 'EXP-002', date: '2023-05-12', category: 'Transportation', description: 'Site Visit - Worker Transport', amount: 2500, approvedBy: 'John Manager', status: 'Approved' },
    { id: 'EXP-003', date: '2023-05-15', category: 'Tools', description: 'New Power Tools', amount: 8500, approvedBy: 'Pending', status: 'Pending' },
    { id: 'EXP-004', date: '2023-05-18', category: 'Utilities', description: 'Workshop Electricity Bill', amount: 3200, approvedBy: 'John Manager', status: 'Approved' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Expense Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Expense Management</h1>
          <button className="btn">Add Expense</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <p className="text-2xl">₹26,200</p>
            </div>
          </div>
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Pending Approval</h5>
              <p className="text-2xl">₹8,500</p>
            </div>
          </div>
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">This Month</h5>
              <p className="text-2xl">₹26,200</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount (₹)</TableHead>
                  <TableHead>Approved By</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map(expense => (
                  <TableRow key={expense.id}>
                    <TableCell>{expense.id}</TableCell>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>₹{expense.amount.toLocaleString()}</TableCell>
                    <TableCell>{expense.approvedBy}</TableCell>
                    <TableCell>
                      <span className={`badge ${expense.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
                        {expense.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button className="btn-sm">View</button>
                        {expense.status === 'Pending' && (
                          <button className="btn-sm">Approve</button>
                        )}
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

export default AdminExpenses;
