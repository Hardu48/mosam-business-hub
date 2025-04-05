
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';

const DeliveryDashboard = () => {
  // In a real app, this data would come from API calls
  const dashboardData = {
    pendingDeliveries: 4,
    completedDeliveries: 37,
    totalDistance: '452 km',
    earnings: '$620',
    fuelExpense: '$85',
  };

  return (
    <DashboardLayout allowedRoles={['delivery']} pageTitle="Delivery Dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Welcome to Delivery Dashboard</h2>
        <p>Manage your deliveries and track earnings.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        <StatCard 
          title="Pending Deliveries" 
          value={dashboardData.pendingDeliveries} 
          icon="🚚" 
          color="#e65100"
        />
        <StatCard 
          title="Completed Deliveries" 
          value={dashboardData.completedDeliveries} 
          icon="✅" 
          color="#388e3c"
        />
        <StatCard 
          title="Total Distance" 
          value={dashboardData.totalDistance} 
          icon="🛣️" 
          color="#0288d1"
        />
        <StatCard 
          title="Earnings" 
          value={dashboardData.earnings} 
          icon="💰" 
          color="#6d4c41"
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Today's Delivery Schedule</h3>
        <div className="card" style={{ marginTop: '1rem' }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client</th>
                  <th>Destination</th>
                  <th>Items</th>
                  <th>Time Window</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#D5621</td>
                  <td>ABC Company</td>
                  <td>123 Business Park</td>
                  <td>Construction Materials</td>
                  <td>10:00 AM - 12:00 PM</td>
                  <td><span className="status status-pending">In Transit</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Complete</button>
                  </td>
                </tr>
                <tr>
                  <td>#D5622</td>
                  <td>XYZ Ltd</td>
                  <td>456 Main Street</td>
                  <td>Office Supplies</td>
                  <td>1:00 PM - 3:00 PM</td>
                  <td><span className="status status-pending">Pending</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Start</button>
                  </td>
                </tr>
                <tr>
                  <td>#D5620</td>
                  <td>PQR Services</td>
                  <td>789 Industrial Zone</td>
                  <td>Electrical Equipment</td>
                  <td>8:00 AM - 10:00 AM</td>
                  <td><span className="status status-completed">Completed</span></td>
                  <td>
                    <button className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Details</button>
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
            <h3 className="card-title">Vehicle Status</h3>
          </div>
          <div style={{ padding: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span>Fuel Level:</span>
              <span>75%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span>Mileage:</span>
              <span>24,567 km</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span>Next Service:</span>
              <span>In 450 km</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span>Current Load:</span>
              <span>70% of capacity</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Weekly Earnings</h3>
          </div>
          <div style={{ padding: '1rem 0' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>This Week's Earnings:</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>$220</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Deliveries:</div>
                <div style={{ fontWeight: 500 }}>12</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Distance:</div>
                <div style={{ fontWeight: 500 }}>145 km</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Fuel Used:</div>
                <div style={{ fontWeight: 500 }}>$35</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DeliveryDashboard;
