import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { } from "react";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { createContext } from 'react';

// pages & components
import Home from "./components/HomePage/Home/Home";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login&SignUp/LoginForm";
import Appointment from "./components/AppointmentPage/Appointment/Appointment.js";

export const UserContext = createContext();
function App() {
  const { user } = useAuthContext();


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}/>
          <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/" />} />
          <Route path = "/appointment" element={<Appointment/>}/>
    
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
