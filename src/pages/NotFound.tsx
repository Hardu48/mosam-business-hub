
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'var(--background-color)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--primary-color)' }}>404</h1>
        <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
