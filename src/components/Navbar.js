"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view

  useEffect(() => {
    // Close the mobile menu when clicking outside
    const closeMenu = (e) => {
      if (!e.target.closest(".navbar")) setMenuOpen(false);
    };
    document.addEventListener("click", closeMenu);

    // Check for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust 768px for your breakpoint
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      document.removeEventListener("click", closeMenu);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle dropdown in mobile view
  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

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
        <li className="relative group">
          <a href="#" className="hover:text-[#FACC15] transition">
            SERVICES
          </a>
          <ul className="absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 transition-all duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible scale-95 group-hover:scale-100">
            <li>
              <a
                href="/services/software-development"
                className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition"
              >
                SOFTWARE DEVELOPMENT
              </a>
            </li>
            <li>
              <a
                href="/services/uiux-design"
                className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition"
              >
                UI/UX DESIGN
              </a>
            </li>
            <li>
              <a
                href="/services/testing"
                className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition"
              >
                AUTOMATION & TESTING
              </a>
            </li>
          </ul>
        </li>

        {/* TECHNOLOGIES Dropdown */}
        <li className="relative group">
          <a href="#" className="hover:text-[#FACC15] transition">
            TECHNOLOGIES
          </a>
          <ul className="absolute left-0 mt-2 bg-[#1E293B] shadow-lg rounded-md py-3 w-56 transition-all duration-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible scale-95 group-hover:scale-100">
            <li>
              <a
                href="#java"
                className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition"
              >
                JAVA
              </a>
            </li>
            <li>
              <a
                href="#c#"
                className="block px-5 py-3 hover:bg-[#FACC15] hover:text-black transition"
              >
                C#
              </a>
            </li>
          </ul>
        </li>

        {/* Other Links */}
        <li><Link href="/portfolio" className="hover:text-[#FACC15] transition">PORTFOLIO</Link></li>
        <li><Link href="/about" className="hover:text-[#FACC15] transition">ABOUT</Link></li>


        {/* CONTACT BUTTON */}
        <li>
          <a
            href="/contact"
            className="bg-[#4F46E5] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#4338CA] transition text-xl"
          >
            CONTACT
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "X" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1E293B] shadow-lg flex flex-col items-start space-y-4 py-6 md:hidden transform transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {/* Services with + */}
        <div className="flex flex-col items-start pl-6">
          <div className="flex items-center space-x-2">
            <span
              onClick={() => toggleDropdown("services")}
              className="text-xl font-semibold cursor-pointer"
            >
              Services
            </span>
            {dropdownOpen === "services" ? (
              <span className="text-white text-2xl">-</span>
            ) : (
              <span className="text-white text-2xl">+</span>
            )}
          </div>
          {dropdownOpen === "services" && (
            <div className="flex flex-col items-start pl-4 mt-4 space-y-2">
              <a
                href="/services/software-development"
                className="block text-md hover:text-[#FACC15] transition"
                onClick={() => setMenuOpen(false)}
              >
                Software Development
              </a>
              <a
                href="/services/uiux-design"
                className="block text-md hover:text-[#FACC15] transition"
                onClick={() => setMenuOpen(false)}
              >
                UI/UX Design
              </a>
              <a
                href="/services/testing"
                className="block text-md hover:text-[#FACC15] transition"
                onClick={() => setMenuOpen(false)}
              >
                Automation & Testing
              </a>
            </div>
          )}
        </div>

        {/* Technologies with + */}
        <div className="flex flex-col items-start pl-6">
          <div className="flex items-center space-x-2">
            <span
              onClick={() => toggleDropdown("technologies")}
              className="text-xl font-semibold cursor-pointer"
            >
              Technologies
            </span>
            {dropdownOpen === "technologies" ? (
              <span className="text-white text-2xl">-</span>
            ) : (
              <span className="text-white text-2xl">+</span>
            )}
          </div>
          {dropdownOpen === "technologies" && (
            <div className="flex flex-col items-start pl-4 mt-4 space-y-2">
              <a
                href="#java"
                className="block text-md hover:text-[#FACC15] transition"
                onClick={() => setMenuOpen(false)}
              >
                Java
              </a>
              <a
                href="#c#"
                className="block text-md hover:text-[#FACC15] transition"
                onClick={() => setMenuOpen(false)}
              >
                C#
              </a>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link href="/portfolio" passHref>
          <div
            className="block text-xl font-semibold hover:text-[#FACC15] transition pl-6"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </div>
        </Link>

        <Link href="/about" passHref>
          <div
            className="block text-xl font-semibold hover:text-[#FACC15] transition pl-6"
            onClick={() => setMenuOpen(false)}
          >
            About
          </div>
        </Link>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#4F46E5] px-6 py-3 rounded-lg text-white font-bold hover:bg-[#4338CA] transition duration-300 shadow-md"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
