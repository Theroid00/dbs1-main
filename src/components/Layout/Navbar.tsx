
import React from 'react';
import { Link } from 'react-router-dom';
import { Hospital, Calendar, Phone, Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Hospital className="h-6 w-6 text-healthcare-600" />
          <Link to="/" className="text-xl font-bold text-healthcare-700">
            HealthVista
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            Services
          </Link>
          <Link to="/doctors" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            Doctors
          </Link>
          <Link to="/emergency" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            Emergency
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-healthcare-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground" asChild>
            <Link to="/emergency">
              <Bell className="h-5 w-5 text-emergency-600" />
              <span className="sr-only">Emergency</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground" asChild>
            <Link to="/appointments">
              <Calendar className="h-5 w-5" />
              <span className="sr-only">Appointments</span>
            </Link>
          </Button>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link to="/login">
              <User className="mr-2 h-4 w-4" />
              <span>Login</span>
            </Link>
          </Button>
          <Button className="hidden md:flex bg-healthcare-600 hover:bg-healthcare-700" asChild>
            <Link to="/book-appointment">
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
