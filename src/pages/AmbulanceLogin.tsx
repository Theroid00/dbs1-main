import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock database for ambulance requests
const saveToDatabase = (data: any) => {
  // Get existing ambulance requests from localStorage
  const requests = JSON.parse(localStorage.getItem('ambulanceRequests') || '[]');
  
  // Add new request with ID and timestamp
  const newRequest = {
    id: `AMB-${Date.now()}`,
    status: 'dispatched',
    timestamp: new Date().toISOString(),
    estimatedArrival: 12, // minutes
    distance: 3.8, // km
    driver: {
      name: 'Michael Smith',
      id: 'DR-5678',
      phone: '+1234567890'
    },
    location: {
      lat: 37.7749,
      lng: -122.4194
    },
    ...data
  };
  
  requests.push(newRequest);
  
  // Save back to localStorage
  localStorage.setItem('ambulanceRequests', JSON.stringify(requests));
  
  return newRequest;
};

const AmbulanceLogin = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [emergency, setEmergency] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any;
    if (showConfirmation) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 720); // 12 minutes = 720 seconds, updating every second
    }
    return () => clearInterval(interval);
  }, [showConfirmation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to database and get booking details
    const requestData = { name, phone, address, emergency };
    const bookingData = saveToDatabase(requestData);
    
    // Show confirmation
    setBookingDetails(bookingData);
    setShowConfirmation(true);
  };
  return (
    <div className="auth-container">
      {!showConfirmation ? (
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
      ) : (
        <div className="auth-card" style={{ maxWidth: '600px' }}>
          <div className="auth-header">
            <img src="/pics/jeevan.png" alt="Jeevan Logo" />
            <h2>Ambulance Dispatched!</h2>
            <p>Tracking your ambulance in real-time</p>
          </div>
          
          <div className="confirmation-content">
            {/* Google Maps Embed */}
            <div className="map-container" style={{ height: '300px', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBfwmA2WQYYEjrV938WlYgj9jZTNIGNzlc&origin=${bookingDetails.location.lat},${bookingDetails.location.lng}&destination=${address.replace(' ', '+')}`} 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="tracking-info" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Hospital</span>
                <span>Your Location</span>
              </div>
              
              <div style={{ width: '100%', backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px', marginBottom: '8px' }}>
                <div 
                  style={{ 
                    width: `${progress}%`, 
                    backgroundColor: '#dc3545', 
                    height: '100%', 
                    borderRadius: '4px',
                    transition: 'width 1s ease-in-out'
                  }}
                ></div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-bell" style={{ color: '#dc3545' }}></i>
                  <span>ETA: {Math.max(0, Math.floor(bookingDetails.estimatedArrival * (1 - progress/100)))} minutes</span>
                </div>
                <span>{bookingDetails.distance} km away</span>
              </div>
            </div>
            
            <div className="driver-info" style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-user" style={{ fontSize: '20px' }}></i>
                </div>
                
                <div>
                  <div style={{ fontWeight: 'bold' }}>{bookingDetails.driver.name}</div>
                  <div style={{ fontSize: '12px', color: '#6c757d' }}>Driver • ID: #{bookingDetails.driver.id}</div>
                </div>
                
                <a 
                  href={`tel:${bookingDetails.driver.phone}`} 
                  style={{ 
                    marginLeft: 'auto',
                    padding: '8px 15px',
                    borderRadius: '4px',
                    border: '1px solid #ced4da',
                    textDecoration: 'none',
                    color: '#212529',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <i className="fas fa-phone"></i> Call
                </a>
              </div>
            </div>
            
            <div className="ambulance-details">
              <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Booking Information</div>
              <div style={{ fontSize: '14px', marginBottom: '5px' }}><strong>Booking ID:</strong> {bookingDetails.id}</div>
              <div style={{ fontSize: '14px', marginBottom: '5px' }}><strong>Patient:</strong> {name}</div>
              <div style={{ fontSize: '14px', marginBottom: '5px' }}><strong>Phone:</strong> {phone}</div>
              <div style={{ fontSize: '14px' }}><strong>Address:</strong> {address}</div>
            </div>
          </div>
          
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              onClick={() => setShowConfirmation(false)} 
              className="auth-btn" 
              style={{ backgroundColor: '#6c757d', width: '48%' }}
            >
              Cancel Request
            </button>
            <Link 
              to="/" 
              className="auth-btn" 
              style={{ 
                backgroundColor: '#dc3545', 
                width: '48%', 
                textDecoration: 'none',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                padding: '12px 0'
              }}
            >
              Return Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmbulanceLogin;
