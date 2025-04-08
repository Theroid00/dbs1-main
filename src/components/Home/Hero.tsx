
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-healthcare-600 to-healthcare-800 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('/public/lovable-uploads/c2c10fb0-e038-40a4-9651-1736834386c9.png')] bg-center bg-cover"></div>
      <div className="container relative px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-in">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
              Smart Healthcare<br />
              <span className="text-healthcare-200">Appointment and Emergency System</span>
            </h1>
            <p className="text-lg text-healthcare-100 md:max-w-[500px]">
              Streamlining medical appointment scheduling and emergency response with real-time tracking and automated booking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-healthcare-700 hover:bg-healthcare-100">
                <Link to="/book-appointment">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/emergency">
                  <Clock className="mr-2 h-4 w-4" />
                  Emergency Services
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">24/7</span>
                <span className="text-sm text-healthcare-200">Emergency Care</span>
              </div>
              <div className="w-px h-12 bg-healthcare-400/30"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-sm text-healthcare-200">Specialists</span>
              </div>
              <div className="w-px h-12 bg-healthcare-400/30"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">15k+</span>
                <span className="text-sm text-healthcare-200">Patient Visits</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl animate-in lg:ml-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Quick Appointment</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-1 text-sm text-healthcare-200">For New Patients</h4>
                  <p className="text-sm">Identify your issue and schedule a first visit easily</p>
                  <Link to="/register" className="flex items-center text-sm mt-2 text-healthcare-200 hover:text-white">
                    Register Now <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-1 text-sm text-healthcare-200">For Regular Patients</h4>
                  <p className="text-sm">Login to book, verify, or reschedule appointments</p>
                  <Link to="/login" className="flex items-center text-sm mt-2 text-healthcare-200 hover:text-white">
                    Login Now <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="bg-emergency-600/20 p-4 rounded-lg">
                <h4 className="font-medium mb-1 text-sm text-emergency-200">Emergency Module</h4>
                <p className="text-sm">Request ambulance and find available doctors</p>
                <Link to="/emergency" className="flex items-center text-sm mt-2 text-emergency-200 hover:text-white">
                  Emergency Services <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-medium mb-1 text-sm text-healthcare-200">Ambulance Tracking</h4>
                <p className="text-sm">Track ambulance location in real-time</p>
                <Link to="/ambulance-tracking" className="flex items-center text-sm mt-2 text-healthcare-200 hover:text-white">
                  Track Now <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
