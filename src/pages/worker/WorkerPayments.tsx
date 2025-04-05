
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const WorkerPayments: React.FC = () => {
  // Sample payment data
  const payments = [
    { id: 'PAY1001', period: 'March 2025', hours: 168, rate: '$15/hr', grossPay: '$2,520', deductions: '$420', netPay: '$2,100', status: 'Paid', date: '2025-03-31' },
    { id: 'PAY1002', period: 'February 2025', hours: 160, rate: '$15/hr', grossPay: '$2,400', deductions: '$400', netPay: '$2,000', status: 'Paid', date: '2025-02-28' },
    { id: 'PAY1003', period: 'January 2025', hours: 176, rate: '$15/hr', grossPay: '$2,640', deductions: '$440', netPay: '$2,200', status: 'Paid', date: '2025-01-31' },
  ];

  const currentMonth = {
    period: 'April 2025',
    currentHours: 32,
    projectedHours: 168,
    hourlyRate: '$15/hr',
    projectedPay: '$2,520',
    projectedDeductions: '$420',
    projectedNetPay: '$2,100',
    paymentDate: '2025-04-30'
  };

  return (
    <DashboardLayout allowedRoles={['worker']} pageTitle="Payments">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Payment Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Month - {currentMonth.period}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Hours Logged So Far</span>
                  <span className="font-medium">{currentMonth.currentHours} hrs</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Projected Hours</span>
                  <span className="font-medium">{currentMonth.projectedHours} hrs</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Hourly Rate</span>
                  <span className="font-medium">{currentMonth.hourlyRate}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Projected Gross Pay</span>
                  <span className="font-medium">{currentMonth.projectedPay}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Projected Deductions</span>
                  <span className="font-medium">-{currentMonth.projectedDeductions}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-bold">Projected Net Pay</span>
                  <span className="font-bold text-green-600">{currentMonth.projectedNetPay}</span>
                </div>
                <div className="pt-2 border-t">
                  <span className="text-sm text-gray-500">Next Payment Date: {currentMonth.paymentDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Year-to-Date Earnings</p>
                  <p className="text-2xl font-bold">$6,300</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Avg. Monthly Earnings</p>
                  <p className="text-2xl font-bold">$2,100</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Hours (YTD)</p>
                  <p className="text-2xl font-bold">536 hrs</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Deductions (YTD)</p>
                  <p className="text-2xl font-bold">$1,260</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.id}</TableCell>
                    <TableCell>{payment.period}</TableCell>
                    <TableCell>{payment.hours} hrs</TableCell>
                    <TableCell>{payment.rate}</TableCell>
                    <TableCell>{payment.grossPay}</TableCell>
                    <TableCell>-{payment.deductions}</TableCell>
                    <TableCell className="font-medium">{payment.netPay}</TableCell>
                    <TableCell>
                      <span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </TableCell>
                    <TableCell>{payment.date}</TableCell>
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

export default WorkerPayments;
