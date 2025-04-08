import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '800px' }}>
        <div className="auth-header">
          <img src="/pics/jeevan.png" alt="Jeevan Logo" />
          <h2>About JEEVAN</h2>
          <p>Our mission and vision for healthcare</p>
        </div>
        
        <div className="about-content" style={{ padding: '20px', textAlign: 'justify' }}>
          <h3 style={{ color: '#082661', marginBottom: '15px' }}>Our Story</h3>
          <p style={{ marginBottom: '20px' }}>
            JEEVAN was founded in 2020 with a simple yet powerful mission: to make healthcare accessible to everyone, 
            everywhere. Our name, which means "life" in many Indian languages, reflects our commitment to improving 
            and saving lives through technology-enabled healthcare solutions.
          </p>
          
          <h3 style={{ color: '#082661', marginBottom: '15px' }}>Our Mission</h3>
          <p style={{ marginBottom: '20px' }}>
            We aim to bridge the gap between medical professionals and patients, ensuring care is accessible, secure, 
            and reliable for everyone. By leveraging technology, we're reducing wait times, streamlining appointment 
            bookings, and providing emergency services at the click of a button.
          </p>
          
          <h3 style={{ color: '#082661', marginBottom: '15px' }}>Our Services</h3>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>24/7 Ambulance Service</strong>: Emergency response with real-time tracking
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Online Consultations</strong>: Connect with specialists from the comfort of your home
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Appointment Scheduling</strong>: Book appointments with leading doctors without the hassle of waiting in line
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Digital Prescriptions</strong>: Receive and manage your prescriptions online
            </li>
          </ul>
          
          <h3 style={{ color: '#082661', marginBottom: '15px' }}>Our Team</h3>
          <p style={{ marginBottom: '20px' }}>
            JEEVAN is powered by a team of healthcare professionals, technologists, and patient care advocates who are 
            passionate about transforming healthcare delivery. Our medical board includes specialists from various fields 
            who ensure all our services meet the highest standards of medical care.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h4 style={{ color: '#4a77d2', marginBottom: '10px' }}>Ready to experience better healthcare?</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <Link to="/patient-login" style={{ 
                padding: '10px 20px',
                backgroundColor: '#4a77d2',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                Patient Login
              </Link>
              <Link to="/doctor-login" style={{ 
                padding: '10px 20px',
                backgroundColor: '#082661',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                Doctor Login
              </Link>
            </div>
          </div>
        </div>
        
        <div className="auth-links" style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
