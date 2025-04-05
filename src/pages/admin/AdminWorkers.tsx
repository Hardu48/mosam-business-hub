
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const AdminWorkers = () => {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'John Smith', role: 'Carpenter', email: 'john@mosam.com', phone: '123-456-7890', joinDate: '2023-01-15', status: 'Active' },
    { id: 2, name: 'Maria Rodriguez', role: 'Plumber', email: 'maria@mosam.com', phone: '987-654-3210', joinDate: '2023-02-20', status: 'Active' },
    { id: 3, name: 'David Wilson', role: 'Electrician', email: 'david@mosam.com', phone: '555-123-4567', joinDate: '2023-03-10', status: 'On Leave' },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      role: '',
      email: '',
      phone: '',
    }
  });

  const handleAddWorker = () => {
    setIsDialogOpen(true);
  };

  const onSubmit = (data) => {
    // Create a new worker with the form data
    const today = new Date();
    const joinDate = today.toISOString().split('T')[0];
    
    const newWorker = {
      id: workers.length + 1,
      ...data,
      joinDate,
      status: 'Active'
    };

    // Add the new worker to the workers array
    setWorkers([...workers, newWorker]);
    
    // Reset the form and close the dialog
    form.reset();
    setIsDialogOpen(false);
  };

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Worker Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Worker Management</h1>
          <Button onClick={handleAddWorker}>Add New Worker</Button>
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
                        <Button size="sm" variant="outline">View</Button>
                        <Button size="sm" variant="outline">Edit</Button>
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
            <DialogTitle>Add New Worker</DialogTitle>
            <DialogDescription>
              Enter the worker details below. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Role</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Save Worker</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminWorkers;
