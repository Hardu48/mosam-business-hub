
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const WorkerMaterials: React.FC = () => {
  // Sample materials data
  const materials = [
    { id: 'M101', name: 'Cement Bags', quantity: 5, unit: 'bags', status: 'Assigned', project: 'ABC Company - Building A' },
    { id: 'M102', name: 'PVC Pipes', quantity: 12, unit: 'pcs', status: 'In use', project: 'XYZ Ltd - Plumbing' },
    { id: 'M103', name: 'Paint Buckets', quantity: 3, unit: 'buckets', status: 'Used', project: 'Global Corp - Office' },
    { id: 'M104', name: 'Electrical Wire', quantity: 2, unit: 'rolls', status: 'Assigned', project: 'Tech Solutions - Server Room' },
    { id: 'M105', name: 'Plywood Sheets', quantity: 8, unit: 'sheets', status: 'In use', project: 'PQR Services - Flooring' }
  ];

  const requestedMaterials = [
    { id: 'R201', name: 'Insulation Material', quantity: 4, unit: 'rolls', requestDate: '2025-04-03', status: 'Pending' },
    { id: 'R202', name: 'Metal Brackets', quantity: 20, unit: 'pcs', requestDate: '2025-04-04', status: 'Approved' }
  ];

  return (
    <DashboardLayout allowedRoles={['worker']} pageTitle="Materials Management">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Materials Management</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Assigned Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Material ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materials.map((material) => (
                  <TableRow key={material.id}>
                    <TableCell>{material.id}</TableCell>
                    <TableCell>{material.name}</TableCell>
                    <TableCell>{material.quantity} {material.unit}</TableCell>
                    <TableCell>{material.project}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        material.status === 'Used' ? 'bg-gray-100 text-gray-800' :
                        material.status === 'In use' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {material.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {material.status === 'Assigned' && (
                          <Button size="sm">Start Using</Button>
                        )}
                        {material.status === 'In use' && (
                          <Button size="sm">Mark as Used</Button>
                        )}
                        <Button size="sm" variant="outline">Details</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Material Requests</h2>
          <Button>Request New Material</Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Material Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Material</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requestedMaterials.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.quantity} {request.unit}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        request.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">View</Button>
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

export default WorkerMaterials;
