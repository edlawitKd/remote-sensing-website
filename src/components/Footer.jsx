import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#204E67] text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Remote Sensing Department</h3>
          <h5 className="text-sm mb-4">Space Science and Geospatial Institution</h5>

          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-[#DD994D]" />
            <p>Addis Ababa, Ethiopia</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-[#DD994D]" />
            <p>+251 901 232 12</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-[#DD994D]" />
            <p>remotes@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/Reasearch" className="hover:text-[#DD994D]">Research</Link></li>
            <li><Link to="/publication" className="hover:text-[#DD994D]">Publications</Link></li>
            <li><a href="#" className="hover:text-[#DD994D]">Staff</a></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-10 text-[#DD994D]">
        © 2025 Remote Sensing. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
