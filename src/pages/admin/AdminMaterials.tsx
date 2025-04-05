
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const AdminMaterials = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Cement', category: 'Building', quantity: 500, unit: 'kg', price: 10.50, supplier: 'ABC Suppliers', status: 'In Stock' },
    { id: 2, name: 'Steel Rods', category: 'Building', quantity: 200, unit: 'pcs', price: 15.75, supplier: 'Steel Corp', status: 'Low Stock' },
    { id: 3, name: 'Paint - White', category: 'Finishing', quantity: 50, unit: 'liters', price: 8.25, supplier: 'Color World', status: 'In Stock' },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      category: '',
      quantity: 0,
      unit: '',
      price: 0,
      supplier: '',
    }
  });

  const handleAddMaterial = () => {
    setIsDialogOpen(true);
  };

  const onSubmit = (data) => {
    // Create a new material with the form data
    const newMaterial = {
      id: materials.length + 1,
      ...data,
      price: parseFloat(data.price),
      quantity: parseInt(data.quantity),
      status: 'In Stock'
    };

    // Add the new material to the materials array
    setMaterials([...materials, newMaterial]);
    
    // Reset the form and close the dialog
    form.reset();
    setIsDialogOpen(false);
  };

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Material Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Material Management</h1>
          <div className="space-x-2">
            <Button onClick={handleAddMaterial}>Add Material</Button>
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
                        <Button size="sm" variant="outline">Update</Button>
                        <Button size="sm" variant="outline">History</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Material</DialogTitle>
            <DialogDescription>
              Enter the material details below. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Save Material</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminMaterials;
