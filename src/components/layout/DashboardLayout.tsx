
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface DashboardLayoutProps {
  allowedRoles: string[];
  pageTitle: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  allowedRoles, 
  pageTitle,
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('mosamUser');
    if (!userData) {
      navigate('/');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      if (!allowedRoles.includes(parsedUser.role)) {
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to parse user data:', error);
      navigate('/');
    }
  }, [allowedRoles, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="app-container">
      <Sidebar userRole={user.role} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Header title={pageTitle} userRole={user.role} userName={user.name} />
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
