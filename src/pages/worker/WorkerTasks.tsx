
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const WorkerTasks: React.FC = () => {
  // Sample tasks data
  const tasks = [
    { id: 'T1001', name: 'Material installation', client: 'ABC Company', location: 'North Sector', due: 'Today, 2:00 PM', status: 'Pending', priority: 'High' },
    { id: 'T1002', name: 'Equipment repair', client: 'XYZ Ltd', location: 'East Wing', due: 'Today, 4:00 PM', status: 'Pending', priority: 'Medium' },
    { id: 'T1003', name: 'Site inspection', client: 'PQR Services', location: 'Main Building', due: 'Today, 11:00 AM', status: 'Completed', priority: 'High' },
    { id: 'T1004', name: 'Electrical wiring', client: 'Tech Solutions', location: 'Server Room', due: 'Tomorrow, 10:00 AM', status: 'Scheduled', priority: 'Medium' },
    { id: 'T1005', name: 'Plumbing maintenance', client: 'Global Corp', location: 'Bathroom Section', due: 'Tomorrow, 2:00 PM', status: 'Scheduled', priority: 'Low' },
  ];

  return (
    <DashboardLayout allowedRoles={['worker']} pageTitle="Task Management">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Task Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Pending Tasks</p>
                <p className="text-3xl font-bold text-orange-500">2</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Scheduled Tasks</p>
                <p className="text-3xl font-bold text-blue-500">2</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">Completed (Today)</p>
                <p className="text-3xl font-bold text-green-500">1</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.filter(task => task.due.includes('Today')).map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.id}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.client}</TableCell>
                    <TableCell>{task.location}</TableCell>
                    <TableCell>{task.due}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`status status-${task.status.toLowerCase()}`}>
                        {task.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {task.status === 'Pending' && (
                          <Button size="sm">Start</Button>
                        )}
                        {task.status === 'In Progress' && (
                          <Button size="sm">Complete</Button>
                        )}
                        {task.status === 'Completed' && (
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
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.filter(task => task.due.includes('Tomorrow')).map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.id}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.client}</TableCell>
                    <TableCell>{task.location}</TableCell>
                    <TableCell>{task.due}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.priority}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`status status-${task.status.toLowerCase()}`}>
                        {task.status}
                      </span>
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

export default WorkerTasks;
