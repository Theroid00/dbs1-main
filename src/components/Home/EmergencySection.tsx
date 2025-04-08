
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EmergencySection = () => {
  return (
    <section className="py-12 md:py-16 bg-emergency-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 mb-6">
              <Bell className="mr-1 h-3.5 w-3.5 text-emergency-200" />
              <span className="text-xs text-emergency-100">Emergency Services</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              24/7 Emergency Response System
            </h2>
            <p className="text-emergency-100 mb-6 text-lg">
              Our emergency module allows patients to quickly request ambulance services, find available doctors, 
              and receive online receipts for medical services.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-emergency-100" />
                </div>
                <div className="text-emergency-100">Fast response times</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-emergency-100" />
                </div>
                <div className="text-emergency-100">Real-time tracking of emergency vehicles</div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-emergency-100" />
                </div>
                <div className="text-emergency-100">Direct communication with medical staff</div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emergency-600 hover:bg-emergency-100">
                <Link to="/emergency">
                  Request Emergency Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/10">
                <Link to="/services/emergency">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl lg:ml-10">
            <div className="absolute top-0 right-0 p-2 bg-emergency-500 text-white text-xs font-medium rounded-bl-lg rounded-tr-lg">
              EMERGENCY
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">Emergency Response Features</h3>
              
              <div className="bg-white/5 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
                <div className="bg-emergency-500 p-3 rounded-full">
                  <Bell className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Ambulance Request</h4>
                  <p className="text-emergency-200 text-sm">Request ambulance with just a few clicks</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
                <div className="bg-emergency-500 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Ambulance Tracking</h4>
                  <p className="text-emergency-200 text-sm">Track real-time location and ETA</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
                <div className="bg-emergency-500 p-3 rounded-full">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Find Available Doctors</h4>
                  <p className="text-emergency-200 text-sm">Quickly locate doctors on duty</p>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-center">
                <div className="bg-emergency-500 p-3 rounded-full">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Online Receipts</h4>
                  <p className="text-emergency-200 text-sm">Receive digital receipts for all services</p>
                </div>
              </div>
              
              <div className="mt-4 text-center text-emergency-200 text-sm">
                <p>For life-threatening emergencies, please call</p>
                <p className="text-white text-xl font-bold mt-1">911</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { User, FileText } from 'lucide-react';

export default EmergencySection;
