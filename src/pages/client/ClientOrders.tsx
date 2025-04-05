
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const ClientOrders: React.FC = () => {
  // Sample orders data
  const orders = [
    { id: 'O8901', date: '2025-04-05', items: 'Construction Materials', qty: 12, total: '$850', status: 'Processing' },
    { id: 'O8897', date: '2025-04-04', items: 'Office Supplies', qty: 8, total: '$320', status: 'Shipping' },
    { id: 'O8879', date: '2025-03-28', items: 'Electrical Equipment', qty: 3, total: '$1,200', status: 'Delivered' },
    { id: 'O8865', date: '2025-03-22', items: 'Plumbing Materials', qty: 15, total: '$750', status: 'Delivered' },
    { id: 'O8850', date: '2025-03-15', items: 'Hardware Tools', qty: 5, total: '$580', status: 'Delivered' },
  ];

  return (
    <DashboardLayout allowedRoles={['client']} pageTitle="Order Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Order Management</h1>
          <Button>Place New Order</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">All Orders</p>
                <p className="text-3xl font-bold">5</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Processing</p>
                <p className="text-3xl font-bold text-orange-500">1</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Shipping</p>
                <p className="text-3xl font-bold text-blue-500">1</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Delivered</p>
                <p className="text-3xl font-bold text-green-500">3</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All Orders</Button>
                <Button variant="outline" size="sm">Processing</Button>
                <Button variant="outline" size="sm">Shipping</Button>
                <Button variant="outline" size="sm">Delivered</Button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>#{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.qty}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <span className={`status status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {order.status === 'Processing' && (
                          <Button size="sm" variant="outline">View</Button>
                        )}
                        {order.status === 'Shipping' && (
                          <Button size="sm" variant="outline">Track</Button>
                        )}
                        {order.status === 'Delivered' && (
                          <Button size="sm" variant="outline">Review</Button>
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

export default ClientOrders;
