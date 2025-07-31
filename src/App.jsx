import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
import Home from "./pages/Home"; 
import About from "./pages/About";
import Publications from "./pages/Publications";
import Sectors from "./pages/Sectors";
import Products from "./pages/Products"
import Staff from "./pages/Staff"
import ContactUs from "./pages/ContactUs"

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
         <Route path="/Sectors" element={<Sectors />} />
         <Route path="/Products" element={<Products />} />
         <Route path="/Staff" element={<Staff />} />
         <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
     <Footer/>
     </>
  );
}
