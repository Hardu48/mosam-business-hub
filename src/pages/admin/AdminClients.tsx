
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminClients = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'Acme Corporation', contact: 'John Doe', email: 'john@acme.com', phone: '123-456-7890', address: '123 Business St', status: 'Active' },
    { id: 2, name: 'Tech Solutions Inc', contact: 'Jane Smith', email: 'jane@techsolutions.com', phone: '987-654-3210', address: '456 Tech Ave', status: 'Active' },
    { id: 3, name: 'Global Enterprises', contact: 'Robert Johnson', email: 'robert@global.com', phone: '555-123-4567', address: '789 Enterprise Blvd', status: 'Inactive' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Client Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Client Management</h1>
          <button className="btn">Add New Client</button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Contact Person</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map(client => (
                  <TableRow key={client.id}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.contact}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>
                      <span className={`badge ${client.status === 'Active' ? 'badge-success' : 'badge-error'}`}>
                        {client.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button className="btn-sm">View</button>
                        <button className="btn-sm">Edit</button>
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

export default AdminClients;
