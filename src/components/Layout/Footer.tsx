
import React from 'react';
import { Link } from 'react-router-dom';
import { Hospital, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-healthcare-800 text-white">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hospital className="h-6 w-6 text-healthcare-300" />
              <h2 className="text-xl font-bold text-healthcare-100">HealthVista</h2>
            </div>
            <p className="text-healthcare-300 mb-4">
              Smart Healthcare Appointment and Emergency System - streamlining medical appointments and emergency response.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <Phone size={16} className="text-healthcare-300" />
              <span className="text-healthcare-300 text-sm">Emergency: 911</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail size={16} className="text-healthcare-300" />
              <span className="text-healthcare-300 text-sm">contact@healthvista.com</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={16} className="text-healthcare-300" />
              <span className="text-healthcare-300 text-sm">123 Medical Avenue, City</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-healthcare-100 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/appointments" className="text-healthcare-300 hover:text-white text-sm">Appointment Booking</Link></li>
              <li><Link to="/services/emergency" className="text-healthcare-300 hover:text-white text-sm">Emergency Services</Link></li>
              <li><Link to="/services/ambulance" className="text-healthcare-300 hover:text-white text-sm">Ambulance Tracking</Link></li>
              <li><Link to="/services/doctors" className="text-healthcare-300 hover:text-white text-sm">Doctor Consultations</Link></li>
              <li><Link to="/services/telemedicine" className="text-healthcare-300 hover:text-white text-sm">Telemedicine</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-healthcare-100 font-semibold mb-4">Patient Portal</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-healthcare-300 hover:text-white text-sm">Login</Link></li>
              <li><Link to="/register" className="text-healthcare-300 hover:text-white text-sm">Register</Link></li>
              <li><Link to="/appointments" className="text-healthcare-300 hover:text-white text-sm">My Appointments</Link></li>
              <li><Link to="/medical-records" className="text-healthcare-300 hover:text-white text-sm">Medical Records</Link></li>
              <li><Link to="/prescriptions" className="text-healthcare-300 hover:text-white text-sm">Prescriptions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-healthcare-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-healthcare-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-healthcare-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/privacy" className="text-healthcare-300 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-healthcare-300 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-healthcare-300 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-healthcare-700 mt-10 pt-6 text-center text-healthcare-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HealthVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
