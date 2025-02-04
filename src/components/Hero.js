"use client";
import { useState, useEffect } from "react";
import { typingTexts } from "../data";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(typingTexts[index]);
      setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center mt-[60px] md:mt-[80px] overflow-hidden" 
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      
      {/* Overlay to Improve Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight break-words">
          Transforming <span className="text-[#FACC15]">{text}</span>
        </h1>
        <p className="text-lg sm:text-xl mt-4">Empowering businesses with cutting-edge solutions.</p>
        <a href="/contact" className="inline-block bg-[#FACC15] text-[#1E1E2E] font-semibold py-3 px-6 rounded-lg mt-6 hover:bg-[#EAB308] transition">
          Get Started →
        </a>
      </div>
    </div>
  );
}
