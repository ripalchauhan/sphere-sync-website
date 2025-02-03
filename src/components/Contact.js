"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    file: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Company Info) */}
      <div
        className="md:w-1/2 p-12 text-white flex flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/contactus.jpg')" }}
      >
        <h1 className="text-5xl font-bold">CONTACT US</h1>
        <p className="text-lg mt-4">
          Please send us your requirements, and we’ll get back to you at the earliest.
        </p>
        <div className="mt-6">
          <p className="text-lg font-semibold">Inquiry:</p>
          <a href="mailto:info@spheresync.com" className="text-yellow-300 hover:underline">
            info@spheresync.com
          </a>
          <p className="mt-4 text-lg font-semibold">Work with us:</p>
          <a href="mailto:careers@spheresync.com" className="text-yellow-300 hover:underline">
            careers@spheresync.com
          </a>
        </div>
      </div>

      {/* Right Side (Contact Form) */}
      <div className="md:w-1/2 bg-white p-12 shadow-lg">
        <h2 className="text-4xl font-bold text-[#1E293B]">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
            onChange={handleChange}
          />

          {/* Adjusted Country Dropdown for Mobile */}
          <select
            name="country"
            className="w-full p-4 border border-gray-300 rounded-lg sm:w-96" // Adjust width for mobile devices
            onChange={handleChange}
          >
            <option>Select Country</option>
            <option>United States</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          <input
            type="file"
            name="file"
            className="w-full p-3 border border-gray-300 rounded-lg"
            onChange={handleFileChange}
          />
          <textarea
            name="message"
            placeholder="Description"
            className="w-full p-4 border border-gray-300 rounded-lg h-32"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-lg hover:bg-[#D65A31] transition-all"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
