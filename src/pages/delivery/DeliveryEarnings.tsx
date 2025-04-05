
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const DeliveryEarnings: React.FC = () => {
  // Sample earnings data
  const weeklyEarnings = [
    { week: 'Week 1 (Apr 1-7)', deliveries: 14, distance: '165 km', earnings: '$245', fuel: '$42', net: '$203' },
    { week: 'Week 2 (Apr 8-14)', deliveries: 12, distance: '145 km', earnings: '$220', fuel: '$35', net: '$185' },
    { week: 'Week 3 (Apr 15-21)', deliveries: 16, distance: '180 km', earnings: '$280', fuel: '$48', net: '$232' },
    { week: 'Week 4 (Apr 22-28)', deliveries: 10, distance: '120 km', earnings: '$190', fuel: '$30', net: '$160' },
  ];

  const monthlyEarnings = {
    currentMonth: 'April 2025',
    totalDeliveries: 52,
    totalDistance: '610 km',
    grossEarnings: '$935',
    fuelExpenses: '$155',
    netEarnings: '$780',
  };

  return (
    <DashboardLayout allowedRoles={['delivery']} pageTitle="Earnings">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">My Earnings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Total Deliveries This Month</p>
                <p className="text-3xl font-bold">{monthlyEarnings.totalDeliveries}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Total Distance This Month</p>
                <p className="text-3xl font-bold">{monthlyEarnings.totalDistance}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Net Earnings This Month</p>
                <p className="text-3xl font-bold text-green-600">{monthlyEarnings.netEarnings}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Summary - {monthlyEarnings.currentMonth}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Gross Earnings</span>
                  <span className="font-medium">{monthlyEarnings.grossEarnings}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Fuel Expenses</span>
                  <span className="font-medium text-red-500">-{monthlyEarnings.fuelExpenses}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-bold">Net Earnings</span>
                  <span className="font-bold text-green-600">{monthlyEarnings.netEarnings}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Last Payment</span>
                  <span className="font-medium">$650 (March 31, 2025)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Next Payment</span>
                  <span className="font-medium">April 30, 2025</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-bold">Current Balance</span>
                  <span className="font-bold text-green-600">{monthlyEarnings.netEarnings}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Weekly Earnings Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Deliveries</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Gross Earnings</TableHead>
                  <TableHead>Fuel Expenses</TableHead>
                  <TableHead>Net Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklyEarnings.map((week) => (
                  <TableRow key={week.week}>
                    <TableCell>{week.week}</TableCell>
                    <TableCell>{week.deliveries}</TableCell>
                    <TableCell>{week.distance}</TableCell>
                    <TableCell>{week.earnings}</TableCell>
                    <TableCell className="text-red-500">{week.fuel}</TableCell>
                    <TableCell className="font-medium">{week.net}</TableCell>
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

export default DeliveryEarnings;
