
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([
    { id: 'COMP-001', date: '2023-05-05', client: 'Acme Corporation', subject: 'Delivery Delay', priority: 'High', status: 'Open', assignedTo: 'John Handler' },
    { id: 'COMP-002', date: '2023-05-08', client: 'Tech Solutions Inc', subject: 'Product Quality Issue', priority: 'Medium', status: 'In Progress', assignedTo: 'Maria Support' },
    { id: 'COMP-003', date: '2023-05-10', client: 'Global Enterprises', subject: 'Billing Discrepancy', priority: 'Low', status: 'Resolved', assignedTo: 'David Accounts' },
    { id: 'COMP-004', date: '2023-05-12', client: 'Local Business', subject: 'Worker Behavior', priority: 'High', status: 'Open', assignedTo: 'Unassigned' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Complaint Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Complaint Management</h1>
          <button className="btn">Register Complaint</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Complaints</h5>
              <p className="text-2xl">4</p>
            </div>
          </div>
          <div className="card bg-error text-white">
            <div className="card-body">
              <h5 className="card-title">Open</h5>
              <p className="text-2xl">2</p>
            </div>
          </div>
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">In Progress</h5>
              <p className="text-2xl">1</p>
            </div>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Resolved</h5>
              <p className="text-2xl">1</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {complaints.map(complaint => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.date}</TableCell>
                    <TableCell>{complaint.client}</TableCell>
                    <TableCell>{complaint.subject}</TableCell>
                    <TableCell>
                      <span className={`badge ${complaint.priority === 'High' ? 'badge-error' : complaint.priority === 'Medium' ? 'badge-warning' : 'badge-info'}`}>
                        {complaint.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`badge ${complaint.status === 'Open' ? 'badge-error' : complaint.status === 'In Progress' ? 'badge-warning' : 'badge-success'}`}>
                        {complaint.status}
                      </span>
                    </TableCell>
                    <TableCell>{complaint.assignedTo}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button className="btn-sm">View</button>
                        {complaint.status !== 'Resolved' && (
                          <button className="btn-sm">Update</button>
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

export default AdminComplaints;
