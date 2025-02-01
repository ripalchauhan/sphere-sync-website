// components/Hero.js
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
    <div className="relative h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center mt-[80px]" 
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}>  
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-7xl font-extrabold">
          Transforming <span className="text-[#FACC15]">{text}</span>
        </h1>
      </div>
    </div>
  );
}
