import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
import Home from "./pages/Home"; 
import About from "./pages/About";
import Mandate from "./pages/Mandate";
import Publications from "./pages/Publications";
import News from "./pages/News"
import Staff from "./pages/Staff"
import ContactUs from "./pages/ContactUs"

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Mandate" element={<Mandate />} />
        <Route path="/publications" element={<Publications />} />
         <Route path="/News" element={<News />} />
         <Route path="/Staff" element={<Staff />} />
         <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
     <Footer/>
     </>
  );
}
