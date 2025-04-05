
import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const ClientComplaints: React.FC = () => {
  // Sample complaints data
  const complaints = [
    { id: 'C1001', date: '2025-04-01', title: 'Delayed Delivery', description: 'My order was supposed to arrive on March 28 but still has not been delivered.', status: 'Open', priority: 'Medium' },
    { id: 'C1002', date: '2025-03-22', title: 'Damaged Materials', description: 'The materials received were damaged in transit.', status: 'In Progress', priority: 'High' },
    { id: 'C1003', date: '2025-03-15', title: 'Incorrect Items', description: 'I received different items than what I ordered.', status: 'Resolved', priority: 'Medium', resolution: 'Replacement items sent' },
    { id: 'C1004', date: '2025-02-28', title: 'Billing Error', description: 'I was charged twice for my last order.', status: 'Resolved', priority: 'High', resolution: 'Refund processed' },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      title: '',
      priority: 'Medium',
      description: '',
    }
  });

  const handleSubmitComplaint = (data) => {
    console.log("Complaint submitted:", data);
    setIsDialogOpen(false);
    form.reset();
  };

  return (
    <DashboardLayout allowedRoles={['client']} pageTitle="Complaints">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Complaints Management</h1>
          <Button onClick={() => setIsDialogOpen(true)}>Submit New Complaint</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Total Complaints</p>
                <p className="text-3xl font-bold">4</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Open/In Progress</p>
                <p className="text-3xl font-bold text-yellow-500">2</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Resolved</p>
                <p className="text-3xl font-bold text-green-500">2</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>My Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm">Open</Button>
                <Button variant="outline" size="sm">In Progress</Button>
                <Button variant="outline" size="sm">Resolved</Button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Complaint ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {complaints.map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>{complaint.date}</TableCell>
                    <TableCell>{complaint.title}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        complaint.priority === 'High' ? 'bg-red-100 text-red-800' :
                        complaint.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {complaint.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        complaint.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                        complaint.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      {/* Dialog for submitting a new complaint */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submit New Complaint</DialogTitle>
            <DialogDescription>
              Please provide details about your issue. Our team will review it and respond as soon as possible.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitComplaint)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Briefly describe the issue" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <FormControl>
                      <select 
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </FormControl>
                    <FormDescription>
                      Select the priority level of this issue
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide detailed information about your complaint" 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Submit Complaint</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default ClientComplaints;
