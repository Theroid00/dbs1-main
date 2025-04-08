import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Retrieve users from mock database (localStorage)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password && u.role === 'patient');

    if (user) {
      // Save current user for session management
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/patient-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src="/pics/jeevan.png" alt="Jeevan Logo" />
          <h2>Patient Login</h2>
          <p>Access your healthcare dashboard</p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
            {error && <div className="error-message" style={{color: '#dc3545', marginBottom: '10px'}}>{error}</div>}
          <button type="submit" className="auth-btn">Log In</button>
          <div className="auth-links">
            <p>Don't have an account? <button onClick={handleRegister} style={{color: '#4a77d2', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0}}>Register</button></p>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
          </div>
        </form>
        
        <div className="auth-links" style={{ marginTop: '30px' }}>
          <Link to="/">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
