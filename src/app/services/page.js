import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Development", image: "/development-icon.png", href: "/services/software-development" },
  { title: "UI/UX Design", image: "/design-icon.png", href: "/services/uiux-design" },
  { title: "Testing", image: "/testing", href: "/services/testing" },
];

export default function ServicesPage() {
  return (
    <section className="py-20 text-center max-w-7xl mx-auto">
      <h2 className="text-6xl font-extrabold text-[#FACC15]">Our Services</h2>
      <p className="text-2xl mt-6 text-[#E2E8F0]">We offer a range of services to meet your business needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {services.map((service, idx) => (
          <Link key={idx} href={service.href}>
            {/* ✅ Wrapped in a clickable div */}
            <div className="p-12 bg-[#1E293B] shadow-2xl rounded-lg text-center transition-all duration-300 hover:bg-[#FACC15] hover:text-[#1E1E2E] cursor-pointer">
              <Image src={service.image} alt={service.title} width={100} height={100} className="mx-auto object-contain" />
              <h3 className="text-3xl font-semibold text-white mt-4 hover:text-gray-300 transition">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
