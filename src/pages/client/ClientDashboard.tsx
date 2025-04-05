
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';

const ClientDashboard = () => {
  // In a real app, this data would come from API calls
  const dashboardData = {
    activeOrders: 2,
    completedOrders: 15,
    pendingBills: '$1,450',
    productsAvailable: 24,
  };

  return (
    <DashboardLayout allowedRoles={['client']} pageTitle="Client Dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Welcome to Client Dashboard</h2>
        <p>Manage your orders and track your account.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        <StatCard 
          title="Active Orders" 
          value={dashboardData.activeOrders} 
          icon="📦" 
          color="#e65100"
        />
        <StatCard 
          title="Completed Orders" 
          value={dashboardData.completedOrders} 
          icon="✅" 
          color="#388e3c"
        />
        <StatCard 
          title="Pending Bills" 
          value={dashboardData.pendingBills} 
          icon="📄" 
          color="#d32f2f"
        />
        <StatCard 
          title="Available Products" 
          value={dashboardData.productsAvailable} 
          icon="🛒" 
          color="#0288d1"
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Recent Orders</h3>
        <div className="card" style={{ marginTop: '1rem' }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#O8901</td>
                  <td>Today</td>
                  <td>Construction Materials</td>
                  <td>$850</td>
                  <td><span className="status status-pending">Processing</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>#O8897</td>
                  <td>Yesterday</td>
                  <td>Office Supplies</td>
                  <td>$320</td>
                  <td><span className="status status-pending">Shipping</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Track</button>
                  </td>
                </tr>
                <tr>
                  <td>#O8879</td>
                  <td>2023-03-28</td>
                  <td>Electrical Equipment</td>
                  <td>$1,200</td>
                  <td><span className="status status-completed">Delivered</span></td>
                  <td>
                    <button className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Outstanding Bills</h3>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Bill #</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B4501</td>
                  <td>2023-03-15</td>
                  <td>$850</td>
                  <td>2023-04-15</td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Pay Now</button>
                  </td>
                </tr>
                <tr>
                  <td>B4489</td>
                  <td>2023-03-01</td>
                  <td>$600</td>
                  <td>2023-04-01</td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Pay Now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
            <button className="btn">Place New Order</button>
            <button className="btn btn-secondary">Track Deliveries</button>
            <button className="btn btn-secondary">Submit Complaint</button>
            <button className="btn btn-secondary">Contact Support</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;
