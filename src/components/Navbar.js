"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  useEffect(() => {
    // Close the mobile menu when clicking outside
    const closeMenu = (e) => {
      if (!e.target.closest(".navbar")) setMenuOpen(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <nav className="navbar bg-[#121826] bg-opacity-90 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50 transition-all">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Sphere Sync Solution" width={50} height={50} />
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide">SPHERE SYNC SOLUTION</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8 text-lg font-semibold">
        {/* SERVICES Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setDropdownOpen("services")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <a href="#" className="hover:text-[#FACC15] transition">SERVICES</a>
          <ul
            className={`absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 transition-all duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible scale-95 group-hover:scale-100 ${
              dropdownOpen === "services" ? "opacity-100 visible scale-100" : ""
            }`}
          >
            <li><a href="/services/software-development" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">SOFTWARE DEVELOPMENT</a></li>
            <li><a href="/services/uiux-design" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">UI/UX DESIGN</a></li>
            <li><a href="/services/testing" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">AUTOMATION & TESTING</a></li>
          </ul>
        </li>

        {/* TECHNOLOGIES Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setDropdownOpen("technologies")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <a href="#" className="hover:text-[#FACC15] transition">TECHNOLOGIES</a>
          <ul
            className={`absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 transition-all duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible scale-95 group-hover:scale-100 ${
              dropdownOpen === "technologies" ? "opacity-100 visible scale-100" : ""
            }`}
          >
            <li><a href="#react" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">REACT.JS</a></li>
            <li><a href="#nextjs" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">NEXT.JS</a></li>
            <li><a href="#nodejs" className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition">NODE.JS</a></li>
          </ul>
        </li>

        {/* OTHER MENU ITEMS */}
        <li><a href="#portfolio" className="hover:text-[#FACC15] transition">PORTFOLIO</a></li>
        <li><a href="#about" className="hover:text-[#FACC15] transition">ABOUT</a></li>

        {/* CONTACT BUTTON */}
        <li>
          <a href="/contact" className="bg-[#4F46E5] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#4338CA] transition">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1E293B] shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden transform transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {/* Services */}
        <a href="/services/software-development" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>SOFTWARE DEVELOPMENT</a>
        <a href="/services/uiux-design" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>UI/UX DESIGN</a>
        <a href="/services/testing" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>AUTOMATION & TESTING</a>

        {/* Technologies */}
        <a href="#react" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>REACT.JS</a>
        <a href="#nextjs" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>NEXT.JS</a>
        <a href="#nodejs" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>NODE.JS</a>

        {/* Other Links */}
        <a href="#portfolio" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
        <a href="#about" className="block text-lg hover:text-[#FACC15] transition" onClick={() => setMenuOpen(false)}>ABOUT</a>

        {/* Contact Button */}
        <a href="/contact" className="bg-[#4F46E5] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#4338CA] transition duration-300 shadow-md" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
}
