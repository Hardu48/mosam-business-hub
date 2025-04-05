
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Cement', category: 'Building', quantity: 500, unit: 'kg', price: 10.50, supplier: 'ABC Suppliers', status: 'In Stock' },
    { id: 2, name: 'Steel Rods', category: 'Building', quantity: 200, unit: 'pcs', price: 15.75, supplier: 'Steel Corp', status: 'Low Stock' },
    { id: 3, name: 'Paint - White', category: 'Finishing', quantity: 50, unit: 'liters', price: 8.25, supplier: 'Color World', status: 'In Stock' },
  ]);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Material Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Material Management</h1>
          <div className="space-x-2">
            <button className="btn">Add Material</button>
            <button className="btn">Order Supplies</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Materials</h5>
              <p className="text-2xl">42</p>
            </div>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">In Stock</h5>
              <p className="text-2xl">36</p>
            </div>
          </div>
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Low Stock</h5>
              <p className="text-2xl">5</p>
            </div>
          </div>
          <div className="card bg-error text-white">
            <div className="card-body">
              <h5 className="card-title">Out of Stock</h5>
              <p className="text-2xl">1</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Materials Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materials.map(material => (
                  <TableRow key={material.id}>
                    <TableCell>{material.id}</TableCell>
                    <TableCell>{material.name}</TableCell>
                    <TableCell>{material.category}</TableCell>
                    <TableCell>{material.quantity}</TableCell>
                    <TableCell>{material.unit}</TableCell>
                    <TableCell>₹{material.price.toFixed(2)}</TableCell>
                    <TableCell>{material.supplier}</TableCell>
                    <TableCell>
                      <span className={`badge ${material.status === 'In Stock' ? 'badge-success' : material.status === 'Low Stock' ? 'badge-warning' : 'badge-error'}`}>
                        {material.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button className="btn-sm">Update</button>
                        <button className="btn-sm">History</button>
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

export default AdminMaterials;
