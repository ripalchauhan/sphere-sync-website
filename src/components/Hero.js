"use client";
import { useState, useEffect } from "react";
import { typingTexts } from "../data";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100; // Typing speed

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < typingTexts[index].length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
          }, 1000); // Pause before switching words
        }
      }
    };

    const typingInterval = setInterval(handleTyping, speed);
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, index]);

  return (
    <div
      className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center mt-[60px] md:mt-[80px] overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight break-words">
          Transforming <span className="text-[#FACC15]">{typingTexts[index].substring(0, charIndex)}</span>
        </h1>
        <p className="text-md sm:text-lg mt-4 text-gray-300">
          Empowering businesses with cutting-edge solutions.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/contact"
          className="inline-block bg-[#FACC15] text-[#1E1E2E] font-semibold py-4 px-8 rounded-lg mt-6 hover:bg-[#EAB308] transition shadow-md text-lg sm:text-xl"
        >
          Get Started →
        </a>
      </div>
    </div>
  );
}
