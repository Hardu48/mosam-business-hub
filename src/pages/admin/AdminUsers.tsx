
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const AdminUsers: React.FC = () => {
  // Sample users data with their roles
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@acme.com', role: 'client', company: 'Acme Corporation', phone: '123-456-7890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@techsolutions.com', role: 'client', company: 'Tech Solutions Inc', phone: '987-654-3210', status: 'Active' },
    { id: 3, name: 'Robert Johnson', email: 'robert@global.com', role: 'client', company: 'Global Enterprises', phone: '555-123-4567', status: 'Inactive' },
    { id: 4, name: 'Michael Brown', email: 'michael@example.com', role: 'worker', specialization: 'Electrician', phone: '555-987-6543', status: 'Active' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa@example.com', role: 'worker', specialization: 'Plumber', phone: '555-567-8901', status: 'Active' },
    { id: 6, name: 'David Wilson', email: 'david@example.com', role: 'delivery', vehicle: 'Truck #102', phone: '555-234-5678', status: 'Active' },
    { id: 7, name: 'Sarah Martinez', email: 'sarah@example.com', role: 'admin', department: 'Operations', phone: '555-345-6789', status: 'Active' },
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('client');
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      role: 'client',
      company: '',
      specialization: '',
      vehicle: '',
      department: '',
    }
  });

  const handleAddUser = () => {
    setIsDialogOpen(true);
  };

  const onSubmit = (data) => {
    // Create a new user with the form data
    const newUser = {
      id: users.length + 1,
      ...data,
      status: 'Active'
    };

    // Add the new user to the users array
    setUsers([...users, newUser]);
    
    // Reset the form and close the dialog
    form.reset();
    setIsDialogOpen(false);
  };

  const filteredUsers = activeTab === 'all' 
    ? users 
    : users.filter(user => user.role === activeTab);

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="User Management">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Management</h1>
          <Button onClick={handleAddUser}>Add New User</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button 
            variant={activeTab === 'all' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('all')}
          >
            All Users ({users.length})
          </Button>
          <Button 
            variant={activeTab === 'client' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('client')}
          >
            Clients ({users.filter(u => u.role === 'client').length})
          </Button>
          <Button 
            variant={activeTab === 'worker' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('worker')}
          >
            Workers ({users.filter(u => u.role === 'worker').length})
          </Button>
          <Button 
            variant={activeTab === 'delivery' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('delivery')}
          >
            Delivery ({users.filter(u => u.role === 'delivery').length})
          </Button>
          <Button 
            variant={activeTab === 'admin' ? 'default' : 'outline'} 
            onClick={() => setActiveTab('admin')}
          >
            Admins ({users.filter(u => u.role === 'admin').length})
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {activeTab === 'all' ? 'All Users' : 
               activeTab === 'client' ? 'Clients' : 
               activeTab === 'worker' ? 'Workers' : 
               activeTab === 'delivery' ? 'Delivery Personnel' : 'Admins'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Phone</TableHead>
                  {activeTab === 'client' && <TableHead>Company</TableHead>}
                  {activeTab === 'worker' && <TableHead>Specialization</TableHead>}
                  {activeTab === 'delivery' && <TableHead>Vehicle</TableHead>}
                  {activeTab === 'admin' && <TableHead>Department</TableHead>}
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'worker' ? 'bg-blue-100 text-blue-800' :
                        user.role === 'delivery' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    {activeTab === 'client' && <TableCell>{user.company}</TableCell>}
                    {activeTab === 'worker' && <TableCell>{user.specialization}</TableCell>}
                    {activeTab === 'delivery' && <TableCell>{user.vehicle}</TableCell>}
                    {activeTab === 'admin' && <TableCell>{user.department}</TableCell>}
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Enter the user details below. Different fields will appear based on the selected role.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => {
                          field.onChange(e);
                          setSelectedRole(e.target.value);
                        }}
                      >
                        <option value="client">Client</option>
                        <option value="worker">Worker</option>
                        <option value="delivery">Delivery Person</option>
                        <option value="admin">Admin</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
              
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              {selectedRole === 'client' && (
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              {selectedRole === 'worker' && (
                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specialization</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              {selectedRole === 'delivery' && (
                <FormField
                  control={form.control}
                  name="vehicle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Info</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              {selectedRole === 'admin' && (
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Save User</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminUsers;
