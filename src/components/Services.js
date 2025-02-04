import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Development",
    description: "We build high-performance applications tailored for your business.",
    image: "/development-icon.png",
    href: "/services/software-development", 
  },
  {
    title: "UI/UX Design",
    description: "Stunning, user-friendly designs that enhance customer experience.",
    image: "/design-icon.png",
    href: "/services/uiux-design", 
  },
  {
    title: "Testing",
    description: "Ensure software reliability with automated testing solutions.",
    image: "/testing-icon.png",
    href: "/services/testing", 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 text-center max-w-7xl mx-auto">
      <h2 className="text-6xl font-extrabold text-[#FACC15]">Our Services</h2>
      <p className="text-2xl mt-6 text-[#E2E8F0]">We offer a range of services to meet your business needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="p-12 bg-[#1E293B] shadow-2xl rounded-lg text-center transition-all duration-300 hover:bg-[#FACC15] hover:text-[#1E1E2E] cursor-pointer"
          >
            <Image 
              src={service.image} 
              alt={service.title} 
              width={100} 
              height={100} 
              className="mx-auto object-contain" 
            />
            
            {/* ✅ Fixed: Removed <a> inside <Link> */}
            <Link href={service.href} className="text-3xl font-semibold text-white mt-4 hover:text-gray-300 transition">
              {service.title}
            </Link>
            
            <p className="text-lg text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
