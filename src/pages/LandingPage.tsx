
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('mosamUser');
    setIsLoaded(true);
    
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        switch (parsedUser.role) {
          case 'admin':
            navigate('/admin/dashboard');
            break;
          case 'worker':
            navigate('/worker/dashboard');
            break;
          case 'delivery':
            navigate('/delivery/dashboard');
            break;
          case 'client':
            navigate('/client/dashboard');
            break;
          default:
            // If role is not recognized, clear storage
            localStorage.removeItem('mosamUser');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('mosamUser');
      }
    }
  }, [navigate]);

  if (!isLoaded) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner"></div>
    </div>;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background-color)' }}>
      <header style={{ backgroundColor: 'var(--primary-color)', padding: '1rem 1.5rem', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Mosam Business Hub</h1>
        </div>
      </header>
      
      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Integrated Business Management Solution</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Streamline your operations with our all-in-one platform for client management, 
              worker coordination, material tracking, payments, and more.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <div className="card" style={{ height: '100%' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Features</h2>
                <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Multiple user roles with custom dashboards</li>
                  <li style={{ marginBottom: '0.5rem' }}>Material management and tracking</li>
                  <li style={{ marginBottom: '0.5rem' }}>Payment tracking and billing</li>
                  <li style={{ marginBottom: '0.5rem' }}>Expense management</li>
                  <li style={{ marginBottom: '0.5rem' }}>Complaint management system</li>
                  <li style={{ marginBottom: '0.5rem' }}>Delivery tracking</li>
                  <li style={{ marginBottom: '0.5rem' }}>Reports and analytics</li>
                </ul>
              </div>
            </div>
            
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
      
      <footer style={{ backgroundColor: 'var(--secondary-dark)', color: 'white', padding: '1.5rem 0', marginTop: '2rem' }}>
        <div className="container text-center">
          <p>© 2025 Mosam Business Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
