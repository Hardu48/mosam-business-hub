
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // In a real app, this would be an API call to authenticate the user
      // For demo purposes, we're using simulated login logic
      if (email === 'admin@mosam.com' && password === 'admin123') {
        localStorage.setItem('mosamUser', JSON.stringify({
          id: '1',
          name: 'Admin User',
          email: 'admin@mosam.com',
          role: 'admin'
        }));
        navigate('/admin/dashboard');
      } else if (email === 'worker@mosam.com' && password === 'worker123') {
        localStorage.setItem('mosamUser', JSON.stringify({
          id: '2',
          name: 'Worker User',
          email: 'worker@mosam.com',
          role: 'worker'
        }));
        navigate('/worker/dashboard');
      } else if (email === 'delivery@mosam.com' && password === 'delivery123') {
        localStorage.setItem('mosamUser', JSON.stringify({
          id: '3',
          name: 'Delivery Person',
          email: 'delivery@mosam.com',
          role: 'delivery'
        }));
        navigate('/delivery/dashboard');
      } else if (email === 'client@mosam.com' && password === 'client123') {
        localStorage.setItem('mosamUser', JSON.stringify({
          id: '4',
          name: 'Client User',
          email: 'client@mosam.com',
          role: 'client'
        }));
        navigate('/client/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div className="card-header">
        <h2 className="card-title">Login to Mosam</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <div className="text-error mb-4">{error}</div>}
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Login'}
        </button>
      </form>
      <div className="mt-4">
        <p><small>Demo credentials:</small></p>
        <p><small>Admin: admin@mosam.com / admin123</small></p>
        <p><small>Worker: worker@mosam.com / worker123</small></p>
        <p><small>Delivery: delivery@mosam.com / delivery123</small></p>
        <p><small>Client: client@mosam.com / client123</small></p>
      </div>
    </div>
  );
};

export default LoginForm;
