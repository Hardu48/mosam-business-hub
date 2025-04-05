
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminDashboard: React.FC = () => {
  // In a real app, this data would come from API calls
  const dashboardData = {
    activeClients: 42,
    activeWorkers: 15,
    pendingOrders: 8,
    totalRevenue: '$24,500',
    totalExpenses: '$12,780',
    openComplaints: 3,
    materialsLow: 5,
    deliveriesInProgress: 7
  };

  const navigate = useNavigate();

  // Define handlers for the quick action buttons
  const handleAddClient = () => {
    navigate('/admin/clients');
  };

  const handleRecordPayment = () => {
    navigate('/admin/payments');
  };

  const handleAddMaterials = () => {
    navigate('/admin/materials');
  };

  const handleCreateWorkOrder = () => {
    // For now just navigate to workers page
    navigate('/admin/workers');
  };

  return (
    <DashboardLayout allowedRoles={['admin']} pageTitle="Admin Dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Welcome to Admin Dashboard</h2>
        <p>Manage your business operations from this central hub.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        <StatCard 
          title="Active Clients" 
          value={dashboardData.activeClients} 
          icon="👥" 
          color="#1976d2"
        />
        <StatCard 
          title="Active Workers" 
          value={dashboardData.activeWorkers} 
          icon="👷" 
          color="#00897b"
        />
        <StatCard 
          title="Pending Orders" 
          value={dashboardData.pendingOrders} 
          icon="📋" 
          color="#ff9800"
        />
        <StatCard 
          title="Revenue" 
          value={dashboardData.totalRevenue} 
          icon="💰" 
          color="#4caf50"
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Quick Actions</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          <Button onClick={handleAddClient}>Add New Client</Button>
          <Button onClick={handleRecordPayment}>Record Payment</Button>
          <Button onClick={handleAddMaterials}>Add Materials</Button>
          <Button onClick={handleCreateWorkOrder}>Create Work Order</Button>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Activities</h3>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New order placed</td>
                  <td>Client A</td>
                  <td>Today, 10:30 AM</td>
                  <td><span className="status status-pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Payment received</td>
                  <td>Client B</td>
                  <td>Yesterday, 2:15 PM</td>
                  <td><span className="status status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td>Material delivery</td>
                  <td>Supplier X</td>
                  <td>Yesterday, 11:20 AM</td>
                  <td><span className="status status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td>Worker assigned</td>
                  <td>Worker 3</td>
                  <td>2 days ago</td>
                  <td><span className="status status-completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
