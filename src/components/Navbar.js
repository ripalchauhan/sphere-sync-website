// components/Navbar.js
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#121826] to-[#1E293B] text-white py-6 px-10 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50 uppercase tracking-widest">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Sphere Sync Solution" width={50} height={50} />
        <span className="text-3xl font-extrabold tracking-wide">SPHERE SYNC SOLUTION</span>
      </div>

      {/* Desktop Navigation with Dropdowns */}
      <ul className="hidden md:flex items-center space-x-12 text-lg font-semibold">
        {/* SERVICES Dropdown */}
        <li className="relative group">
          <a href="#" className="hover:text-[#FACC15] transition duration-300">SERVICES</a>
          <ul className="absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
            <li><a href="#services" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">SOFTWARE DEVELOPMENT</a></li>
            <li><a href="#uiux" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">UI/UX DESIGN</a></li>
            <li><a href="#testing" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">AUTOMATION & TESTING</a></li>
          </ul>
        </li>

        {/* TECHNOLOGIES Dropdown */}
        <li className="relative group">
          <a href="#" className="hover:text-[#FACC15] transition duration-300">TECHNOLOGIES</a>
          <ul className="absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
            <li><a href="#react" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">REACT.JS</a></li>
            <li><a href="#nextjs" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">NEXT.JS</a></li>
            <li><a href="#nodejs" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">NODE.JS</a></li>
          </ul>
        </li>

        {/* PORTFOLIO */}
        <li><a href="#portfolio" className="hover:text-[#FACC15] transition duration-300">PORTFOLIO</a></li>

        {/* ABOUT Dropdown */}
        <li className="relative group">
          <a href="#" className="hover:text-[#FACC15] transition duration-300">ABOUT</a>
          <ul className="absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
            <li><a href="#company" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">COMPANY</a></li>
            <li><a href="#team" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">TEAM</a></li>
            <li><a href="#careers" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black">CAREERS</a></li>
          </ul>
        </li>

        {/* CONTACT BUTTON */}
        <li>
  <a href="/contact" className="bg-[#4F46E5] px-8 py-4 rounded-full text-white font-bold hover:bg-[#4338CA] transition duration-300 shadow-md">
    CONTACT
  </a>
    </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}
