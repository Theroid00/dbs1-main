
import React from 'react';
import { Link } from 'react-router-dom';
import { User, FileText, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const DoctorSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: null,
      initials: "SJ",
      experience: "15+ years",
      qualification: "MD, FACC",
      availability: "Mon, Wed, Fri"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: null,
      initials: "MC",
      experience: "12+ years",
      qualification: "MD, PhD",
      availability: "Tue, Thu, Sat"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: null,
      initials: "ER",
      experience: "8+ years",
      qualification: "MD, FAAP",
      availability: "Mon, Thu, Sat"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-healthcare-900 mb-4">
              Our Specialist Doctors
            </h2>
            <p className="text-muted-foreground mb-6">
              Access detailed information about our doctors including their qualifications, experience, and specialties before scheduling your appointment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-healthcare-100 p-2 rounded-full mt-1">
                  <User className="h-5 w-5 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-800">Expert Specialists</h3>
                  <p className="text-muted-foreground">
                    Our doctors are highly qualified specialists in their respective fields.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-healthcare-100 p-2 rounded-full mt-1">
                  <FileText className="h-5 w-5 text-healthcare-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-800">Complete Profiles</h3>
                  <p className="text-muted-foreground">
                    View doctor qualifications, experience, and available appointment times.
                  </p>
                </div>
              </div>
              
              <Button asChild className="mt-4 bg-healthcare-600 hover:bg-healthcare-700">
                <Link to="/doctors">
                  View All Doctors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="flex flex-row border-healthcare-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 flex items-center">
                  <Avatar className="h-20 w-20 border-2 border-healthcare-100">
                    {doctor.image ? (
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                    ) : (
                      <AvatarFallback className="bg-healthcare-200 text-healthcare-800">
                        {doctor.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-healthcare-800">{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-healthcare-50">
                      {doctor.experience}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-healthcare-700">Qualification:</span> {doctor.qualification}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-healthcare-700">Available:</span> {doctor.availability}
                    </p>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button asChild variant="ghost" size="sm" className="text-healthcare-700 hover:text-healthcare-800 hover:bg-healthcare-50">
                      <Link to={`/doctors/${doctor.id}`}>
                        View Profile
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
