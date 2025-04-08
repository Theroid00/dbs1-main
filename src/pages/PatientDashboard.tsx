import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, FileText as FileMedical, Bell, Calendar, PlusCircle, Activity, FileText, Clock, Shield, AlertCircle, ChevronRight, Heart, Stethoscope } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const PatientDashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);
  const [covidData, setCovidData] = useState({
    riskLevel: 'Moderate',
    localCases: '32 new cases in your area',
    vaccineStatus: 'Complete',
    lastDose: '2024-12-10'
  });

  useEffect(() => {
    // Get current user from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setCurrentUser(user);

    // Get mock appointments (in a real app, this would come from an API)
    // For demo purposes, we'll create some mock appointments
    const mockAppointments = [
      {
        id: 'APT-001',
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        date: '2025-04-15T10:00:00',
        status: 'confirmed'
      }
    ];
    setUpcomingAppointments(mockAppointments);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <div className="text-right">
              <p className="font-medium">{currentUser?.name || 'Patient'}</p>
              <p className="text-sm text-muted-foreground">Patient ID: #{currentUser?.id || 'PT-12345'}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">Book Appointment</h3>
              <p className="text-sm text-muted-foreground mb-4">Schedule a consultation with our specialists</p>
              <Button className="w-full" asChild>
                <Link to="/book-appointment">Book Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-medium mb-2">Emergency Services</h3>
              <p className="text-sm text-muted-foreground mb-4">Request ambulance or urgent care assistance</p>
              <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                <Link to="/emergency">Request Help</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FileMedical className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Medical Records</h3>
              <p className="text-sm text-muted-foreground mb-4">View your medical history and prescriptions</p>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/medical-records">View Records</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* COVID-19 Information Section */}
        <Card className="overflow-hidden border-none shadow-md">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">COVID-19 Information</h2>
                <p className="text-blue-100">Stay updated on your vaccination status and local risk levels</p>
              </div>
              <Shield className="h-10 w-10 text-blue-100" />
            </div>
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-4">Your Vaccination Status</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Protection</span>
                    <span className="text-sm font-medium text-green-600">Complete</span>
                  </div>
                  <Progress value={100} className="h-2 bg-gray-100" />
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Primary Series</p>
                      <p className="text-xs text-muted-foreground">Completed on March 15, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">First Booster</p>
                      <p className="text-xs text-muted-foreground">Completed on November 22, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Shield className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Second Booster</p>
                      <p className="text-xs text-muted-foreground">Completed on December 10, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Local Risk Assessment</h3>
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <h4 className="font-medium text-amber-700">Moderate Risk Level</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">32 new cases reported in your area in the last 7 days</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Recommendations:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Consider wearing masks in crowded indoor settings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Practice good hand hygiene</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Stay home if you feel unwell</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  <Link to="/covid-updates">See Detailed Updates</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>My Appointments</CardTitle>
              <CardDescription>Manage your upcoming appointments</CardDescription>
            </div>
            <Button size="sm" variant="outline" asChild>
              <Link to="/book-appointment">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Appointment
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <CalendarDays className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{appointment.doctor}</h4>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        <p className="text-sm font-medium mt-1">
                          {new Date(appointment.date).toLocaleDateString()} at {new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">                      <Badge variant={appointment.status === 'confirmed' ? 'secondary' : 'outline'} className={appointment.status === 'confirmed' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}>
                        {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </Badge>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-medium mb-2">No Upcoming Appointments</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You have no scheduled appointments at the moment.
                </p>
                <Button asChild>
                  <Link to="/book-appointment">Book an Appointment</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Health Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Health Summary</CardTitle>
              <CardDescription>Your recent health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <span>Blood Pressure</span>
                  </div>
                  <span className="font-medium">120/80 mmHg</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <span>Heart Rate</span>
                  </div>
                  <span className="font-medium">72 BPM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <span>Blood Sugar</span>
                  </div>
                  <span className="font-medium">95 mg/dL</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">View All Metrics</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Prescriptions</CardTitle>
              <CardDescription>Your current medications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Amoxicillin</h4>
                      <p className="text-sm text-muted-foreground">500mg, 3 times daily</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    <span className="font-medium">Prescribed by:</span> Dr. Michael Chen
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/prescriptions">
                    <FileText className="h-4 w-4 mr-2" />
                    View All Prescriptions
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
