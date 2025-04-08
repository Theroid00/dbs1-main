import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role is patient
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve users from mock database (localStorage)
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.some((user: any) => user.email === email)) {
      alert('Email already registered. Please log in.');
      return;
    }    // Add new user to the database
    users.push({ name, email, password, role });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    // Redirect based on role
    if (role === 'doctor') {
      navigate('/doctor-login');
    } else {
      navigate('/patient-login');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src="/pics/jeevan.png" alt="Jeevan Logo" />
          <h2>Register</h2>
          <p>Create your account to access the healthcare portal</p>
        </div>

        <form className="auth-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" className="auth-btn">Register</button>
        </form>

        <div className="auth-links" style={{ marginTop: '30px' }}>
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
