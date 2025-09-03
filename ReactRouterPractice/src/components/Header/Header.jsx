import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import {Link} from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        {/* Desktop Menu */}
       <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Button (Text instead of Icon) */}
        <button
          className="md:hidden px-3 py-1 border rounded text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close ✖" : "Menu ☰"}
        </button>
      </div>

     
    </nav>
  );
}
