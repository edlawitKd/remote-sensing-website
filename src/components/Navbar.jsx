import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#204E67] text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#DD994D]">Remote Sensing Dept.</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-[#DD994D]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#DD994D]">About</Link></li>
          <li><Link to="/publications" className="hover:text-[#DD994D]">Publications</Link></li>
          <li><Link to="/Sectors" className="hover:text-[#DD994D]">Sectors</Link></li>
          <li><Link to="/Products" className="hover:text-[#DD994D]">Product & Service</Link></li>
          <li><Link to="/Staff" className="hover:text-[#DD994D]">Staff</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-3 mt-2 md:hidden px-4">
          <li><Link to="/" className="hover:text-[#DD994D]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#DD994D]">About</Link></li>
          <li><Link to="/publications" className="hover:text-[#DD994D]">Publications</Link></li>
          <li><Link to="/sectors" className="hover:text-[#DD994D]">Sectors</Link></li>
          <li><Link to="/Products" className="hover:text-[#DD994D]">Product & Service</Link></li>
          <li><Link to="/Staff" className="hover:text-[#DD994D]">Staff</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
