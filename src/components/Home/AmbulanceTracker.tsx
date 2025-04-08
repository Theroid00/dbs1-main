
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AmbulanceTracker = () => {
  return (
    <section className="py-16 md:py-24 bg-healthcare-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-healthcare-900 mb-4">
              Real-time Ambulance Tracking
            </h2>
            <p className="text-muted-foreground mb-6">
              Our ambulance tracking feature provides real-time updates on the location of emergency vehicles, 
              giving you peace of mind during critical situations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-healthcare-100 p-2 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-800">Live Location Updates</h3>
                  <p className="text-muted-foreground">
                    Track the ambulance location in real-time with our Uber-like interface.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-healthcare-100 p-2 rounded-full mt-1">
                  <Clock className="h-5 w-5 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-800">Estimated Arrival Time</h3>
                  <p className="text-muted-foreground">
                    Get accurate estimates of when the ambulance will arrive at your location.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-healthcare-100 p-2 rounded-full mt-1">
                  <User className="h-5 w-5 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-800">Driver Details</h3>
                  <p className="text-muted-foreground">
                    View the name, contact information, and vehicle details of the ambulance driver.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-lg border-healthcare-200 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emergency-500 emergency-pulse"></span>
                  Ambulance Tracking Demo
                </CardTitle>
                <CardDescription>Ambulance #A-12345 en route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md bg-healthcare-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=37.7749,-122.4194&zoom=13&size=600x400&markers=color:red%7C37.7749,-122.4194&key=YOUR_API_KEY')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <MapPin className="h-6 w-6 text-emergency-600" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hospital</span>
                    <span className="text-muted-foreground">Your Location</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-healthcare-600" />
                      <span className="text-sm font-medium">ETA: 8 minutes</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2.5 km away</span>
                  </div>
                </div>
                
                <div className="bg-healthcare-50 p-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-healthcare-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-healthcare-700" />
                    </div>
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-xs text-muted-foreground">Driver • ID: #DR-7890</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground w-full text-center">
                  This is a demonstration of the tracking interface
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

import { User } from 'lucide-react';

export default AmbulanceTracker;
