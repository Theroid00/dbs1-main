
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, MapPin, ArrowRight, User, Phone, Ambulance } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const Emergency = () => {
  const [requestSent, setRequestSent] = useState(false);
  
  const handleEmergencyRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // In real system, this would connect to backend to request ambulance
    setRequestSent(true);
    toast({
      title: "Emergency request sent!",
      description: "An ambulance has been dispatched to your location.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-emergency-600 py-12 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="h-12 w-12 mx-auto mb-4 text-emergency-200" />
            <h1 className="text-3xl font-bold mb-4">Emergency Services</h1>
            <p className="text-emergency-100">
              Request an ambulance, find available doctors, and receive online receipts for emergency medical services.
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-healthcare-50 py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-healthcare-800">
                  For life-threatening emergencies, please call <span className="text-emergency-600">911</span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {!requestSent ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ambulance className="h-5 w-5 text-emergency-500" />
                      Request Ambulance
                    </CardTitle>
                    <CardDescription>
                      Complete the form to request an ambulance to your location
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleEmergencyRequest} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                          <Input id="name" placeholder="Enter your full name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                          <Input id="phone" placeholder="Enter your phone number" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-medium">Current Address</label>
                        <Input id="address" placeholder="Enter your current address" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="emergency" className="text-sm font-medium">Emergency Description</label>
                        <Textarea id="emergency" placeholder="Briefly describe the emergency situation" required />
                      </div>
                      
                      <Button type="submit" className="w-full bg-emergency-600 hover:bg-emergency-700">
                        Request Ambulance Now
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-emergency-600">Ambulance Dispatched</CardTitle>
                    <CardDescription>
                      An ambulance has been sent to your location
                    </CardDescription>
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
                      <Progress value={30} className="h-2" />
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5">
                          <Bell className="h-4 w-4 text-emergency-600" />
                          <span className="text-sm font-medium">ETA: 12 minutes</span>
                        </div>
                        <span className="text-xs text-muted-foreground">3.8 km away</span>
                      </div>
                    </div>
                    
                    <div className="bg-healthcare-50 p-3 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-healthcare-200 flex items-center justify-center">
                          <User className="h-6 w-6 text-healthcare-700" />
                        </div>
                        <div>
                          <div className="font-medium">Michael Smith</div>
                          <div className="text-xs text-muted-foreground">Driver • ID: #DR-5678</div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto" asChild>
                          <a href="tel:+1234567890">
                            <Phone className="h-4 w-4 mr-1" /> Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel Request</Button>
                    <Button className="bg-emergency-600 hover:bg-emergency-700">Share Location</Button>
                  </CardFooter>
                </Card>
              )}
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-healthcare-600" />
                      Available Doctors
                    </CardTitle>
                    <CardDescription>
                      Doctors currently on emergency duty
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Dr. James Wilson", specialty: "Emergency Medicine", status: "Available" },
                        { name: "Dr. Lisa Chen", specialty: "Trauma Surgery", status: "In Surgery" },
                        { name: "Dr. Robert Thomas", specialty: "Critical Care", status: "Available" },
                      ].map((doctor, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-md border">
                          <div>
                            <div className="font-medium">{doctor.name}</div>
                            <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            doctor.status === "Available" 
                              ? "bg-success-100 text-success-700" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {doctor.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/doctors">
                        View All Doctors <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-emergency-50 text-emergency-800 rounded-md border border-emergency-200">
                      <h4 className="font-medium mb-1">What qualifies as an emergency?</h4>
                      <p className="text-sm">
                        Chest pain, severe bleeding, difficulty breathing, severe burns, or any life-threatening condition.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-healthcare-50 text-healthcare-800 rounded-md border border-healthcare-200">
                      <h4 className="font-medium mb-1">What to do while waiting for an ambulance</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Stay on the phone with emergency services</li>
                        <li>Clear a path for the paramedics to enter</li>
                        <li>Gather patient's medications if possible</li>
                        <li>Keep the patient calm and still</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-muted text-foreground rounded-md">
                      <h4 className="font-medium mb-1">Online Receipt Generation</h4>
                      <p className="text-sm">
                        After receiving emergency services, digital receipts will be generated for insurance claims.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
