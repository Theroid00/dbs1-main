import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="bg-white shadow p-4 mb-6">
        <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
      </header>

      <main className="space-y-6">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">My Appointments</h2>
          <p>View and manage your upcoming appointments.</p>
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Patient Records</h2>
          <p>Access and update patient medical records.</p>
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Emergency Requests</h2>
          <p>Respond to emergency service requests.</p>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
