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

export default function Services() {
  return (
    <section id="services" className="py-16 text-center max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FACC15]">
        Our Services
      </h2>
      <p className="text-lg sm:text-2xl mt-4 text-[#E2E8F0] max-w-2xl mx-auto">
        We offer a range of services to meet your business needs.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, idx) => (
          <Link key={idx} href={service.href} passHref>
            <div 
              className="p-8 sm:p-10 bg-[#1E293B] shadow-lg rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:bg-[#FACC15] hover:text-[#1E1E2E] cursor-pointer"
            >
              {/* Service Image */}
              <div className="flex justify-center">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={80} 
                  height={80} 
                  className="w-16 sm:w-20 h-auto object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-white mt-4 transition group-hover:text-gray-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-md text-gray-300 mt-2 leading-relaxed">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
