
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import Features from '@/components/Home/Features';
import Services from '@/components/Home/Services';
import AmbulanceTracker from '@/components/Home/AmbulanceTracker';
import DoctorSection from '@/components/Home/DoctorSection';
import EmergencySection from '@/components/Home/EmergencySection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <EmergencySection />
        <AmbulanceTracker />
        <DoctorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
