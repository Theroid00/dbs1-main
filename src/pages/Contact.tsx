import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save the contact form data to localStorage (mock database)
    const contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    contactMessages.push({
      id: `MSG-${Date.now()}`,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      status: 'unread'
    });
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
    
    // Show success message
    setSubmitted(true);
    
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '600px' }}>
        <div className="auth-header">
          <img src="/pics/jeevan.png" alt="Jeevan Logo" />
          <h2>Contact Us</h2>
          <p>We'd love to hear from you</p>
        </div>
        
        {!submitted ? (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                rows={5}
                style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #d2e0fb' }}
                required
              />
            </div>
            
            <button type="submit" className="auth-btn">Send Message</button>
          </form>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              fontSize: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <i className="fas fa-check"></i>
            </div>
            <h3 style={{ color: '#082661', marginBottom: '10px' }}>Message Sent!</h3>
            <p style={{ marginBottom: '20px' }}>Thank you for reaching out to us. We'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="auth-btn" 
              style={{ width: 'auto', display: 'inline-block', padding: '10px 20px' }}
            >
              Send Another Message
            </button>
          </div>
        )}
        
        <div style={{ padding: '20px', borderTop: '1px solid #eaeaea', marginTop: '20px' }}>
          <h4 style={{ color: '#082661', marginBottom: '15px' }}>Other Ways to Reach Us</h4>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: '#f8f9fa', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginRight: '15px'
            }}>
              <i className="fas fa-phone" style={{ color: '#4a77d2' }}></i>
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Emergency Hotline</div>
              <div>+1 (800) JEEVAN-HELP</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: '#f8f9fa', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginRight: '15px'
            }}>
              <i className="fas fa-envelope" style={{ color: '#4a77d2' }}></i>
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Email</div>
              <div>support@jeevan-healthcare.com</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: '#f8f9fa', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginRight: '15px'
            }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#4a77d2' }}></i>
            </div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Office</div>
              <div>123 Healthcare Avenue, Medical District, CA 90210</div>
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

export default Contact;
