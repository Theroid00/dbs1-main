import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient login attempt', { email, password });
    // Handle login logic here
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
          
          <button type="submit" className="auth-btn">Log In</button>
          
          <div className="auth-links">
            <p>Don't have an account? <Link to="/patient-register">Register</Link></p>
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
