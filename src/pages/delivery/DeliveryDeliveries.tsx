
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DeliveryDeliveries: React.FC = () => {
  // Sample delivery data
  const deliveries = [
    { id: 'D5621', client: 'ABC Company', destination: '123 Business Park', items: 'Construction Materials', scheduled: '2025-04-05, 10:00 AM', status: 'In Transit' },
    { id: 'D5622', client: 'XYZ Ltd', destination: '456 Main Street', items: 'Office Supplies', scheduled: '2025-04-05, 1:00 PM', status: 'Pending' },
    { id: 'D5620', client: 'PQR Services', destination: '789 Industrial Zone', items: 'Electrical Equipment', scheduled: '2025-04-05, 8:00 AM', status: 'Completed' },
    { id: 'D5619', client: 'Global Enterprises', destination: '101 Corporate Ave', items: 'Heavy Machinery', scheduled: '2025-04-04, 2:00 PM', status: 'Completed' },
    { id: 'D5618', client: 'Tech Innovations', destination: '202 Technology Park', items: 'IT Equipment', scheduled: '2025-04-04, 9:30 AM', status: 'Completed' },
  ];

  return (
    <DashboardLayout allowedRoles={['delivery']} pageTitle="Delivery Management">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Delivery Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>My Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">All</Button>
                  <Button variant="outline" size="sm">Pending</Button>
                  <Button variant="outline" size="sm">In Transit</Button>
                  <Button variant="outline" size="sm">Completed</Button>
                </div>
                <input 
                  type="date" 
                  className="px-3 py-2 border rounded-md"
                  defaultValue="2025-04-05"
                />
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Scheduled Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveries.map((delivery) => (
                  <TableRow key={delivery.id}>
                    <TableCell>#{delivery.id}</TableCell>
                    <TableCell>{delivery.client}</TableCell>
                    <TableCell>{delivery.destination}</TableCell>
                    <TableCell>{delivery.items}</TableCell>
                    <TableCell>{delivery.scheduled}</TableCell>
                    <TableCell>
                      <span className={`status status-${delivery.status.toLowerCase().replace(' ', '')}`}>
                        {delivery.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {delivery.status === 'Pending' && (
                          <Button size="sm">Start</Button>
                        )}
                        {delivery.status === 'In Transit' && (
                          <Button size="sm">Complete</Button>
                        )}
                        {delivery.status === 'Completed' && (
                          <Button size="sm" variant="outline">Details</Button>
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

export default DeliveryDeliveries;
