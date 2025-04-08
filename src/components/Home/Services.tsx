
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, User, FileText, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-healthcare-600" />,
      title: "Appointment Booking",
      description: "Schedule your medical appointments online with our easy-to-use booking system.",
      link: "/book-appointment"
    },
    {
      icon: <Bell className="h-10 w-10 text-emergency-500" />,
      title: "Emergency Services",
      description: "Fast response emergency services with online ambulance requests and doctor availability.",
      link: "/emergency",
      emergency: true
    },
    {
      icon: <MapPin className="h-10 w-10 text-healthcare-600" />,
      title: "Ambulance Tracking",
      description: "Real-time ambulance tracking with driver details and estimated arrival time.",
      link: "/ambulance-tracking"
    },
    {
      icon: <User className="h-10 w-10 text-healthcare-600" />,
      title: "Doctor Information",
      description: "Find detailed information about our doctors including qualifications and specialties.",
      link: "/doctors"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-healthcare-900">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            We provide a range of healthcare services designed to improve efficiency and patient care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl shadow-md flex flex-col h-full ${
                service.emergency ? 'bg-emergency-50 border border-emergency-200' : 'bg-healthcare-50 border border-healthcare-200'
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${service.emergency ? 'text-emergency-700' : 'text-healthcare-800'}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              <Button
                asChild
                variant={service.emergency ? "destructive" : "default"}
                className={
                  service.emergency 
                    ? "bg-emergency-600 hover:bg-emergency-700 mt-2 self-start" 
                    : "bg-healthcare-600 hover:bg-healthcare-700 mt-2 self-start"
                }
              >
                <Link to={service.link}>
                  {service.emergency ? "Request Emergency" : "Learn More"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
