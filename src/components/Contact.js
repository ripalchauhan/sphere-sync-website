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
  const [fileName, setFileName] = useState("No file chosen");
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors when user types
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
    setFileName(file ? file.name : "No file chosen");
  };

  // Basic validation before submission
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Enter a valid email address";
    if (formData.phone && !formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Company Info) */}
      <div
        className="md:w-1/2 p-12 text-white flex flex-col justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/contactus.jpg')" }}
      >
        {/* Background Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">CONTACT US</h1>
          <p className="text-lg mt-4 max-w-lg">
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
      </div>

      {/* Right Side (Contact Form) */}
      <div className="md:w-1/2 bg-white p-8 sm:p-12 shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
            onChange={handleChange}
          />

          <select
            name="country"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
            onChange={handleChange}
          >
            <option>Select Country</option>
            <option>United States</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          {/* File Upload with Displayed File Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Upload File</label>
            <input
              type="file"
              name="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-gray-100 p-3 w-full text-gray-600 rounded-lg text-center block border border-gray-300 hover:bg-gray-200 transition"
            >
              {fileName}
            </label>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Description"
              className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-[#FF6B35] focus:outline-none"
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-lg hover:bg-[#D65A31] transition-all text-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
