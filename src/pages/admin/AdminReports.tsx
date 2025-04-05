
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import DashboardLayout from '../../components/layout/DashboardLayout';

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState('financial');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Reports & Analytics">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <div className="flex space-x-2">
            <button className="btn">Export to PDF</button>
            <button className="btn">Download Excel</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="form-control">
            <label className="label">Report Type</label>
            <select 
              className="select select-bordered" 
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              <option value="financial">Financial Report</option>
              <option value="inventory">Inventory Report</option>
              <option value="worker">Worker Performance</option>
              <option value="client">Client Overview</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">Time Period</label>
            <select 
              className="select select-bordered"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          {selectedPeriod === 'custom' && (
            <>
              <div className="form-control">
                <label className="label">Start Date</label>
                <input type="date" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">End Date</label>
                <input type="date" className="input input-bordered" />
              </div>
            </>
          )}
          
          <div className="form-control">
            <label className="label">&nbsp;</label>
            <button className="btn">Generate Report</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <p className="text-2xl">₹2,45,000</p>
              <p className="text-sm">↑ 15% from last period</p>
            </div>
          </div>
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <p className="text-2xl">₹1,28,600</p>
              <p className="text-sm">↑ 8% from last period</p>
            </div>
          </div>
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Net Profit</h5>
              <p className="text-2xl">₹1,16,400</p>
              <p className="text-sm">↑ 22% from last period</p>
            </div>
          </div>
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Orders Completed</h5>
              <p className="text-2xl">24</p>
              <p className="text-sm">↓ 5% from last period</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Expenses</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-500">Chart will be rendered here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Material Usage</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-500">Chart will be rendered here</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Workers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-gray-500">Carpenter</p>
                  </div>
                  <p className="font-semibold">18 Tasks</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-gray-500">Plumber</p>
                  </div>
                  <p className="font-semibold">15 Tasks</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">David Wilson</p>
                    <p className="text-sm text-gray-500">Electrician</p>
                  </div>
                  <p className="font-semibold">12 Tasks</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Client Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-500">Chart will be rendered here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
