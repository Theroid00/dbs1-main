import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Emergency from "@/pages/Emergency";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import JeevanHome from "@/pages/JeevanHome";
import PatientLogin from "@/pages/PatientLogin";
import DoctorLogin from "@/pages/DoctorLogin";
import AmbulanceLogin from "@/pages/AmbulanceLogin";
import "./jeevan.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JeevanHome />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/ambulance-login" element={<AmbulanceLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
