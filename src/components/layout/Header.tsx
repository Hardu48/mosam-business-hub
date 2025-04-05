
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  userRole: string;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ title, userRole, userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('mosamUser');
    navigate('/');
  };

  return (
    <header style={{ 
      backgroundColor: 'var(--white)', 
      boxShadow: 'var(--box-shadow)', 
      padding: '1rem 1.5rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <h1>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '1.5rem', textAlign: 'right' }}>
          <div style={{ fontWeight: 500 }}>{userName}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', textTransform: 'capitalize' }}>{userRole}</div>
        </div>
        <div className="dropdown" style={{ position: 'relative' }}>
          <button 
            className="btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
