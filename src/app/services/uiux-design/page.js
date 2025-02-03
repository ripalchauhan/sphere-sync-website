import Link from "next/link";
import Image from "next/image";

export default function UIUXDesign() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white px-6 sm:px-12 py-16">

      {/* ✅ Hero Section */}
      <div className="text-center">
        <Image src="/design-icon.png" alt="UI/UX Design" width={150} height={150} className="mx-auto" />
        <h1 className="text-4xl sm:text-5xl font-extrabold">UI/UX Design Services</h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our design team creates stunning, user-friendly interfaces for an enhanced customer experience.
        </p>
      </div>

      {/* ✅ UI/UX Services Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {[
          { title: "User Research", desc: "Understand your audience with data-driven insights." },
          { title: "Wireframing & Prototyping", desc: "Blueprints for intuitive and interactive UI." },
          { title: "UI Design", desc: "Beautiful, modern, and responsive designs." },
          { title: "UX Optimization", desc: "Ensure seamless experiences across devices." },
          { title: "Design Systems", desc: "Maintain consistency with scalable UI components." },
          { title: "Usability Testing", desc: "Validate designs through user testing." },
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-[#1E293B] rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
