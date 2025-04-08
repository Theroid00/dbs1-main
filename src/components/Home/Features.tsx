
import React from 'react';
import { Calendar, Clock, User, Bell, MapPin, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-healthcare-600" />,
      title: "Appointment Scheduling",
      description: "Book, reschedule, or cancel appointments with ease through our automated system."
    },
    {
      icon: <Clock className="h-8 w-8 text-healthcare-600" />,
      title: "Real-time Tracking",
      description: "Monitor ambulance location and estimated arrival time with our tracking system."
    },
    {
      icon: <User className="h-8 w-8 text-healthcare-600" />,
      title: "Doctor Portal",
      description: "Doctors can manage scheduled appointments and provide assistance to staff."
    },
    {
      icon: <Bell className="h-8 w-8 text-emergency-500" />,
      title: "Emergency Module",
      description: "Request ambulance services, find available doctors, and receive online receipts."
    },
    {
      icon: <MapPin className="h-8 w-8 text-healthcare-600" />,
      title: "Uber-like Interface",
      description: "Track ambulance with driver details, vehicle number, and estimated arrival time."
    },
    {
      icon: <FileText className="h-8 w-8 text-healthcare-600" />,
      title: "Doctor Information",
      description: "Access doctor qualifications and experience before scheduling an appointment."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-healthcare-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-healthcare-900">Key System Features</h2>
          <p className="mt-4 text-muted-foreground">
            Our smart healthcare system provides a comprehensive solution for patients and medical staff.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-healthcare-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
