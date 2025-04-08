import React from 'react';
import { Link } from 'react-router-dom';

const JeevanHome = () => {
  return (
    <>      <section className="main">        <nav className="navbar">
          <ul>
            <li><Link to="/"><img src="/Jeevan/pics/jeevan.png" alt="Logo" className="logo" style={{ width: '60px', height: '30px' }} /></Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="container">
          <div className="title">
            <img src="/Jeevan/pics/jeevan.png" alt="Logo" className="logo" style={{ width: '300px', height: '125px' }} />
            <p>JEEVAN - Empowering Lives Through Seamless Healthcare.</p>
          </div>
          <div className="sidebar position-absolute glassy-sidebar" style={{ position: 'absolute', top: '300px', left: '20px' }}>
            <Link to="/doctor-login"><i className="fas fa-user-md me-2"></i>Doctor Login</Link>
            <Link to="/patient-login"><i className="fas fa-user me-2"></i>Patient Login</Link>
            <Link to="/ambulance-login" className="danger"><i className="fas fa-ambulance me-2"></i>Book an Ambulance</Link>
          </div>
          <div className="buttons glassy-buttons" style={{ marginTop: '100px' }}>
            <button className="btn btn-primary" onClick={() => window.location.href='/patient-login'}>Book an Appointment</button>
            <button className="btn btn-primary" onClick={() => window.location.href='/ambulance-login'}>Book an Ambulance</button>
          </div>
        </div>
      </section>      <div className="doctor">
        <section className="doctors-section">
          <h2>Meet Our Top Doctors</h2>
          <div className="doctors-grid">            <div className="doctor-card">              <img src="/Jeevan/pics/priyal.jpg" alt="Dr. Priya Sharma" />
              <h3>Dr. Priya Sharma</h3>
              <p>Cardiologist</p>
              <p>Over 5 years of experience in heart care and patient recovery.</p>
            </div>
            
            <div className="doctor-card">
              <img src="/Jeevan/pics/𝓓𝓻_ 𝓜𝓲𝓴𝓮_.jpg" alt="Dr. Raj Mehta" />
              <h3>Dr. Raj Mehta</h3>
              <p>Neurologist</p>
              <p>Specializes in treating complex neurological disorders with care.</p>
            </div>
            
            <div className="doctor-card">
              <img src="/Jeevan/pics/arunn.jpg" alt="Dr. Arjun Nair" />
              <h3>Dr. Arjun Nair</h3>
              <p>Dermatologist</p>
              <p>Experienced in treating skin conditions with advanced cosmetic solutions.</p>
            </div>
                 
            <div className="doctor-card">
              <img src="/Jeevan/pics/amit.jpg" alt="Dr. Amit Verma" />
              <h3>Dr. Amit Verma</h3>
              <p>Orthopedic Surgeon</p>
              <p>Expert in joint replacement and sports injury treatments.</p>
            </div>
            
            <div className="doctor-card">
              <img src="/Jeevan/pics/neha.jpg" alt="Dr. Sneha Kapoor" />
              <h3>Dr. Sneha Kapoor</h3>
              <p>Pediatrician</p>
              <p>Dedicated to providing compassionate care for children and newborns.</p>
            </div>
          </div>
        </section>
      </div>
      
      <section className="lend">
        <div className="howtolend">
          <h1>What We Offer?</h1>        <div className="steps">            <div className="step">
              <h1>24/7 Ambulance Booking</h1>              <div className="circle-img">
                <img src="/Jeevan/pics/ambulance.png" alt="Ambulance Icon" />
              </div>
              <p>Book an ambulance anytime, 24/7.</p>
            </div>
            
            <div className="step">
              <h1>Find the Right Doctor</h1>
              <div className="circle-img">
                <img src="/Jeevan/pics/doctor.png" alt="Doctor Icon" />
              </div>
              <p>Book the doctor you need, tailored to your preferences.</p>
            </div>
            
            <div className="step">
              <h1>Get a Free Prescription</h1>
              <div className="circle-img">
                <img src="/Jeevan/pics/free.png" alt="Prescription Icon" />
              </div>
              <p>Just type your symptoms to receive a free doctor's prescription.</p>
            </div>
            
            <div className="step">
              <h1>Book Appointments</h1>
              <div className="circle-img">
                <img src="/Jeevan/pics/receipt.png" alt="Appointment Icon" />
              </div>
              <p>Skip the queues—book appointments and get medical receipts online, hassle-free and free of cost.</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '100px' }}>
        <section className="about-us" id="about">
          <div className="about-container">
            <h2>About Us</h2>
            <p>
              <strong>JEEVAN</strong> is a unified healthcare portal built to serve both <strong>patients</strong> and <strong>doctors</strong>. 
              Our platform enables patients to easily access medical services—including ambulance booking—while giving doctors the tools 
              to consult, manage, and care efficiently.
            </p>
            <p>
              We aim to bridge the gap between medical professionals and those who need them most, ensuring care is accessible, secure, 
              and reliable for everyone.
            </p>
            
            <div className="social-links">
              <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </div>
            
            <p className="footer">© {new Date().getFullYear()} JEEVAN Healthcare Portal. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default JeevanHome;
