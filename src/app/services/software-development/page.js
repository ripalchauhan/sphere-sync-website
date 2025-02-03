import Link from "next/link";
import Image from "next/image";

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white px-6 sm:px-12 py-16">

      {/* ✅ Hero Section */}
      <div className="text-center">
        <Image src="/development-icon.png" alt="Software Development" width={150} height={150} className="mx-auto" />
        <h1 className="text-4xl sm:text-5xl font-extrabold">Software Development Services</h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We specialize in creating high-performance applications tailored for your business needs.
        </p>
      </div>

      {/* ✅ Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {[
          { title: "Web Development", desc: "Build scalable, fast, and reliable web applications." },
          { title: "Mobile App Development", desc: "Native and cross-platform mobile solutions." },
          { title: "Cloud Solutions", desc: "Secure and scalable cloud-based applications." },
          { title: "AI & Automation", desc: "Integrate AI-driven solutions for smarter applications." },
          { title: "Custom Software", desc: "Tailor-made software for business needs." },
          { title: "API Development", desc: "Seamless API integration for digital solutions." },
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
