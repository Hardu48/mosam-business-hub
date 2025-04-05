
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/dashboard/StatCard';

const WorkerDashboard = () => {
  // In a real app, this data would come from API calls
  const dashboardData = {
    assignedTasks: 5,
    completedTasks: 12,
    hoursLogged: 32,
    materialsUsed: 8,
    earnings: '$850'
  };

  return (
    <DashboardLayout allowedRoles={['worker']} pageTitle="Worker Dashboard">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Welcome to Worker Dashboard</h2>
        <p>Manage your tasks and track your performance.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        <StatCard 
          title="Assigned Tasks" 
          value={dashboardData.assignedTasks} 
          icon="📋" 
          color="#f57c00"
        />
        <StatCard 
          title="Completed Tasks" 
          value={dashboardData.completedTasks} 
          icon="✅" 
          color="#388e3c"
        />
        <StatCard 
          title="Hours Logged" 
          value={dashboardData.hoursLogged} 
          icon="⏱️" 
          color="#1976d2"
        />
        <StatCard 
          title="Earnings" 
          value={dashboardData.earnings} 
          icon="💰" 
          color="#6d4c41"
        />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Today's Tasks</h3>
        <div className="card" style={{ marginTop: '1rem' }}>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Client</th>
                  <th>Location</th>
                  <th>Due</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Material installation</td>
                  <td>ABC Company</td>
                  <td>North Sector</td>
                  <td>Today, 2:00 PM</td>
                  <td><span className="status status-pending">Pending</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Start</button>
                  </td>
                </tr>
                <tr>
                  <td>Equipment repair</td>
                  <td>XYZ Ltd</td>
                  <td>East Wing</td>
                  <td>Today, 4:00 PM</td>
                  <td><span className="status status-pending">Pending</span></td>
                  <td>
                    <button className="btn" style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem' }}>Start</button>
                  </td>
                </tr>
                <tr>
                  <td>Site inspection</td>
                  <td>PQR Services</td>
                  <td>Main Building</td>
                  <td>Today, 11:00 AM</td>
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
            <h3 className="card-title">Materials Assigned</h3>
          </div>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Quantity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cement Bags</td>
                  <td>5</td>
                  <td>Assigned</td>
                </tr>
                <tr>
                  <td>PVC Pipes</td>
                  <td>12</td>
                  <td>In use</td>
                </tr>
                <tr>
                  <td>Paint Buckets</td>
                  <td>3</td>
                  <td>Used</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Upcoming Tasks</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 500 }}>Site maintenance</div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Tomorrow, 9:00 AM</div>
            </li>
            <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 500 }}>Equipment installation</div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Tomorrow, 2:00 PM</div>
            </li>
            <li style={{ padding: '0.75rem 0' }}>
              <div style={{ fontWeight: 500 }}>Client meeting</div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Day after tomorrow, 11:30 AM</div>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkerDashboard;
