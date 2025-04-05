
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  userRole: string;
}

interface MenuItem {
  title: string;
  path: string;
  icon: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const getMenuItems = (): MenuItem[] => {
    switch (userRole) {
      case 'admin':
        return [
          { title: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
          { title: 'Users', path: '/admin/users', icon: '👥' },
          { title: 'Workers', path: '/admin/workers', icon: '👷' },
          { title: 'Materials', path: '/admin/materials', icon: '📦' },
          { title: 'Payments', path: '/admin/payments', icon: '💰' },
          { title: 'Expenses', path: '/admin/expenses', icon: '💸' },
          { title: 'Complaints', path: '/admin/complaints', icon: '📝' },
          { title: 'Reports', path: '/admin/reports', icon: '📈' },
        ];
      case 'worker':
        return [
          { title: 'Dashboard', path: '/worker/dashboard', icon: '📊' },
          { title: 'Tasks', path: '/worker/tasks', icon: '📋' },
          { title: 'Materials', path: '/worker/materials', icon: '📦' },
          { title: 'Payments', path: '/worker/payments', icon: '💰' },
        ];
      case 'delivery':
        return [
          { title: 'Dashboard', path: '/delivery/dashboard', icon: '📊' },
          { title: 'Deliveries', path: '/delivery/deliveries', icon: '🚚' },
          { title: 'Earnings', path: '/delivery/earnings', icon: '💰' },
        ];
      case 'client':
        return [
          { title: 'Dashboard', path: '/client/dashboard', icon: '📊' },
          { title: 'Orders', path: '/client/orders', icon: '🛒' },
          { title: 'Bills', path: '/client/bills', icon: '📄' },
          { title: 'Complaints', path: '/client/complaints', icon: '📝' },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {!collapsed && <h2>Mosam</h2>}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      <nav style={{ padding: '1rem 0' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.5rem',
                  color: 'white',
                  textDecoration: 'none',
                  backgroundColor: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                <span style={{ marginRight: collapsed ? '0' : '0.75rem' }}>{item.icon}</span>
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
