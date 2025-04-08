import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AmbulanceLogin = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [emergency, setEmergency] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ambulance booking request', { name, phone, address, emergency });
    // Handle ambulance booking logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        <div className="auth-header">
          <img src="/pics/jeevan.png" alt="Jeevan Logo" />
          <h2>Book an Ambulance</h2>
          <p>Emergency medical assistance 24/7</p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter patient name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter contact number"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Pickup Address</label>
            <input 
              type="text" 
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter complete address"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="emergency">Emergency Description</label>
            <textarea
              id="emergency"
              value={emergency}
              onChange={(e) => setEmergency(e.target.value)}
              placeholder="Briefly describe the emergency"
              rows={3}
              style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #d2e0fb' }}
            />
          </div>
          
          <button type="submit" className="auth-btn" style={{ backgroundColor: '#dc3545' }}>Request Ambulance</button>
        </form>
        
        <div className="auth-links" style={{ marginTop: '30px' }}>
          <Link to="/">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceLogin;
