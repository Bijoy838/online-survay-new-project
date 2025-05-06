import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Survey from "./pages/Survey";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPanel from "./pages/UserPanel";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [userRole, setUserRole] = useState(null); // Track the user role (admin or user)

  // Function to handle login and set the user role
  const handleLogin = (role) => {
    setUserRole(role); // Store the user role (admin or user)
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        {/* Main content with top padding to offset fixed navbar */}
        <main className="flex-grow-1 pt-5 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={userRole === "user" ? <UserPanel /> : <Login onLogin={handleLogin} />} />
            <Route path="/admin" element={userRole === "admin" ? <AdminPanel /> : <Login onLogin={handleLogin} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
