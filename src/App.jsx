import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Certificate from "./components/Pages/Certificate.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route
          path="/products"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Products Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/services"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Services Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              About Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/team"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Team Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/careers"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Careers Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/case-studies"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Case Studies Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/blogs"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Blogs Page - Coming Soon
            </div>
          }
        />
        <Route
          path="/privacy"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Privacy Policy - Coming Soon
            </div>
          }
        />
        <Route
          path="/terms"
          element={
            <div className="h-96 flex items-center justify-center text-2xl">
              Terms of Service - Coming Soon
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
