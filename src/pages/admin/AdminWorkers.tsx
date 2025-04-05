
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminWorkers = () => {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'John Smith', role: 'Carpenter', email: 'john@mosam.com', phone: '123-456-7890', joinDate: '2023-01-15', status: 'Active' },
    { id: 2, name: 'Maria Rodriguez', role: 'Plumber', email: 'maria@mosam.com', phone: '987-654-3210', joinDate: '2023-02-20', status: 'Active' },
    { id: 3, name: 'David Wilson', role: 'Electrician', email: 'david@mosam.com', phone: '555-123-4567', joinDate: '2023-03-10', status: 'On Leave' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Worker Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Worker Management</h1>
          <button className="btn">Add New Worker</button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Workers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workers.map(worker => (
                  <TableRow key={worker.id}>
                    <TableCell>{worker.id}</TableCell>
                    <TableCell>{worker.name}</TableCell>
                    <TableCell>{worker.role}</TableCell>
                    <TableCell>{worker.email}</TableCell>
                    <TableCell>{worker.phone}</TableCell>
                    <TableCell>{worker.joinDate}</TableCell>
                    <TableCell>
                      <span className={`badge ${worker.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                        {worker.status}
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

export default AdminWorkers;
