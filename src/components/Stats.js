"use client";

import { useState, useEffect } from "react";

const Counter = ({ start, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let interval = setInterval(() => {
      if (count < end) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [count]);

  return <span className="text-6xl font-extrabold">{count}+</span>;
};

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 text-center my-16 text-[#FACC15]">
      <div><Counter start={0} end={100} /> <p className="text-2xl">Projects Completed</p></div>
      <div><Counter start={0} end={50} /> <p className="text-2xl">Happy Clients</p></div>
      <div><Counter start={0} end={20} /> <p className="text-2xl">Technologies Used</p></div>
      <div><Counter start={0} end={15} /> <p className="text-2xl">Years of Experience</p></div>
    </div>
  );
}
